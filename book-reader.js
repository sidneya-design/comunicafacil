// book-reader.js — ComunicaFácil Netflix-Style Library Module

import { supabase } from './supabase.js?v=2';

// ── Config ──────────────────────────────────────────────
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200 MB

// ── Auth guard (mesmo padrão usado em app.js) ─────────────
// Quando embutida como aba do app (iframe em app.html), o próprio app.html
// já exige login antes de tornar essa aba acessível — então o redirect
// próprio só se aplica quando a página é acessada isoladamente pela URL.
function isLocalAppHost() {
  return ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
}
const isEmbedded = window.self !== window.top;

supabase.auth.getSession().then(({ data }) => {
  if (!data?.session && !isLocalAppHost() && !isEmbedded) {
    window.location.href = 'index.html';
  }
});

supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT' && !isLocalAppHost() && !isEmbedded) {
    window.location.href = 'index.html';
  }
});

// ── Helpers ────────────────────────────────────────────────
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function deriveCoverPath(filePath) {
  if (!filePath) return null;
  const filename = filePath.split('/').pop();
  const uuid = filename.replace(/\.[^/.]+$/, '');
  return `covers/${uuid}.jpg`;
}

// ── UI Elements ─────────────────────────────────────────
const navUploadBtn = document.getElementById('nav-upload-btn');
const uploadModal = document.getElementById('upload-modal');
const closeModal = document.getElementById('close-modal');
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('book-file');
const uploadBtn = document.getElementById('upload-btn');
const uploadStatus = document.getElementById('upload-status');

const libraryView = document.getElementById('library-view');
const readerView = document.getElementById('reader-view');
const backToLibrary = document.getElementById('back-to-library');
const viewer = document.getElementById('viewer');
const readerTitle = document.getElementById('reader-title');

const bookListAll = document.getElementById('book-list-all');
const bookListRecent = document.getElementById('book-list-recent');
const emptyMsg = document.getElementById('empty-msg');

const listenBtn = document.getElementById('listen-btn');
const themeSelect = document.getElementById('theme-select');
const fontSizeSelect = document.getElementById('font-size-select');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');

// ── State ────────────────────────────────────────────────
let currentBook = null;
let currentViewer = null;
let currentEpubLocation = null;
let utterance = null;

// ── Preferences ──────────────────────────────────────────
function applyPreferences() {
  const theme = 'dark'; // Force dark mode as requested
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  if (themeSelect) themeSelect.value = theme;
  
  const savedFontSize = localStorage.getItem('fontSize') || '1.15rem';
  if (fontSizeSelect) fontSizeSelect.value = savedFontSize;
}
applyPreferences();

if (fontSizeSelect) {
  fontSizeSelect.addEventListener('change', () => {
    const size = fontSizeSelect.value;
    localStorage.setItem('fontSize', size);
    if (currentViewer?.type === 'epub' && currentViewer.rendition) {
      currentViewer.rendition.themes.fontSize(size);
    }
  });
}

themeSelect?.addEventListener('change', () => {
  const theme = themeSelect.value;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// ── Modal Logic ──────────────────────────────────────────
navUploadBtn.addEventListener('click', () => {
  uploadModal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  uploadModal.style.display = 'none';
});

// ── Dropzone highlight ───────────────────────────────────
dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.style.borderColor = 'var(--accent)'; });
dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = 'var(--text-muted)'; });
dropzone.addEventListener('drop', e => {
  e.preventDefault();
  dropzone.style.borderColor = 'var(--text-muted)';
  const f = e.dataTransfer.files[0];
  if (f) { fileInput.files = e.dataTransfer.files; dropzone.querySelector('p').textContent = f.name; }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) dropzone.querySelector('p').textContent = fileInput.files[0].name;
});

// ── Cover Extraction ───────────────────────────────────────
// Configurar worker do PDF.js para evitar erros na extração/renderização
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';

