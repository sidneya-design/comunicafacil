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
    { folder: 'comida', styleClass: 'border-pink', items: [{ word: 'maçã', styleClass: 'border-orange' }, { word: 'pão', styleClass: 'border-orange' }, { word: 'água', styleClass: 'border-blue' }, { word: 'suco', styleClass: 'border-blue' }] },
    { folder: 'brincadeiras', styleClass: 'border-pink', items: [{ word: 'bola', styleClass: 'border-orange' }, { word: 'carrinho', styleClass: 'border-orange' }, { word: 'boneca', styleClass: 'border-orange' }] }
];

const virtues = [
    { folder: 'Sabedoria', styleClass: 'border-green', items: [{ word: 'Amor ao Aprendizado', styleClass: 'border-green' }, { word: 'Criatividade', styleClass: 'border-green' }, { word: 'Critério', styleClass: 'border-green' }, { word: 'Curiosidade', styleClass: 'border-green' }, { word: 'Perspectiva', styleClass: 'border-green' }] },
    { folder: 'Humanidade', styleClass: 'border-orange', items: [{ word: 'Amor', styleClass: 'border-orange' }, { word: 'Generosidade', styleClass: 'border-orange' }, { word: 'Inteligência Social', styleClass: 'border-orange' }] },
    { folder: 'Justiça', styleClass: 'border-yellow', items: [{ word: 'Justiça', styleClass: 'border-yellow' }, { word: 'Liderança', styleClass: 'border-yellow' }, { word: 'Trabalho em Equipe', styleClass: 'border-yellow' }] },
    { folder: 'Moderação', styleClass: 'border-blue', items: [{ word: 'Autorregulação', styleClass: 'border-blue' }, { word: 'Humildade', styleClass: 'border-blue' }, { word: 'Perdão', styleClass: 'border-blue' }, { word: 'Prudência', styleClass: 'border-blue' }] },
    { folder: 'Coragem', styleClass: 'border-red', items: [{ word: 'Coragem', styleClass: 'border-red' }, { word: 'Integridade', styleClass: 'border-red' }, { word: 'Perseverança', styleClass: 'border-red' }, { word: 'Vitalidade', styleClass: 'border-red' }] },
    { folder: 'Transcendência', styleClass: 'border-pink', items: [{ word: 'Apreciação da Beleza', styleClass: 'border-pink' }, { word: 'Esperança', styleClass: 'border-pink' }, { word: 'Espiritualidade', styleClass: 'border-pink' }, { word: 'Gratidão', styleClass: 'border-pink' }, { word: 'Humor', styleClass: 'border-pink' }] },
    {
        folder: 'Fomes', styleClass: 'border-pink', items: [
            { word: 'Vínculo', styleClass: 'border-pink', img: 'img/fomes/vinculo.png' },
            { word: 'Diversão', styleClass: 'border-pink', img: 'img/fomes/diversao.png' },
            { word: 'Competência', styleClass: 'border-pink', img: 'img/fomes/competencia.png' },
            { word: 'Autonomia', styleClass: 'border-pink', img: 'img/fomes/autonomia.png' },
            { word: 'Segurança', styleClass: 'border-pink', img: 'img/fomes/seguranca.png' }
        ]
    }
];

const localForcesImages = {
    'amor ao aprendizado': 'img/forcas/amor-ao-aprendizado.png',
    'amor': 'img/forcas/amor.png',
    'apreciação da beleza': 'img/forcas/apreciacao-da-beleza.png',
    'autorregulação': 'img/forcas/autorregulacao.png',
    'coragem': 'img/forcas/coragem.png',
    'criatividade': 'img/forcas/criatividade.png',
    'critério': 'img/forcas/criterio.png',
    'curiosidade': 'img/forcas/curiosidade.png',
    'esperança': 'img/forcas/esperanca.png',
    'espiritualidade': 'img/forcas/espiritualidade.png',
    'generosidade': 'img/forcas/generosidade.png',
    'gratidão': 'img/forcas/gratidao.png',
    'humildade': 'img/forcas/humildade.png',
    'humor': 'img/forcas/humor.png',
    'integridade': 'img/forcas/integridade.png',
    'inteligência social': 'img/forcas/inteligencia-social.png',
    'justiça': 'img/forcas/justica.png',
    'liderança': 'img/forcas/lideranca.png',
    'perdão': 'img/forcas/perdao.png',
    'perseverança': 'img/forcas/perseveranca.png',
    'perspectiva': 'img/forcas/perspectiva.png',
    'prudência': 'img/forcas/prudencia.png',
    'trabalho em equipe': 'img/forcas/trabalho-em-equipe.png',
    'vitalidade': 'img/forcas/vitalidade.png',
    'autonomia': 'img/forcas/autonomia.png',
    'competência': 'img/forcas/competencia.png',
    'vínculo': 'img/forcas/vinculo.png',
    'diversão': 'img/fomes/diversao.png',
    'segurança': 'img/fomes/seguranca.png',
    'fomes-vínculo': 'img/fomes/vinculo.png',
    'fomes-diversão': 'img/fomes/diversao.png',
    'fomes-competência': 'img/fomes/competencia.png',
    'fomes-autonomia': 'img/fomes/autonomia.png',
    'fomes-segurança': 'img/fomes/seguranca.png'
};
// CONFIGURAÇÃO SUPABASE
const supabaseUrl = 'https://rrubmvykindvilptjhma.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';
const supabaseClient = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

async function uploadToSupabaseStorage(bucket, path, file) {
    if (!supabaseClient || !file) return null;
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;
    const { data, error } = await supabaseClient.storage.from(bucket).upload(filePath, file);
    if (error) throw error;
    const { data: publicUrlData } = supabaseClient.storage.from(bucket).getPublicUrl(filePath);
    return publicUrlData?.publicUrl || null;
}

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
    } catch (e) { }
    return null;
}

function initApp() {
    setupNavigation();
    initIndexedDB();
    setupModals();
    setupCardEditor();
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
    if (!container) return;
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
            if (currentTypingWord.length > 0) commitTypingWord();
            addToMessage(item.word);
            speak(item.word);
        });
        container.appendChild(btn);

        const wordKey = item.word.toLowerCase().trim();
        const localImgUrl = item.img || localForcesImages[wordKey];
        if (localImgUrl) {
            imgEl.src = localImgUrl;
        } else {
            const imageUrl = await fetchArasaacImage(item.word);
            if (imageUrl) imgEl.src = imageUrl;
            else imgContainer.innerHTML = '<i class="fas fa-comment-dots word-btn-icon"></i>';
        }
    }
}


function addToMessage(word) { currentMessage.push(word); renderMessage(); }
function commitTypingWord() { if (currentTypingWord.trim() !== "") { currentMessage.push(currentTypingWord); currentTypingWord = ""; } }

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

