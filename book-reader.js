// book-reader.js — ComunicaFácil Netflix-Style Library Module

import { supabase } from './supabase.js';

// ── Config ──────────────────────────────────────────────
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200 MB

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
           coverUrl = await book.archive.createUrl(coverItem.href);
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
async function loadBookList() {
  const { data, error } = await supabase
    .from('books')
    .select('id, title, mime_type, file_path')
    .order('created_at', { ascending: false });

  if (error) { console.error('List error:', error); return; }

  bookListAll.innerHTML = '';
  bookListRecent.innerHTML = '';

  if (!data || data.length === 0) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  // Obter URLs das capas em lote
  const coverPaths = data.map(b => b.file_path.replace('uploads/', 'covers/').replace(/\.(epub|pdf)$/i, '.jpg'));
  const { data: urlsData } = await supabase.storage.from('books').createSignedUrls(coverPaths, 60 * 60);
  const coverUrlMap = {};
  if (urlsData) {
    urlsData.forEach((u, i) => { if (!u.error) coverUrlMap[data[i].id] = u.signedUrl; });
  }

  data.forEach((book, index) => {
    const isPdf = book.mime_type?.includes('pdf');
    const icon = isPdf ? '📄' : '📗';
    const type = isPdf ? 'PDF' : 'EPUB';
    const coverUrl = coverUrlMap[book.id];

    const li = document.createElement('li');
    li.dataset.id = book.id;
    
    // Fallback de capa ou imagem real. O onerror remove a imagem quebrada e deixa o fallback aparecer (que ficará embaixo do overlay)
    li.innerHTML = `
      <div class="book-cover-fallback"></div>
      ${coverUrl ? `<img src="${coverUrl}" class="book-cover" alt="Capa" onerror="this.style.display='none';">` : ''}
      <span class="book-type">${type}</span>
      <div class="book-info-overlay">
        <span class="book-icon">${icon}</span>
        <div class="book-title" title="${book.title}">${book.title || book.file_path.split('/').pop()}</div>
      </div>
    `;

    li.addEventListener('click', () => openReader(book));

    bookListAll.appendChild(li);
    if (index < 5) {
      const recentLi = li.cloneNode(true);
      recentLi.addEventListener('click', () => openReader(book));
      bookListRecent.appendChild(recentLi);
    }
  });
}

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
        <span>Carregando ${book.title}...</span>
      </div>`;

    const { data, error } = await supabase.storage
      .from('books')
      .createSignedUrl(book.file_path, 60 * 60);

    if (error) {
      viewer.innerHTML = `<div class="loading-spinner">❌ Erro ao carregar: ${error.message}</div>`;
      console.error('Erro Signed URL:', error);
      return;
    }

    const url = data.signedUrl;
    currentBook = { ...book, url };
    viewer.innerHTML = '';

    if (book.mime_type?.includes('pdf')) {
      await renderPDF(url);
    } else {
      await renderEPUB(url);
    }
  } catch (err) {
    console.error('Erro fatal em openReader:', err);
    alert('Erro ao tentar abrir o leitor: ' + err.message);
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

// ── PDF Renderer ─────────────────────────────────────────
async function renderPDF(url) {
  try {
    console.log('Renderizando PDF...');
    const loadingTask = pdfjsLib.getDocument({ url, rangeChunkSize: 1024 * 1024 });
    const pdf = await loadingTask.promise;
    const pages = Array.from({ length: pdf.numPages }, (_, i) => i + 1);

    for (const pageNum of pages) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.cssText = 'margin: 0 auto 1rem; display: block; max-width: 100%; height: auto; box-shadow: 0 4px 10px rgba(0,0,0,0.5);';
      await page.render({ canvasContext: ctx, viewport }).promise;
      viewer.appendChild(canvas);
    }

    currentViewer = { type: 'pdf', pdf, pageIndex: 1 };
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
    // Cores e medidas estilo Kindle
    epubContainer.style.cssText = 'width: 100%; max-width: 800px; height: 100%; margin: 0 auto; background: #fbf0d9; border-radius: 4px; overflow: hidden; box-shadow: 0 0 15px rgba(0,0,0,0.5);';
    epubContainer.id = 'epub-viewer';
    viewer.appendChild(epubContainer);

    const book = ePub(buffer);
    const rendition = book.renderTo('epub-viewer', {
      width: '100%',
      height: '100%',
      spread: 'none',
      manager: 'continuous',
      flow: 'paginated'
    });
    
    // Tipografia estilo Kindle (respeitando a formatação original do livro)
    rendition.themes.default({
      'body': { 
        'font-family': 'Georgia, serif',
        'color': '#333'
      },
      'p': { 
        'line-height': '1.6',
        'text-align': 'justify',
        'margin-bottom': '1em'
      },
      'h1, h2, h3, h4': {
        'font-family': 'Georgia, serif',
        'color': '#111'
      }
    });

    const initialFontSize = localStorage.getItem('fontSize') || '1.15rem';
    rendition.themes.fontSize(initialFontSize);

    await rendition.display();
    currentViewer = { type: 'epub', book, rendition };

    const goNext = () => rendition.next();
    const goPrev = () => rendition.prev();

    // Navegação por teclado
    document.addEventListener('keydown', e => {
      if (currentViewer?.type !== 'epub') return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    });

    // Navegação por clique na tela (estilo Kindle)
    rendition.on('click', e => {
      const x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
      if (!x) return;
      const width = window.innerWidth;
      if (x < width * 0.3) goPrev();       // Clicou na esquerda (voltar)
      else if (x > width * 0.7) goNext();  // Clicou na direita (avançar)
    });

    // Quando mudar de página, se o TTS estiver ativo, ler a nova página automaticamente
    rendition.on('relocated', () => {
      if (typeof ttsState !== 'undefined' && ttsState === 'playing') {
        setTimeout(() => readCurrentPage(false), 500); // 500ms delay para garantir renderização
      }
    });

    prevPageBtn.onclick = goPrev;
    nextPageBtn.onclick = goNext;
    prevPageBtn.style.display = 'flex';
    nextPageBtn.style.display = 'flex';
  } catch (err) {
    console.error('Erro EPUB.js:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro no EPUB: ${err.message}</div>`;
  }
}