async function extractCover(file, mimeType) {
  try {
    console.log('Iniciando extração de capa para:', file.name, mimeType);
    if (mimeType.includes('pdf')) {
      const url = URL.createObjectURL(file);
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.5 }); // Escala reduzida para capa
      
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      console.log('PDF: Capa gerada no canvas');
      URL.revokeObjectURL(url);
      
      return await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.8));
    } 
    else if (mimeType.includes('epub')) {
      const buffer = await file.arrayBuffer();
      const book = ePub(buffer);
      await book.ready;
      console.log('EPUB: Livro pronto, buscando capa...');
      let coverUrl = await book.coverUrl();
      
      if (!coverUrl && book.packaging && book.packaging.manifest) {
        console.log('EPUB: Tentando busca alternativa de capa...');
        const manifest = Object.values(book.packaging.manifest);
        let coverItem = manifest.find(item => 
          (item.properties && item.properties.includes('cover-image')) || 
          (item.id && item.id.toLowerCase().includes('cover')) || 
          (item.href && item.href.toLowerCase().includes('cover'))
        );
        if (!coverItem) {
           // Último recurso: pega a primeira imagem que encontrar
           coverItem = manifest.find(item => item.type && item.type.startsWith('image/'));
        }
        if (coverItem) {
           const resolvedPath = book.path ? book.path.resolve(coverItem.href) : coverItem.href;
           coverUrl = await book.archive.createUrl(resolvedPath);
        }
      }
      
      if (coverUrl) {
        console.log('EPUB: Capa encontrada:', coverUrl);
        const response = await fetch(coverUrl);
        return await response.blob();
      } else {
        console.warn('EPUB: Nenhuma capa definida dentro do arquivo.');
      }
    }
  } catch (err) {
    console.error('Erro na extração de capa:', err);
  }
  return null;
}

// ── Upload ───────────────────────────────────────────────
async function uploadFile(file) {
  if (!file) return setStatus('⚠️ Selecione um arquivo.', 'warn');
  if (file.size > MAX_FILE_SIZE) return setStatus(`⚠️ Arquivo muito grande (máx 200 MB).`, 'warn');

  uploadBtn.disabled = true;
  setStatus('⏳ Extraindo informações e enviando...', 'loading');

  try {
    const ext = file.name.split('.').pop().toLowerCase();
    const uniqueId = crypto.randomUUID();
    const filePath = `uploads/${uniqueId}.${ext}`;
    const coverPath = `covers/${uniqueId}.jpg`;
    const mimeType = file.type || (ext === 'pdf' ? 'application/pdf' : 'application/epub+zip');

    // 1. Extrair e fazer upload da capa (se possível)
    const coverBlob = await extractCover(file, mimeType);
    if (coverBlob) {
      await supabase.storage.from('books').upload(coverPath, coverBlob, { contentType: 'image/jpeg', upsert: false });
    }

    // 2. Upload do arquivo principal
    const { error: upErr } = await supabase.storage
      .from('books')
      .upload(filePath, file, { contentType: mimeType, upsert: false });

    if (upErr) return setStatus('❌ Falha no upload: ' + upErr.message, 'error');

    // 3. Registrar no banco
    const title = file.name.replace(/\.[^/.]+$/, '');
    const { error: dbErr } = await supabase.from('books').insert({
      title, mime_type: mimeType, file_path: filePath, file_size: file.size,
    });

    if (dbErr) return setStatus('❌ Erro ao salvar: ' + dbErr.message, 'error');

    setStatus('✅ Livro adicionado com sucesso!', 'success');
    setTimeout(() => {
      setStatus('');
      uploadModal.style.display = 'none';
      fileInput.value = '';
      dropzone.querySelector('p').textContent = 'Arraste um arquivo ou clique para selecionar';
    }, 2000);
    await loadBookList();
  } catch (err) {
    setStatus('❌ Erro inesperado: ' + err.message, 'error');
  } finally {
    uploadBtn.disabled = false;
  }
}

function setStatus(msg, type = '') {
  uploadStatus.textContent = msg;
  uploadStatus.style.color = type === 'error' ? 'var(--accent)' : type === 'success' ? '#46d369' : 'var(--text-muted)';
}

uploadBtn.addEventListener('click', () => uploadFile(fileInput.files?.[0]));

// ── Book List ────────────────────────────────────────────
const BOOK_GRADIENTS = [
  'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
  'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
  'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)'
];

let allBooksCache = [];
let coverUrlMap = {};