let availableVoices = [];
function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}
if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);

        let ptVoices = availableVoices.filter(v => v.lang.startsWith('pt'));
        if (ptVoices.length > 0) {
            // Tenta achar vozes de alta qualidade (Premium, Enhanced, Google ou específicas como Luciana/Daniel)
            let bestVoice = ptVoices.find(v =>
                v.name.includes('Premium') ||
                v.name.includes('Enhanced') ||
                v.name.includes('Google') ||
                v.name.includes('Luciana')
            );
            utterance.voice = bestVoice || ptVoices[0];
        } else {
            utterance.lang = 'pt-BR';
        }

        utterance.rate = 0.7; // Velocidade reduzida para maior clareza
        window.speechSynthesis.speak(utterance);
    }
}

document.getElementById('btn-speak').addEventListener('click', () => {
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput && nativeInput.value.trim()) {
            speak(nativeInput.value.trim());
            return;
        }
    }
    commitTypingWord(); renderMessage();
    if (currentMessage.length > 0) speak(currentMessage.join(' '));
});
document.getElementById('btn-clear').addEventListener('click', () => { 
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput) {
            nativeInput.value = '';
        }
    }
    currentMessage = []; currentTypingWord = ""; renderMessage(); 
});
document.getElementById('btn-backspace').addEventListener('click', () => {
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput && nativeInput.value.length > 0) {
            nativeInput.value = nativeInput.value.slice(0, -1);
            return;
        }
    }
    if (currentTypingWord.length > 0) currentTypingWord = currentTypingWord.slice(0, -1);
    else if (currentMessage.length > 0) currentMessage.pop();
    renderMessage();
});

let pendingAccent = null;
const accentMap = {
    '´': { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú' },
    '~': { 'a': 'ã', 'o': 'õ', 'n': 'ñ' },
    '^': { 'a': 'â', 'e': 'ê', 'o': 'ô' },
    '`': { 'a': 'à' }
};


// Sincroniza limpezas e botões do virtual keyboard com o hiddenInput
document.getElementById('btn-clear').addEventListener('click', () => {
    currentMessage = [];
    currentTypingWord = "";
    hiddenInput.value = "";
    renderMessage();
});
document.getElementById('btn-backspace').addEventListener('click', () => {
    if (currentTypingWord.length > 0) {
        currentTypingWord = currentTypingWord.slice(0, -1);
        hiddenInput.value = currentTypingWord;
    } else if (currentMessage.length > 0) {
        currentMessage.pop();
    }
    renderMessage();
});

// ----------------------------------------------------
// INDEXEDDB PARA MÍDIAS OFFLINE E EXERCÍCIOS
// ----------------------------------------------------

function initIndexedDB() {
    const request = indexedDB.open('ComunicaDB', 10);
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains('medias')) db.createObjectStore('medias', { keyPath: 'id', autoIncrement: true });
        if (db.objectStoreNames.contains('exercises')) db.deleteObjectStore('exercises');
        db.createObjectStore('exercises', { keyPath: 'id', autoIncrement: true });
        if (!db.objectStoreNames.contains('virtues')) db.createObjectStore('virtues', { keyPath: 'id', autoIncrement: true });
        if (!db.objectStoreNames.contains('topics')) db.createObjectStore('topics', { keyPath: 'id', autoIncrement: true });
        // v8: unifica core_cards + quick_cards em um único store
        if (db.objectStoreNames.contains('core_cards')) db.deleteObjectStore('core_cards');
        if (db.objectStoreNames.contains('quick_cards')) db.deleteObjectStore('quick_cards');
        db.createObjectStore('core_cards', { keyPath: 'id', autoIncrement: true });
    };
    request.onsuccess = (event) => {
        db = event.target.result;
        migrateLocalMediaAndExercises().then(() => {
            loadMediaCards();
            loadExerciseCards();
        });
        initCoreCardsDB();
        initVirtuesDB();
        initTopicsDB();
    };
}

async function migrateLocalMediaAndExercises() {
    if (!supabaseClient) return;

    // Migrar Mídias
    await new Promise((resolve) => {
        db.transaction(['medias'], 'readwrite').objectStore('medias').getAll().onsuccess = async (e) => {
            const locais = e.target.result;
            for (const media of locais) {
                await saveMediaToDB(media.title, media.blob, media.isVideo ? 'video/mp4' : 'audio/mp3', media.colorClass);
                // saveMediaToDB already inserts to Supabase, we can then delete local
                db.transaction(['medias'], 'readwrite').objectStore('medias').delete(media.id);
            }
            resolve();
        };
    });

    // Migrar Exercícios
    await new Promise((resolve) => {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises').getAll().onsuccess = async (e) => {
            const locais = e.target.result;
            for (const ex of locais) {
                currentEditingExerciseId = null; // force insert as new
                await saveExercisePlaylistToDB(ex.title, ex.items || []);
                db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id);
            }
            resolve();
        };
    });
}

async function saveMediaToDB(title, fileBlob, mimeType, colorClass, mediaUrl) {
    const isLink = !!mediaUrl;
    const isVideo = isLink ? true : mimeType.startsWith('video');
    if (supabaseClient) {
        try {
            if (isLink) {
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: mediaUrl }]);
            } else {
                const url = await uploadToSupabaseStorage('media_uploads', 'medias', fileBlob);
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: url }]);
            }
            loadMediaCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar media no Supabase, caindo para local:', e);
        }
    }
    db.transaction(['medias'], 'readwrite').objectStore('medias')
        .add({ title, blob: fileBlob, isVideo, colorClass, media_url: mediaUrl })
        .onsuccess = () => loadMediaCards();
}

let currentMedias = [];
async function loadMediaCards() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('medias').select('*');
            if (!error) {
                currentMedias = data.map(m => ({
                    id: m.id, title: m.title, isVideo: m.is_video, colorClass: m.color_class, media_url: m.media_url, fromSupabase: true
                }));
            }
        } catch(e) {}
    }

    db.transaction(['medias'], 'readonly').objectStore('medias').getAll().onsuccess = (e) => {
        const localMedias = e.target.result.map(m => ({ ...m, fromSupabase: false }));
        const allMedias = [...currentMedias, ...localMedias];
        renderMediaCards(allMedias);
    };
}

function renderMediaCards(mediasArray) {
    const container = document.getElementById('grid-media');
    if (!container) return;
    container.innerHTML = '';
    mediasArray.forEach(media => {
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
        delBtn.onclick = async (ev) => {
            ev.stopPropagation();
            if (confirm('Apagar?')) {
                if (media.fromSupabase && supabaseClient) {
                    await supabaseClient.from('medias').delete().eq('id', media.id);
                    loadMediaCards();
                } else {
                    db.transaction(['medias'], 'readwrite').objectStore('medias').delete(media.id).onsuccess = () => loadMediaCards();
                }
            }
        };
        btn.appendChild(delBtn);
        btn.addEventListener('click', () => playMedia(media));
        container.appendChild(btn);
    });
}

