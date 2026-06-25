// DADOS ESTÁTICOS COM DEFINIÇÃO DE CORES DE BORDA E FUNDO
const coreWords = [ 
    { word: 'eu', styleClass: 'solid-orange' }, { word: 'você', styleClass: 'solid-orange' }, 
    { word: 'quero', styleClass: 'solid-orange' }, { word: 'gosto', styleClass: 'solid-orange' }, 
    { word: 'não', styleClass: 'solid-orange' }, { word: 'sim', styleClass: 'solid-orange' },
    { word: 'mais', styleClass: 'solid-orange' }, { word: 'acabou', styleClass: 'solid-orange' },
    { word: 'ajudar', styleClass: 'solid-orange' }, { word: 'comer', styleClass: 'solid-orange' },
    { word: 'beber', styleClass: 'solid-orange' }, { word: 'ir', styleClass: 'solid-orange' }
];

const quickFires = [ 
    { word: 'oi', styleClass: 'border-blue' }, { word: 'tchau', styleClass: 'border-blue' }, 
    { word: 'por favor', styleClass: 'border-blue' }, { word: 'obrigado', styleClass: 'border-blue' },
    { word: 'desculpa', styleClass: 'border-blue' }, { word: 'certo', styleClass: 'border-green' },
    { word: 'errado', styleClass: 'border-red' }, { word: 'espera', styleClass: 'border-yellow' },
    { word: 'socorro', styleClass: 'border-red' }
];

const topics = [ 
    { folder: 'comida', styleClass: 'border-pink', items: [ { word: 'maçã', styleClass: 'border-orange' }, { word: 'pão', styleClass: 'border-orange' }, { word: 'água', styleClass: 'border-blue' }, { word: 'suco', styleClass: 'border-blue' } ] },
    { folder: 'brincadeiras', styleClass: 'border-pink', items: [ { word: 'bola', styleClass: 'border-orange' }, { word: 'carrinho', styleClass: 'border-orange' }, { word: 'boneca', styleClass: 'border-orange' } ] }
];

const virtues = [
    { folder: 'Sabedoria', styleClass: 'border-green', items: [ { word: 'Amor ao Aprendizado', styleClass: 'border-green' }, { word: 'Criatividade', styleClass: 'border-green' }, { word: 'Critério', styleClass: 'border-green' }, { word: 'Curiosidade', styleClass: 'border-green' }, { word: 'Perspectiva', styleClass: 'border-green' } ] },
    { folder: 'Humanidade', styleClass: 'border-orange', items: [ { word: 'Amor', styleClass: 'border-orange' }, { word: 'Generosidade', styleClass: 'border-orange' }, { word: 'Inteligência Social', styleClass: 'border-orange' } ] },
    { folder: 'Justiça', styleClass: 'border-yellow', items: [ { word: 'Justiça', styleClass: 'border-yellow' }, { word: 'Liderança', styleClass: 'border-yellow' }, { word: 'Trabalho em Equipe', styleClass: 'border-yellow' } ] },
    { folder: 'Moderação', styleClass: 'border-blue', items: [ { word: 'Autorregulação', styleClass: 'border-blue' }, { word: 'Humildade', styleClass: 'border-blue' }, { word: 'Perdão', styleClass: 'border-blue' }, { word: 'Prudência', styleClass: 'border-blue' } ] },
    { folder: 'Coragem', styleClass: 'border-red', items: [ { word: 'Coragem', styleClass: 'border-red' }, { word: 'Integridade', styleClass: 'border-red' }, { word: 'Perseverança', styleClass: 'border-red' }, { word: 'Vitalidade', styleClass: 'border-red' } ] },
    { folder: 'Transcendência', styleClass: 'border-pink', items: [ { word: 'Apreciação da Beleza', styleClass: 'border-pink' }, { word: 'Esperança', styleClass: 'border-pink' }, { word: 'Espiritualidade', styleClass: 'border-pink' }, { word: 'Gratidão', styleClass: 'border-pink' }, { word: 'Humor', styleClass: 'border-pink' } ] }
];