async function resolveCoverUrls(books) {
  const paths = [...new Set(books.map(b => deriveCoverPath(b.file_path)).filter(Boolean))];
  if (!paths.length) return {};
  const { data, error } = await supabase.storage.from('books').createSignedUrls(paths, 3600);
  if (error || !data) {
    console.warn('[BookReader] Erro ao gerar signed URLs das capas:', error?.message);
    return {};
  }
  const map = {};
  data.forEach(entry => {
    if (entry.signedUrl && !entry.error) map[entry.path] = entry.signedUrl;
  });
  return map;
}

function createBookCard(book, index) {
  const isPdf = book.mime_type?.includes('pdf');
  const icon = isPdf ? '📄' : '📗';
  const type = isPdf ? 'PDF' : 'EPUB';
  const title = book.title || book.file_path.split('/').pop();

  const bgGradient = BOOK_GRADIENTS[index % BOOK_GRADIENTS.length];
  const li = document.createElement('li');
  li.dataset.id = book.id;
  li.tabIndex = 0;
  li.setAttribute('role', 'button');
  li.setAttribute('aria-label', `Abrir livro ${title}`);

  const coverPath = deriveCoverPath(book.file_path);
  const coverUrl = coverPath ? coverUrlMap[coverPath] : null;

  li.innerHTML = `
    <div class="book-cover-fallback" style="background: ${bgGradient}"></div>
    ${coverUrl ? `<img class="book-cover" src="${coverUrl}" alt="" loading="lazy" onerror="this.remove()">` : ''}
    <span class="book-type">${type}</span>
    <div class="book-info-overlay">
      <span class="book-icon" aria-hidden="true">${icon}</span>
      <div class="book-title" title="${escapeHtml(title)}">${escapeHtml(title)}</div>
    </div>
  `;

  li.addEventListener('click', () => openReader(book));
  li.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openReader(book);
    }
  });

  return li;
}

function renderRecentRow(data) {
  bookListRecent.innerHTML = '';
  if (!data.length) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  data.slice(0, 5).forEach((book, index) => bookListRecent.appendChild(createBookCard(book, index)));
}

function renderAllRow(data) {
  bookListAll.innerHTML = '';
  if (!data.length) {
    bookListAll.innerHTML = '<li class="no-results">Nenhum livro encontrado com esse título.</li>';
    return;
  }
  data.forEach((book, index) => bookListAll.appendChild(createBookCard(book, index)));
}

async function loadBookList() {
  console.log('[BookReader] Carregando lista de livros...');
  const { data, error } = await supabase
    .from('books')
    .select('id, title, mime_type, file_path')
    .order('created_at', { ascending: false });

  if (error) { console.error('[BookReader] Erro na listagem:', error); return; }
  console.log('[BookReader] Livros encontrados:', data?.length);

  allBooksCache = data || [];
  coverUrlMap = await resolveCoverUrls(allBooksCache);
  renderRecentRow(allBooksCache);
  renderAllRow(allBooksCache);
}

const bookSearchInput = document.getElementById('book-search');
bookSearchInput?.addEventListener('input', () => {
  const q = bookSearchInput.value.trim().toLowerCase();
  const filtered = q ? allBooksCache.filter(b => (b.title || '').toLowerCase().includes(q)) : allBooksCache;
  renderAllRow(filtered);
});