// Exercícios (Playlists com Edição)
let currentEditingExerciseId = null;
let currentEditingBlobs = {};
let exerciseBlockCounter = 0;

async function saveExercisePlaylistToDB(title, itemsArray) {
    if (supabaseClient) {
        try {
            // Fazer upload de todas as imagens para o Storage (em paralelo)
            const uploadedItems = await Promise.all(itemsArray.map(async (item) => {
                let image_url = item.image_url || null;
                if (item.imageBlob instanceof Blob) {
                    image_url = await uploadToSupabaseStorage('media_uploads', 'images', item.imageBlob);
                }
                return { ...item, image_url };
            }));

            if (currentEditingExerciseId) {
                await supabaseClient.from('exercises').update({ title }).eq('id', currentEditingExerciseId);
                await supabaseClient.from('exercise_items').delete().eq('exercise_id', currentEditingExerciseId);
                const dbItems = uploadedItems.map(item => ({
                    exercise_id: currentEditingExerciseId,
                    word: item.word, color: item.color, size: item.size, uppercase: item.uppercase,
                    bold: item.bold, link: item.videoLink || item.link || '', image_url: item.image_url
                }));
                await supabaseClient.from('exercise_items').insert(dbItems);
            } else {
                const { data: exData } = await supabaseClient.from('exercises').insert([{ title }]).select().single();
                if (exData) {
                    const dbItems = uploadedItems.map(item => ({
                        exercise_id: exData.id,
                        word: item.word, color: item.color, size: item.size, uppercase: item.uppercase,
                        bold: item.bold, link: item.videoLink || item.link || '', image_url: item.image_url
                    }));
                    await supabaseClient.from('exercise_items').insert(dbItems);
                }
            }
            loadExerciseCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar exercise no Supabase, caindo para local:', e);
        }
    }

    const store = db.transaction(['exercises'], 'readwrite').objectStore('exercises');
    if (currentEditingExerciseId) {
        store.put({ id: currentEditingExerciseId, title, items: itemsArray }).onsuccess = () => loadExerciseCards();
    } else {
        store.add({ title, items: itemsArray }).onsuccess = () => loadExerciseCards();
    }
}

let currentExercises = [];
async function loadExerciseCards() {
    if (supabaseClient) {
        try {
            const { data: exData, error: exErr } = await supabaseClient.from('exercises').select('*');
            if (!exErr) {
                const { data: itemData } = await supabaseClient.from('exercise_items').select('*');
                currentExercises = exData.map(ex => {
                    const items = (itemData || []).filter(item => item.exercise_id === ex.id).map(item => ({
                        word: item.word, color: item.color, size: item.size, uppercase: item.uppercase,
                        bold: item.bold, videoLink: item.link, image_url: item.image_url
                    }));
                    return { id: ex.id, title: ex.title, items, fromSupabase: true };
                });
            }
        } catch(e) {}
    }

    db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
        const localExercises = e.target.result.map(ex => ({ ...ex, fromSupabase: false }));
        const allExercises = [...currentExercises, ...localExercises];
        renderExerciseCards(allExercises);
    };
}