let currentMessage = [];
let currentTypingWord = "";
let db; 
const messageDisplay = document.getElementById('message-display');

// CACHE DE IMAGENS ARASAAC
const arasaacCache = {};
async function fetchArasaacImage(word) {
    const cleanWord = word.split(' ')[0].toLowerCase().trim();
    if (arasaacCache[cleanWord]) return arasaacCache[cleanWord];
    try {
        const response = await fetch(`https://api.arasaac.org/api/pictograms/pt/search/${encodeURIComponent(cleanWord)}`);
        const data = await response.json();
        if (data && data.length > 0) {
            const id = data[0]._id;
            const imageUrl = `https://static.arasaac.org/pictograms/${id}/${id}_300.png`;
            arasaacCache[cleanWord] = imageUrl;
            return imageUrl;
        }
    } catch (e) {}
    return null;
}

function initApp() {
    renderGrid('grid-core', coreWords);
    renderGrid('grid-quick', quickFires);
    renderFolders('grid-topics-folders', 'topic-content-area', 'grid-topic-words', 'btn-topic-back', topics);
    renderFolders('grid-virtues-folders', 'virtue-content-area', 'grid-virtue-words', 'btn-virtue-back', virtues);
    initKeyboard();
    setupNavigation();
    initIndexedDB();
    setupModals();
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.view).classList.add('active');
        });
    });
}

async function renderGrid(containerId, wordsArray) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';
    
    for (const item of wordsArray) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgContainer.appendChild(imgEl);
        
        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;
        
        btn.appendChild(imgContainer);
        btn.appendChild(textEl);
        
        btn.addEventListener('click', () => {
            if(currentTypingWord.length > 0) commitTypingWord();
            addToMessage(item.word);
            speak(item.word);
        });
        container.appendChild(btn);

        const imageUrl = await fetchArasaacImage(item.word);
        if (imageUrl) imgEl.src = imageUrl;
        else imgContainer.innerHTML = '<i class="fas fa-comment-dots word-btn-icon"></i>';
    }
}