// ── Open Reader ──────────────────────────────────────────
async function openReader(book) {
  try {
    console.log('Abrindo leitor para:', book.title);
    libraryView.style.display = 'none';
    readerView.style.display = 'flex';
    readerTitle.textContent = book.title;
    
    viewer.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <span>Carregando ${escapeHtml(book.title)}...</span>
      </div>`;

    let url = null;
    const cleanPath = (book.file_path || '').replace(/^\/+/, '');

    try {
      const { data: signedData, error: signErr } = await supabase.storage
        .from('books')
        .createSignedUrl(cleanPath, 60 * 60);
      if (signedData?.signedUrl) {
        url = signedData.signedUrl;
      } else if (signErr) {
        console.warn('[BookReader] Erro createSignedUrl:', signErr.message);
      }
    } catch (e) {
      console.warn('[BookReader] SignedUrl falhou, tentando PublicUrl:', e);
    }

    if (!url) {
      const { data: pubData } = supabase.storage.from('books').getPublicUrl(cleanPath);
      url = pubData?.publicUrl;
    }

    // Verificar se a URL responde 200 antes de renderizar
    if (url) {
      try {
        const checkRes = await fetch(url, { method: 'HEAD' });
        if (!checkRes.ok && checkRes.status === 404) {
          url = null;
        }
      } catch (e) {
        console.warn('[BookReader] Erro ao verificar HEAD da URL:', e);
      }
    }

    if (!url) {
      viewer.innerHTML = `
        <div class="loading-spinner" style="flex-direction: column; gap: 1rem; color: #ff4d4d; text-align: center; padding: 2rem;">
          <span style="font-size: 2.5rem;">⚠️</span>
          <span style="font-size: 1.2rem; font-weight: bold;">Arquivo do livro não encontrado no servidor</span>
          <span style="font-size: 0.95rem; color: var(--text-muted); max-width: 450px;">O arquivo correspondente a este livro ("${escapeHtml(book.title)}") não existe mais no Supabase Storage. Envie o livro novamente clicando no botão Upload.</span>
          <button id="error-back-btn" class="nav-btn" style="background: var(--accent); margin-top: 1rem; cursor: pointer;">Voltar para Biblioteca</button>
        </div>`;

      document.getElementById('error-back-btn')?.addEventListener('click', () => {
        backToLibrary.click();
      });
      return;
    }

    currentBook = { ...book, url };
    viewer.innerHTML = '';

    if (book.mime_type?.includes('pdf')) {
      await renderPDF(url);
    } else {
      await renderEPUB(url);
    }
  } catch (err) {
    console.error('Erro fatal em openReader:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro ao abrir o livro: ${err.message}</div>`;
  }
}

backToLibrary.addEventListener('click', () => {
  readerView.style.display = 'none';
  libraryView.style.display = 'block';
  viewer.innerHTML = '';
  prevPageBtn.style.display = 'none';
  nextPageBtn.style.display = 'none';
  currentBook = null;
  currentViewer = null;
  window.speechSynthesis.cancel();
});