// ── TTS Player ────────────────────────────────────────────
const ttsPlayer = document.getElementById('tts-player');
const ttsPlayPauseBtn = document.getElementById('tts-play-pause-btn');
const ttsStopBtn = document.getElementById('tts-stop-btn');
const ttsSpeedBtn = document.getElementById('tts-speed-btn');
const ttsRewindBtn = document.getElementById('tts-rewind-btn');
const ttsVoiceSelect = document.getElementById('tts-voice-select');

let ttsState = 'stopped'; // 'stopped', 'playing', 'paused'
let currentText = '';
let currentRate = 1.0;
let availableVoices = [];
let isCancelled = false;
let currentUtterance = null;

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  availableVoices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('pt'));
  if (ttsVoiceSelect) {
    ttsVoiceSelect.innerHTML = availableVoices.map((v, i) => `<option value="${i}">${v.name}</option>`).join('');
  }
}
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function speakText(text) {
  if (!('speechSynthesis' in window)) return alert('TTS não suportado no seu navegador.');
  
  if (currentUtterance) {
    currentUtterance.onend = null; // Evita disparo de eventos assíncronos do áudio anterior
  }
  window.speechSynthesis.cancel();
  
  if (!text || text.trim() === '') {
    // If no text on this page, just go to next page automatically if playing
    if (ttsState === 'playing' && currentViewer && currentViewer.type === 'epub') {
      setTimeout(() => currentViewer.rendition.next(), 500);
    }
    return;
  }
  
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = 'pt-BR';
  currentUtterance.rate = currentRate;
  
  if (ttsVoiceSelect && availableVoices[ttsVoiceSelect.value]) {
    currentUtterance.voice = availableVoices[ttsVoiceSelect.value];
  }
  
  currentUtterance.onend = () => {
    // Auto-advance to next page when finished reading!
    if (ttsState === 'playing' && currentViewer && currentViewer.type === 'epub') {
      currentViewer.rendition.next();
    } else {
      ttsState = 'stopped';
      updateTTSUI();
    }
  };
  
  window.speechSynthesis.speak(currentUtterance);
  ttsState = 'playing';
  updateTTSUI();
}

function updateTTSUI() {
  if (ttsState === 'stopped') {
    ttsPlayer.classList.add('hidden');
    ttsPlayPauseBtn.innerHTML = '▶';
    ttsPlayPauseBtn.classList.remove('playing');
  } else {
    ttsPlayer.classList.remove('hidden');
    if (ttsState === 'playing') {
      ttsPlayPauseBtn.innerHTML = '⏸';
      ttsPlayPauseBtn.classList.add('playing');
    } else {
      ttsPlayPauseBtn.innerHTML = '▶';
      ttsPlayPauseBtn.classList.remove('playing');
    }
  }
}

async function readCurrentPage(showError = false) {
  if (!currentViewer) return;
  try {
    let text = '';
    if (currentViewer.type === 'pdf') {
      const page = await currentViewer.pdf.getPage(currentViewer.pageIndex || 1);
      const tc = await page.getTextContent();
      text = tc.items.map(i => i.str).join(' ');
    } else if (currentViewer.type === 'epub') {
      const loc = currentViewer.rendition.currentLocation();
      if (!loc || !loc.start) {
        if (showError) alert('A página ainda está carregando internamente.');
        return;
      }
      const range = await currentViewer.book.getRange(loc.start.cfi);
      text = range ? range.toString().trim() : '';
      
      if (!text) {
        const contents = currentViewer.rendition.getContents();
        if (contents && contents.length > 0) {
          text = contents[0].document.body.innerText;
        }
      }
    }
    currentText = text;
    speakText(text);
  } catch(err) {
    console.error('Erro no TTS:', err);
    if (showError) alert('Ocorreu um erro ao tentar preparar o texto: ' + err.message);
  }
}

listenBtn.addEventListener('click', () => {
  readCurrentPage(true);
});

ttsPlayPauseBtn.addEventListener('click', () => {
  if (ttsState === 'playing') {
    window.speechSynthesis.pause();
    ttsState = 'paused';
  } else if (ttsState === 'paused') {
    window.speechSynthesis.resume();
    ttsState = 'playing';
  } else {
    readCurrentPage(true);
  }
  updateTTSUI();
});

ttsStopBtn.addEventListener('click', () => {
  if (currentUtterance) currentUtterance.onend = null;
  window.speechSynthesis.cancel();
  ttsState = 'stopped';
  updateTTSUI();
});

ttsSpeedBtn.addEventListener('click', () => {
  currentRate = currentRate >= 2.0 ? 0.75 : currentRate + 0.25;
  ttsSpeedBtn.textContent = currentRate.toFixed(1) + 'x';
  if (ttsState === 'playing') {
    if (currentUtterance) currentUtterance.onend = null;
    window.speechSynthesis.cancel();
    speakText(currentText);
  }
});

ttsRewindBtn.addEventListener('click', () => {
  if (ttsState !== 'stopped') {
    if (currentUtterance) currentUtterance.onend = null;
    window.speechSynthesis.cancel();
    speakText(currentText);
  }
});

// ── Init ─────────────────────────────────────────────────
loadBookList();