function renderExerciseCards(exercisesArray) {
    const container = document.getElementById('grid-exercises');
    if (!container) return;
    container.innerHTML = '';
    
    exercisesArray.forEach(ex => {
        const btn = document.createElement('button');
        btn.className = `word-btn border-pink`;

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';

        if (ex.items && ex.items.length > 0) {
            if (ex.items[0].imageBlob instanceof Blob) {
                imgContainer.innerHTML = `<img src="${URL.createObjectURL(ex.items[0].imageBlob)}" class="word-btn-img" />`;
            } else if (ex.items[0].image_url) {
                imgContainer.innerHTML = `<img src="${ex.items[0].image_url}" class="word-btn-img" />`;
            } else {
                imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
            }
        } else {
            imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = ex.title;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash"></i>';
        delBtn.onclick = async (ev) => {
            ev.stopPropagation();
            if (confirm(`Apagar playlist "${ex.title}"?`)) {
                if (ex.fromSupabase && supabaseClient) {
                    await supabaseClient.from('exercises').delete().eq('id', ex.id);
                    loadExerciseCards();
                } else {
                    db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id).onsuccess = () => loadExerciseCards();
                }
            }
        };
        btn.appendChild(delBtn);

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
        } catch (e) { }
        return urlToParse;
    }
    if (urlToParse.includes('drive.google.com/file/d/')) {
        return urlToParse.replace(/\/view.*$/, '/preview');
    }
    if (urlToParse.includes('youtube.com/watch')) {
        try {
            const videoId = new URL(urlToParse).searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } catch (e) { }
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
            <div style="display: flex; gap: 20px; margin-bottom: 15px; align-items: center; justify-content: flex-start; padding-left: 5px;">
                <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; cursor: pointer; color: #333;">
                    <input type="checkbox" class="item-uppercase" style="width: 18px; height: 18px; cursor: pointer;"> Caixa Alta
                </label>
                <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; cursor: pointer; color: #333;">
                    <input type="checkbox" class="item-bold" style="width: 18px; height: 18px; cursor: pointer;" checked> Negrito
                </label>
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
        blockEl.querySelector('.item-uppercase').checked = !!item.isUppercase;
        blockEl.querySelector('.item-bold').checked = item.isBold !== undefined ? item.isBold : true;

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

    const mediaSourceRadios = document.querySelectorAll('input[name="media-source"]');
    const mediaFileGroup = document.getElementById('media-file-group');
    const mediaLinkGroup = document.getElementById('media-link-group');

    mediaSourceRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            const source = document.querySelector('input[name="media-source"]:checked').value;
            if (source === 'link') {
                mediaFileGroup.style.display = 'none';
                mediaLinkGroup.style.display = 'block';
            } else {
                mediaFileGroup.style.display = 'block';
                mediaLinkGroup.style.display = 'none';
            }
        });
    });

    document.getElementById('upload-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('media-title').value.trim();
        const color = document.getElementById('media-color').value.split('-')[1];
        const source = document.querySelector('input[name="media-source"]:checked').value;

        if (!title) {
            alert('Por favor informe um título para a mídia.');
            return;
        }

        if (source === 'link') {
            const link = document.getElementById('media-link').value.trim();
            if (!link) {
                alert('Informe o link do YouTube, Vimeo ou Google Drive.');
                return;
            }
            saveMediaToDB(title, null, '', color, link);
        } else {
            const file = document.getElementById('media-file').files[0];
            if (!file) {
                alert('Selecione um arquivo de áudio ou vídeo.');
                return;
            }
            saveMediaToDB(title, file, file.type, color, null);
        }

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

        if (blocks.length === 0) return alert("Adicione pelo menos um vídeo.");

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
                isUppercase: block.querySelector('.item-uppercase').checked,
                isBold: block.querySelector('.item-bold').checked,
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

    if (media.media_url && !media.blob) {
        window.open(media.media_url, '_blank');
        return;
    }

    const fileUrl = URL.createObjectURL(media.blob);
    if (media.isVideo) {
        document.getElementById('video-modal-title').textContent = media.title;
        document.getElementById('video-modal').style.display = 'flex';
        document.getElementById('video-player').src = fileUrl;
        document.getElementById('video-player').play();
    } else {
        currentAudio = new Audio(fileUrl);
        currentAudio.play();
    }
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
        wordEl.style.textTransform = item.isUppercase ? 'uppercase' : 'none';
        wordEl.style.fontWeight = (item.isBold !== undefined ? item.isBold : true) ? '800' : '400';

        const imgEl = document.getElementById('presentation-image');
        if (item.imageBlob && item.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(item.imageBlob);
        } else if (item.image_url) {
            imgEl.src = item.image_url;
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

// =============================================
// SISTEMA DE PERSONALIZAÇÃO DE CARDS
// =============================================
// 🔐 ADMIN: Controle de acesso
let isAdmin = false; // Bloqueado por padrão (Apenas fala)

// Verificar sessão no carregamento
if (supabaseClient) {
    supabaseClient.auth.getSession().then(async ({ data }) => {
        if (!data?.session) {
            // Ninguém pode acessar sem login! Redireciona para o login.
            window.location.href = 'login.html';
            return;
        }

        // Se chegou aqui, a pessoa fez login. 
        // Vamos buscar a flag de administrador dela direto no Banco de Dados
        const userId = data.session.user.id;
        try {
            const { data: roleData, error } = await supabaseClient
                .from('user_roles')
                .select('is_admin')
                .eq('user_id', userId)
                .single();

            if (roleData && roleData.is_admin === true) {
                isAdmin = true;
                document.getElementById('text-login-logout').textContent = 'Sair (Admin)';
                document.getElementById('btn-login-logout').querySelector('i').className = 'fas fa-unlock';
                
                // Re-render grids to show edit buttons if admin
                loadCoreAndRender();
                if (typeof initVirtuesDB === 'function') initVirtuesDB();
                if (typeof initTopicsDB === 'function') initTopicsDB();
                loadMediaCards();
                loadExerciseCards();
            } else {
                isAdmin = false;
                document.getElementById('text-login-logout').textContent = 'Sair';
                document.getElementById('btn-login-logout').querySelector('i').className = 'fas fa-user';
            }
        } catch (e) {
            console.error("Erro ao checar permissões:", e);
        }

        showEditBars();
    });
}

document.getElementById('btn-login-logout')?.addEventListener('click', async () => {
    if (confirm("Deseja sair do aplicativo?")) {
        if (supabaseClient) await supabaseClient.auth.signOut();
        window.location.href = 'login.html';
    }
});

// Estado global
const editModes = { core: false, virtue: false, topic: false };
let cardEditorState = { section: null, cardId: null, folderRecord: null };
let currentVirtueFolders = [];
let currentOpenFolderRecord = null;
let currentTopicsFolders = [];
let currentOpenTopicFolderRecord = null;

// ---- Helpers de visibilidade de edição ----
function showEditBars() {
    ['btn-edit-core', 'btn-edit-virtues', 'btn-edit-topics'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.parentElement.style.display = isAdmin ? 'flex' : 'none';
    });
}

function updateEditBtn(section, btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (editModes[section]) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-check"></i> Concluir';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-pen"></i> Editar';
    }
}

// ---- ESSENCIAIS (Core Cards — inclui Rápidas) ----
function initCoreCardsDB() {
    db.transaction(['core_cards'], 'readonly').objectStore('core_cards').getAll().onsuccess = (e) => {
        if (e.target.result.length === 0) {
            const tx = db.transaction(['core_cards'], 'readwrite');
            const store = tx.objectStore('core_cards');
            // Semeia coreWords seguido de quickFires, mantendo estilo de cada um
            [...coreWords, ...quickFires].forEach((w, i) =>
                store.add({ ...w, imageBlob: null, audioBlob: null, order: i })
            );
            tx.oncomplete = loadCoreAndRender;
        } else {
            loadCoreAndRender();
        }
    };
}

async function loadCoreAndRender() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('core_cards')
                .select('*')
                .order('order', { ascending: true });
            if (error) throw error;
            if (data && data.length > 0) {
                const tx = db.transaction(['core_cards'], 'readwrite');
                const store = tx.objectStore('core_cards');
                store.clear().onsuccess = () => {
                    data.forEach(card => {
                        store.put({
                            id: card.id,
                            word: card.word,
                            styleClass: card.style_class,
                            img: card.img,
                            image_url: card.image_url,
                            audio_url: card.audio_url,
                            order: card.order
                        });
                    });
                };
                renderFlatGrid(data.map(d => ({ ...d, styleClass: d.style_class })), 'grid-core', 'core');
                return;
            } else if (data && data.length === 0) {
                console.log('Semeando Supabase com cards essenciais...');
                const seedData = [...coreWords, ...quickFires].map((w, i) => ({
                    word: w.word,
                    style_class: w.styleClass,
                    order: i
                }));
                const { error: seedErr } = await supabaseClient.from('core_cards').insert(seedData);
                if (!seedErr) {
                    loadCoreAndRender();
                    return;
                }
            }
        } catch (e) {
            console.warn('Erro ao conectar no Supabase (core):', e);
        }
    }

    db.transaction(['core_cards'], 'readonly').objectStore('core_cards').getAll().onsuccess = (e) => {
        renderFlatGrid(e.target.result.sort((a, b) => a.order - b.order), 'grid-core', 'core');
    };
}