// ── Helper para rolar página no PDF ───────────────────────
function scrollToPdfPage(pageIndex) {
  const canvases = viewer.querySelectorAll('canvas');
  if (canvases[pageIndex - 1]) {
    canvases[pageIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── PDF Renderer ─────────────────────────────────────────
async function renderPDF(url) {
  try {
    console.log('Renderizando PDF...');
    viewer.innerHTML = '';
    const loadingTask = pdfjsLib.getDocument({ url, rangeChunkSize: 1024 * 1024 });
    const pdf = await loadingTask.promise;

    const containerWidth = (viewer.clientWidth || 800) - 32;
    const containerHeight = (viewer.clientHeight || 600) - 32;

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1.0 });

      // Scale ideal para caber na largura e altura do leitor
      const scaleX = containerWidth / unscaledViewport.width;
      const scaleY = containerHeight / unscaledViewport.height;
      const scale = Math.min(scaleX, scaleY, 2.0);

      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.cssText = 'margin: 0 auto 1.5rem; display: block; max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);';
      await page.render({ canvasContext: ctx, viewport }).promise;
      viewer.appendChild(canvas);
    }

    currentViewer = { type: 'pdf', pdf, pageIndex: 1, totalPages: pdf.numPages };

    prevPageBtn.onclick = () => {
      if (currentViewer?.type === 'pdf' && currentViewer.pageIndex > 1) {
        currentViewer.pageIndex--;
        scrollToPdfPage(currentViewer.pageIndex);
        if (ttsState === 'playing' || ttsState === 'paused') readCurrentPage(false);
      }
    };

    nextPageBtn.onclick = () => {
      if (currentViewer?.type === 'pdf' && currentViewer.pageIndex < currentViewer.totalPages) {
        currentViewer.pageIndex++;
        scrollToPdfPage(currentViewer.pageIndex);
        if (ttsState === 'playing' || ttsState === 'paused') readCurrentPage(false);
      }
    };

    prevPageBtn.style.display = 'flex';
    nextPageBtn.style.display = 'flex';
  } catch (err) {
    console.error('Erro PDF.js:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro no PDF: ${err.message}</div>`;
  }
}

// ── EPUB Renderer ─────────────────────────────────────────
async function renderEPUB(url) {
  try {
    console.log('Baixando arquivo EPUB...');
    const response = await fetch(url);
    if (!response.ok) throw new Error('Falha ao baixar o EPUB');
    const buffer = await response.arrayBuffer();

    console.log('Renderizando EPUB...');
    const epubContainer = document.createElement('div');
    epubContainer.style.cssText = 'width: 100%; max-width: 800px; height: 100%; margin: 0 auto; background: #fbf0d9; border-radius: 4px; overflow: hidden; box-shadow: 0 0 15px rgba(0,0,0,0.5);';
    epubContainer.id = 'epub-viewer';
    viewer.appendChild(epubContainer);

    const book = ePub(buffer);
    const rendition = book.renderTo('epub-viewer', {
      width: '100%',
      height: '100%',
      spread: 'none',
      flow: 'paginated'
    });
    
    rendition.themes.default({
      'body': { 
        'font-family': "'Georgia', 'Times New Roman', serif",
        'color': '#2b2b2b',
        'padding': '1.5rem 2rem !important',
        'box-sizing': 'border-box !important',
        'word-wrap': 'break-word !important',
        'overflow-wrap': 'break-word !important'
      },
      'p': { 
        'line-height': '1.6',
        'text-align': 'justify',
        'margin-bottom': '1em',
        'max-width': '100% !important'
      },
      '*:first-letter, p::first-letter, span::first-letter, .dropcap, .initial, [class*="dropcap"], [class*="initial"]': {
        'margin-left': '0 !important',
        'padding-left': '0 !important',
        'position': 'relative !important',
        'left': '0 !important'
      },
      'h1, h2, h3, h4, h5, h6': {
        'font-family': "'Georgia', serif",
        'color': '#111',
        'text-align': 'center',
        'margin-left': '0 !important',
        'margin-right': '0 !important',
        'padding-left': '0 !important',
        'padding-right': '0 !important',
        'max-width': '100% !important',
        'word-break': 'break-word !important',
        'overflow-wrap': 'break-word !important',
        'line-height': '1.2'
      },
      'h1': { 'font-size': '1.8rem !important' },
      'h2': { 'font-size': '1.5rem !important' },
      'h3': { 'font-size': '1.3rem !important' },
      'img': {
        'max-width': '100% !important',
        'height': 'auto !important',
        'display': 'block',
        'margin': '1em auto'
      }
    });

    const initialFontSize = localStorage.getItem('fontSize') || '1.15rem';
    rendition.themes.fontSize(initialFontSize);

    await rendition.display();
    currentViewer = { type: 'epub', book, rendition };

    const goNext = () => rendition.next();
    const goPrev = () => rendition.prev();

    // Navegação por teclado (Seta Direita / Seta Esquerda)
    document.addEventListener('keydown', e => {
      if (!currentViewer) return;
      if (e.key === 'ArrowRight') {
        stopAudio();
        if (currentViewer.type === 'epub') goNext();
        else if (currentViewer.type === 'pdf' && currentViewer.pageIndex < currentViewer.totalPages) {
          currentViewer.pageIndex++;
          scrollToPdfPage(currentViewer.pageIndex);
        }
      }
      if (e.key === 'ArrowLeft') {
        stopAudio();
        if (currentViewer.type === 'epub') goPrev();
        else if (currentViewer.type === 'pdf' && currentViewer.pageIndex > 1) {
          currentViewer.pageIndex--;
          scrollToPdfPage(currentViewer.pageIndex);
        }
      }
    });

    // Navegação por clique na tela (estilo Kindle)
    rendition.on('click', e => {
      const x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
      if (!x) return;
      const width = window.innerWidth;
      if (x < width * 0.3) { stopAudio(); goPrev(); }
      else if (x > width * 0.7) { stopAudio(); goNext(); }
    });

    // Quando mudar de página no EPUB, salva a localização exata e interrompe o áudio anterior
    rendition.on('relocated', (location) => {
      currentEpubLocation = location;
      stopAudio();
    });

    prevPageBtn.onclick = () => { stopAudio(); goPrev(); };
    nextPageBtn.onclick = () => { stopAudio(); goNext(); };
    prevPageBtn.style.display = 'flex';
    nextPageBtn.style.display = 'flex';
  } catch (err) {
    console.error('Erro EPUB.js:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro no EPUB: ${err.message}</div>`;
  }
}

// ── TTS Player (Vozes Neurais Ultra-Realistas) ────────────
const ttsPlayer = document.getElementById('tts-player');
const ttsPlayPauseBtn = document.getElementById('tts-play-pause-btn');
const ttsStopBtn = document.getElementById('tts-stop-btn');
const ttsSpeedBtn = document.getElementById('tts-speed-btn');
const ttsRewindBtn = document.getElementById('tts-rewind-btn');
const ttsVoiceSelect = document.getElementById('tts-voice-select');
const ttsAudioEl = document.getElementById('tts-audio-element') || document.createElement('audio');

let ttsState = 'stopped'; // 'stopped', 'playing', 'paused'
let currentText = '';
let currentRate = 0.8; // Padrão calmo (-20%) para leitura natural tipo audiolivro
let currentUtterance = null;

const NEURAL_VOICES = [
  { id: 'pt-BR-AntonioNeural', name: '🎙️ Antônio (Narrador de Audiolivro)' },
  { id: 'pt-BR-FranciscaNeural', name: '🎙️ Francisca (Narradora Expressiva)' },
  { id: 'pt-BR-HumbertoNeural', name: '📖 Humberto (Narrador de Histórias)' },
  { id: 'pt-BR-ThalitaNeural', name: '✨ Thalita (Leitura Suave)' },
  { id: 'pt-BR-NicolauNeural', name: '📻 Nicolau (Voz Profunda)' },
  { id: 'pt-BR-ElzaNeural', name: '📚 Elza (Leitura Madura)' }
];

function loadVoices() {
  if (ttsVoiceSelect) {
    ttsVoiceSelect.innerHTML = NEURAL_VOICES.map(v => `<option value="${v.id}">${v.name}</option>`).join('');
  }
}
loadVoices();

function stopAudio() {
  if (ttsAudioEl) {
    ttsAudioEl.pause();
    ttsAudioEl.currentTime = 0;
    ttsAudioEl.onended = null;
    ttsAudioEl.onerror = null;
    if (ttsAudioEl.src && ttsAudioEl.src.startsWith('blob:')) {
      URL.revokeObjectURL(ttsAudioEl.src);
    }
    ttsAudioEl.src = '';
  }
  if (currentUtterance) {
    currentUtterance.onend = null;
    currentUtterance = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  ttsState = 'stopped';
  updateTTSUI();
}

function base64ToBlob(b64Data, contentType = 'audio/mp3', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: contentType });
}

let ttsChunks = [];
let currentChunkIndex = 0;

function splitTextIntoChunks(text, maxLen = 180) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return [clean];

  const chunks = [];
  let remaining = clean;

  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    
    let cutIdx = remaining.lastIndexOf('. ', maxLen);
    if (cutIdx === -1 || cutIdx < 50) cutIdx = remaining.lastIndexOf('! ', maxLen);
    if (cutIdx === -1 || cutIdx < 50) cutIdx = remaining.lastIndexOf('? ', maxLen);
    if (cutIdx === -1 || cutIdx < 50) cutIdx = remaining.lastIndexOf(' ', maxLen);
    if (cutIdx === -1) cutIdx = maxLen;

    chunks.push(remaining.substring(0, cutIdx + 1).trim());
    remaining = remaining.substring(cutIdx + 1).trim();
  }

  return chunks.filter(c => c.length > 0);
}