async function renderFolders(folderContainerId, contentAreaId, gridWordsId, backBtnId, dataArray) {
    const container = document.getElementById(folderContainerId);
    const contentArea = document.getElementById(contentAreaId);
    if(!container) return;
    container.innerHTML = '';
    
    for (const folderObj of dataArray) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${folderObj.styleClass}`;
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgContainer.appendChild(imgEl);
        
        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = folderObj.folder;
        
        btn.appendChild(imgContainer);
        btn.appendChild(textEl);
        
        btn.addEventListener('click', () => {
            container.style.display = 'none';
            contentArea.style.display = 'flex';
            renderGrid(gridWordsId, folderObj.items);
            speak(folderObj.folder);
        });
        container.appendChild(btn);

        const imageUrl = await fetchArasaacImage(folderObj.folder);
        if (imageUrl) imgEl.src = imageUrl;
        else imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
    }
    
    document.getElementById(backBtnId).addEventListener('click', () => {
        contentArea.style.display = 'none';
        container.style.display = 'grid';
    });
}

function addToMessage(word) { currentMessage.push(word); renderMessage(); }
function commitTypingWord() { if(currentTypingWord.trim() !== "") { currentMessage.push(currentTypingWord); currentTypingWord = ""; } }

function renderMessage() {
    messageDisplay.innerHTML = '';
    currentMessage.forEach(word => {
        const span = document.createElement('span'); span.className = 'message-word'; span.textContent = word;
        messageDisplay.appendChild(span);
    });
    if (currentTypingWord.length > 0) {
        const span = document.createElement('span'); span.className = 'message-word';
        span.style.background = '#e0e0e0'; span.textContent = currentTypingWord + "_";
        messageDisplay.appendChild(span);
    }
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}

function speak(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR'; window.speechSynthesis.speak(utterance);
    }
}

document.getElementById('btn-speak').addEventListener('click', () => {
    commitTypingWord(); renderMessage();
    if (currentMessage.length > 0) speak(currentMessage.join(' '));
});
document.getElementById('btn-clear').addEventListener('click', () => { currentMessage = []; currentTypingWord = ""; renderMessage(); });
document.getElementById('btn-backspace').addEventListener('click', () => {
    if (currentTypingWord.length > 0) currentTypingWord = currentTypingWord.slice(0, -1);
    else if (currentMessage.length > 0) currentMessage.pop();
    renderMessage();
});

function initKeyboard() {
    const layout = [ ['Q','W','E','R','T','Y','U','I','O','P'], ['A','S','D','F','G','H','J','K','L'], ['Z','X','C','V','B','N','M'] ];
    const container = document.getElementById('keyboard-grid');
    if(!container) return;
    container.innerHTML = '';
    layout.forEach(row => {
        const rowDiv = document.createElement('div'); rowDiv.className = 'keyboard-row';
        row.forEach(key => {
            const btn = document.createElement('button'); btn.className = 'key-btn'; btn.textContent = key;
            btn.addEventListener('click', () => { currentTypingWord += key.toLowerCase(); renderMessage(); });
            rowDiv.appendChild(btn);
        });
        container.appendChild(rowDiv);
    });
    const spaceRow = document.createElement('div'); spaceRow.className = 'keyboard-row';
    const spaceBtn = document.createElement('button'); spaceBtn.className = 'key-btn key-space'; spaceBtn.textContent = 'Espaço';
    spaceBtn.addEventListener('click', () => { if(currentTypingWord.length > 0) { commitTypingWord(); renderMessage(); } });
    spaceRow.appendChild(spaceBtn); container.appendChild(spaceRow);
}

// ----------------------------------------------------
// INDEXEDDB PARA MÍDIAS OFFLINE E EXERCÍCIOS
// ----------------------------------------------------

function initIndexedDB() {
    const request = indexedDB.open('ComunicaDB', 5);
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains('medias')) db.createObjectStore('medias', { keyPath: 'id', autoIncrement: true });
        if (db.objectStoreNames.contains('exercises')) db.deleteObjectStore('exercises');
        db.createObjectStore('exercises', { keyPath: 'id', autoIncrement: true });
    };
    request.onsuccess = (event) => { 
        db = event.target.result; 
        loadMediaCards(); 
        loadExerciseCards();
    };
}

function saveMediaToDB(title, fileBlob, mimeType, colorClass) {
    db.transaction(['medias'], 'readwrite').objectStore('medias')
      .add({ title, blob: fileBlob, isVideo: mimeType.startsWith('video'), colorClass })
      .onsuccess = () => loadMediaCards();
}

function loadMediaCards() {
    const container = document.getElementById('grid-media');
    if(!container) return;
    container.innerHTML = '';
    db.transaction(['medias'], 'readonly').objectStore('medias').getAll().onsuccess = (e) => {
        e.target.result.forEach(media => {
            const btn = document.createElement('button');
            btn.className = `word-btn border-${media.colorClass}`;
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'word-btn-img-container';
            imgContainer.innerHTML = `<i class="fas ${media.isVideo ? 'fa-play-circle' : 'fa-music'} word-btn-icon"></i>`;
            
            const textEl = document.createElement('div');
            textEl.className = 'word-btn-text';
            textEl.textContent = media.title;

            btn.appendChild(imgContainer);
            btn.appendChild(textEl);
            
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if(confirm('Apagar?')) db.transaction(['medias'], 'readwrite').objectStore('medias').delete(media.id).onsuccess = () => loadMediaCards();
            };
            btn.appendChild(delBtn);
            btn.addEventListener('click', () => playMedia(media));
            container.appendChild(btn);
        });
    };
}

// Exercícios (Playlists com Edição)
let currentEditingExerciseId = null;
let currentEditingBlobs = {};
let exerciseBlockCounter = 0;

function saveExercisePlaylistToDB(title, itemsArray) {
    const store = db.transaction(['exercises'], 'readwrite').objectStore('exercises');
    
    if (currentEditingExerciseId) {
        store.put({ id: currentEditingExerciseId, title, items: itemsArray }).onsuccess = () => loadExerciseCards();
    } else {
        store.add({ title, items: itemsArray }).onsuccess = () => loadExerciseCards();
    }
}

function loadExerciseCards() {
    const container = document.getElementById('grid-exercises');
    if(!container) return;
    container.innerHTML = '';
    db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
        e.target.result.forEach(ex => {
            const btn = document.createElement('button');
            btn.className = `word-btn border-pink`;
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'word-btn-img-container';
            
            if(ex.items && ex.items.length > 0 && ex.items[0].imageBlob) {
                const objectUrl = URL.createObjectURL(ex.items[0].imageBlob);
                imgContainer.innerHTML = `<img src="${objectUrl}" class="word-btn-img" />`;
            } else {
                imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
            }
            
            const textEl = document.createElement('div');
            textEl.className = 'word-btn-text';
            textEl.textContent = ex.title;

            btn.appendChild(imgContainer);
            btn.appendChild(textEl);
            
            // Botão Deletar
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if(confirm(`Apagar playlist "${ex.title}"?`)) db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id).onsuccess = () => loadExerciseCards();
            };
            btn.appendChild(delBtn);

            // Botão Editar
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openEditExercise(ex);
            };
            btn.appendChild(editBtn);

            btn.addEventListener('click', () => openPresentationPlaylist(ex));
            container.appendChild(btn);
        });
    };
}

function getEmbedUrl(url) {
    if (!url) return '';
    let urlToParse = url.trim();
    if (!urlToParse.startsWith('http://') && !urlToParse.startsWith('https://')) {
        urlToParse = 'https://' + urlToParse;
    }
    
    if (urlToParse.includes('vimeo.com')) {
        try {
            const parsedUrl = new URL(urlToParse);
            const pathSegments = parsedUrl.pathname.split('/').filter(p => p);
            if (pathSegments.length > 0) {
                const videoId = pathSegments[0];
                let embedStr = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
                if (pathSegments.length > 1) {
                    embedStr += `&h=${pathSegments[1]}`;
                }
                return embedStr;
            }
        } catch(e) {}
        return urlToParse;
    }
    if (urlToParse.includes('drive.google.com/file/d/')) {
        return urlToParse.replace(/\/view.*$/, '/preview');
    }
    if (urlToParse.includes('youtube.com/watch')) {
        try {
            const videoId = new URL(urlToParse).searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } catch(e) {}
    }
    if (urlToParse.includes('youtu.be/')) {
        const videoId = urlToParse.split('/').pop();
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return urlToParse;
}

// ----------------------------------------------------
// MODAIS, PLAYLISTS E EDIÇÃO
// ----------------------------------------------------

let currentAudio = null;
let currentPlaylistItems = [];
let currentPlaylistIndex = 0;

function createExerciseBlockHtml(blockId, isEdit = false, hasOldImage = false) {
    return `
        <div class="exercise-item-block" data-block-id="${blockId}">
            <div class="block-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin:0;" class="block-title">Vídeo</h4>
                ${isEdit ? '<button type="button" class="btn-remove-block" style="background:#ff4d4f;color:white;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;"><i class="fas fa-trash"></i> Remover</button>' : ''}
            </div>
            <div class="form-group">
                <label>Palavra Escrita</label>
                <input type="text" class="item-word" placeholder="Ex: PÓ" required>
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                    <label>Cor do Texto</label>
                    <input type="color" class="item-color" value="#333333" style="width: 100%; height: 40px; cursor: pointer; border: 1px solid #ddd; border-radius: 8px;">
                </div>
                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                    <label>Tamanho (px)</label>
                    <input type="number" class="item-size" value="100" min="20" max="300" style="width: 100%; height: 40px; box-sizing: border-box; padding: 0 10px; border: 1px solid #ddd; border-radius: 8px;">
                </div>
            </div>
            <div class="form-group">
                <label>Link do Vídeo (Vimeo, Drive, YouTube, Figma)</label>
                <input type="url" class="item-link" placeholder="Cole o link aqui..." required>
            </div>
            <div class="form-group">
                <label>Imagem (Objeto)</label>
                <input type="file" class="item-image" accept="image/*" ${hasOldImage ? '' : 'required'}>
                ${hasOldImage ? '<span class="image-hint">Imagem atual salva. Selecione outra apenas para substituir.</span>' : ''}
            </div>
        </div>
    `;
}

function addExerciseBlock(isEdit = false, hasOldImage = false) {
    const container = document.getElementById('exercise-items-container');
    const blockId = exerciseBlockCounter++;
    
    const block = document.createElement('div');
    block.innerHTML = createExerciseBlockHtml(blockId, isEdit, hasOldImage);
    
    const removeBtn = block.querySelector('.btn-remove-block');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            container.removeChild(block.firstElementChild);
            updateBlockTitles();
        });
    }
    
    container.appendChild(block.firstElementChild);
    updateBlockTitles();
}

function updateBlockTitles() {
    const blocks = document.querySelectorAll('.exercise-item-block');
    blocks.forEach((b, index) => {
        b.querySelector('.block-title').textContent = `Vídeo ${index + 1}`;
    });
}

function openEditExercise(ex) {
    currentEditingExerciseId = ex.id;
    currentEditingBlobs = {};
    exerciseBlockCounter = 0;
    
    document.getElementById('upload-exercise-modal').style.display = 'flex';
    document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Editar Playlist de Exercícios";
    document.getElementById('exercise-title').value = ex.title;
    
    const container = document.getElementById('exercise-items-container');
    container.innerHTML = '';
    
    ex.items.forEach((item, index) => {
        const hasOldImage = !!item.imageBlob;
        addExerciseBlock(true, hasOldImage);
        
        const blockEl = container.querySelector(`[data-block-id="${index}"]`);
        blockEl.querySelector('.item-word').value = item.word || '';
        blockEl.querySelector('.item-link').value = item.videoLink || '';
        blockEl.querySelector('.item-color').value = item.textColor || '#333333';
        blockEl.querySelector('.item-size').value = item.textSize || '100';
        
        if (item.imageBlob) {
            currentEditingBlobs[index] = item.imageBlob;
        }
    });
}

function setupModals() {
    document.getElementById('btn-open-upload').addEventListener('click', () => document.getElementById('upload-modal').style.display = 'flex');
    const closeUpload = () => { document.getElementById('upload-modal').style.display = 'none'; document.getElementById('upload-form').reset(); };
    document.getElementById('btn-close-upload').addEventListener('click', closeUpload);
    document.getElementById('btn-cancel-upload').addEventListener('click', closeUpload);
    document.getElementById('upload-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveMediaToDB(document.getElementById('media-title').value, document.getElementById('media-file').files[0], document.getElementById('media-file').files[0].type, document.getElementById('media-color').value.split('-')[1]);
        closeUpload();
    });

    document.getElementById('btn-open-exercise-upload').addEventListener('click', () => {
        currentEditingExerciseId = null;
        currentEditingBlobs = {};
        exerciseBlockCounter = 0;
        
        document.getElementById('upload-exercise-modal').style.display = 'flex';
        document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Nova Playlist de Exercícios";
        document.getElementById('upload-exercise-form').reset();
        
        const container = document.getElementById('exercise-items-container');
        container.innerHTML = '';
        addExerciseBlock(); 
    });

    const closeExerciseUpload = () => { document.getElementById('upload-exercise-modal').style.display = 'none'; document.getElementById('upload-exercise-form').reset(); };
    document.getElementById('btn-close-exercise-upload').addEventListener('click', closeExerciseUpload);
    document.getElementById('btn-cancel-exercise-upload').addEventListener('click', closeExerciseUpload);
    
    document.getElementById('btn-add-exercise-item').addEventListener('click', () => {
        addExerciseBlock(true);
    });

    document.getElementById('upload-exercise-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('exercise-title').value;
        const blocks = document.querySelectorAll('.exercise-item-block');
        
        if(blocks.length === 0) return alert("Adicione pelo menos um vídeo.");
        
        const itemsArray = [];
        blocks.forEach(block => {
            const blockId = block.dataset.blockId;
            const fileInput = block.querySelector('.item-image');
            
            let finalBlob = fileInput.files[0];
            if (!finalBlob && currentEditingBlobs[blockId]) {
                finalBlob = currentEditingBlobs[blockId];
            }
            
            itemsArray.push({
                word: block.querySelector('.item-word').value,
                textColor: block.querySelector('.item-color').value,
                textSize: block.querySelector('.item-size').value,
                videoLink: block.querySelector('.item-link').value,
                imageBlob: finalBlob
            });
        });
        
        saveExercisePlaylistToDB(title, itemsArray);
        closeExerciseUpload();
    });

    document.getElementById('btn-close-video').addEventListener('click', () => {
        document.getElementById('video-modal').style.display = 'none';
        document.getElementById('video-player').pause();
    });

    document.getElementById('btn-close-presentation').addEventListener('click', () => {
        document.getElementById('presentation-modal').style.display = 'none';
        document.getElementById('presentation-iframe').src = '';
    });
    
    document.getElementById('btn-prev-presentation').addEventListener('click', () => navigatePlaylist(-1));
    document.getElementById('btn-next-presentation').addEventListener('click', () => navigatePlaylist(1));
}

function playMedia(media) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();
    const fileUrl = URL.createObjectURL(media.blob);
    if (media.isVideo) {
        document.getElementById('video-modal-title').textContent = media.title;
        document.getElementById('video-modal').style.display = 'flex';
        document.getElementById('video-player').src = fileUrl;
        document.getElementById('video-player').play();
    } else { currentAudio = new Audio(fileUrl); currentAudio.play(); }
}

function navigatePlaylist(direction) {
    const newIndex = currentPlaylistIndex + direction;
    if (newIndex >= 0 && newIndex < currentPlaylistItems.length) {
        currentPlaylistIndex = newIndex;
        renderCurrentPlaylistItem();
    } else {
        alert("Não é possível avançar. Total de vídeos salvos nesta playlist: " + currentPlaylistItems.length);
    }
}

function openPresentationPlaylist(ex) {
    if (!ex.items || ex.items.length === 0) return;
    
    currentPlaylistItems = ex.items;
    currentPlaylistIndex = 0;
    
    document.getElementById('presentation-modal').style.display = 'flex';
    renderCurrentPlaylistItem();
}

function renderCurrentPlaylistItem() {
    try {
        const item = currentPlaylistItems[currentPlaylistIndex];
        
        document.getElementById('presentation-progress').textContent = `${currentPlaylistIndex + 1} / ${currentPlaylistItems.length}`;
        const wordEl = document.getElementById('presentation-word-text');
        wordEl.textContent = item.word || '';
        wordEl.style.color = item.textColor || '#333333';
        wordEl.style.fontSize = (item.textSize || '100') + 'px';
        
        const imgEl = document.getElementById('presentation-image');
        if (item.imageBlob && item.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(item.imageBlob);
        } else {
            imgEl.src = '';
        }
        
        document.getElementById('presentation-iframe').src = getEmbedUrl(item.videoLink);
        
        document.getElementById('btn-prev-presentation').disabled = (currentPlaylistIndex === 0);
        document.getElementById('btn-next-presentation').disabled = (currentPlaylistIndex === currentPlaylistItems.length - 1);
    } catch (e) {
        console.error("Erro ao renderizar slide:", e);
        alert("Erro na tela do slide: " + e.message);
    }
}

document.addEventListener('DOMContentLoaded', initApp);