// ---- GRID FLAT (Essenciais) ----
async function renderFlatGrid(cards, containerId, section) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    for (const card of cards) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${card.styleClass}`;

        if (card.audioBlob instanceof Blob || (typeof card.audio_url === 'string' && card.audio_url.trim() !== '')) {
            const ind = document.createElement('div');
            ind.className = 'audio-indicator';
            ind.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.appendChild(ind);
        }

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = card.word;

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes[section]) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar "${card.word}"?`)) {
                    if (supabaseClient) {
                        supabaseClient.from('core_cards').delete().eq('id', card.id).then(({ error }) => {
                            if (error) alert('Erro ao deletar no Supabase: ' + error.message);
                            loadCoreAndRender();
                        });
                        return;
                    }
                    db.transaction(['core_cards'], 'readwrite').objectStore('core_cards').delete(card.id).onsuccess = () => {
                        loadCoreAndRender();
                    };
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor(section, card.id, card, null); };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => {
            if (editModes[section]) return;
            if (currentTypingWord.length > 0) commitTypingWord();
            addToMessage(card.word);
            if (card.audioBlob instanceof Blob) new Audio(URL.createObjectURL(card.audioBlob)).play();
            else if (typeof card.audio_url === 'string' && card.audio_url.trim() !== '') new Audio(card.audio_url).play();
            else speak(card.word);
        });

        container.appendChild(btn);

        // Imagem
        if (card.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(card.imageBlob);
        } else if (typeof card.image_url === 'string' && card.image_url.trim() !== '') {
            imgEl.src = card.image_url;
        } else {
            const wordKey = (card.word || '').toLowerCase().trim();
            const local = card.img || localForcesImages[wordKey];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(card.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon"></i>';
                });
            }
        }
    }

    // Botão + Novo Card (admin)
    if (isAdmin && editModes[section]) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888"></i></div><div class="word-btn-text">Novo Card</div>';
        addBtn.addEventListener('click', () => openCardEditor(section, null, null, null));
        container.appendChild(addBtn);
    }

    updateEditBtn(section, 'btn-edit-core');
}

// ---- TÓPICOS (Fringe) ----
function initTopicsDB() {
    db.transaction(['topics'], 'readonly').objectStore('topics').getAll().onsuccess = (e) => {
        if (e.target.result.length === 0) {
            const tx = db.transaction(['topics'], 'readwrite');
            const store = tx.objectStore('topics');
            topics.forEach(t => store.add({
                folder: t.folder, styleClass: t.styleClass,
                items: t.items.map(i => ({ ...i, imageBlob: null, audioBlob: null }))
            }));
            tx.oncomplete = loadTopicsAndRender;
        } else {
            currentTopicsFolders = e.target.result;
            renderTopicsFolders();
        }
    };
}

async function loadTopicsAndRender() {
    if (supabaseClient) {
        try {
            const { data: catData, error: catErr } = await supabaseClient.from('topics').select('*');
            if (catErr) throw catErr;

            if (catData && catData.length > 0) {
                const { data: itemData, error: itemErr } = await supabaseClient.from('topic_items').select('*');
                if (itemErr) throw itemErr;

                const merged = catData.map(cat => {
                    const items = (itemData || []).filter(item => item.topic_id === cat.id).map(item => ({
                        word: item.word, styleClass: item.style_class, img: item.img, image_url: item.image_url, audio_url: item.audio_url
                    }));
                    return { id: cat.id, folder: cat.folder, styleClass: cat.style_class, items };
                });

                currentTopicsFolders = merged;
                const tx = db.transaction(['topics'], 'readwrite');
                const store = tx.objectStore('topics');
                store.clear().onsuccess = () => merged.forEach(t => store.put(t));

                const wordGrid = document.getElementById('grid-topic-words');
                if (currentOpenTopicFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
                    const updated = currentTopicsFolders.find(r => r.id === currentOpenTopicFolderRecord.id);
                    if (updated) { currentOpenTopicFolderRecord = updated; renderTopicsWords(updated); }
                } else {
                    renderTopicsFolders();
                }
                return;
            } else if (catData && catData.length === 0) {
                console.log('Semeando Supabase com tópicos...');
                for (const t of topics) {
                    const { data: newCat, error: seedCatErr } = await supabaseClient.from('topics')
                        .insert([{ folder: t.folder, style_class: t.styleClass }]).select().single();
                    if (newCat && !seedCatErr) {
                        const itemsData = t.items.map(item => ({
                            topic_id: newCat.id, word: item.word, style_class: item.styleClass, img: item.img || null
                        }));
                        await supabaseClient.from('topic_items').insert(itemsData);
                    }
                }
                loadTopicsAndRender();
                return;
            }
        } catch (e) {
            console.warn('Erro ao carregar topics do Supabase:', e);
        }
    }
    db.transaction(['topics'], 'readonly').objectStore('topics').getAll().onsuccess = (e) => {
        currentTopicsFolders = e.target.result;
        const wordGrid = document.getElementById('grid-topic-words');
        if (currentOpenTopicFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
            const updated = currentTopicsFolders.find(r => r.id === currentOpenTopicFolderRecord.id);
            if (updated) { currentOpenTopicFolderRecord = updated; renderTopicsWords(updated); }
        } else {
            renderTopicsFolders();
        }
    };
}

function saveTopicFolderToDB(record, callback) {
    const req = db.transaction(['topics'], 'readwrite').objectStore('topics')[record.id ? 'put' : 'add'](record);
    req.onsuccess = () => { if (callback) callback(); };
}

function deleteTopicFolderFromDB(id, callback) {
    db.transaction(['topics'], 'readwrite').objectStore('topics').delete(id).onsuccess = () => { if (callback) callback(); };
}