async function speakText(fullText) {
  stopAudio();
  if (!fullText || fullText.trim() === '') {
    console.warn('[BookReader] Texto de página vazio.');
    if (ttsState === 'playing' && currentViewer && currentViewer.type === 'epub') {
      setTimeout(() => currentViewer.rendition.next(), 500);
    }
    return;
  }

  ttsChunks = splitTextIntoChunks(fullText, 400);
  currentChunkIndex = 0;

  console.log(`[BookReader] Texto preparado: ${fullText.length} caracteres divididos em ${ttsChunks.length} blocos.`);

  ttsState = 'playing';
  updateTTSUI();

  await playNextChunk();
}

async function playNextChunk() {
  if (ttsState !== 'playing' || currentChunkIndex >= ttsChunks.length) {
    console.log('[BookReader] Leitura da página visível concluída.');
    stopAudio();
    return;
  }

  const chunkText = ttsChunks[currentChunkIndex];
  const selectedVal = ttsVoiceSelect?.value || 'pt-BR-AntonioNeural';

  try {
    const ratePercent = Math.round((currentRate - 1.0) * 100);
    const rateStr = (ratePercent >= 0 ? `+${ratePercent}%` : `${ratePercent}%`);
    const ttsEndpoint = (window.location.origin && window.location.origin !== 'null') ? `${window.location.origin}/tts` : '/tts';

    console.log(`[BookReader] Lendo bloco ${currentChunkIndex + 1}/${ttsChunks.length} (${chunkText.length} caracteres)...`);

    const res = await fetch(ttsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: chunkText,
        voice: selectedVal,
        rate: rateStr,
        pitch: '-2Hz'
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.audio) throw new Error(data.error || 'Falha ao sintetizar bloco');

    const audioBlob = base64ToBlob(data.audio, 'audio/mp3');
    const blobUrl = URL.createObjectURL(audioBlob);

    ttsAudioEl.src = blobUrl;

    ttsAudioEl.onended = () => {
      URL.revokeObjectURL(blobUrl);
      currentChunkIndex++;
      playNextChunk();
    };

    ttsAudioEl.onerror = (e) => {
      console.error('[BookReader] Erro no áudio do bloco:', e);
      URL.revokeObjectURL(blobUrl);
      currentChunkIndex++;
      playNextChunk();
    };

    await ttsAudioEl.play();
  } catch (err) {
    console.error('[BookReader] Erro ao sintetizar bloco:', err);
    currentChunkIndex++;
    playNextChunk();
  }
}