async function renderTopicsFolders() {
    const container = document.getElementById('grid-topics-folders');
    const wordGrid = document.getElementById('grid-topic-words');
    const backBtn = document.getElementById('btn-topic-back');
    if (!container) return;
    container.innerHTML = '';
    container.style.display = 'grid';
    if (wordGrid) wordGrid.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    for (const record of currentTopicsFolders) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${record.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        const folderKey = record.folder.toLowerCase().trim();
        const localImgUrl = localForcesImages[folderKey];
        if (localImgUrl) {
            imgEl.src = localImgUrl;
        } else {
            fetchArasaacImage(record.folder).then(url => {
                if (url) imgEl.src = url;
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
            });
        }

        if (isAdmin && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Tem certeza que deseja excluir a pasta "${record.folder}"?`)) {
                    if (supabaseClient && record.id) {
                        supabaseClient.from('topics').delete().eq('id', record.id)
                            .then(({ error }) => {
                                if (error) console.error(error);
                                else { deleteTopicFolderFromDB(record.id, loadTopicsAndRender); }
                            });
                    } else if (record.id) {
                        deleteTopicFolderFromDB(record.id, loadTopicsAndRender);
                    }
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('topic', null, null, record); };
            btn.appendChild(editBtn);
        }

        btn.onclick = () => {
            if (!editModes.topic) speak(record.folder);
            currentOpenTopicFolderRecord = record;
            renderTopicsWords(record);
        };
        container.appendChild(btn);
    }

    if (isAdmin && editModes.topic) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn add-btn';
        addBtn.innerHTML = '<i class="fas fa-plus"></i><div class="word-btn-text">Nova Pasta</div>';
        addBtn.addEventListener('click', () => openCardEditor('topic', null, null, null));
        container.appendChild(addBtn);
    }
    updateEditBtn('topic', 'btn-edit-topics');
}

async function renderTopicsWords(record) {
    const folderGrid = document.getElementById('grid-topics-folders');
    const wordGrid = document.getElementById('grid-topic-words');
    const backBtn = document.getElementById('btn-topic-back');
    if (folderGrid) folderGrid.style.display = 'none';
    if (wordGrid) { wordGrid.style.display = 'grid'; wordGrid.innerHTML = ''; }
    if (backBtn) backBtn.style.display = 'flex';

    for (const [idx, item] of record.items.entries()) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgCont.appendChild(imgEl);

        let blobUrl = null;
        if (item.imageBlob instanceof Blob) {
            blobUrl = URL.createObjectURL(item.imageBlob);
            imgEl.src = blobUrl;
        } else if (typeof item.image_url === 'string' && item.image_url.trim() !== '') {
            imgEl.src = item.image_url;
        } else {
            const local = item.img || localForcesImages[(item.word || '').toLowerCase().trim()];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(item.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon"></i>';
                });
            }
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Excluir o item "${item.word}"?`)) {
                    if (supabaseClient && record.id) {
                        const itemsToUpdate = record.items.filter((_, i) => i !== idx);
                        supabaseClient.from('topic_items').delete().eq('topic_id', record.id).eq('word', item.word)
                            .then(({ error }) => {
                                if (!error) { record.items = itemsToUpdate; saveTopicFolderToDB(record, loadTopicsAndRender); }
                            });
                    } else {
                        record.items.splice(idx, 1);
                        saveTopicFolderToDB(record, loadTopicsAndRender);
                    }
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('topic', idx, item, record); };
            btn.appendChild(editBtn);
        }

        btn.onclick = () => {
            if (!editModes.topic) {
                if (currentTypingWord.length > 0) commitTypingWord();
                addToMessage(item.word);
                if (item.audioBlob) {
                    const audio = new Audio(URL.createObjectURL(item.audioBlob));
                    audio.play();
                } else if (item.audio_url) {
                    const audio = new Audio(item.audio_url);
                    audio.play();
                } else {
                    speak(item.word);
                }
            }
        };
        wordGrid.appendChild(btn);
    }

    if (isAdmin && editModes.topic) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn add-btn';
        addBtn.innerHTML = '<i class="fas fa-plus"></i><div class="word-btn-text">Novo Item</div>';
        addBtn.addEventListener('click', () => openCardEditor('topic', null, null, record));
        wordGrid.appendChild(addBtn);
    }
}

// ---- FOMES E FORÇAS (Virtues) ----
function initVirtuesDB() {
    db.transaction(['virtues'], 'readonly').objectStore('virtues').getAll().onsuccess = (e) => {
        if (e.target.result.length === 0) {
            const tx = db.transaction(['virtues'], 'readwrite');
            const store = tx.objectStore('virtues');
            virtues.forEach(v => store.add({
                folder: v.folder, styleClass: v.styleClass,
                items: v.items.map(i => ({ ...i, imageBlob: null, audioBlob: null }))
            }));
            tx.oncomplete = loadVirtuesAndRender;
        } else {
            currentVirtueFolders = e.target.result;
            renderVirtueFolders();
        }
    };
}

async function loadVirtuesAndRender() {
    if (supabaseClient) {
        try {
            const { data: catData, error: catErr } = await supabaseClient
                .from('virtues')
                .select('*');
            if (catErr) throw catErr;

            if (catData && catData.length > 0) {
                const { data: itemData, error: itemErr } = await supabaseClient
                    .from('virtue_items')
                    .select('*');
                if (itemErr) throw itemErr;

                const merged = catData.map(cat => {
                    const items = (itemData || [])
                        .filter(item => item.virtue_id === cat.id)
                        .map(item => ({
                            word: item.word,
                            styleClass: item.style_class,
                            img: item.img,
                            image_url: item.image_url,
                            audio_url: item.audio_url
                        }));
                    return {
                        id: cat.id,
                        folder: cat.folder,
                        styleClass: cat.style_class,
                        items
                    };
                });

                currentVirtueFolders = merged;
                const tx = db.transaction(['virtues'], 'readwrite');
                const store = tx.objectStore('virtues');
                store.clear().onsuccess = () => {
                    merged.forEach(v => store.put(v));
                };

                const wordGrid = document.getElementById('grid-virtue-words');
                if (currentOpenFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
                    const updated = currentVirtueFolders.find(r => r.id === currentOpenFolderRecord.id);
                    if (updated) { currentOpenFolderRecord = updated; renderVirtueWords(updated); }
                } else {
                    renderVirtueFolders();
                }
                return;
            } else if (catData && catData.length === 0) {
                console.log('Semeando Supabase com categorias de fomes e forças...');
                for (const v of virtues) {
                    const { data: newCat, error: seedCatErr } = await supabaseClient
                        .from('virtues')
                        .insert([{ folder: v.folder, style_class: v.styleClass }])
                        .select()
                        .single();

                    if (newCat && !seedCatErr) {
                        const itemsData = v.items.map(item => ({
                            virtue_id: newCat.id,
                            word: item.word,
                            style_class: item.styleClass,
                            img: item.img || null
                        }));
                        await supabaseClient.from('virtue_items').insert(itemsData);
                    }
                }
                loadVirtuesAndRender();
                return;
            }
        } catch (e) {
            console.warn('Erro ao carregar virtues do Supabase:', e);
        }
    }

    db.transaction(['virtues'], 'readonly').objectStore('virtues').getAll().onsuccess = (e) => {
        currentVirtueFolders = e.target.result;
        const wordGrid = document.getElementById('grid-virtue-words');
        if (currentOpenFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
            const updated = currentVirtueFolders.find(r => r.id === currentOpenFolderRecord.id);
            if (updated) { currentOpenFolderRecord = updated; renderVirtueWords(updated); }
        } else {
            renderVirtueFolders();
        }
    };
}

function saveVirtueFolderToDB(record, callback) {
    const req = db.transaction(['virtues'], 'readwrite').objectStore('virtues')[record.id ? 'put' : 'add'](record);
    req.onsuccess = () => { if (callback) callback(); };
}

function deleteVirtueFolderFromDB(id, callback) {
    db.transaction(['virtues'], 'readwrite').objectStore('virtues').delete(id).onsuccess = () => { if (callback) callback(); };
}

async function renderVirtueFolders() {
    const container = document.getElementById('grid-virtues-folders');
    const wordGrid = document.getElementById('grid-virtue-words');
    const backBtn = document.getElementById('btn-virtue-back');
    if (!container) return;
    container.innerHTML = '';
    container.style.display = 'grid';
    if (wordGrid) wordGrid.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    for (const record of currentVirtueFolders) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${record.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar categoria "${record.folder}"?`)) {
                    if (supabaseClient) {
                        supabaseClient.from('virtues').delete().eq('id', record.id).then(({ error }) => {
                            if (error) alert('Erro ao deletar no Supabase: ' + error.message);
                            loadVirtuesAndRender();
                        });
                        return;
                    }
                    deleteVirtueFolderFromDB(record.id, loadVirtuesAndRender);
                }
            };
            btn.appendChild(delBtn);
        }

        btn.addEventListener('click', () => {
            currentOpenFolderRecord = record;
            container.style.display = 'none';
            if (wordGrid) wordGrid.style.display = 'grid';
            if (backBtn) backBtn.style.display = '';
            renderVirtueWords(record);
            if (!editModes.virtue) speak(record.folder);
        });
        container.appendChild(btn);

        const folderKey = record.folder.toLowerCase().trim();
        const local = localForcesImages[folderKey];
        if (local) { imgEl.src = local; }
        else {
            fetchArasaacImage(record.folder).then(url => {
                if (url) imgEl.src = url;
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon"></i>';
            });
        }
    }

    if (isAdmin && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888"></i></div><div class="word-btn-text">Nova Categoria</div>';
        addBtn.addEventListener('click', () => {
            const name = prompt('Nome da nova categoria:');
            if (!name || !name.trim()) return;
            const colors = ['border-green', 'border-orange', 'border-blue', 'border-red', 'border-yellow', 'border-pink'];
            const styleClass = colors[Math.floor(Math.random() * colors.length)];
            if (supabaseClient) {
                supabaseClient.from('virtues').insert([{ folder: name.trim(), style_class: styleClass }]).then(({ error }) => {
                    if (error) alert('Erro ao criar no Supabase: ' + error.message);
                    loadVirtuesAndRender();
                });
                return;
            }
            saveVirtueFolderToDB({ folder: name.trim(), styleClass, items: [] }, loadVirtuesAndRender);
        });
        container.appendChild(addBtn);
    }

    updateEditBtn('virtue', 'btn-edit-virtues');
}

async function renderVirtueWords(record) {
    const container = document.getElementById('grid-virtue-words');
    if (!container) return;
    container.innerHTML = '';
    const items = record.items || [];

    for (let idx = 0; idx < items.length; idx++) {
        const item = items[idx];
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;

        if (item.audioBlob instanceof Blob || (typeof item.audio_url === 'string' && item.audio_url.trim() !== '')) {
            const ind = document.createElement('div');
            ind.className = 'audio-indicator';
            ind.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.appendChild(ind);
        }

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar "${item.word}"?`)) {
                    if (supabaseClient) {
                        supabaseClient.from('virtue_items').delete().eq('virtue_id', record.id).eq('word', item.word).then(({ error }) => {
                            if (error) alert('Erro ao deletar no Supabase: ' + error.message);
                            loadVirtuesAndRender();
                        });
                        return;
                    }
                    const updated = { ...record, items: record.items.filter((_, i) => i !== idx) };
                    currentOpenFolderRecord = updated;
                    saveVirtueFolderToDB(updated, loadVirtuesAndRender);
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('virtue', idx, item, record); };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => {
            if (editModes.virtue) return;
            if (currentTypingWord.length > 0) commitTypingWord();
            addToMessage(item.word);
            if (item.audioBlob instanceof Blob) new Audio(URL.createObjectURL(item.audioBlob)).play();
            else if (typeof item.audio_url === 'string' && item.audio_url.trim() !== '') new Audio(item.audio_url).play();
            else speak(item.word);
        });

        container.appendChild(btn);

        // Imagem
        if (item.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(item.imageBlob);
        } else if (typeof item.image_url === 'string' && item.image_url.trim() !== '') {
            imgEl.src = item.image_url;
        } else {
            const local = item.img || localForcesImages[(item.word || '').toLowerCase().trim()];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(item.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon"></i>';
                });
            }
        }
    }

    if (isAdmin && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888"></i></div><div class="word-btn-text">Novo Card</div>';
        addBtn.addEventListener('click', () => openCardEditor('virtue', null, null, record));
        container.appendChild(addBtn);
    }

    updateEditBtn('virtue', 'btn-edit-virtues');
}

// ---- MODAL COMPARTILHADO DE EDIÇÃO ----
function openCardEditor(section, cardId, card, folderRecord) {
    cardEditorState = { section, cardId, folderRecord };
    document.getElementById('card-editor-modal').style.display = 'flex';

    const titles = { core: 'Card Essencial', virtue: 'Card de Fomes e Forças', topic: 'Tópico' };
    document.getElementById('card-editor-title').textContent = card ? `Editar ${titles[section]}` : `Novo ${titles[section]}`;
    document.getElementById('card-editor-word').value = card ? card.word : '';

    const defaultColor = section === 'core' ? 'solid-orange' : (folderRecord ? folderRecord.styleClass : 'border-pink');
    document.getElementById('card-editor-color').value = card ? card.styleClass : defaultColor;
    document.getElementById('card-editor-image').value = '';
    document.getElementById('card-editor-audio').value = '';

    const imgPreview = document.getElementById('card-editor-img-preview');
    if (card && card.imageBlob instanceof Blob) { imgPreview.src = URL.createObjectURL(card.imageBlob); imgPreview.style.display = 'block'; }
    else if (card && card.image_url) { imgPreview.src = card.image_url; imgPreview.style.display = 'block'; }
    else if (card && card.img) { imgPreview.src = card.img; imgPreview.style.display = 'block'; }
    else { imgPreview.style.display = 'none'; }

    const hasAudio = card && (card.audioBlob instanceof Blob || card.audio_url);
    document.getElementById('card-editor-audio-indicator').style.display = hasAudio ? 'flex' : 'none';
}

function closeCardEditor() {
    document.getElementById('card-editor-modal').style.display = 'none';
    cardEditorState = { section: null, cardId: null, folderRecord: null };
}