function updateTTSUI() {
  if (readerView.style.display !== 'none') {
    ttsPlayer.classList.remove('hidden');
  }
  if (ttsState === 'playing') {
    ttsPlayPauseBtn.innerHTML = '⏸';
    ttsPlayPauseBtn.classList.add('playing');
  } else {
    ttsPlayPauseBtn.innerHTML = '▶';
    ttsPlayPauseBtn.classList.remove('playing');
  }
}

async function readCurrentPage(showError = false) {
  if (!currentViewer) return;
  try {
    let text = '';
    let pageInfo = '';

    // Determinar número da página para PDF
    if (currentViewer.type === 'pdf' && currentViewer.pageIndex && currentViewer.totalPages) {
      pageInfo = `Página ${currentViewer.pageIndex} de ${currentViewer.totalPages}. `;
    }

    // Determinar número da página para EPUB
    if (currentViewer.type === 'epub') {
      const loc = currentEpubLocation || currentViewer.rendition.currentLocation();
      if (loc && loc.start && loc.start.displayed) {
        const displayed = loc.start.displayed;
        if (displayed.page && displayed.total) {
          pageInfo = `Página ${displayed.page} de ${displayed.total}. `;
        }
      }
    }

    if (currentViewer.type === 'pdf') {
      const page = await currentViewer.pdf.getPage(currentViewer.pageIndex || 1);
      const tc = await page.getTextContent();
      text = tc.items.map(i => i.str).join(' ');
    } else if (currentViewer.type === 'epub') {
      // Método PRINCIPAL: Detectar elementos REALMENTE visíveis no viewport do iframe
      // epub.js usa CSS columns — só o conteúdo dentro da coluna visível está na página atual
      try {
        const contents = currentViewer.rendition.getContents();
        if (contents && contents.length > 0) {
          const content = contents[0];
          const doc = content.document || (content.window && content.window.document);
          if (doc && doc.body) {
            const iframeWidth = content.window ? content.window.innerWidth : 800;
            const elements = Array.from(doc.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote, div, span, td, th'));
            const visibleTexts = [];
            const seenTexts = new Set();

            for (const el of elements) {
              const rect = el.getBoundingClientRect();
              // Elemento está visível se seu lado esquerdo está dentro da janela visível
              // e tem largura/altura > 0 (não é invisível)
              if (rect.width > 0 && rect.height > 0 && rect.left >= -5 && rect.right <= (iframeWidth + 5)) {
                const t = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
                if (t.length > 0 && !seenTexts.has(t)) {
                  // Evitar pegar texto de filhos que já foram coletados (dedup)
                  let isDuplicate = false;
                  for (const seen of seenTexts) {
                    if (seen.includes(t) || t.includes(seen)) {
                      isDuplicate = true;
                      break;
                    }
                  }
                  if (!isDuplicate) {
                    seenTexts.add(t);
                    visibleTexts.push(t);
                  }
                }
              }
            }

            if (visibleTexts.length > 0) {
              text = visibleTexts.join(' ');
              console.log(`[BookReader] 🎯 Texto visível extraído (${visibleTexts.length} blocos):`, text.substring(0, 120));
            }
          }
        }
      } catch (e) {
        console.warn('[BookReader] Erro na detecção de visibilidade:', e);
      }

      // Fallback: título do livro para capa/folha de rosto
      if (!text && currentBook && currentBook.title) {
        text = `Livro: ${currentBook.title}`;
      }
    }

    // Prepend page number info if available
    if (pageInfo) {
      text = pageInfo + text;
    }

    if (!text || text.trim() === '') {
      if (showError) {
        alert('Não foi possível extrair texto desta página para leitura.');
      }
      stopAudio();
      return;
    }

    currentText = text;
    await speakText(text);
  } catch(err) {
    console.error('[BookReader] Erro no TTS:', err);
    if (showError) alert('Ocorreu um erro ao tentar preparar o texto: ' + err.message);
    stopAudio();
  }
}

listenBtn.addEventListener('click', () => {
  if (ttsAudioEl) {
    ttsAudioEl.play().catch(() => {});
  }
  readCurrentPage(true);
});

ttsPlayPauseBtn.addEventListener('click', () => {
  if (ttsAudioEl) {
    ttsAudioEl.play().catch(() => {});
  }
  if (ttsState === 'playing') {
    if (ttsAudioEl) ttsAudioEl.pause();
    if ('speechSynthesis' in window) window.speechSynthesis.pause();
    ttsState = 'paused';
  } else if (ttsState === 'paused') {
    if (ttsAudioEl) ttsAudioEl.play();
    if ('speechSynthesis' in window) window.speechSynthesis.resume();
    ttsState = 'playing';
  } else {
    readCurrentPage(true);
  }
  updateTTSUI();
});

ttsStopBtn.addEventListener('click', () => {
  stopAudio();
});

const SPEED_STEPS = [0.8, 0.65, 1.0, 1.2];
let speedStepIdx = 0;

ttsSpeedBtn.addEventListener('click', () => {
  speedStepIdx = (speedStepIdx + 1) % SPEED_STEPS.length;
  currentRate = SPEED_STEPS[speedStepIdx];
  ttsSpeedBtn.textContent = currentRate.toString() + 'x';
  if (ttsState === 'playing' || ttsState === 'paused') {
    const wasPlaying = (ttsState === 'playing');
    if (ttsAudioEl) {
      ttsAudioEl.pause();
      ttsAudioEl.currentTime = 0;
      ttsAudioEl.onended = null;
      ttsAudioEl.onerror = null;
    }
    if (wasPlaying && ttsChunks.length > 0) {
      ttsState = 'playing';
      updateTTSUI();
      playNextChunk();
    }
  }
});

if (ttsVoiceSelect) {
  ttsVoiceSelect.addEventListener('change', () => {
    if (ttsState === 'playing' || ttsState === 'paused') {
      const wasPlaying = (ttsState === 'playing');
      if (ttsAudioEl) {
        ttsAudioEl.pause();
        ttsAudioEl.currentTime = 0;
        ttsAudioEl.onended = null;
        ttsAudioEl.onerror = null;
      }
      if (wasPlaying && ttsChunks.length > 0) {
        ttsState = 'playing';
        updateTTSUI();
        playNextChunk();
      }
    }
  });
}

ttsRewindBtn.addEventListener('click', () => {
  if (ttsState !== 'stopped') {
    currentChunkIndex = 0;
    speakText(currentText);
  }
});

// Botão para teste instantâneo de som
const testAudioBtn = document.getElementById('test-audio-btn');
if (testAudioBtn) {
  testAudioBtn.addEventListener('click', async () => {
    testAudioBtn.textContent = '⏳ Testando...';
    try {
      if (ttsAudioEl) ttsAudioEl.play().catch(() => {});
      await speakText('O sistema de áudio neural do ComunicaFácil está funcionando perfeitamente.');
      testAudioBtn.textContent = '✅ Som OK!';
      setTimeout(() => { testAudioBtn.textContent = '🔊 Testar Som'; }, 3000);
    } catch(e) {
      alert('Erro no teste de áudio: ' + e.message);
      testAudioBtn.textContent = '🔊 Testar Som';
    }
  });
}

// ── Init ─────────────────────────────────────────────────
loadBookList();