// ---- SETUP GERAL ----
function setupCardEditor() {
    // Ocultar botões de edição se não for admin
    showEditBars();

    // Toggle de modo edição — Essenciais
    document.getElementById('btn-edit-core').addEventListener('click', () => {
        editModes.core = !editModes.core;
        loadCoreAndRender();
    });

    // Toggle de modo edição — Fomes e Forças
    document.getElementById('btn-edit-virtues').addEventListener('click', () => {
        editModes.virtue = !editModes.virtue;
        if (currentOpenFolderRecord) renderVirtueWords(currentOpenFolderRecord);
        else renderVirtueFolders();
    });

    // Botão Voltar — Fomes e Forças
    document.getElementById('btn-virtue-back').addEventListener('click', () => {
        const wordGrid = document.getElementById('grid-virtue-words');
        const folderGrid = document.getElementById('grid-virtues-folders');
        const backBtn = document.getElementById('btn-virtue-back');
        if (wordGrid) wordGrid.style.display = 'none';
        if (folderGrid) folderGrid.style.display = 'grid';
        if (backBtn) backBtn.style.display = 'none';
        currentOpenFolderRecord = null;
        renderVirtueFolders();
    });

    // Toggle de modo edição — Tópicos
    document.getElementById('btn-edit-topics').addEventListener('click', () => {
        editModes.topic = !editModes.topic;
        if (currentOpenTopicFolderRecord) renderTopicsWords(currentOpenTopicFolderRecord);
        else renderTopicsFolders();
    });

    // Botão Voltar — Tópicos
    document.getElementById('btn-topic-back').addEventListener('click', () => {
        const wordGrid = document.getElementById('grid-topic-words');
        const folderGrid = document.getElementById('grid-topics-folders');
        const backBtn = document.getElementById('btn-topic-back');
        if (wordGrid) wordGrid.style.display = 'none';
        if (folderGrid) folderGrid.style.display = 'grid';
        if (backBtn) backBtn.style.display = 'none';
        currentOpenTopicFolderRecord = null;
        renderTopicsFolders();
    });

    // Modal compartilhado — fechar
    document.getElementById('btn-close-card-editor').addEventListener('click', closeCardEditor);
    document.getElementById('btn-cancel-card-editor').addEventListener('click', closeCardEditor);

    // Modal compartilhado — salvar
    document.getElementById('card-editor-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('card-editor-word').value.trim();
        const styleClass = document.getElementById('card-editor-color').value;
        const imageFile = document.getElementById('card-editor-image').files[0] || null;
        const audioFile = document.getElementById('card-editor-audio').files[0] || null;
        const { section, cardId, folderRecord } = cardEditorState;

        if (section === 'core') {
            const storeKey = 'core_cards';
            const reload = loadCoreAndRender;

            if (supabaseClient) {
                try {
                    let image_url = null;
                    let audio_url = null;
                    if (cardId !== null) {
                        const { data: ex } = await supabaseClient
                            .from('core_cards')
                            .select('image_url, audio_url')
                            .eq('id', cardId)
                            .single();
                        if (ex) {
                            image_url = ex.image_url;
                            audio_url = ex.audio_url;
                        }
                    }
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }
                    const recordData = {
                        word,
                        style_class: styleClass,
                        image_url,
                        audio_url,
                        order: cardId !== null ? undefined : Date.now()
                    };
                    if (cardId !== null) {
                        await supabaseClient.from('core_cards').update(recordData).eq('id', cardId);
                    } else {
                        await supabaseClient.from('core_cards').insert([recordData]);
                    }
                    reload();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            if (cardId !== null) {
                // Editar existente — preservar blobs não alterados
                db.transaction([storeKey], 'readonly').objectStore(storeKey).get(cardId).onsuccess = (ev) => {
                    const ex = ev.target.result || {};
                    db.transaction([storeKey], 'readwrite').objectStore(storeKey).put({
                        id: cardId, word, styleClass,
                        img: ex.img || null,
                        imageBlob: imageFile || ex.imageBlob || null,
                        audioBlob: audioFile || ex.audioBlob || null,
                        order: ex.order || 0
                    }).onsuccess = () => {
                        reload();
                        closeCardEditor();
                    };
                };
            } else {
                // Novo card
                db.transaction([storeKey], 'readwrite').objectStore(storeKey).add({
                    word, styleClass, img: null,
                    imageBlob: imageFile || null,
                    audioBlob: audioFile || null,
                    order: Date.now()
                }).onsuccess = () => {
                    reload();
                    closeCardEditor();
                };
            }
        } else if (section === 'virtue') {
            const record = folderRecord;
            const items = [...(record.items || [])];
            const ex = cardId !== null ? { ...items[cardId] } : {};

            if (supabaseClient) {
                try {
                    let image_url = ex.image_url || null;
                    let audio_url = ex.audio_url || null;
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }

                    if (cardId !== null) {
                        // Editar item existente
                        const { data: itemRec } = await supabaseClient
                            .from('virtue_items')
                            .select('id')
                            .eq('virtue_id', record.id)
                            .eq('word', ex.word)
                            .single();
                        if (itemRec) {
                            await supabaseClient.from('virtue_items').update({
                                word,
                                style_class: styleClass,
                                image_url,
                                audio_url
                            }).eq('id', itemRec.id);
                        }
                    } else {
                        // Adicionar novo item
                        await supabaseClient.from('virtue_items').insert([{
                            virtue_id: record.id,
                            word,
                            style_class: styleClass,
                            image_url,
                            audio_url
                        }]);
                    }
                    loadVirtuesAndRender();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            const newItem = {
                word, styleClass,
                img: ex.img || null,
                imageBlob: imageFile || ex.imageBlob || null,
                audioBlob: audioFile || ex.audioBlob || null,
            };
            if (cardId !== null) items[cardId] = newItem; else items.push(newItem);
            record.items = items;
            saveVirtueFolderToDB(record, () => {
                loadVirtuesAndRender();
                closeCardEditor();
            });
        } else if (section === 'topic') {
            if (folderRecord === null) {
                if (supabaseClient) {
                    try {
                        await supabaseClient.from('topics').insert([{ folder: word, style_class: styleClass }]);
                        loadTopicsAndRender();
                        closeCardEditor();
                        return;
                    } catch (err) {
                        alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                    }
                }
                saveTopicFolderToDB({ folder: word, styleClass, items: [] }, () => {
                    loadTopicsAndRender();
                    closeCardEditor();
                });
                return;
            }

            const record = folderRecord;
            const items = [...(record.items || [])];
            const ex = cardId !== null ? { ...items[cardId] } : {};

            if (supabaseClient) {
                try {
                    let image_url = ex.image_url || null;
                    let audio_url = ex.audio_url || null;
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }

                    if (cardId !== null) {
                        // Editar item existente
                        const { data: itemRec } = await supabaseClient
                            .from('topic_items')
                            .select('id')
                            .eq('topic_id', record.id)
                            .eq('word', ex.word)
                            .single();
                        if (itemRec) {
                            await supabaseClient.from('topic_items').update({
                                word,
                                style_class: styleClass,
                                image_url,
                                audio_url
                            }).eq('id', itemRec.id);
                        }
                    } else {
                        // Adicionar novo item
                        await supabaseClient.from('topic_items').insert([{
                            topic_id: record.id,
                            word,
                            style_class: styleClass,
                            image_url,
                            audio_url
                        }]);
                    }
                    loadTopicsAndRender();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            const newItem = {
                word, styleClass,
                img: ex.img || null,
                imageBlob: imageFile || ex.imageBlob || null,
                audioBlob: audioFile || ex.audioBlob || null,
            };
            if (cardId !== null) items[cardId] = newItem; else items.push(newItem);
            record.items = items;
            saveTopicFolderToDB(record, () => {
                loadTopicsAndRender();
                closeCardEditor();
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

