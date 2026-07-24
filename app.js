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
    'fomes-segurança': 'img/fomes/seguranca.png',
    // Imagens das categorias (pastas) de Fomes e Forças
    'sabedoria': 'img/forcas/amor-ao-aprendizado.png',
    'humanidade': 'img/forcas/amor.png',
    'moderação': 'img/forcas/autorregulacao.png',
    'transcendência': 'img/forcas/apreciacao-da-beleza.png'
};
// CONFIGURAÇÃO SUPABASE
const supabaseUrl = 'https://rrubmvykindvilptjhma.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';
const supabaseClient = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// Reduz fotos grandes antes do upload (celular manda imagem de vários MB, que depois
// demora a aparecer nos jogos). Redimensiona para no máx. 1200px e reexporta comprimido;
// se o arquivo já é pequeno, não é imagem, ou a compressão não ajudar, sobe o original.
async function compressImageForUpload(file) {
    const isImage = file && file.type && file.type.startsWith('image/') && file.type !== 'image/gif';
    if (!isImage || file.size < 300 * 1024) return file;
    try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

        let blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.82));
        if (!blob || blob.type !== 'image/webp') {
            // Navegador sem export WebP (Safari): JPEG, com fundo branco onde havia transparência.
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.82));
        }
        if (!blob || blob.size >= file.size) return file;
        const ext = blob.type === 'image/webp' ? 'webp' : 'jpg';
        const baseName = (file.name || 'imagem').replace(/\.\w+$/, '');
        return new File([blob], `${baseName}.${ext}`, { type: blob.type });
    } catch (e) {
        return file;
    }
}

async function uploadToSupabaseStorage(bucket, path, file) {
    if (!supabaseClient || !file) return null;
    const upload = await compressImageForUpload(file);
    const fileExt = (upload.name || file.name).split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;
    const { data, error } = await supabaseClient.storage.from(bucket).upload(filePath, upload);
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
            const imageUrl = `https://static.arasaac.org/pictograms/${id}/${id}_500.png`;
            arasaacCache[cleanWord] = imageUrl;
            return imageUrl;
        }
    } catch (e) { }
    return null;
}

// ====================================================
// TELEMETRIA LOCAL DO APP
// ====================================================
const USAGE_STORAGE_KEY = 'comunicafacil_usage_local_v1';
const USAGE_HEARTBEAT_MS = 10000;
const USAGE_VIEW_LABELS = {
    'view-core': 'Essenciais',
    'view-topics': 'Tópicos',
    'view-virtues': 'Fomes e Forças',
    'view-keyboard': 'Teclado',
    'view-media': 'Mídias',
    'view-exercises': 'Exercícios',
    'view-games': 'Jogos',
    'view-ia': 'IA',
    'view-admin': 'Admin'
};
const usageCatalog = { views: new Map(), activities: new Map() };
let usageState = null;
let usageCurrentUser = null;
let usageCurrentSessionId = null;
let usageHeartbeatTimer = null;
let usageLastHeartbeatAt = 0;
let usageSelectedUserId = null;
let usageCurrentSection = 'view-core';
let usageSectionLastActiveAt = Date.now();

function createEmptyUsageState() {
    return { users: {}, sessions: [], events: [] };
}

function loadUsageState() {
    if (usageState) return usageState;
    try {
        const raw = localStorage.getItem(USAGE_STORAGE_KEY);
        usageState = raw ? JSON.parse(raw) : createEmptyUsageState();
    } catch (e) {
        usageState = createEmptyUsageState();
    }
    if (!usageState.users) usageState.users = {};
    if (!Array.isArray(usageState.sessions)) usageState.sessions = [];
    if (!Array.isArray(usageState.events)) usageState.events = [];
    return usageState;
}

function saveUsageState() {
    try {
        localStorage.setItem(USAGE_STORAGE_KEY, JSON.stringify(loadUsageState()));
    } catch (e) {
        console.warn('Não foi possível salvar os dados de uso local.', e);
    }
}

function makeUsageId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return `${prefix}-${window.crypto.randomUUID()}`;
    }
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function ensureUserUsageRecord(user) {
    const state = loadUsageState();
    const now = new Date().toISOString();
    const record = state.users[user.id] || {
        userId: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer',
        totalActiveSeconds: 0,
        totalSessions: 0,
        lastSeenAt: null,
        lastActiveAt: null,
        views: {},
        activities: {}
    };
    record.email = user.email || record.email || 'sem e-mail';
    record.role = user.role || record.role || 'viewer';
    if (!record.createdAt) record.createdAt = now;
    state.users[user.id] = record;
    return record;
}

function dbSaveSession(session) {
    if (!supabaseClient) return;
    supabaseClient.from('usage_sessions').upsert([{
        id: session.id,
        user_id: session.userId,
        email: session.email,
        role: session.role,
        start_at: session.startAt,
        end_at: session.endAt,
        status: session.status,
        active_seconds: session.activeSeconds,
        views: session.views,
        activities: session.activities,
        events_count: session.eventsCount,
        last_activity_at: session.lastActivityAt,
        last_seen_at: session.lastSeenAt
    }]).then(({ error }) => {
        if (error) console.warn('Erro ao salvar sessão no Supabase:', error);
    });
}

function dbSaveEvent(event) {
    if (!supabaseClient) return;
    supabaseClient.from('usage_events').insert([{
        id: event.id,
        timestamp: event.timestamp,
        user_id: event.userId,
        email: event.email,
        role: event.role,
        type: event.type,
        label: event.label,
        group_name: event.group,
        view_name: event.view,
        detail: event.detail,
        value: event.value
    }]).then(({ error }) => {
        if (error) console.warn('Erro ao salvar evento no Supabase:', error);
    });
}

function ensureSessionRecord(user) {
    const state = loadUsageState();
    const activeSession = state.sessions.find(session => session.userId === user.id && session.status === 'active');
    if (activeSession) return activeSession;

    const session = {
        id: makeUsageId('session'),
        userId: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer',
        startAt: new Date().toISOString(),
        endAt: null,
        status: 'active',
        activeSeconds: 0,
        views: {},
        activities: {},
        eventsCount: 0,
        lastActivityAt: null,
        lastSeenAt: new Date().toISOString()
    };
    state.sessions.unshift(session);
    const record = ensureUserUsageRecord(user);
    record.totalSessions = (record.totalSessions || 0) + 1;
    saveUsageState();
    dbSaveSession(session);
    return session;
}

function startUsageSession(user) {
    if (!user?.id) return;
    const normalizedUser = {
        id: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer'
    };
    if (usageCurrentUser && usageCurrentUser.id !== normalizedUser.id) {
        closeUsageSession('user-switch');
    }

    usageCurrentUser = normalizedUser;
    const session = ensureSessionRecord(normalizedUser);
    usageCurrentSessionId = session.id;
    usageLastHeartbeatAt = Date.now();
    ensureUserUsageRecord(normalizedUser);
    saveUsageState();
    startUsageHeartbeat();
    trackUsageEvent('system', 'Sessão iniciada', { detail: 'Sessão local iniciada' });
    const activeView = document.querySelector('.view-section.active');
    if (activeView?.id) {
        trackUsageView(activeView.id);
    }
}

function closeUsageSession(reason = 'encerrada') {
    flushUsageActiveTime();
    const session = getCurrentUsageSession();
    if (session) {
        session.status = 'closed';
        session.endAt = new Date().toISOString();
        session.endReason = reason;
        dbSaveSession(session);
    }
    saveUsageState();
    usageCurrentSessionId = null;
    usageCurrentUser = null;
}

function getCurrentUsageSession() {
    if (!usageCurrentUser || !usageCurrentSessionId) return null;
    const state = loadUsageState();
    return state.sessions.find(session => session.id === usageCurrentSessionId) || null;
}

function startUsageHeartbeat() {
    if (usageHeartbeatTimer) return;
    usageLastHeartbeatAt = Date.now();
    usageHeartbeatTimer = window.setInterval(() => {
        if (!usageCurrentUser || document.hidden) return;
        const session = getCurrentUsageSession();
        const userRecord = usageCurrentUser ? loadUsageState().users[usageCurrentUser.id] : null;
        if (!session || !userRecord) return;

        const now = Date.now();
        const elapsedSeconds = Math.max(0, Math.floor((now - usageLastHeartbeatAt) / 1000));
        if (elapsedSeconds <= 0) return;

        session.activeSeconds = (session.activeSeconds || 0) + elapsedSeconds;
        session.lastSeenAt = new Date(now).toISOString();
        userRecord.totalActiveSeconds = (userRecord.totalActiveSeconds || 0) + elapsedSeconds;
        userRecord.lastSeenAt = session.lastSeenAt;
        
        flushUsageSectionTime();
        
        usageLastHeartbeatAt = now;
        saveUsageState();
        dbSaveSession(session);
        if (document.getElementById('view-admin')?.classList.contains('active')) {
            renderUsageDashboard();
        }
    }, USAGE_HEARTBEAT_MS);
}

function flushUsageActiveTime() {
    if (!usageCurrentUser) return;
    const session = getCurrentUsageSession();
    const userRecord = usageCurrentUser ? loadUsageState().users[usageCurrentUser.id] : null;
    if (!session || !userRecord || document.hidden) return;

    const now = Date.now();
    const elapsedSeconds = Math.max(0, Math.floor((now - usageLastHeartbeatAt) / 1000));
    if (elapsedSeconds > 0) {
        session.activeSeconds = (session.activeSeconds || 0) + elapsedSeconds;
        session.lastSeenAt = new Date(now).toISOString();
        userRecord.totalActiveSeconds = (userRecord.totalActiveSeconds || 0) + elapsedSeconds;
        userRecord.lastSeenAt = session.lastSeenAt;
    }
    
    flushUsageSectionTime();
    
    usageLastHeartbeatAt = now;
    saveUsageState();
    dbSaveSession(session);
}

function getSectionLabel(sectionId) {
    const labels = {
        'view-core': 'Tela: Essenciais',
        'view-carometro': 'Tela: Carômetro',
        'view-topics': 'Tela: Tópicos',
        'view-virtues': 'Tela: Fomes e Forças',
        'view-keyboard': 'Tela: Teclado',
        'view-media': 'Tela: Mídias',
        'view-exercises': 'Tela: Exercícios',
        'view-games': 'Tela: Jogos',
        'view-ia': 'Tela: Assistente IA',
        'view-admin': 'Tela: Admin',
        'game:memory': 'Jogo: Jogo da Memória',
        'game:memory-alphabet': 'Jogo: Memória do Alfabeto',
        'game:jogo2': 'Jogo: Trilha de Aprendizado de Forças',
        'game:complete-sentence': 'Jogo: Complete a Frase',
        'game:naming': 'Jogo: Reconhecimento de Palavras',
        'game:afasia': 'Jogo: Reconhecimento de Imagem'
    };
    return labels[sectionId] || sectionId;
}

function changeUsageSection(newSectionId) {
    if (!usageCurrentUser) return;
    flushUsageSectionTime();
    usageCurrentSection = newSectionId;
    usageSectionLastActiveAt = Date.now();
}

function flushUsageSectionTime() {
    if (!usageCurrentUser) return;
    const session = getCurrentUsageSession();
    const userRecord = usageCurrentUser ? loadUsageState().users[usageCurrentUser.id] : null;
    if (!session || !userRecord || document.hidden) {
        usageSectionLastActiveAt = Date.now();
        return;
    }
    
    const now = Date.now();
    const elapsedSeconds = Math.max(0, Math.floor((now - usageSectionLastActiveAt) / 1000));
    if (elapsedSeconds > 0) {
        const sectionLabel = getSectionLabel(usageCurrentSection);
        incrementCounter(session.activities, sectionLabel + ':duration', elapsedSeconds);
        incrementCounter(userRecord.activities, sectionLabel + ':duration', elapsedSeconds);
        saveUsageState();
        dbSaveSession(session);
    }
    usageSectionLastActiveAt = now;
}

function registerUsageCatalog(kind, label, meta = {}) {
    if (!label) return;
    const collection = kind === 'view' ? usageCatalog.views : usageCatalog.activities;
    const key = meta.key || label;
    if (!collection.has(key)) {
        collection.set(key, { key, label, group: meta.group || '', kind, order: meta.order || 0 });
    } else {
        const current = collection.get(key);
        current.label = label;
        current.group = meta.group || current.group || '';
    }
}

function incrementCounter(target, key, amount = 1) {
    if (!target[key]) target[key] = 0;
    target[key] += amount;
}

function trackUsageEvent(type, label, meta = {}) {
    if (!usageCurrentUser) return;
    const state = loadUsageState();
    const userRecord = ensureUserUsageRecord(usageCurrentUser);
    const session = getCurrentUsageSession();
    const eventLabel = label || meta.view || meta.group || type;

    if (type === 'view') {
        incrementCounter(userRecord.views, eventLabel);
        if (session) incrementCounter(session.views, eventLabel);
        registerUsageCatalog('view', eventLabel, { key: meta.view || eventLabel, group: meta.group || 'Tela' });
    } else if (type === 'activity') {
        incrementCounter(userRecord.activities, eventLabel);
        if (session) incrementCounter(session.activities, eventLabel);
        registerUsageCatalog('activity', eventLabel, { key: meta.key || eventLabel, group: meta.group || 'Atividade' });
    }

    const event = {
        id: makeUsageId('event'),
        timestamp: new Date().toISOString(),
        userId: usageCurrentUser.id,
        email: usageCurrentUser.email,
        role: usageCurrentUser.role,
        type,
        label: eventLabel,
        group: meta.group || '',
        view: meta.view || '',
        detail: meta.detail || '',
        value: meta.value || 1
    };
    state.events.unshift(event);
    if (state.events.length > 180) state.events.length = 180;
    if (session) {
        session.eventsCount = (session.eventsCount || 0) + 1;
        session.lastActivityAt = event.timestamp;
        session.lastSeenAt = event.timestamp;
    }
    userRecord.lastActivityAt = event.timestamp;
    userRecord.lastSeenAt = event.timestamp;
    saveUsageState();
    dbSaveEvent(event);
    if (session) {
        dbSaveSession(session);
    }

    if (document.getElementById('view-admin')?.classList.contains('active')) {
        renderUsageDashboard();
    }
}

function trackUsageView(viewId, meta = {}) {
    const label = USAGE_VIEW_LABELS[viewId] || viewId;
    trackUsageEvent('view', label, { view: viewId, group: meta.group || 'Tela' });
    changeUsageSection(viewId);
}

function trackUsageActivity(label, meta = {}) {
    trackUsageEvent('activity', label, meta);
}

function formatUsageSeconds(totalSeconds) {
    const seconds = Math.max(0, Math.round(totalSeconds || 0));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
    return `${remainingSeconds}s`;
}

function formatUsageDateTime(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}

async function getUsageAggregate() {
    if (supabaseClient && canManageUsers) {
        try {
            const { data: dbSessions, error: errSessions } = await supabaseClient
                .from('usage_sessions')
                .select('*')
                .order('start_at', { ascending: false })
                .limit(100);

            const { data: dbEvents, error: errEvents } = await supabaseClient
                .from('usage_events')
                .select('*')
                .order('timestamp', { ascending: false })
                .limit(150);

            if (!errSessions && !errEvents && dbSessions && dbEvents) {
                const users = {};
                const viewTotals = {};
                const activityTotals = {};

                dbSessions.forEach(session => {
                    const uid = session.user_id;
                    if (!users[uid]) {
                        users[uid] = {
                            userId: uid,
                            email: session.email || 'sem e-mail',
                            role: session.role || 'viewer',
                            totalActiveSeconds: 0,
                            totalSessions: 0,
                            lastSeenAt: null,
                            lastActiveAt: null,
                            views: {},
                            activities: {}
                        };
                    }
                    const u = users[uid];
                    u.totalActiveSeconds += session.active_seconds || 0;
                    u.totalSessions += 1;

                    if (!u.lastSeenAt || new Date(session.last_seen_at) > new Date(u.lastSeenAt)) {
                        u.lastSeenAt = session.last_seen_at;
                    }
                    if (session.last_activity_at && (!u.lastActiveAt || new Date(session.last_activity_at) > new Date(u.lastActiveAt))) {
                        u.lastActiveAt = session.last_activity_at;
                    }

                    Object.entries(session.views || {}).forEach(([label, count]) => {
                        incrementCounter(u.views, label, count);
                        incrementCounter(viewTotals, label, count);
                    });
                    Object.entries(session.activities || {}).forEach(([label, count]) => {
                        incrementCounter(u.activities, label, count);
                        incrementCounter(activityTotals, label, count);
                    });
                });

                const knownViews = Array.from(usageCatalog.views.values());
                const knownActivities = Array.from(usageCatalog.activities.values());
                const topActivity = Object.entries(activityTotals).sort((a, b) => b[1] - a[1])[0] || null;

                const sessions = dbSessions.map(s => ({
                    id: s.id,
                    userId: s.user_id,
                    email: s.email,
                    role: s.role,
                    startAt: s.start_at,
                    endAt: s.end_at,
                    status: s.status,
                    activeSeconds: s.active_seconds,
                    views: s.views,
                    activities: s.activities,
                    eventsCount: s.events_count,
                    lastActivityAt: s.last_activity_at,
                    lastSeenAt: s.last_seen_at
                }));

                const events = dbEvents.map(e => ({
                    id: e.id,
                    timestamp: e.timestamp,
                    userId: e.user_id,
                    email: e.email,
                    role: e.role,
                    type: e.type,
                    label: e.label,
                    group: e.group_name,
                    view: e.view_name,
                    detail: e.detail,
                    value: e.value
                }));

                return { users: Object.values(users), sessions, events, viewTotals, activityTotals, knownViews, knownActivities, topActivity };
            }
        } catch (e) {
            console.error("Falha ao agregar dados do Supabase:", e);
        }
    }

    const state = loadUsageState();
    const users = Object.values(state.users);
    const sessions = state.sessions.slice();
    const events = state.events.slice();
    const viewTotals = {};
    const activityTotals = {};

    users.forEach(user => {
        Object.entries(user.views || {}).forEach(([label, count]) => incrementCounter(viewTotals, label, count));
        Object.entries(user.activities || {}).forEach(([label, count]) => incrementCounter(activityTotals, label, count));
    });

    const knownViews = Array.from(usageCatalog.views.values());
    const knownActivities = Array.from(usageCatalog.activities.values());
    const topActivity = Object.entries(activityTotals).sort((a, b) => b[1] - a[1])[0] || null;

    return { users, sessions, events, viewTotals, activityTotals, knownViews, knownActivities, topActivity };
}

function usageListItem(label, valueText, shareText, percent = 0) {
    const row = document.createElement('div');
    row.className = 'usage-item';

    const left = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = label;
    const sub = document.createElement('span');
    sub.textContent = shareText;
    left.appendChild(strong);
    left.appendChild(sub);

    const bar = document.createElement('div');
    bar.className = 'usage-bar';
    const fill = document.createElement('i');
    fill.style.width = `${Math.max(4, Math.min(100, percent))}%`;
    bar.appendChild(fill);
    left.appendChild(bar);

    const right = document.createElement('div');
    right.className = 'usage-meta';
    right.textContent = valueText;

    row.appendChild(left);
    row.appendChild(right);
    return row;
}

function renderUsageList(containerId, items, emptyText) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (!items || items.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'usage-item';
        empty.innerHTML = `<div><strong>${emptyText}</strong><span>Abra e use o app para alimentar esse painel.</span></div><div class="usage-meta">—</div>`;
        container.appendChild(empty);
        return;
    }

    const maxValue = Math.max(...items.map(item => item.value || 0), 1);
    const selectFilter = document.getElementById('usage-user-filter');
    items.forEach(item => {
        const percent = ((item.value || 0) / maxValue) * 100;
        const row = usageListItem(item.label, item.valueText, item.shareText, percent);
        if (item.userId) {
            row.style.cursor = 'pointer';
            if (item.userId === usageSelectedUserId) {
                row.style.background = 'rgba(59, 130, 246, 0.12)';
                row.style.borderColor = 'rgba(59, 130, 246, 0.4)';
            }
            row.onclick = () => {
                if (usageSelectedUserId === item.userId) {
                    usageSelectedUserId = null;
                    if (selectFilter) selectFilter.value = 'all';
                } else {
                    usageSelectedUserId = item.userId;
                    if (selectFilter) selectFilter.value = item.userId;
                }
                renderUsageDashboard();
            };
        }
        container.appendChild(row);
    });
}

async function renderUsageDashboard() {
    const aggregate = await getUsageAggregate();
    
    // Atualizar o seletor dropdown com a lista de usuários únicos
    const selectFilter = document.getElementById('usage-user-filter');
    if (selectFilter) {
        const currentVal = usageSelectedUserId || 'all';
        selectFilter.innerHTML = '<option value="all">Filtrar: Todos os usuários</option>';
        const sortedUsersForFilter = [...aggregate.users].sort((a, b) => (a.email || '').localeCompare(b.email || ''));
        sortedUsersForFilter.forEach(u => {
            if (u.userId) {
                const opt = document.createElement('option');
                opt.value = u.userId;
                opt.textContent = u.email || 'Sem e-mail';
                if (u.userId === currentVal) opt.selected = true;
                selectFilter.appendChild(opt);
            }
        });
        if (!selectFilter.dataset.listenerSet) {
            selectFilter.addEventListener('change', (e) => {
                const val = e.target.value;
                usageSelectedUserId = val === 'all' ? null : val;
                renderUsageDashboard();
            });
            selectFilter.dataset.listenerSet = 'true';
        }
    }

    const rankedUsers = aggregate.users
        .filter(user => (user.totalActiveSeconds || 0) > 0 || (user.totalSessions || 0) > 0)
        .sort((a, b) => (b.totalActiveSeconds || 0) - (a.totalActiveSeconds || 0));

    // Determina se vamos trabalhar com dados filtrados para um usuário específico
    const selectedUserRecord = usageSelectedUserId ? aggregate.users.find(u => u.userId === usageSelectedUserId) : null;
    
    const filteredActivityTotals = (usageSelectedUserId && selectedUserRecord) ? (selectedUserRecord.activities || {}) : aggregate.activityTotals;
    
    const durationsMap = {};
    const countsMap = {};
    
    Object.entries(filteredActivityTotals).forEach(([label, value]) => {
        if (label.endsWith(':duration')) {
            const cleanLabel = label.substring(0, label.length - 9);
            durationsMap[cleanLabel] = value;
        } else {
            countsMap[label] = value;
        }
    });

    const activityEntries = Object.entries(countsMap)
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value);

    const topActivities = activityEntries.slice(0, 5).map(item => ({
        label: item.label,
        value: item.value,
        valueText: `${item.value} usos`,
        shareText: 'Mais acessadas'
    }));

    const durationEntries = Object.entries(durationsMap)
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value);

    const filteredSessions = usageSelectedUserId ? aggregate.sessions.filter(s => s.userId === usageSelectedUserId) : aggregate.sessions;
    
    const maxDurations = {};
    filteredSessions.forEach(session => {
        Object.entries(session.activities || {}).forEach(([label, value]) => {
            if (label.endsWith(':duration')) {
                const cleanLabel = label.substring(0, label.length - 9);
                if (!maxDurations[cleanLabel] || value > maxDurations[cleanLabel]) {
                    maxDurations[cleanLabel] = value;
                }
            }
        });
    });

    const activitiesDurationsItems = durationEntries.slice(0, 5).map(item => {
        const maxSec = maxDurations[item.label] || 0;
        return {
            label: item.label,
            value: item.value,
            valueText: formatUsageSeconds(item.value),
            shareText: maxSec > 0 ? `Maior sessão: ${formatUsageSeconds(maxSec)}` : 'Duração acumulada'
        };
    });

    const activeSessions = filteredSessions.filter(session => session.status === 'active')
        .sort((a, b) => new Date(b.lastSeenAt || b.startAt) - new Date(a.lastSeenAt || a.startAt))
        .slice(0, 5)
        .map(session => ({
            label: session.email,
            value: session.activeSeconds || 0,
            valueText: formatUsageSeconds(session.activeSeconds || 0),
            shareText: `${session.role || 'viewer'} • desde ${formatUsageDateTime(session.startAt)}`
        }));

    const filteredEvents = usageSelectedUserId ? aggregate.events.filter(e => e.userId === usageSelectedUserId) : aggregate.events;
    const eventItems = filteredEvents.slice(0, 18).map(event => ({
        timestamp: event.timestamp,
        label: event.type === 'view' ? `Tela aberta: ${event.label}` : `${event.group || 'Ação'}: ${event.label}`,
        detail: event.detail || `${event.email} • ${event.role}`,
        kind: event.type
    }));

    const totalActiveSeconds = usageSelectedUserId
        ? (selectedUserRecord ? (selectedUserRecord.totalActiveSeconds || 0) : 0)
        : rankedUsers.reduce((sum, user) => sum + (user.totalActiveSeconds || 0), 0);

    const totalActions = activityEntries.reduce((sum, item) => sum + item.value, 0);
    const topActivity = activityEntries[0] ? [activityEntries[0].label, activityEntries[0].value] : null;
    const totalSessions = filteredSessions.length;
    const activeSessionsCount = filteredSessions.filter(session => session.status === 'active').length;
    const avgSessionSeconds = totalSessions > 0 ? Math.round(totalActiveSeconds / totalSessions) : 0;
    const topShare = totalActions > 0 && topActivity ? Math.round((topActivity[1] / totalActions) * 100) : 0;

    const usersBox = document.getElementById('usage-total-users');
    if (usersBox) {
        if (usageSelectedUserId) {
            usersBox.textContent = "1";
        } else {
            usersBox.textContent = rankedUsers.length.toString();
        }
    }
    const sessionsBox = document.getElementById('usage-total-sessions');
    if (sessionsBox) sessionsBox.textContent = `${totalSessions} sessões registradas`;
    const totalTimeBox = document.getElementById('usage-total-time');
    if (totalTimeBox) totalTimeBox.textContent = formatUsageSeconds(totalActiveSeconds);
    const activeNowBox = document.getElementById('usage-active-now');
    if (activeNowBox) activeNowBox.textContent = `${activeSessionsCount} sessões ativas agora`;
    
    const totalActivitiesBox = document.getElementById('usage-total-activities');
    if (totalActivitiesBox) {
        const activeCount = usageSelectedUserId 
            ? Object.keys(filteredActivityTotals).length 
            : aggregate.knownActivities.length;
        totalActivitiesBox.textContent = activeCount.toString();
    }
    const totalEventsBox = document.getElementById('usage-total-events');
    if (totalEventsBox) totalEventsBox.textContent = `${filteredEvents.length} eventos registrados`;

    const topItemBox = document.getElementById('usage-top-item');
    const topShareBox = document.getElementById('usage-top-share');
    if (topActivity && topItemBox && topShareBox) {
        topItemBox.textContent = topActivity[0];
        topShareBox.textContent = `${topActivity[1]} usos, cerca de ${topShare}% das interações`;
    } else if (topItemBox && topShareBox) {
        topItemBox.textContent = '—';
        topShareBox.textContent = 'Sem dados suficientes ainda';
    }

    renderUsageList(
        'usage-user-ranking',
        rankedUsers.slice(0, 5).map(user => ({
            label: user.email || 'Usuário',
            value: user.totalActiveSeconds || 0,
            valueText: formatUsageSeconds(user.totalActiveSeconds || 0),
            shareText: `${user.totalSessions || 0} sessões • último acesso ${formatUsageDateTime(user.lastSeenAt)}`,
            userId: user.userId
        })),
        'Nenhum usuário com uso registrado'
    );

    renderUsageList('usage-top-activities', topActivities, 'Nenhuma atividade acessada ainda');
    renderUsageList('usage-activities-durations', activitiesDurationsItems, 'Ainda não há dados de tempo registrados');
    renderUsageList('usage-live-sessions', activeSessions, 'Nenhuma sessão ativa agora');

    const timeline = document.getElementById('usage-event-log');
    if (timeline) {
        timeline.innerHTML = '';
        if (eventItems.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'usage-event';
            empty.innerHTML = '<p>Nenhum evento registrado para este filtro.</p>';
            timeline.appendChild(empty);
        } else {
            eventItems.forEach(event => {
                const item = document.createElement('div');
                item.className = 'usage-event';
                const time = document.createElement('time');
                time.textContent = formatUsageDateTime(event.timestamp);
                const copy = document.createElement('div');
                const pill = document.createElement('span');
                pill.className = `usage-pill ${event.kind === 'view' ? 'active' : 'usage-pill-muted'}`;
                pill.textContent = event.kind === 'view' ? 'Tela' : 'Ação';
                const text = document.createElement('p');
                text.textContent = `${event.label} • ${event.detail}`;
                copy.appendChild(pill);
                copy.appendChild(text);
                item.appendChild(time);
                item.appendChild(copy);
                timeline.appendChild(item);
            });
        }
    }

    let insight = 'Cole mais alguns dias de uso para que o painel passe a mostrar padrões confiáveis.';
    if (usageSelectedUserId && selectedUserRecord) {
        if (topShare >= 35 && topActivity) {
            insight = `O usuário foca muito em "${topActivity[0]}", que representa ${topShare}% do seu uso. Pode sugerir facilidade de uso ou hiperfoco nessa seção.`;
        } else if (avgSessionSeconds > 0 && avgSessionSeconds < 120) {
            insight = `Este usuário realiza sessões muito curtas (média de ${formatUsageSeconds(avgSessionSeconds)}). Pode indicar dificuldades para manter a interação ou navegação confusa.`;
        } else {
            insight = `Uso equilibrado observado para este paciente. A atividade principal é "${topActivity ? topActivity[0] : 'Nenhuma'}" com ${totalActions} ações registradas.`;
        }
    } else {
        if (topShare >= 35 && topActivity) {
            insight = `A atividade dominante já concentra ${topShare}% das interações. Isso costuma indicar um atalho útil, mas também pode sugerir que o restante da navegação está escondido ou menos intuitivo.`;
        } else if (avgSessionSeconds > 0 && avgSessionSeconds < 120 && totalActions < 20) {
            insight = 'As sessões estão curtas e com poucas ações. Isso pode significar que o usuário entrou, encontrou pouco valor imediato ou precisou sair rápido.';
        } else if (activeSessionsCount > 0) {
            insight = 'Há gente usando o app agora. Se o tempo subir, mas a contagem de ações não acompanhar, vale investigar se a tela fica aberta sem interação real.';
        } else if (rankedUsers.length > 0) {
            insight = 'O uso já aparece distribuído, mas ainda vale observar quais telas viram hábito e quais parecem ter pouca descoberta. Uma reorganização de destaque pode aumentar adesão.';
        }
    }
    const insightBox = document.getElementById('usage-insight');
    if (insightBox) insightBox.textContent = insight;
}

function clearLocalUsageData() {
    if (!confirm('Isso vai apagar apenas os dados de uso gravados neste navegador. Deseja continuar?')) return;
    usageState = createEmptyUsageState();
    usageCurrentSessionId = null;
    usageCurrentUser = null;
    usageLastHeartbeatAt = 0;
    try {
        localStorage.removeItem(USAGE_STORAGE_KEY);
    } catch (e) {
        console.warn('Não foi possível limpar os dados locais de uso.', e);
    }
    renderUsageDashboard();
}

function setAdminTab(tabName) {
    const tabs = ['users', 'usage', 'modules'];
    
    tabs.forEach(tab => {
        const btn = document.getElementById(`btn-admin-tab-${tab}`);
        const panel = document.getElementById(`admin-${tab}-panel`);
        
        if (btn) {
            btn.classList.toggle('active', tab === tabName);
            btn.setAttribute('aria-selected', String(tab === tabName));
        }
        if (panel) {
            panel.classList.toggle('active', tab === tabName);
        }
    });

    if (tabName === 'users') {
        loadAdminUsers();
    } else if (tabName === 'usage') {
        renderUsageDashboard();
    } else if (tabName === 'modules') {
        applyModuleVisibility(); // Refreshes UI and re-renders the panel
    }
}

function initApp() {
    setupNavigation();
    initIndexedDB();
    setupModals();
    setupCardEditor();
    renderGamesList();
    if (isCompleteSentenceLocalDemo()) {
        setTimeout(() => {
            document.querySelector('.nav-btn[data-view="view-games"]')?.click();
            openGame('complete-sentence');
        }, 250);
    }
}

// Pré-carrega o áudio de todos os .word-btn-text visíveis em uma view,
// para que o primeiro clique em qualquer card seja instantâneo.
// Só percorre grids que estejam visíveis (display != none) para não
// misturar conteúdo de abas ocultas.
function prefetchViewAudio(viewId) {
    const view = document.getElementById(viewId);
    if (!view) return;
    const containers = view.querySelectorAll('.grid-container, .grid-wrapper');
    containers.forEach(container => {
        // Pula containers ocultos (sub-grids que ainda não foram abertos)
        if (container.style.display === 'none') return;
        container.querySelectorAll('.word-btn-text').forEach(el => {
            const word = el.textContent?.trim();
            if (word) prefetchTts(word);
        });
    });
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-section');
    const messageBar = document.querySelector('.message-bar');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            const targetView = btn.dataset.view;
            const viewElement = document.getElementById(targetView);
            if (viewElement) {
                viewElement.classList.add('active');
            }
            trackUsageView(targetView);

            if (targetView !== 'view-games') {
                document.getElementById('complete-sentence-frame')?.contentWindow?.postMessage(
                    { type: 'complete-sentence:pause-audio' },
                    window.location.origin
                );
            }

            // Pré-carrega áudios de todos os cards da aba que acabou de abrir
            prefetchViewAudio(targetView);
            
            // Oculta a barra de mensagens nas telas que não usam composição de frases.
            if (messageBar) {
                if (targetView === 'view-topics' || targetView === 'view-virtues' || targetView === 'view-media' || targetView === 'view-ia' || targetView === 'view-exercises' || targetView === 'view-games' || targetView === 'view-admin') {
                    messageBar.style.display = 'none';
                } else {
                    messageBar.style.display = 'flex';
                }
            }

            if (targetView === 'view-admin') {
                renderUsageDashboard();
            }
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
        imgEl.alt = '';
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;
        registerUsageCatalog('activity', `Palavra: ${item.word}`, {
            key: `word:${item.word}`,
            group: 'Palavras'
        });

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        // Pré-carrega o áudio ao montar o card, assim o primeiro clique é imediato
        prefetchTts(item.word);

        btn.addEventListener('click', () => {
            if (currentTypingWord.length > 0) commitTypingWord();
            trackUsageActivity(`Palavra: ${item.word}`, {
                key: `word:${item.word}`,
                group: 'Palavras',
                detail: 'Palavra tocada'
            });
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
            else imgContainer.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
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

// Voz nativa do navegador (Speech Synthesis API) — usada APENAS como fallback
// quando o backend edge-tts não responde (offline ou erro de rede).
function _speakNative(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);

        let ptVoices = availableVoices.filter(v => v.lang.startsWith('pt'));
        if (ptVoices.length > 0) {
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

        utterance.rate = 0.7;
        window.speechSynthesis.speak(utterance);
    }
}

// Voz neural (pt-BR-FranciscaNeural) via backend edge-tts, com fallback para a
// voz nativa do navegador quando nenhum backend responde.
//
// Para o clique responder na hora, o áudio é pré-carregado quando o slide aparece
// (prefetchTts) e guardado em dois níveis: memória (promessas, deduplica requisições
// em andamento) e localStorage (sobrevive a reload e funciona offline).
const azureTtsCache = new Map(); // texto -> Promise<string base64>
const TTS_STORAGE_PREFIX = 'comunica_tts_v2:';

async function fetchTtsAudio(endpoint, text) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ttsText: text })
    });
    const data = await response.json();
    if (!response.ok || !data.audio) throw new Error(data.error || `Erro HTTP ${response.status}`);
    return data.audio;
}

function getTtsAudio(text) {
    if (azureTtsCache.has(text)) return azureTtsCache.get(text);
    const promise = (async () => {
        try {
            const stored = localStorage.getItem(TTS_STORAGE_PREFIX + text);
            if (stored) return stored;
        } catch (e) { /* localStorage indisponível: segue para o backend */ }
        let audioBase64;
        try {
            audioBase64 = await fetchTtsAudio(AZURE_AI_ENDPOINT, text);
        } catch (primaryError) {
            if (AZURE_AI_ENDPOINT === SUPABASE_CHAT_ENDPOINT) throw primaryError;
            audioBase64 = await fetchTtsAudio(SUPABASE_CHAT_ENDPOINT, text);
        }
        try { localStorage.setItem(TTS_STORAGE_PREFIX + text, audioBase64); } catch (e) { /* quota cheia: só memória */ }
        return audioBase64;
    })();
    promise.catch(() => azureTtsCache.delete(text)); // falha não fica em cache; próximo clique tenta de novo
    azureTtsCache.set(text, promise);
    return promise;
}

function prefetchTts(text) {
    if (text) getTtsAudio(text).catch(() => { /* erro tratado no clique */ });
}

// Função principal de áudio — usada em todo o app (cards, jogos, compositor).
// Usa a voz neural FranciscaNeural via edge-tts com fallback para o navegador.
async function speakWithAzure(text) {
    if (!text) return;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();
    try {
        const audioBase64 = await getTtsAudio(text);
        currentAudio = new Audio('data:audio/mp3;base64,' + audioBase64);
        await currentAudio.play();
    } catch (e) {
        console.warn('TTS via backend indisponível, usando a voz do navegador:', e.message);
        _speakNative(text);
    }
}

// speak() agora é um alias para speakWithAzure() — garante voz uniforme
// (FranciscaNeural) em todos os cards, jogos e compositor do app.
function speak(text) {
    speakWithAzure(text);
}

function getPreposicaoDoDa(name) {
    if (!name) return 'do';
    const lower = name.toLowerCase().trim();
    // Nomes e termos femininos conhecidos
    const femaleTerms = ['hebe', 'menina', 'maria', 'ana', 'carla', 'julia', 'camila', 'fernanda', 'patricia', 'beatriz', 'aline', 'elefanta', 'ela'];
    if (femaleTerms.some(term => lower.includes(term))) {
        return 'da';
    }
    // Se o primeiro nome termina em 'a' e não é um nome masculino comum terminado em a
    const firstName = lower.split(/\s+/)[0];
    if (firstName.endsWith('a') && !['luca', 'nicolas', 'jean'].includes(firstName)) {
        return 'da';
    }
    return 'do';
}

function getPlayerIconHTML(player, index, size = '26px') {
    if (player.avatar && (player.avatar.startsWith('data:') || player.avatar.includes('/opponents/'))) {
        const borderCol = index === 0 ? '#3b82f6' : '#a855f7';
        return `<img src="${player.avatar}" alt="${player.name}" style="width:${size};height:${size};border-radius:50%;object-fit:cover;border:2px solid ${borderCol};vertical-align:middle;display:inline-block;" />`;
    }
    if (index === 0) {
        return '🐘';
    }
    return '<span style="position:relative;display:inline-block;">🐘<span style="position:absolute; top:-6px; right:-6px; font-size:0.6rem;">🎀</span></span>';
}


document.getElementById('btn-speak').addEventListener('click', () => {
    trackUsageActivity('Compositor: falar', {
        key: 'composer:speak',
        group: 'Compositor',
        detail: 'Botão falar acionado'
    });
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
    trackUsageActivity('Compositor: limpar', {
        key: 'composer:clear',
        group: 'Compositor',
        detail: 'Botão limpar acionado'
    });
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
        migrateLocalMediaAndExercises().then(async () => {
            loadMediaCards();
            await seedLocalPracticeExercises();
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
                if (ex.seedKey) continue; // conteúdo de prática semeado localmente: não promover à nuvem automaticamente
                currentEditingExerciseId = null; // force insert as new
                await saveExercisePlaylistToDB(ex.title, ex.items || []);
                db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id);
            }
            resolve();
        };
    });
}

// EXERCÍCIOS DE PRÁTICA (NOMEAÇÃO E FRASES FUNCIONAIS)
// Semeados apenas no IndexedDB local (nunca no Supabase) para uso enquanto o conteúdo
// está em validação. Cada item usa textColor/textSize/isUppercase/isBold porque é isso
// que renderCurrentPlaylistItem lê ao exibir o slide.
const practiceExerciseSeeds = [
    {
        seedKey: 'seed-naming-v1',
        title: 'Nomeação: Objetos do dia a dia|blue',
        items: [
            'Copo', 'Chave', 'Prato', 'Colher', 'Garfo', 'Sabonete',
            'Escova de dente', 'Óculos', 'Sapato', 'Toalha', 'Guarda-chuva', 'Celular'
        ].map(word => ({
            word, textColor: '#1e3a8a', textSize: 100, isUppercase: false, isBold: true,
            videoLink: '', imageBlob: null, image_url: null
        }))
    },
    {
        seedKey: 'seed-phrases-v1',
        title: 'Frases Funcionais|green',
        items: [
            { word: 'Eu quero água', imgQuery: 'água' },
            { word: 'Estou com fome', imgQuery: 'fome' },
            { word: 'Estou com dor', imgQuery: 'dor' },
            { word: 'Preciso de ajuda', imgQuery: 'ajuda' },
            { word: 'Quero ir ao banheiro', imgQuery: 'banheiro' },
            { word: 'Quero descansar', imgQuery: 'descansar' },
            { word: 'Não entendi', imgQuery: 'confuso' },
            { word: 'Pode repetir, por favor?', imgQuery: 'ouvido' },
            { word: 'Estou bem', imgQuery: 'feliz' },
            { word: 'Quero conversar', imgQuery: 'conversa' }
        ].map(({ word, imgQuery }) => ({
            word, imgQuery, textColor: '#166534', textSize: 100, isUppercase: false, isBold: true,
            videoLink: '', imageBlob: null, image_url: null
        }))
    }
];

async function seedLocalPracticeExercises() {
    const existing = await new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => resolve(e.target.result || []);
    });
    const existingKeys = new Set(existing.map(ex => ex.seedKey).filter(Boolean));
    const missing = practiceExerciseSeeds.filter(seed => !existingKeys.has(seed.seedKey));
    if (missing.length === 0) return;

    await new Promise((resolve) => {
        const tx = db.transaction(['exercises'], 'readwrite');
        const store = tx.objectStore('exercises');
        missing.forEach(seed => store.add({ title: seed.title, items: seed.items, seedKey: seed.seedKey }));
        tx.oncomplete = resolve;
    });
}

async function saveMediaToDB(title, fileBlob, mimeType, colorClass, mediaUrl) {
    const isLink = !!mediaUrl;
    const isVideo = isLink ? true : mimeType.startsWith('video');
    if (supabaseClient) {
        try {
            if (isLink) {
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: mediaUrl, visible: false }]);
            } else {
                const url = await uploadToSupabaseStorage('media_uploads', 'medias', fileBlob);
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: url, visible: false }]);
            }
            loadMediaCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar media no Supabase, caindo para local:', e);
        }
    }
    db.transaction(['medias'], 'readwrite').objectStore('medias')
        .add({ title, blob: fileBlob, isVideo, colorClass, media_url: mediaUrl, visible: false })
        .onsuccess = () => loadMediaCards();
}

async function toggleMediaVisibility(media) {
    const newVisible = !(media.visible !== false);
    if (media.fromSupabase && supabaseClient) {
        await supabaseClient.from('medias').update({ visible: newVisible }).eq('id', media.id);
    } else {
        db.transaction(['medias'], 'readonly').objectStore('medias').get(media.id).onsuccess = (e) => {
            const rec = e.target.result;
            if (!rec) return;
            db.transaction(['medias'], 'readwrite').objectStore('medias').put({ ...rec, visible: newVisible }).onsuccess = () => loadMediaCards();
        };
        return;
    }
    loadMediaCards();
}

let currentMedias = [];
async function loadMediaCards() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('medias').select('*');
            if (!error) {
                currentMedias = data.map(m => ({
                    id: m.id, title: m.title, isVideo: m.is_video, colorClass: m.color_class, media_url: m.media_url,
                    visible: m.visible !== false, fromSupabase: true
                }));
            }
        } catch(e) {}
    }

    db.transaction(['medias'], 'readonly').objectStore('medias').getAll().onsuccess = (e) => {
        const localMedias = e.target.result.map(m => ({ ...m, visible: m.visible !== false, fromSupabase: false }));
        const allMedias = [...currentMedias, ...localMedias];
        renderMediaCards(allMedias);
    };
}

function renderMediaCards(mediasArray) {
    const container = document.getElementById('grid-media');
    if (!container) return;
    container.innerHTML = '';
    const cardsToRender = isAdmin ? mediasArray : mediasArray.filter(m => m.visible !== false);
    cardsToRender.forEach(media => {
        const btn = document.createElement('button');
        btn.className = `word-btn border-${media.colorClass}` + (isAdmin && media.visible === false ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        
        let thumbUrl = null;
        const link = media.media_url || media.link;
        if (link) {
            try {
                if (link.includes('youtube.com/watch')) {
                    const v = new URL(link).searchParams.get('v');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v.split('&')[0]}/hqdefault.jpg`;
                } else if (link.includes('youtu.be/')) {
                    const v = link.split('youtu.be/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('youtube.com/shorts/')) {
                    const v = link.split('youtube.com/shorts/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('youtube.com/embed/')) {
                    const v = link.split('youtube.com/embed/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('vimeo.com/')) {
                    thumbUrl = 'VIMEO_OEMBED';
                }
            } catch(e) {}
        }

        if (thumbUrl) {
            imgContainer.style.position = 'relative';
            const img = document.createElement('img');
            
            if (thumbUrl === 'VIMEO_OEMBED') {
                img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Carregando...';
                const cleanLink = link.startsWith('http') ? link : 'https://' + link;
                fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(cleanLink)}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.thumbnail_url) {
                            img.src = data.thumbnail_url;
                        } else {
                            img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Vimeo';
                        }
                    })
                    .catch(() => {
                        img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Indisponível';
                    });
            } else {
                img.src = thumbUrl;
            }
            img.alt = '';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderTopLeftRadius = '12px';
            img.style.borderTopRightRadius = '12px';
            imgContainer.appendChild(img);

            const overlayIcon = document.createElement('i');
            overlayIcon.className = 'fas fa-play-circle word-btn-icon';
            overlayIcon.style.position = 'absolute';
            overlayIcon.style.top = '50%';
            overlayIcon.style.left = '50%';
            overlayIcon.style.transform = 'translate(-50%, -50%)';
            overlayIcon.style.color = 'rgba(255,255,255,0.9)';
            overlayIcon.style.textShadow = '0 2px 8px rgba(0,0,0,0.6)';
            overlayIcon.style.fontSize = '3rem';
            imgContainer.appendChild(overlayIcon);
        } else {
            imgContainer.innerHTML = `<i class="fas ${media.isVideo || link ? 'fa-play-circle' : 'fa-music'} word-btn-icon" aria-hidden="true"></i>`;
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = media.title;
        btn.title = media.title; // título completo no hover (o rodapé corta em 2 linhas)

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (isAdmin) {
            const isVisible = media.visible !== false;
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleMediaVisibility(media); };
            btn.appendChild(toggleBtn);

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
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
        }
        btn.addEventListener('click', () => playMedia(media));
        container.appendChild(btn);
    });
}

// Exercícios (Slides com Edição)
let currentEditingExerciseId = null;
let currentEditingExerciseFromSupabase = false;
let currentEditingBlobs = {};
let currentEditingImageUrls = {};
let exerciseBlockCounter = 0;

async function saveExercisePlaylistToDB(title, itemsArray) {
    // Exercícios só-locais (ex.: os semeados por seedLocalPracticeExercises) têm um id
    // de IndexedDB, não um id do Supabase. Se tentássemos o caminho do Supabase pra eles,
    // o update/delete usaria esse id local contra a tabela real e não bateria com nada —
    // a edição pareceria salvar, mas seria descartada em silêncio.
    const shouldTrySupabase = supabaseClient && (!currentEditingExerciseId || currentEditingExerciseFromSupabase);
    if (shouldTrySupabase) {
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
                const { data: exData } = await supabaseClient.from('exercises').insert([{ title, visible: false }]).select().single();
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

    if (currentEditingExerciseId) {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(currentEditingExerciseId).onsuccess = (e) => {
            const existing = e.target.result || {};
            db.transaction(['exercises'], 'readwrite').objectStore('exercises')
                .put({ ...existing, id: currentEditingExerciseId, title, items: itemsArray })
                .onsuccess = () => loadExerciseCards();
        };
    } else {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises')
            .add({ title, items: itemsArray, visible: false })
            .onsuccess = () => loadExerciseCards();
    }
}

async function toggleExerciseVisibility(ex) {
    const newVisible = !(ex.visible !== false);
    if (ex.fromSupabase && supabaseClient) {
        await supabaseClient.from('exercises').update({ visible: newVisible }).eq('id', ex.id);
    } else {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(ex.id).onsuccess = (e) => {
            const rec = e.target.result;
            if (!rec) return;
            db.transaction(['exercises'], 'readwrite').objectStore('exercises').put({ ...rec, visible: newVisible }).onsuccess = () => loadExerciseCards();
        };
        return;
    }
    loadExerciseCards();
}

async function sendActivityNotification(title, category = 'Atividade') {
    if (!supabaseClient) {
        alert('O envio de avisos requer conexão com o servidor.');
        return;
    }

    const confirmed = confirm(
        `Enviar um e-mail para todos os usuários avisando que "${title}" está disponível?`
    );
    if (!confirmed) return;

    const { data, error } = await supabaseClient.functions.invoke('notify-users', {
        body: { title, category }
    });

    if (error) {
        console.error('Erro ao enviar aviso:', error);
        alert('Não foi possível enviar o aviso. Verifique a configuração do Gmail e tente novamente.');
        return;
    }

    alert(`Aviso enviado para ${data?.recipientCount ?? 0} usuário(s).`);
}

function createNotifyUsersButton(title, category = 'Atividade') {
    const notifyBtn = document.createElement('button');
    notifyBtn.type = 'button';
    notifyBtn.className = 'notify-users-btn';
    notifyBtn.innerHTML = '<i class="fas fa-envelope" aria-hidden="true"></i>';
    notifyBtn.setAttribute('aria-label', `Avisar usuários sobre ${title}`);
    notifyBtn.title = 'Avisar usuários por e-mail';
    notifyBtn.onclick = async (ev) => {
        ev.stopPropagation();
        notifyBtn.disabled = true;
        try {
            await sendActivityNotification(title, category);
        } finally {
            notifyBtn.disabled = false;
        }
    };
    return notifyBtn;
}

let currentExercises = [];
let lastMergedExercises = [];
async function loadExerciseCards() {
    if (supabaseClient) {
        try {
            const { data: exData, error: exErr } = await supabaseClient.from('exercises').select('*');
            if (!exErr) {
                const { data: itemData } = await supabaseClient.from('exercise_items').select('*');
                currentExercises = exData.map(ex => {
                    const items = (itemData || []).filter(item => item.exercise_id === ex.id).map(item => ({
                        word: item.word, color: item.color, size: item.size, uppercase: item.uppercase,
                        bold: item.bold, videoLink: item.link, image_url: item.image_url,
                        pairId: item.pair_id, role: item.role
                    }));
                    return { id: ex.id, title: ex.title, items, visible: ex.visible !== false, seedKey: ex.seed_key, fromSupabase: true };
                });
            }
        } catch(e) {}
    }

    // Espera o IndexedDB de verdade (não só a parte do Supabase): sem isso, quem chama
    // `await loadExerciseCards()` seguia em frente antes de lastMergedExercises estar
    // atualizado, e telas que renderizam logo depois de salvar (como os jogos) mostravam
    // dado velho até a próxima navegação.
    await new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
            const localExercises = e.target.result.map(ex => ({ ...ex, visible: ex.visible !== false, fromSupabase: false }));
            const allExercises = [...currentExercises, ...localExercises];
            renderExerciseCards(allExercises);
            resolve();
        };
    });
}

function renderExerciseCards(exercisesArray) {
    lastMergedExercises = exercisesArray;
    const container = document.getElementById('grid-exercises');
    if (!container) return;
    container.innerHTML = '';

    // O container "Cartas do Jogo da Memória" (seedKey MEMORY_CARDS_SEED_KEY) é armazenamento
    // interno do Jogo da Memória — nunca deve aparecer como um card de exercício, nem para o admin.
    const realExercises = exercisesArray.filter(ex => ex.seedKey !== MEMORY_CARDS_SEED_KEY && ex.seedKey !== NAMING_SEED_KEY && ex.seedKey !== ALPHABET_MEMORY_SEED_KEY && ex.seedKey !== AFASIA_SEED_KEY);
    const cardsToRender = isAdmin ? realExercises : realExercises.filter(ex => ex.visible !== false);
    cardsToRender.forEach(ex => {
        const parts = (ex.title || '').split('|');
        const displayTitle = parts[0];
        const colorClass = parts[1] || 'pink';

        const btn = document.createElement('button');
        btn.className = `word-btn border-${colorClass}` + (isAdmin && ex.visible === false ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';

        if (ex.items && ex.items.length > 0) {
            if (ex.items[0].imageBlob instanceof Blob) {
                imgContainer.innerHTML = `<img src="${URL.createObjectURL(ex.items[0].imageBlob)}" class="word-btn-img" alt="" />`;
            } else if (ex.items[0].image_url) {
                imgContainer.innerHTML = `<img src="${ex.items[0].image_url}" class="word-btn-img" alt="" />`;
            } else {
                imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
            }
        } else {
            imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = displayTitle;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (isAdmin) {
            const isVisible = ex.visible !== false;
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleExerciseVisibility(ex); };
            btn.appendChild(toggleBtn);

            if (isVisible && ex.fromSupabase) {
                btn.appendChild(createNotifyUsersButton(displayTitle, 'Exercício'));
            }

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar exercício "${displayTitle}"?`)) {
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
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openEditExercise(ex);
            };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => openPresentationPlaylist(ex));
        container.appendChild(btn);
    });

    renderExerciseActivities();
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
        const videoId = urlToParse.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (urlToParse.includes('youtube.com/shorts/')) {
        const videoId = urlToParse.split('youtube.com/shorts/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (urlToParse.includes('youtube.com/embed/')) {
        return urlToParse; // Já é formato embed
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
                <h4 style="margin:0;" class="block-title">Slide</h4>
                ${isEdit ? '<button type="button" class="btn-remove-block" style="background:#ff4d4f;color:white;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;"><i class="fas fa-trash" aria-hidden="true"></i> Remover</button>' : ''}
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
                <label>Imagem (Objeto) — opcional, usa pictograma automático se vazio</label>
                <input type="file" class="item-image" accept="image/*">
                ${hasOldImage ? '<span class="image-hint">Imagem atual salva. Selecione outra apenas para substituir.</span>' : ''}
            </div>
            <div class="form-group">
                <label>Link do Vídeo (Vimeo, Drive, YouTube, Figma) — opcional</label>
                <input type="url" class="item-link" placeholder="Cole o link aqui...">
            </div>
        </div>
    `;
}

function addExerciseBlock(isEdit = false, hasOldImage = false) {
    const container = document.getElementById('exercise-items-container');
    const blockId = exerciseBlockCounter++;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createExerciseBlockHtml(blockId, isEdit, hasOldImage);
    // Guarda o elemento real numa variável própria: depois do appendChild ele passa a
    // viver dentro de container, e "wrapper" fica vazio — reler wrapper.firstElementChild
    // dentro do clique (avaliado só depois, ao clicar) voltava null e quebrava a remoção.
    const blockEl = wrapper.firstElementChild;

    const removeBtn = blockEl.querySelector('.btn-remove-block');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            container.removeChild(blockEl);
            updateBlockTitles();
        });
    }

    container.appendChild(blockEl);
    updateBlockTitles();
}

function updateBlockTitles() {
    const blocks = document.querySelectorAll('.exercise-item-block');
    blocks.forEach((b, index) => {
        b.querySelector('.block-title').textContent = `Slide ${index + 1}`;
    });
}

function openEditExercise(ex) {
    currentEditingExerciseId = ex.id;
    currentEditingExerciseFromSupabase = !!ex.fromSupabase;
    currentEditingBlobs = {};
    currentEditingImageUrls = {};
    exerciseBlockCounter = 0;

    document.getElementById('upload-exercise-modal').style.display = 'flex';
    document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Editar Exercício (Slides)";
    
    const parts = (ex.title || '').split('|');
    const displayTitle = parts[0];
    const colorClass = parts[1] || 'pink';
    
    document.getElementById('exercise-title').value = displayTitle;
    document.getElementById('exercise-color').value = colorClass;

    const container = document.getElementById('exercise-items-container');
    container.innerHTML = '';

    ex.items.forEach((item, index) => {
        const hasOldImage = !!item.image_url || !!item.imageBlob;
        addExerciseBlock(true, hasOldImage);

        const blockEl = container.querySelector(`[data-block-id="${index}"]`);
        blockEl.querySelector('.item-word').value = item.word || '';
        blockEl.querySelector('.item-link').value = item.videoLink || item.link || '';
        blockEl.querySelector('.item-color').value = item.color || item.textColor || '#333333';
        blockEl.querySelector('.item-size').value = item.size || item.textSize || '100';
        blockEl.querySelector('.item-uppercase').checked = item.uppercase !== undefined ? !!item.uppercase : !!item.isUppercase;
        blockEl.querySelector('.item-bold').checked = item.bold !== undefined ? !!item.bold : (item.isBold !== undefined ? !!item.isBold : true);

        if (item.image_url) {
            currentEditingImageUrls[index] = item.image_url;
        }
        if (item.imageBlob) {
            currentEditingBlobs[index] = item.imageBlob;
        }
    });
}

function setupModals() {
    document.getElementById('btn-games-back').addEventListener('click', () => showExitConfirm());
    document.getElementById('btn-exercises-back').addEventListener('click', () => showExitConfirm());

    // Modal de confirmação de saída
    const exitModal = document.getElementById('modal-exit-confirm');
    document.getElementById('btn-exit-cancel').addEventListener('click', () => {
        exitModal.style.display = 'none';
    });
    document.getElementById('btn-exit-confirm').addEventListener('click', () => {
        exitModal.style.display = 'none';
        closeGame();
    });
    exitModal.addEventListener('click', (e) => {
        if (e.target === exitModal) exitModal.style.display = 'none';
    });

    document.getElementById('btn-strengths-new-game')?.addEventListener('click', showStrengthsBoardSetup);
    document.getElementById('btn-strengths-start')?.addEventListener('click', () => startStrengthsBoardGame(selectedStrengthsPlayerCount));
    document.querySelectorAll('.strengths-player-count-btn').forEach(button => {
        button.addEventListener('click', () => {
            selectedStrengthsPlayerCount = Number(button.dataset.playerCount) || 2;
            updateStrengthsSetupSelection();
        });
    });
    document.getElementById('btn-strengths-roll')?.addEventListener('click', rollStrengthsBoardDie);
    document.getElementById('btn-strengths-complete')?.addEventListener('click', completeStrengthsBoardCard);
    document.getElementById('btn-manage-complete-sentence')?.addEventListener('click', () => {
        const frame = document.getElementById('complete-sentence-frame');
        const openManagerMessage = () => frame.contentWindow?.postMessage({ type: 'complete-sentence:open-manager' }, window.location.origin);
        if (!frame.src) {
            frame.addEventListener('load', openManagerMessage, { once: true });
            frame.src = frame.dataset.src;
        } else {
            openManagerMessage();
        }
    });

    document.getElementById('btn-memory-new-game').addEventListener('click', async () => {
        if (editModes.memory) {
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', true);
            await flushMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', false);
            editModes.memory = false;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
        }
        startMemoryGame();
    });

    document.getElementById('btn-edit-memory').addEventListener('click', async () => {
        if (editModes.memory) {
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', true);
            await flushMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', false);
            editModes.memory = false;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
            startMemoryGame();
        } else {
            editModes.memory = true;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
            renderMemoryManageGrid();
        }
    });

    document.getElementById('btn-close-memory-card').addEventListener('click', closeMemoryCardModal);
    document.getElementById('btn-cancel-memory-card').addEventListener('click', closeMemoryCardModal);
    document.getElementById('memory-card-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('memory-card-word').value.trim();
        const imageFileA = document.getElementById('memory-card-image-a').files[0] || null;
        const imageFileB = document.getElementById('memory-card-image-b').files[0] || null;
        if (!word) return;

        if (editingMemoryPairId !== null) {
            await updateMemoryCardPair(editingMemoryPairId, word, imageFileA, imageFileB);
        } else {
            if (!imageFileA || !imageFileB) { alert('Envie as duas imagens do par.'); return; }
            memoryDraftPairs.push({ tempId: makePairId(), word, imageFileA, imageFileB });
            renderMemoryManageGrid();
        }
        closeMemoryCardModal();
    });

    document.getElementById('btn-alphabet-memory-new-game').addEventListener('click', async () => {
        if (editModes.alphabetMemory) {
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', true);
            await flushAlphabetMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', false);
            editModes.alphabetMemory = false;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
        }
        startAlphabetMemoryGame();
    });

    document.getElementById('btn-edit-alphabet-memory').addEventListener('click', async () => {
        if (editModes.alphabetMemory) {
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', true);
            await flushAlphabetMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', false);
            editModes.alphabetMemory = false;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
            startAlphabetMemoryGame();
        } else {
            editModes.alphabetMemory = true;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
            renderAlphabetMemoryManageGrid();
        }
    });

    document.getElementById('btn-close-alphabet-memory-card').addEventListener('click', closeAlphabetMemoryCardModal);
    document.getElementById('btn-cancel-alphabet-memory-card').addEventListener('click', closeAlphabetMemoryCardModal);
    document.getElementById('alphabet-memory-card-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('alphabet-memory-card-word').value.trim();
        const imageFileA = document.getElementById('alphabet-memory-card-image-a').files[0] || null;
        const imageFileB = document.getElementById('alphabet-memory-card-image-b').files[0] || null;
        if (!word) return;

        if (editingAlphabetMemoryPairId !== null) {
            await updateAlphabetMemoryCardPair(editingAlphabetMemoryPairId, word, imageFileA, imageFileB);
        } else {
            if (!imageFileA || !imageFileB) { alert('Envie as duas imagens do par.'); return; }
            alphabetMemoryDraftPairs.push({ tempId: makePairId(), word, imageFileA, imageFileB });
            renderAlphabetMemoryManageGrid();
        }
        closeAlphabetMemoryCardModal();
    });

    document.getElementById('btn-naming-new-game').addEventListener('click', async () => {
        if (editModes.naming) {
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', true);
            await flushNamingDraftSets();
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', false);
            editModes.naming = false;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
        }
        startNamingGame();
    });

    document.getElementById('btn-edit-naming').addEventListener('click', async () => {
        if (editModes.naming) {
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', true);
            await flushNamingDraftSets();
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', false);
            editModes.naming = false;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
            startNamingGame();
        } else {
            editModes.naming = true;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
            document.getElementById('naming-play-area').style.display = 'none';
            document.getElementById('grid-naming').style.display = 'grid';
            renderNamingManageGrid();
        }
    });

    document.getElementById('btn-naming-help').addEventListener('click', namingHelp);
    document.getElementById('btn-naming-skip').addEventListener('click', namingSkip);
    document.getElementById('btn-speak-naming').addEventListener('click', () => {
        const text = document.getElementById('naming-word-display').textContent;
        trackUsageActivity(`Jogo Nomeação: Ouvir palavra`, {
            key: `game:naming:speak:${text}`,
            group: 'Jogos',
            detail: `Ouviu palavra no Jogo de Nomeação: ${text}`
        });
        speakWithAzure(text);
    });
    document.getElementById('btn-naming-stop').addEventListener('click', () => closeGame());

    document.getElementById('btn-close-naming-set').addEventListener('click', closeNamingSetModal);
    document.getElementById('btn-cancel-naming-set').addEventListener('click', closeNamingSetModal);
    document.getElementById('naming-set-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const isQuickCreate = namingQuickCreate;
        const word = document.getElementById('naming-set-word').value.trim();
        const correctFile = document.getElementById('naming-set-image-correct').files[0] || null;
        const d1File = document.getElementById('naming-set-image-d1').files[0] || null;
        const d2File = document.getElementById('naming-set-image-d2').files[0] || null;
        if (!word) return;

        if (editingNamingSetId !== null) {
            await updateNamingSet(editingNamingSetId, word, correctFile, d1File, d2File);
        } else if (isQuickCreate) {
            if (!correctFile || !d1File || !d2File) { alert('Envie as três imagens (correta + 2 distrações).'); return; }
            await addNamingSet(word, correctFile, d1File, d2File);
        } else {
            if (!correctFile || !d1File || !d2File) { alert('Envie as três imagens (correta + 2 distrações).'); return; }
            namingDraftSets.push({ tempId: makeNamingSetId(), word, correctFile, d1File, d2File });
            renderNamingManageGrid();
        }
        closeNamingSetModal();
    });

    document.getElementById('btn-afasia-new-game').addEventListener('click', async () => {
        if (editModes.afasia) {
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', true);
            await flushAfasiaDraftSets();
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', false);
            editModes.afasia = false;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
        }
        startAfasiaGame();
    });

    document.getElementById('btn-edit-afasia').addEventListener('click', async () => {
        if (editModes.afasia) {
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', true);
            await flushAfasiaDraftSets();
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', false);
            editModes.afasia = false;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
            startAfasiaGame();
        } else {
            editModes.afasia = true;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
            document.getElementById('afasia-play-area').style.display = 'none';
            document.getElementById('grid-afasia').style.display = 'grid';
            renderAfasiaManageGrid();
        }
    });

    document.getElementById('btn-afasia-help').addEventListener('click', afasiaHelp);
    document.getElementById('btn-afasia-skip').addEventListener('click', afasiaSkip);
    document.getElementById('btn-afasia-stop').addEventListener('click', () => closeGame());

    document.getElementById('btn-close-afasia-set').addEventListener('click', closeAfasiaSetModal);
    document.getElementById('btn-cancel-afasia-set').addEventListener('click', closeAfasiaSetModal);
    document.getElementById('afasia-set-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const isQuickCreate = afasiaQuickCreate;
        const question = document.getElementById('afasia-set-question').value.trim();
        const correctWord = document.getElementById('afasia-set-word-correct').value.trim();
        const d1Word = document.getElementById('afasia-set-word-d1').value.trim();
        const d2Word = document.getElementById('afasia-set-word-d2').value.trim();
        const imageFile = document.getElementById('afasia-set-image').files[0] || null;
        if (!question || !correctWord || !d1Word || !d2Word) return;

        if (editingAfasiaSetId !== null) {
            await updateAfasiaSet(editingAfasiaSetId, question, correctWord, d1Word, d2Word, imageFile);
        } else if (isQuickCreate) {
            if (!imageFile) { alert('Envie a imagem da atividade.'); return; }
            await addAfasiaSet(question, correctWord, d1Word, d2Word, imageFile);
        } else {
            if (!imageFile) { alert('Envie a imagem da atividade.'); return; }
            afasiaDraftSets.push({ tempId: makeAfasiaSetId(), question, correctWord, d1Word, d2Word, imageFile });
            renderAfasiaManageGrid();
        }
        closeAfasiaSetModal();
    });

    document.getElementById('btn-open-upload').addEventListener('click', () => {
        if (!isAdmin) return;
        document.getElementById('upload-modal').style.display = 'flex';
    });
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
        if (!isAdmin) {
            alert('Apenas administradores podem adicionar mídia.');
            return;
        }

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

    const closeExerciseType = () => {
        document.getElementById('exercise-type-modal').style.display = 'none';
    };

    const openSlidesExerciseCreator = () => {
        closeExerciseType();
        currentEditingExerciseId = null;
        currentEditingExerciseFromSupabase = false;
        currentEditingBlobs = {};
        currentEditingImageUrls = {};
        exerciseBlockCounter = 0;

        document.getElementById('upload-exercise-modal').style.display = 'flex';
        document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Novo Exercício (Slides)";
        document.getElementById('upload-exercise-form').reset();

        const container = document.getElementById('exercise-items-container');
        container.innerHTML = '';
        addExerciseBlock();
    };

    document.getElementById('btn-open-exercise-upload').addEventListener('click', () => {
        if (!isAdmin) return;
        document.getElementById('exercise-type-modal').style.display = 'flex';
    });
    document.getElementById('btn-close-exercise-type').addEventListener('click', closeExerciseType);
    document.getElementById('btn-cancel-exercise-type').addEventListener('click', closeExerciseType);
    document.getElementById('btn-create-slides-exercise').addEventListener('click', openSlidesExerciseCreator);

    document.getElementById('btn-create-recognition-exercise').addEventListener('click', () => {
        closeExerciseType();
        openGame('naming');
        editModes.naming = true;
        updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
        document.getElementById('naming-play-area').style.display = 'none';
        document.getElementById('grid-naming').style.display = 'grid';
        renderNamingManageGrid();
        namingQuickCreate = true;
        openNamingSetModal(null);
    });

    document.getElementById('btn-create-afasia-exercise').addEventListener('click', () => {
        closeExerciseType();
        openGame('afasia');
        editModes.afasia = true;
        updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
        document.getElementById('afasia-play-area').style.display = 'none';
        document.getElementById('grid-afasia').style.display = 'grid';
        renderAfasiaManageGrid();
        afasiaQuickCreate = true;
        openAfasiaSetModal(null);
    });

    document.getElementById('btn-create-complete-sentence-exercise')?.addEventListener('click', () => {
        closeExerciseType();
        const frame = document.getElementById('complete-sentence-frame');
        const openManagerMessage = () => frame.contentWindow?.postMessage({ type: 'complete-sentence:open-manager' }, window.location.origin);
        
        if (document.getElementById('game-complete-sentence-container').style.display === 'none') {
            openGame('complete-sentence');
            setTimeout(openManagerMessage, 500);
        } else {
            openManagerMessage();
        }
    });

    const closeExerciseUpload = () => { document.getElementById('upload-exercise-modal').style.display = 'none'; document.getElementById('upload-exercise-form').reset(); };
    document.getElementById('btn-close-exercise-upload').addEventListener('click', closeExerciseUpload);
    document.getElementById('btn-cancel-exercise-upload').addEventListener('click', closeExerciseUpload);

    document.getElementById('btn-add-exercise-item').addEventListener('click', () => {
        addExerciseBlock(true);
    });

    document.getElementById('upload-exercise-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!isAdmin) {
            alert('Apenas administradores podem salvar exercícios.');
            return;
        }
        const titleVal = document.getElementById('exercise-title').value.trim();
        const colorVal = document.getElementById('exercise-color').value;
        const finalTitle = `${titleVal}|${colorVal}`;
        
        const blocks = document.querySelectorAll('.exercise-item-block');

        if (blocks.length === 0) return alert("Adicione pelo menos um slide.");

        const itemsArray = [];
        blocks.forEach(block => {
            const blockId = block.dataset.blockId;
            const fileInput = block.querySelector('.item-image');

            let finalBlob = fileInput.files[0];
            if (!finalBlob && currentEditingBlobs[blockId]) {
                finalBlob = currentEditingBlobs[blockId];
            }

            // Preservar a URL da imagem atual se não subiu um novo arquivo
            let existingImageUrl = null;
            if (currentEditingImageUrls && currentEditingImageUrls[blockId]) {
                existingImageUrl = currentEditingImageUrls[blockId];
            }

            itemsArray.push({
                word: block.querySelector('.item-word').value,
                color: block.querySelector('.item-color').value,
                size: block.querySelector('.item-size').value,
                uppercase: block.querySelector('.item-uppercase').checked,
                bold: block.querySelector('.item-bold').checked,
                videoLink: block.querySelector('.item-link').value,
                imageBlob: finalBlob,
                image_url: existingImageUrl
            });
        });

        saveExercisePlaylistToDB(finalTitle, itemsArray);
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
    document.getElementById('btn-speak-presentation').addEventListener('click', () => {
        const item = currentPlaylistItems[currentPlaylistIndex];
        if (item) {
            trackUsageActivity(`Exercícios: Falar item`, {
                key: `exercise:speak:${item.word}`,
                group: 'Exercícios',
                detail: `Ouviu palavra: ${item.word}`
            });
            speakWithAzure(item.word);
        }
    });
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
        alert("Não é possível avançar. Total de slides salvos neste exercício: " + currentPlaylistItems.length);
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
            fetchArasaacImage(item.imgQuery || item.word).then(url => {
                if (url && currentPlaylistItems[currentPlaylistIndex] === item) imgEl.src = url;
            });
        }

        const embedUrl = getEmbedUrl(item.videoLink);
        const iframeEl = document.getElementById('presentation-iframe');
        iframeEl.src = embedUrl;
        iframeEl.style.display = embedUrl ? '' : 'none';

        // Slides sem vídeo (ex: Nomeação de Objetos, Frases Funcionais) ganham o botão
        // de som para ouvir a escrita; com vídeo o áudio já vem do próprio vídeo.
        document.getElementById('btn-speak-presentation').style.display = embedUrl ? 'none' : '';

        // Pré-carrega o áudio do slide atual e do próximo para o clique no botão
        // de som (e a navegação com as setas) responder na hora.
        if (!embedUrl) prefetchTts(item.word);
        const nextItem = currentPlaylistItems[currentPlaylistIndex + 1];
        if (nextItem && !getEmbedUrl(nextItem.videoLink)) prefetchTts(nextItem.word);

        document.getElementById('btn-prev-presentation').disabled = (currentPlaylistIndex === 0);
        document.getElementById('btn-next-presentation').disabled = (currentPlaylistIndex === currentPlaylistItems.length - 1);
    } catch (e) {
        console.error("Erro ao renderizar slide:", e);
        alert("Erro na tela do slide: " + e.message);
    }
}

// =============================================
// JOGOS (HUB)
// =============================================
const gamesList = [
    { id: 'memory', title: 'Jogo da Memória', icon: 'fa-clone', styleClass: 'border-blue' },
    { id: 'memory-alphabet', title: 'Memória do Alfabeto', icon: 'fa-font', styleClass: 'border-green' },
    { id: 'jogo2', title: 'Trilha de Aprendizado de Forças', icon: 'fa-route', styleClass: 'border-orange' }
];

const exerciseActivities = [
    { id: 'complete-sentence', title: 'Complete a Frase', icon: 'fa-puzzle-piece', styleClass: 'border-orange' },
    { id: 'naming', title: 'Reconhecimento de Palavras', icon: 'fa-images', styleClass: 'border-red' },
    { id: 'afasia', title: 'Reconhecimento de Imagem', icon: 'fa-comment-medical', styleClass: 'border-yellow' }
];

// As listas consultam a visibilidade de cada card de forma assíncrona. Estes
// contadores invalidam uma renderização antiga quando uma atualização mais nova
// começa, evitando que duas chamadas anexem a mesma atividade ao grid.
let gamesRenderVersion = 0;
let exerciseActivitiesRenderVersion = 0;

// Visibilidade de cada jogo: Supabase (tabela game_flags) com fallback em localStorage
// quando não há conexão/Supabase configurado.
const GAME_FLAGS_LOCAL_KEY = 'comunica_game_flags';

function getLocalGameFlags() {
    try { return JSON.parse(localStorage.getItem(GAME_FLAGS_LOCAL_KEY) || '{}'); }
    catch (e) { return {}; }
}

function setLocalGameFlag(gameId, visible) {
    const flags = getLocalGameFlags();
    flags[gameId] = visible;
    localStorage.setItem(GAME_FLAGS_LOCAL_KEY, JSON.stringify(flags));
}

async function getGameVisibility(gameId) {
    if (gameId === 'complete-sentence' && isCompleteSentenceLocalDemo()) return true;
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('game_flags').select('visible').eq('game_id', gameId).single();
            if (!error && data) return data.visible !== false;
        } catch (e) {}
    }
    return getLocalGameFlags()[gameId] !== false; // default: visível
}

async function toggleGameVisibility(gameId, currentVisible) {
    const newVisible = !currentVisible;
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient.from('game_flags').upsert({ game_id: gameId, visible: newVisible });
            if (error) throw error;
            renderActivityLists();
            return;
        } catch (e) {
            console.warn('Fallback local para game_flags:', e);
        }
    }
    setLocalGameFlag(gameId, newVisible);
    renderActivityLists();
}

// --- MODULE FLAGS (Sidebar visibility) ---
const MODULE_FLAGS_LOCAL_KEY = 'comunica_module_flags';

function getLocalModuleFlags() {
    try { return JSON.parse(localStorage.getItem(MODULE_FLAGS_LOCAL_KEY) || '{}'); }
    catch (e) { return {}; }
}

function setLocalModuleFlag(moduleId, visible) {
    const flags = getLocalModuleFlags();
    flags[moduleId] = visible;
    localStorage.setItem(MODULE_FLAGS_LOCAL_KEY, JSON.stringify(flags));
}

async function loadModuleFlags() {
    let dbFlags = {};
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('module_flags').select('*');
            if (!error && data) {
                data.forEach(row => { dbFlags[row.module_id] = row.visible; });
            }
        } catch (e) {}
    }
    const localFlags = getLocalModuleFlags();
    return { ...localFlags, ...dbFlags };
}

async function toggleModuleVisibility(moduleId, currentVisible) {
    const newVisible = !currentVisible;
    if (supabaseClient) {
        try {
            const { data, error: selectError } = await supabaseClient.from('module_flags').select('module_id').eq('module_id', moduleId).maybeSingle();
            
            let error;
            if (data) {
                const res = await supabaseClient.from('module_flags').update({ visible: newVisible }).eq('module_id', moduleId);
                error = res.error;
            } else {
                const res = await supabaseClient.from('module_flags').insert([{ module_id: moduleId, visible: newVisible }]);
                error = res.error;
            }

            if (error) throw error;
            await applyModuleVisibility();
            return;
        } catch (e) {
            console.warn('Fallback local para module_flags:', e);
        }
    }
    setLocalModuleFlag(moduleId, newVisible);
    await applyModuleVisibility();
}

async function applyModuleVisibility() {
    const flags = await loadModuleFlags();
    const navButtons = document.querySelectorAll('.sidebar .nav-btn[data-view]');
    
    navButtons.forEach(btn => {
        const viewId = btn.dataset.view;
        if (viewId === 'view-admin' || viewId === 'view-core') return;
        
        if (flags[viewId] === false) {
            if (isAdmin) {
                btn.style.display = 'flex';
                btn.classList.add('card-hidden');
                btn.title = 'Oculto para usuários comuns';
            } else {
                btn.style.display = 'none';
            }
        } else {
            btn.style.display = 'flex';
            btn.classList.remove('card-hidden');
            btn.removeAttribute('title');
        }
    });
    renderAdminModulesPanel(flags);
}

function renderAdminModulesPanel(flags) {
    const container = document.getElementById('modules-toggles-container');
    if (!container) return;
    
    const modules = [
        { id: 'view-carometro', name: 'Carômetro', icon: 'fa-id-card' },
        { id: 'view-topics', name: 'Tópicos', icon: 'fa-folder-open' },
        { id: 'view-virtues', name: 'Fomes e Forças', icon: 'fa-star' },
        { id: 'view-keyboard', name: 'Teclado', icon: 'fa-keyboard' },
        { id: 'view-media', name: 'Mídias', icon: 'fa-play-circle' },
        { id: 'view-exercises', name: 'Exercícios', icon: 'fa-dumbbell' },
        { id: 'view-games', name: 'Jogos', icon: 'fa-gamepad' },
        { id: 'view-ia', name: 'Assistente IA', icon: 'fa-robot' }
    ];
    
    container.innerHTML = '';
    modules.forEach(mod => {
        const isVisible = flags[mod.id] !== false; // true by default
        
        const btn = document.createElement('div');
        btn.className = `word-btn` + (!isVisible ? ' card-hidden' : '');
        btn.style.position = 'relative'; // Ensure toggle switch positions correctly

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.innerHTML = `<i class="fas ${mod.icon} word-btn-icon" aria-hidden="true" style="color:var(--color-blue);"></i>`;

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = mod.name;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar módulo' : 'Exibir módulo');
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleModuleVisibility(mod.id, isVisible); };
        btn.appendChild(toggleBtn);
        
        if (isVisible) {
            btn.appendChild(createNotifyUsersButton(mod.name, 'Módulo'));
        }
        
        container.appendChild(btn);
    });
}
async function renderActivityCards(container, activities, isCurrent = () => true) {
    if (!container) return;

    for (const game of activities) {
        const isVisible = await getGameVisibility(game.id);
        if (!isCurrent()) return;
        if (!isAdmin && !isVisible) continue;

        const btn = document.createElement('button');
        btn.className = `word-btn ${game.styleClass}` + (isAdmin && !isVisible ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.innerHTML = `<i class="fas ${game.icon} word-btn-icon" aria-hidden="true"></i>`;

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = game.title;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (isAdmin) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleGameVisibility(game.id, isVisible); };
            btn.appendChild(toggleBtn);

            const shouldNotifyUsers = container.id === 'grid-games-list'
                || exerciseActivities.some(activity => activity.id === game.id)
                || game.id === 'complete-sentence';
            if (isVisible && shouldNotifyUsers) {
                const category = container.id === 'grid-games-list' ? 'Jogo' : (game.id === 'complete-sentence' ? 'Jogo' : 'Atividade');
                btn.appendChild(createNotifyUsersButton(game.title, category));
            }
        }

        btn.addEventListener('click', () => openGame(game.id));
        container.appendChild(btn);
    }
}

async function renderGamesList() {
    const container = document.getElementById('grid-games-list');
    if (!container) return;
    const renderVersion = ++gamesRenderVersion;
    container.innerHTML = '';
    await renderActivityCards(container, gamesList, () => renderVersion === gamesRenderVersion);
}

async function renderExerciseActivities() {
    const container = document.getElementById('grid-exercises');
    const renderVersion = ++exerciseActivitiesRenderVersion;
    await renderActivityCards(
        container,
        exerciseActivities,
        () => renderVersion === exerciseActivitiesRenderVersion
    );
}

function renderActivityLists() {
    renderGamesList();
    renderExerciseCards(lastMergedExercises);
}

function placeGamesBackButton(gameId) {
    const backButton = document.getElementById('btn-games-back');
    const editBar = document.getElementById('games-edit-bar');
    const gameContainers = {
        memory: 'game-memory-container',
        'memory-alphabet': 'game-alphabet-memory-container',
        jogo2: 'game-jogo2-container'
    };
    const gameContainer = document.getElementById(gameContainers[gameId]);
    const gameHeader = gameContainer?.querySelector('.memory-header');

    if (backButton && gameHeader) gameHeader.appendChild(backButton);
    if (editBar) editBar.style.display = 'none';
}

function restoreGamesBackButton() {
    const backButton = document.getElementById('btn-games-back');
    const editBar = document.getElementById('games-edit-bar');

    if (backButton && editBar) editBar.appendChild(backButton);
    if (editBar) editBar.style.display = 'flex';
}

function openGame(gameId) {
    changeUsageSection('game:' + gameId);
    const isExerciseActivity = exerciseActivities.some(activity => activity.id === gameId);
    if (isExerciseActivity) {
        document.getElementById('grid-exercises').style.display = 'none';
        document.getElementById('exercises-header').style.display = 'none';
        document.getElementById('btn-exercises-back').style.display = 'flex';
    } else {
        document.getElementById('grid-games-list').style.display = 'none';
        placeGamesBackButton(gameId);
        document.getElementById('btn-games-back').style.display = 'flex';
    }

    if (gameId === 'memory') {
        document.getElementById('game-memory-container').style.display = 'flex';
        startMemoryGame();
    } else if (gameId === 'naming') {
        document.getElementById('game-naming-container').style.display = 'flex';
        startNamingGame();
    } else if (gameId === 'memory-alphabet') {
        document.getElementById('game-alphabet-memory-container').style.display = 'flex';
        startAlphabetMemoryGame();
    } else if (gameId === 'jogo2') {
        const container = document.getElementById('game-jogo2-container');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.width = '100%';
        container.style.height = '100%';
        showJogo2Setup();
    } else if (gameId === 'afasia') {
        document.getElementById('game-afasia-container').style.display = 'flex';
        startAfasiaGame();
    } else if (gameId === 'complete-sentence') {
        const container = document.getElementById('game-complete-sentence-container');
        const frame = document.getElementById('complete-sentence-frame');
        container.style.display = 'flex';
        if (!frame.src) frame.src = frame.dataset.src;
        registerUsageCatalog('activity', 'Jogo: Complete a Frase', {
            key: 'game:complete-sentence',
            group: 'Jogos'
        });
        trackUsageActivity('Jogo: Complete a Frase', {
            key: 'game:complete-sentence',
            group: 'Jogos',
            detail: 'Atividade aberta'
        });
    }
}

function showExitConfirm() {
    const modal = document.getElementById('modal-exit-confirm');
    if (modal) modal.style.display = 'flex';
}

function clearAllJogo2Timeouts() {
    try { window.speechSynthesis.cancel(); } catch(e) {}
    resetJogo2PowerMeter();

    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2RobotTurnTimeout) { clearTimeout(jogo2RobotTurnTimeout); jogo2RobotTurnTimeout = null; }
    if (jogo2RobotAnswerTimeout) { clearTimeout(jogo2RobotAnswerTimeout); jogo2RobotAnswerTimeout = null; }
    if (jogo2RobotChoiceTimeout) { clearTimeout(jogo2RobotChoiceTimeout); jogo2RobotChoiceTimeout = null; }
    if (jogo2RobotStartTimeout) { clearTimeout(jogo2RobotStartTimeout); jogo2RobotStartTimeout = null; }
    if (jogo2WalkStepTimeout) { clearTimeout(jogo2WalkStepTimeout); jogo2WalkStepTimeout = null; }
    if (jogo2WheelSpinTimeout) { clearTimeout(jogo2WheelSpinTimeout); jogo2WheelSpinTimeout = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }
    if (jogo2SpeechTimeout) { clearTimeout(jogo2SpeechTimeout); jogo2SpeechTimeout = null; }

    if (typeof currentAudio !== 'undefined' && currentAudio) {
        try { currentAudio.pause(); } catch(e) {}
    }

    jogo2Started = false;
    strengthsBoardStarted = false;
    jogo2Animating = false;
    jogo2Rolling = false;
}

function closeGame() {
    clearAllJogo2Timeouts();

    const activeView = document.querySelector('.nav-btn.active')?.dataset.view || 'view-games';
    changeUsageSection(activeView);

    const elGamesList = document.getElementById('grid-games-list');
    if (elGamesList) elGamesList.style.display = 'grid';

    const elExercises = document.getElementById('grid-exercises');
    if (elExercises) elExercises.style.display = 'grid';

    const elGamesBack = document.getElementById('btn-games-back');
    if (elGamesBack) elGamesBack.style.display = 'none';

    const elExercisesBack = document.getElementById('btn-exercises-back');
    if (elExercisesBack) elExercisesBack.style.display = 'none';

    const elExercisesHeader = document.getElementById('exercises-header');
    if (elExercisesHeader) elExercisesHeader.style.display = isAdmin ? 'flex' : 'none';

    const elMemory = document.getElementById('game-memory-container');
    if (elMemory) elMemory.style.display = 'none';

    const elNaming = document.getElementById('game-naming-container');
    if (elNaming) elNaming.style.display = 'none';

    const elAlphabet = document.getElementById('game-alphabet-memory-container');
    if (elAlphabet) elAlphabet.style.display = 'none';

    const elAfasia = document.getElementById('game-afasia-container');
    if (elAfasia) elAfasia.style.display = 'none';

    const elCompleteSentence = document.getElementById('game-complete-sentence-container');
    if (elCompleteSentence) elCompleteSentence.style.display = 'none';

    const elStrengths = document.getElementById('game-strengths-board-container');
    if (elStrengths) elStrengths.style.display = 'none';

    const elJogo2 = document.getElementById('game-jogo2-container');
    if (elJogo2) elJogo2.style.display = 'none';

    document.getElementById('complete-sentence-frame')?.contentWindow?.postMessage({ type: 'complete-sentence:pause-audio' }, window.location.origin);
    
    // Resetar jogos ao fechar
    if (typeof showJogo2Setup === 'function') {
        showJogo2Setup();
    }
    
    restoreGamesBackButton();
}

// =============================================
// JORNADA DAS FORÇAS (tabuleiro)
// =============================================
const strengthsBoardSpaces = buildStrengthsBoardSpaces();

function buildStrengthsBoardSpaces() {
    const missionSpaces = [
        { virtue: 'sabedoria', label: 'Criatividade', icon: 'fa-lightbulb', question: 'O que você pode inventar para ajudar alguém hoje?' },
        { virtue: 'sabedoria', label: 'Curiosidade', icon: 'fa-magnifying-glass', question: 'Que pergunta você gostaria de fazer agora?' },
        { virtue: 'sabedoria', label: 'Perspectiva', icon: 'fa-eye', question: 'Que conselho você daria para um amigo?' },
        { virtue: 'coragem', label: 'Coragem', icon: 'fa-shield-heart', question: 'Conte uma vez em que você tentou mesmo com medo.' },
        { virtue: 'coragem', label: 'Perseverança', icon: 'fa-mountain', question: 'O que você faz quando algo parece difícil?' },
        { virtue: 'coragem', label: 'Honestidade', icon: 'fa-handshake', question: 'Como podemos falar a verdade com respeito?' },
        { virtue: 'humanidade', label: 'Bondade', icon: 'fa-heart', question: 'Escolha uma forma de ajudar alguém hoje.' },
        { virtue: 'humanidade', label: 'Amor', icon: 'fa-hand-holding-heart', question: 'Quem é uma pessoa importante para você?' },
        { virtue: 'humanidade', label: 'Inteligência social', icon: 'fa-people-arrows', question: 'Como você percebe que alguém está feliz ou triste?' },
        { virtue: 'justica', label: 'Justiça', icon: 'fa-scale-balanced', question: 'O que é ser justo em uma brincadeira?' },
        { virtue: 'justica', label: 'Trabalho em equipe', icon: 'fa-people-group', question: 'Como você pode colaborar com o grupo?' },
        { virtue: 'justica', label: 'Liderança', icon: 'fa-star', question: 'Como um líder pode cuidar bem das pessoas?' },
        { virtue: 'temperanca', label: 'Autocontrole', icon: 'fa-spa', question: 'Mostre uma estratégia para se acalmar.' },
        { virtue: 'temperanca', label: 'Prudência', icon: 'fa-traffic-light', question: 'Quando é bom parar e pensar antes de agir?' },
        { virtue: 'temperanca', label: 'Perdão', icon: 'fa-dove', question: 'O que ajuda depois de uma briga?' },
        { virtue: 'transcendencia', label: 'Gratidão', icon: 'fa-hands-holding-heart', question: 'Diga uma coisa pela qual você agradece.' },
        { virtue: 'transcendencia', label: 'Esperança', icon: 'fa-sun', question: 'O que você espera que aconteça de bom?' },
        { virtue: 'transcendencia', label: 'Humor', icon: 'fa-face-laugh-beam', question: 'Compartilhe algo que faz você rir.' }
    ];
    const challenges = {
        8: { type: 'challenge', label: 'Volte 1', icon: 'fa-rotate-left', virtue: 'desafio', challenge: { type: 'back', amount: 1 }, question: 'Desafio: volte uma casa no tabuleiro.' },
        17: { type: 'challenge', label: 'Volte 3', icon: 'fa-backward', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'Desafio: volte três casas no tabuleiro.' },
        27: { type: 'challenge', label: 'Volte ao início', icon: 'fa-house', virtue: 'desafio', challenge: { type: 'start' }, question: 'Desafio: volte para a partida.' },
        36: { type: 'challenge', label: 'Volte 1', icon: 'fa-rotate-left', virtue: 'desafio', challenge: { type: 'back', amount: 1 }, question: 'Desafio: volte uma casa no tabuleiro.' },
        44: { type: 'challenge', label: 'Volte 3', icon: 'fa-backward', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'Desafio: volte três casas no tabuleiro.' }
    };

    const spaces = [{ type: 'start', label: 'Partida', icon: 'fa-flag', virtue: 'partida' }];
    let missionIndex = 0;
    for (let boardNumber = 2; boardNumber <= 49; boardNumber++) {
        if (challenges[boardNumber]) {
            spaces.push(challenges[boardNumber]);
        } else {
            spaces.push(missionSpaces[missionIndex % missionSpaces.length]);
            missionIndex++;
        }
    }
    spaces.push({ type: 'finish', label: 'Chegada', icon: 'fa-trophy', virtue: 'chegada' });
    return spaces;
}

let strengthsBoardPosition = 0;
let strengthsBoardStarted = false;
let pendingStrengthsChallenge = null;
let strengthsBoardRolling = false;
let strengthsBoardWaitingCard = false;
let activeStrengthsPlayerIndex = 0;
let selectedStrengthsPlayerCount = 2;
const strengthsBoardPlayers = [
    { name: 'Jogador 1', position: 0 },
    { name: 'Jogador 2', position: 0 },
    { name: 'Jogador 3', position: 0 },
    { name: 'Jogador 4', position: 0 }
];
const strengthsBoardTrackPositions = buildStrengthsBoardTrackPositions();
const strengthsBoardTurnSpaces = new Set([6, 13, 21, 26, 34, 39, 47]);

function buildStrengthsBoardTrackPositions() {
    const segments = [
        [[1, 1], [1, 6]],
        [[2, 6], [2, 12]],
        [[3, 12], [3, 5]],
        [[4, 5], [4, 1]],
        [[5, 1], [5, 8]],
        [[6, 8], [6, 12]],
        [[7, 12], [7, 5]],
        [[8, 5], [8, 3]]
    ];

    return segments.flatMap(([start, end]) => {
        const [startRow, startColumn] = start;
        const [endRow, endColumn] = end;
        const rowStep = Math.sign(endRow - startRow);
        const columnStep = Math.sign(endColumn - startColumn);
        const steps = Math.max(Math.abs(endRow - startRow), Math.abs(endColumn - startColumn));

        return Array.from({ length: steps + 1 }, (_, step) => [
            startRow + (rowStep * step),
            startColumn + (columnStep * step)
        ]);
    });
}

function announceStrengthsBoard(message) {
    const live = document.getElementById('strengths-status-live');
    if (live) live.textContent = message;
}

function getActiveStrengthsPlayer() {
    return strengthsBoardPlayers[activeStrengthsPlayerIndex];
}

function getStrengthsActivePlayers() {
    return strengthsBoardPlayers.slice(0, selectedStrengthsPlayerCount);
}

function syncStrengthsBoardPosition() {
    if (activeStrengthsPlayerIndex >= selectedStrengthsPlayerCount) {
        activeStrengthsPlayerIndex = 0;
    }
    strengthsBoardPosition = getActiveStrengthsPlayer().position;
}

function updateStrengthsSetupSelection() {
    document.querySelectorAll('.strengths-player-count-btn').forEach(button => {
        button.classList.toggle('active', Number(button.dataset.playerCount) === selectedStrengthsPlayerCount);
    });
}

function showStrengthsBoardSetup() {
    const container = document.getElementById('game-strengths-board-container');
    if (container) container.classList.add('is-setup');
    strengthsBoardStarted = false;
    strengthsBoardRolling = false;
    strengthsBoardWaitingCard = false;
    pendingStrengthsChallenge = null;
    activeStrengthsPlayerIndex = 0;
    strengthsBoardPlayers.forEach(player => {
        player.position = 0;
    });
    strengthsBoardPosition = 0;
    updateStrengthsDieDisplay(null);
    updateStrengthsSetupSelection();
    renderStrengthsPlayerLegend();
    updateStrengthsCard(strengthsBoardSpaces[0]);
    const status = document.getElementById('strengths-position-status');
    if (status) status.textContent = 'Escolha os jogadores';
}

function renderStrengthsPlayerLegend() {
    const legend = document.getElementById('strengths-player-legend');
    if (!legend) return;

    legend.innerHTML = getStrengthsActivePlayers().map((player, index) => `
        <span class="strengths-player-chip ${index === activeStrengthsPlayerIndex ? 'active' : ''}">
            <span class="strengths-player-pin player-${index + 1}" aria-hidden="true">${index + 1}</span>
            ${player.name}
        </span>
    `).join('');
}

function advanceStrengthsPlayerTurn() {
    if (!strengthsBoardStarted) return;
    activeStrengthsPlayerIndex = (activeStrengthsPlayerIndex + 1) % selectedStrengthsPlayerCount;
    syncStrengthsBoardPosition();
    renderStrengthsBoard();
    updateStrengthsCard(strengthsBoardSpaces[strengthsBoardPosition]);
    announceStrengthsBoard(`Agora é a vez ${getPreposicaoDoDa(getActiveStrengthsPlayer().name)} ${getActiveStrengthsPlayer().name}.`);
}

function renderStrengthsBoard() {
    const path = document.getElementById('strengths-board-path');
    if (!path) return;

    syncStrengthsBoardPosition();
    path.innerHTML = '';
    strengthsBoardSpaces.forEach((space, index) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = `strengths-space virtue-${space.virtue}`;
        const [row, column] = strengthsBoardTrackPositions[index] || [1, index + 1];
        tile.style.gridRow = row;
        tile.style.gridColumn = column;
        if (index === strengthsBoardPosition) tile.classList.add('active');
        if (space.type === 'start') tile.classList.add('start');
        if (space.type === 'finish') tile.classList.add('finish');
        tile.setAttribute('aria-label', `${index + 1}. ${space.label}`);
        const playerPins = getStrengthsActivePlayers()
            .map((player, playerIndex) => player.position === index ? `
                <span class="strengths-player-pin player-${playerIndex + 1} ${playerIndex === activeStrengthsPlayerIndex ? 'active' : ''}" title="${player.name}" aria-label="${player.name}">
                    ${playerIndex + 1}
                </span>
            ` : '')
            .join('');
        tile.innerHTML = `
            <span class="strengths-space-number">${index + 1}</span>
            ${index === strengthsBoardPosition ? `<strong class="strengths-space-current-label">${space.label}</strong>` : ''}
            ${strengthsBoardTurnSpaces.has(index + 1) ? '<span class="strengths-turn-arrow" aria-hidden="true">↳</span>' : ''}
            ${playerPins ? `<span class="strengths-player-pins">${playerPins}</span>` : ''}
        `;
        path.appendChild(tile);
    });

    const status = document.getElementById('strengths-position-status');
    const currentSpace = strengthsBoardSpaces[strengthsBoardPosition];
    if (status) status.textContent = `${getActiveStrengthsPlayer().name}: ${currentSpace.label} (${strengthsBoardPosition + 1}/${strengthsBoardSpaces.length})`;
    renderStrengthsPlayerLegend();
}

function flipStrengthsCard(card) {
    card.classList.remove('is-flipping');
    void card.offsetWidth;
    card.classList.add('is-flipping');
}

function updateStrengthsCard(space, roll = null, shouldFlip = false) {
    const card = document.getElementById('strengths-current-card');
    const completeBtn = document.getElementById('btn-strengths-complete');
    if (!card) return;
    pendingStrengthsChallenge = null;

    if (space.type === 'start') {
        card.className = 'strengths-card strengths-card-back';
        card.innerHTML = `
            <span class="strengths-card-question" aria-hidden="true">?</span>
            <span class="strengths-card-kicker">Partida</span>
            <h3>Jogue o dado para revelar a carta</h3>
            <p>Avance pela trilha das forças e descubra sua atividade.</p>
        `;
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    if (space.type === 'finish') {
        card.className = 'strengths-card virtue-chegada';
        card.innerHTML = `
            <span class="strengths-card-kicker">Chegada</span>
            <i class="fas fa-trophy strengths-card-icon" aria-hidden="true"></i>
            <h3>Você completou a jornada</h3>
            <div class="strengths-card-activity">
                <strong>Atividade final</strong>
                <p>Escolha uma força que você usou durante o jogo e compartilhe com o grupo.</p>
            </div>
        `;
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    if (space.type === 'challenge') {
        pendingStrengthsChallenge = space.challenge;
        card.className = 'strengths-card virtue-desafio';
        card.innerHTML = `
            <span class="strengths-card-kicker">Casa ${strengthsBoardPosition + 1}${roll ? ` | Dado: ${roll}` : ''}</span>
            <i class="fas ${space.icon} strengths-card-icon" aria-hidden="true"></i>
            <h3>${space.label}</h3>
            <div class="strengths-card-activity">
                <strong>Desafio</strong>
                <p>${space.question}</p>
            </div>
        `;
        if (completeBtn) {
            completeBtn.disabled = false;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Aplicar desafio';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    card.className = `strengths-card virtue-${space.virtue}`;
    card.innerHTML = `
        <span class="strengths-card-kicker">Casa ${strengthsBoardPosition + 1}${roll ? ` | Dado: ${roll}` : ''}</span>
        <i class="fas ${space.icon} strengths-card-icon" aria-hidden="true"></i>
        <h3>${space.label}</h3>
        <div class="strengths-card-activity">
            <strong>Atividade</strong>
            <p>${space.question}</p>
        </div>
    `;
    if (completeBtn) {
        completeBtn.disabled = false;
        completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
    }
    if (shouldFlip) flipStrengthsCard(card);
}

function startStrengthsBoardGame(playerCount = selectedStrengthsPlayerCount) {
    selectedStrengthsPlayerCount = Math.min(4, Math.max(1, Number(playerCount) || 2));
    const container = document.getElementById('game-strengths-board-container');
    if (container) container.classList.remove('is-setup');
    strengthsBoardPosition = 0;
    strengthsBoardStarted = true;
    pendingStrengthsChallenge = null;
    strengthsBoardRolling = false;
    strengthsBoardWaitingCard = false;
    activeStrengthsPlayerIndex = 0;
    strengthsBoardPlayers.forEach(player => {
        player.position = 0;
    });
    updateStrengthsDieDisplay(null);
    renderStrengthsBoard();
    updateStrengthsCard(strengthsBoardSpaces[0]);
    registerUsageCatalog('activity', 'Jogo: Jornada das Forças', {
        key: 'game:strengths-board',
        group: 'Jogos'
    });
    trackUsageActivity('Jogo: Jornada das Forças', {
        key: 'game:strengths-board',
        group: 'Jogos',
        detail: 'Jogo aberto'
    });
}

function updateStrengthsDieDisplay(value, isRolling = false) {
    const die = document.getElementById('strengths-die-display');
    const number = document.getElementById('strengths-die-number');
    if (!die || !number) return;

    die.classList.toggle('rolling', isRolling);
    number.textContent = value || '-';
}

function rollStrengthsBoardDie() {
    if (!strengthsBoardStarted) {
        announceStrengthsBoard('Escolha quantos jogadores vão jogar e inicie a partida.');
        speak('Escolha quantos jogadores vão jogar e inicie a partida.');
        return;
    }
    if (strengthsBoardPosition >= strengthsBoardSpaces.length - 1) return;
    if (strengthsBoardRolling) return;
    if (strengthsBoardWaitingCard) {
        announceStrengthsBoard('Conclua a carta antes de jogar novamente.');
        speak('Conclua a carta antes de jogar novamente.');
        return;
    }

    strengthsBoardRolling = true;
    const roll = Math.floor(Math.random() * 6) + 1;
    const rollButton = document.getElementById('btn-strengths-roll');
    if (rollButton) rollButton.disabled = true;

    let ticks = 0;
    const interval = setInterval(() => {
        if (!strengthsBoardStarted) {
            clearInterval(interval);
            return;
        }
        ticks++;
        updateStrengthsDieDisplay(Math.floor(Math.random() * 6) + 1, true);

        if (ticks >= 8) {
            clearInterval(interval);
            if (!strengthsBoardStarted) return;
            updateStrengthsDieDisplay(roll, false);

            const activePlayer = getActiveStrengthsPlayer();
            const previousPosition = strengthsBoardPosition;
            activePlayer.position = Math.min(activePlayer.position + roll, strengthsBoardSpaces.length - 1);
            syncStrengthsBoardPosition();
            const movedSpaces = strengthsBoardPosition - previousPosition;
            const currentSpace = strengthsBoardSpaces[strengthsBoardPosition];
            strengthsBoardWaitingCard = currentSpace.type !== 'finish';

            renderStrengthsBoard();
            updateStrengthsCard(currentSpace, roll, true);
            announceStrengthsBoard(`${activePlayer.name}, você tirou o número ${roll}. Você andou ${movedSpaces} casa${movedSpaces === 1 ? '' : 's'} e caiu em ${currentSpace.label}.`);
            speak(`${activePlayer.name}, você tirou o número ${roll}.`);

            strengthsBoardRolling = false;
            if (rollButton) rollButton.disabled = false;
        }
    }, 70);
}

function completeStrengthsBoardCard() {
    const completeBtn = document.getElementById('btn-strengths-complete');
    if (pendingStrengthsChallenge) {
        const challenge = pendingStrengthsChallenge;
        const activePlayer = getActiveStrengthsPlayer();
        const previousPosition = strengthsBoardPosition;

        if (challenge.type === 'back') {
            activePlayer.position = Math.max(0, activePlayer.position - challenge.amount);
        } else if (challenge.type === 'start') {
            activePlayer.position = 0;
        }

        syncStrengthsBoardPosition();
        pendingStrengthsChallenge = null;
        strengthsBoardWaitingCard = false;
        renderStrengthsBoard();
        updateStrengthsCard(strengthsBoardSpaces[strengthsBoardPosition], null, true);

        const moved = previousPosition - strengthsBoardPosition;
        const message = challenge.type === 'start'
            ? `${activePlayer.name}, desafio aplicado. Você voltou para a partida.`
            : `${activePlayer.name}, desafio aplicado. Você voltou ${moved} casa${moved === 1 ? '' : 's'}.`;
        announceStrengthsBoard(message);
        speak(message);
        setTimeout(advanceStrengthsPlayerTurn, 900);
        return;
    }

    if (completeBtn) completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
    strengthsBoardWaitingCard = false;
    announceStrengthsBoard(`${getActiveStrengthsPlayer().name} concluiu a carta.`);
    speak('Muito bem!');
    advanceStrengthsPlayerTurn();
}

// =============================================
// JOGO 2: TRILHA DOS INSETOS (jogo2)
// =============================================
const jogo2Spaces = buildJogo2Spaces();

function buildJogo2Spaces() {
    const strengthNames = {
        sabedoria: ['Criatividade', 'Curiosidade', 'Pensamento Crítico', 'Amor ao Aprendizado', 'Perspectiva'],
        coragem: ['Bravura', 'Perseverança', 'Honestidade', 'Entusiasmo'],
        humanidade: ['Amor', 'Bondade', 'Inteligência Social'],
        justica: ['Trabalho em Equipe', 'Equidade', 'Liderança'],
        temperanca: ['Perdão', 'Humildade', 'Prudência', 'Autocontrole'],
        transcendencia: ['Apreciação da Beleza', 'Gratidão', 'Esperança', 'Humor', 'Espiritualidade']
    };

    const spaces = [{ type: 'start', label: 'Início', name: 'Início', icon: 'fa-flag', virtue: 'start' }];
    
    const virtuesOrder = ['sabedoria', 'coragem', 'humanidade', 'justica', 'temperanca', 'transcendencia'];
    const counters = { sabedoria: 0, coragem: 0, humanidade: 0, justica: 0, temperanca: 0, transcendencia: 0 };
    
    const exagerouChallenge = { 
        type: 'challenge', 
        label: 'Exagerou na Força! 💥', 
        name: 'Exagerou na Força 💥', 
        icon: 'fa-hand-rock', 
        virtue: 'exagerou_forca', 
        challenge: { type: 'back_to_start' }, 
        question: 'Você exagerou na força! Responda corretamente para se autorregular, ou volte ao Início!' 
    };

    const penaltySpace = { type: 'normal', label: 'Armadilha 🚫', name: 'Armadilha 🚫', icon: 'fa-ban', virtue: 'penalidade' };

    const specialChallenges = {
        8:  exagerouChallenge,
        13: penaltySpace,
        15: { type: 'challenge', label: 'Teia de Aranha 🕷️', name: 'Desafio 🕷️', icon: 'fa-spider', virtue: 'desafio', challenge: { type: 'back', amount: 2 }, question: 'Você se enroscou na teia! Responda corretamente para se soltar, ou volte 2 casas.' },
        20: exagerouChallenge,
        23: penaltySpace,
        25: { type: 'challenge', label: 'Voo da Borboleta 🦋', name: 'Desafio 🦋', icon: 'fa-wind', virtue: 'desafio', challenge: { type: 'forward', amount: 3 }, question: 'A borboleta te levou no vento! Responda corretamente e avance 3 casas!' },
        28: exagerouChallenge,
        35: { type: 'challenge', label: 'Abelha Apressada 🐝', name: 'Desafio 🐝', icon: 'fa-bolt', virtue: 'desafio', challenge: { type: 'forward', amount: 1 }, question: 'A abelhinha te deu uma carona! Responda corretamente e avance 1 casa!' },
        36: penaltySpace,
        45: { type: 'challenge', label: 'Caminho da Formiga 🐜', name: 'Desafio 🐜', icon: 'fa-route', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'A folha estava muito pesada no caminho! Responda corretamente ou volte 3 casas.' }
    };

    for (let i = 1; i <= 48; i++) {
        if (specialChallenges[i]) {
            spaces.push(specialChallenges[i]);
        } else {
            const v = virtuesOrder[i % virtuesOrder.length];
            const list = strengthNames[v] || ['Força'];
            const name = list[counters[v] % list.length];
            counters[v]++;

            spaces.push({
                type: 'normal',
                label: name,
                name: name,
                icon: 'fa-star',
                virtue: v
            });
        }
    }
    
    spaces.push({ type: 'finish', label: 'Chegada', name: 'Chegada', icon: 'fa-trophy', virtue: 'finish' });
    return spaces;
}

// Perguntas padrão de múltipla escolha baseadas nas Forças de Caráter da VIA
// Perguntas padrão de múltipla escolha baseadas nas Forças de Caráter da VIA
const jogo2DefaultQuestions = {
    sabedoria: [
        { q: 'O que significa ter curiosidade no nosso dia a dia?', opt: ['Querer aprender coisas novas e interessantes', 'Ficar com preguiça de fazer qualquer coisa', 'Dormir o dia todo na cama'], ans: 0 },
        { q: 'Usar a criatividade significa o que?', opt: ['Copiar exatamente o desenho do colega de mesa', 'Inventar ideias novas e brincadeiras divertidas', 'Ficar olhando para a parede sem fazer nada'], ans: 1 },
        { q: 'Uma pessoa que tem amor ao aprendizado geralmente gosta de...', opt: ['Ler livros, estudar e fazer perguntas curiosas', 'Jogar lixo no chão do jardim', 'Esconder os materiais de estudo'], ans: 0 }
    ],
    coragem: [
        { q: 'O que significa ter persistência (perseverança) nas tarefas?', opt: ['Desistir no primeiro erro ou dificuldade', 'Continuar tentando com calma até conseguir vencer', 'Ficar muito bravo e rasgar o papel'], ans: 1 },
        { q: 'Demonstrar coragem (bravura) significa...', opt: ['Enfrentar os medos mesmo com friozinho na barriga', 'Bater nos outros para mostrar força', 'Fugir correndo de qualquer brincadeira nova'], ans: 0 },
        { q: 'Falar sempre a verdade, mesmo quando é difícil, é um ato de...', opt: ['Medo e vergonha', 'Sorte ou acaso', 'Integridade e honestidade com as pessoas'], ans: 2 }
    ],
    humanidade: [
        { q: 'Qual dessas atitudes fofas demonstra generosidade com o outro?', opt: ['Guardar todos os seus brinquedos só para você', 'Compartilhar o lanche com um amigo que está com fome', 'Ignorar um colega que está chorando no canto'], ans: 1 },
        { q: 'Nós demonstramos inteligência social quando conseguimos...', opt: ['Perceber como as outras pessoas estão se sentindo e ajudar', 'Gritar bem alto para chamar a atenção de todos', 'Não ouvir o que ninguém tem a nos dizer'], ans: 0 },
        { q: 'O amor verdadeiro entre família e amigos é demonstrado com...', opt: ['Abraços sinceros, palavras de carinho e respeito', 'Brigas físicas e empurrões na hora da fila', 'Falta de atenção e não dar importância a eles'], ans: 0 }
    ],
    justica: [
        { q: 'O que significa fazer um bom trabalho em equipe?', opt: ['Querer fazer tudo sozinho sem ajuda de ninguém', 'Ajudar os companheiros para alcançar um objetivo comum', 'Atrapalhar o trabalho dos outros do grupo'], ans: 1 },
        { q: 'Uma atitude justa e igualitária seria...', opt: ['Dividir os brinquedos e doces igualmente entre todos', 'Pegar a maior parte para si e deixar os outros sem', 'Não deixar ninguém brincar com as coisas da sala'], ans: 0 },
        { q: 'Um bom líder na hora do jogo ou brincadeira faz o que?', opt: ['Manda em todo mundo com grosseria e exige obediência', 'Escuta e incentiva todos do grupo a participar', 'Joga a bola sozinho e não passa para ninguém'], ans: 1 }
    ],
    temperanca: [
        { q: 'Quando um amigo nos pede desculpas sinceras, o ideal é...', opt: ['Ficar de mal e bravo com ele para sempre', 'Oferecer o nosso perdão e fazer as pazes alegremente', 'Gritar apontando os erros dele bem alto'], ans: 1 },
        { q: 'O que é ter autorregulação (autocontrole)?', opt: ['Respirar fundo para se acalmar quando estiver irritado', 'Chutar a parede ou jogar as coisas no chão', 'Chorar e gritar sem parar até conseguir o que quer'], ans: 0 },
        { q: 'Uma pessoa humilde age de qual maneira?', opt: ['Acha que é melhor e mais esperta que todo mundo', 'Reconhece suas qualidades sem precisar se gabar aos outros', 'Nunca aceita ajuda de ninguém porque acha que sabe tudo'], ans: 1 }
    ],
    transcendencia: [
        { q: 'O que significa demonstrar gratidão pelas coisas?', opt: ['Agradecer pelas coisas boas que temos e pelas ajudas', 'Reclamar de tudo o tempo todo com cara feia', 'Esquecer quem foi bondoso e nos ajudou antes'], ans: 0 },
        { q: 'Ter esperança em relação ao amanhã significa...', opt: ['Acreditar que coisas muito boas vão acontecer no futuro', 'Achar que tudo vai dar errado e dar as costas', 'Desistir de todos os seus sonhos e planos'], ans: 0 },
        { q: 'Como podemos espalhar alegria usando o nosso bom humor?', opt: ['Contando piadas ou fazendo brincadeiras fofas para alegrar', 'Rindo do tombo de um colega que se machucou no pátio', 'Fazendo cara de bravo e falando alto com as pessoas'], ans: 0 }
    ],
    desafio: [
        { q: 'Qual dessas opções é uma fruta vermelha e docinha?', opt: ['Banana amarela', 'Morango vermelho', 'Limão verde'], ans: 1 },
        { q: 'O que usamos para limpar e escovar os dentes após comer?', opt: ['Escova de dentes', 'Pente de cabelo', 'Sabonete de banho'], ans: 0 },
        { q: 'Qual objeto usamos para beber água fresca ou suco de frutas?', opt: ['Copo', 'Prato', 'Garfo'], ans: 0 }
    ]
};

let jogo2Position = 0;
let jogo2Started = false;
let pendingJogo2Challenge = null;
let jogo2Rolling = false;
let jogo2WaitingCard = false;
let activeJogo2PlayerIndex = 0;
let selectedJogo2PlayerCount = 2;
let jogo2SoloMode = false;
let jogo2TurnTimeout = null;
let jogo2CountdownInterval = null;
let jogo2RobotTurnTimeout = null;
let jogo2RobotAnswerTimeout = null;
let jogo2RobotChoiceTimeout = null;
let jogo2RobotStartTimeout = null;
let jogo2WalkStepTimeout = null;
let jogo2WheelSpinTimeout = null;
let jogo2CompleteCardTimeout = null;
let jogo2Animating = false; // Flag para bloquear ações durante animação de peão
let jogo2WheelRotation = 0;
let jogo2PowerHintSpoken = false;
let jogo2CustomCards = []; // Perguntas customizadas cadastradas pelo usuário
let jogo2EditingCardId = null; // Rastreia se estamos editando uma carta existente
const JOGO2_CARDS_SEED_KEY = 'jogo2-cards-container';
const JOGO2_CARDS_TITLE = 'Cartas da Trilha de Aprendizado de Forças|orange';
const JOGO2_CARD_ROLE = 'jogo2-card';
const JOGO2_VIRTUE_META = {
    sabedoria: { label: 'Sabedoria', icon: '🧠', color: '#d8eba5', textColor: '#334155' },
    coragem: { label: 'Coragem', icon: '💪', color: '#ff5757', textColor: '#7f1d1d' },
    humanidade: { label: 'Humanidade', icon: '❤️', color: '#ffad18', textColor: '#7c2d12' },
    justica: { label: 'Justiça', icon: '⚖️', color: '#ffd400', textColor: '#713f12' },
    temperanca: { label: 'Temperança', icon: '🛡️', color: '#8bd3e1', textColor: '#075985' },
    moderacao: { label: 'Moderação', icon: '🛡️', color: '#8bd3e1', textColor: '#075985' },
    transcendencia: { label: 'Transcendência', icon: '✨', color: '#b568e8', textColor: '#581c87' },
    desafio: { label: 'Desafio', icon: '❓', color: '#8b5cf6', textColor: '#4c1d95' }
};

// ============================================================
// NOVOS RECURSOS LÚDICOS DO JOGO 2 (Sons, Falas e Efeitos)
// ============================================================

function playTickSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
}

function playPawnJumpSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.12);
        osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.22);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
    } catch (e) {}
}

function playExplosionSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = ctx.sampleRate * 0.45;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.38);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.42);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
    } catch (e) {}
}

function playWheelTicks(duration) {
    let delay = 50;
    let elapsed = 0;
    function tick() {
        if (elapsed >= duration - 150) return;
        playTickSound();
        const arrow = document.getElementById('jogo2-wheel-arrow');
        if (arrow) {
            arrow.classList.remove('arrow-click-vibe');
            void arrow.offsetWidth;
            arrow.classList.add('arrow-click-vibe');
        }
        delay += (elapsed / duration) * 48 + 4;
        elapsed += delay;
        setTimeout(tick, delay);
    }
    tick();
}

const JOGO2_OPPONENT_QUOTES = {
    0: { // Silvio Santos
        turnStart: [
            "Vou girar a roleta, ritmo de festa!",
            "Roda, roda, roda! Quem quer jogar?",
            "Lá vou eu, com muita alegria!",
            "Caaaalma, agora é a minha vez!"
        ],
        correctAnswer: [
            "Ceeeeeerta resposta! Ha-ha! Bem bolado!",
            "Olha aí! Você acertou! Muito bem!",
            "10 segundos de palmas, você merece!",
            "Esta foi fácil, mas eu sabia!"
        ],
        wrongAnswer: [
            "Errou! Que pena, voltou casas!",
            "Ih, você errou! Quem não sabe, não ganha!",
            "Não foi dessa vez, tente de novo!",
            "Ah, errou! Mas não desanime, roda de novo!"
        ],
        fellInTrap: [
            "Ih! Caí na armadilha! Que azar!",
            "Ah, não! Teia de aranha? Que coisa chata!",
            "Vou precisar tirar 4 para sair daqui..."
        ],
        wonGame: [
            "Ganhei! Ha-ha! Eu sou o campeão!",
            "Ritmo de festa! Eu ganhei o jogo!"
        ],
        lostGame: [
            "Parabéns! Você ganhou e merece o aviãozinho de dinheiro! Ha-ha!",
            "Você é o grande campeão! Muito bem!"
        ]
    },
    1: { // Hebe Camargo
        turnStart: [
            "Minha vez, que gracinha!",
            "Deixa eu rodar essa roleta maravilhosa!",
            "Vamos ver o que o destino reserva, querido!",
            "Ai que emoção, é a minha vez!"
        ],
        correctAnswer: [
            "Gente, que coisa mais linda! Acertou!",
            "Uma gracinha de resposta! Parabéns!",
            "Você é maravilhoso, acertou tudo!",
            "Nota dez! Uma resposta divina!"
        ],
        wrongAnswer: [
            "Ah, que pena! Mas faz parte, meu amor!",
            "Errou, querido. Mas você é tão gracioso!",
            "Que pena que errou, mas não fica triste, viu?",
            "Ah, voltou casas! Mas logo você recupera!"
        ],
        fellInTrap: [
            "Ai, meu Deus! Fiquei presa na teia!",
            "Que armadilha chata! Hebe presa? Jamais!",
            "Preciso de sorte para sair dessa!"
        ],
        wonGame: [
            "Eu ganhei! Que noite inesquecível, que gracinha!",
            "Vitória maravilhosa! Vocês são lindos!"
        ],
        lostGame: [
            "Você venceu! Que noite fantástica, você é uma gracinha!",
            "Parabéns, meu amor! Sua vitória foi linda de viver!"
        ]
    },
    2: { // Albert Einstein
        turnStart: [
            "Vez do pensamento científico!",
            "Girar a roleta é pura física estatística!",
            "Minha vez de formular a jogada!",
            "Vamos testar as variáveis desta vez."
        ],
        correctAnswer: [
            "Excelente! A lógica te levou do ponto A ao B!",
            "Genial! Resposta cientificamente precisa!",
            "Muito bem! Sua capacidade cognitiva é notável!",
            "Formulou perfeitamente o raciocínio!"
        ],
        wrongAnswer: [
            "A resposta contraria os fatos observados.",
            "Um pequeno desvio na hipótese. Voltou casas.",
            "Quem nunca errou nunca experimentou algo novo.",
            "Incorreto. Mas o erro faz parte do aprendizado!"
        ],
        fellInTrap: [
            "Um obstáculo gravitacional! Caí na armadilha.",
            "Preso na teia da incerteza. Preciso de um 4.",
            "A entropia me prendeu nesta casa."
        ],
        wonGame: [
            "Vitória! A imaginação superou os limites do tabuleiro!",
            "Fim do experimento. Eu venci!"
        ],
        lostGame: [
            "Sua inteligência superou minhas equações! Excelente vitória!",
            "Parabéns! Seus cálculos e respostas foram impecáveis."
        ]
    }
};

let jogo2SpeechTimeout = null;

function showOpponentSpeech(text) {
    if (!jogo2SoloMode) return;
    const opps = JOGO2_OPPONENTS_FIXED;
    const selIdx = getSelectedOpponentIndex();
    const opponent = opps[selIdx];
    if (!opponent) return;

    const bubble = document.getElementById('jogo2-opponent-bubble');
    const avatarImg = document.getElementById('jogo2-bubble-avatar-img');
    const nameEl = document.getElementById('jogo2-bubble-name');
    const textEl = document.getElementById('jogo2-bubble-text');

    if (!bubble || !avatarImg || !nameEl || !textEl) return;

    avatarImg.src = opponent.photo;
    nameEl.textContent = opponent.name;
    textEl.textContent = text;

    bubble.style.display = 'flex';
    bubble.style.animation = '';
    void bubble.offsetWidth;
    bubble.style.animation = 'bubble-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';

    if (jogo2SpeechTimeout) clearTimeout(jogo2SpeechTimeout);
    jogo2SpeechTimeout = setTimeout(() => {
        bubble.style.animation = 'bubble-pop-out 0.25s ease-in forwards';
        setTimeout(() => {
            bubble.style.display = 'none';
            bubble.style.animation = '';
        }, 250);
    }, 4500);
}

function triggerOpponentQuote(type) {
    const activePlayer = getActiveJogo2Player();

    // 1. Mostrar o balão visual APENAS quando for o turno do jogador humano (reagindo às jogadas de quem está jogando)
    if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
        const selIdx = getSelectedOpponentIndex();
        const quotes = JOGO2_OPPONENT_QUOTES[selIdx];
        if (quotes && quotes[type]) {
            const list = quotes[type];
            const text = list[Math.floor(Math.random() * list.length)];
            showOpponentSpeech(text);
        }
    }

    // 2. Falar a narração neutra e objetiva padrão em áudio via TTS do sistema (evitando misturar vozes)
    playSystemFallbackTTS(type, activePlayer);
}

function playSystemFallbackTTS(type, activePlayer) {
    if (type === 'correctAnswer') {
        speak('Acertou! Parabéns!');
    } else if (type === 'wrongAnswer') {
        const currentSpace = jogo2Spaces[jogo2Position];
        const specialChallenge = (currentSpace && currentSpace.type === 'challenge') ? currentSpace.challenge : null;
        if (specialChallenge && specialChallenge.type === 'back_to_start') {
            speak('Resposta incorreta! Você volta para o início do jogo.');
        } else if ([13, 23, 36].includes(jogo2Position)) {
            speak('Resposta incorreta! Mas como já foi penalizado, você não volta casas.');
        } else {
            let penaltyAmount = 2;
            if (specialChallenge && specialChallenge.type === 'back') {
                penaltyAmount = specialChallenge.amount;
            }
            speak(`Resposta incorreta! Você volta ${penaltyAmount} ${penaltyAmount === 1 ? 'casa' : 'casas'}.`);
        }
    } else if (type === 'wonGame') {
        speak(`Parabéns, ${activePlayer.name}! Você completou a trilha!`);
    } else if (type === 'lostGame') {
        speak(`Fim de jogo! ${activePlayer.name} venceu a partida.`);
    } else if (type === 'turnStart') {
        speak(`Vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);
    }
}


function triggerExplosionEffect(spaceIndex) {
    playExplosionSound();
    const overlay = document.getElementById('jogo2-effects-overlay');
    const spaceEl = document.querySelector(`.jogo2-space[data-space-index="${spaceIndex}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !spaceEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const rect = spaceEl.getBoundingClientRect();

    const effect = document.createElement('div');
    effect.className = 'special-effect-explosion';
    effect.style.position = 'absolute';
    effect.style.top = `${rect.top - parentRect.top + rect.height / 2}px`;
    effect.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
    effect.style.transform = 'translate(-50%, -50%)';
    effect.style.fontSize = '2.5rem';
    effect.textContent = '💥';
    
    overlay.appendChild(effect);

    effect.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(2.2)', opacity: 0 }
    ], {
        duration: 550,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    });

    setTimeout(() => effect.remove(), 550);
}

function triggerSpiderWebEffect(spaceIndex) {
    const overlay = document.getElementById('jogo2-effects-overlay');
    const spaceEl = document.querySelector(`.jogo2-space[data-space-index="${spaceIndex}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !spaceEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const rect = spaceEl.getBoundingClientRect();

    const web = document.createElement('div');
    web.style.position = 'absolute';
    web.style.top = `${rect.top - parentRect.top + rect.height / 2}px`;
    web.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
    web.style.transform = 'translate(-50%, -50%)';
    web.style.fontSize = '3.5rem';
    web.style.zIndex = '10';
    web.textContent = '🕸️';
    web.style.pointerEvents = 'none';

    overlay.appendChild(web);

    web.animate([
        { transform: 'translate(-50%, -50%) scale(0.4) rotate(0deg)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.25) rotate(15deg)', opacity: 1, offset: 0.25 },
        { transform: 'translate(-50%, -50%) scale(1.0) rotate(-15deg)', offset: 0.5 },
        { transform: 'translate(-50%, -50%) scale(1.05) rotate(8deg)', offset: 0.75 },
        { transform: 'translate(-50%, -50%) scale(1.0) rotate(0deg)', opacity: 1, offset: 0.9 },
        { transform: 'translate(-50%, -50%) scale(1.3) rotate(0deg)', opacity: 0 }
    ], {
        duration: 2600,
        easing: 'ease-in-out'
    });

    try {
        if ("AudioContext" in window || "webkitAudioContext" in window) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.45);
            gain.gain.setValueAtTime(0.09, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
            osc.start();
            osc.stop(ctx.currentTime + 0.52);
        }
    } catch (e) {}

    setTimeout(() => web.remove(), 2600);
}

function triggerBeeOrButterflyEffect(fromPos, toPos, isButterfly) {
    const overlay = document.getElementById('jogo2-effects-overlay');
    const startEl = document.querySelector(`.jogo2-space[data-space-index="${fromPos}"]`);
    const endEl = document.querySelector(`.jogo2-space[data-space-index="${toPos}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !startEl || !endEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const startRect = startEl.getBoundingClientRect();
    const endRect = endEl.getBoundingClientRect();

    const startX = startRect.left - parentRect.left + startRect.width / 2;
    const startY = startRect.top - parentRect.top + startRect.height / 2;
    const endX = endRect.left - parentRect.left + endRect.width / 2;
    const endY = endRect.top - parentRect.top + endRect.height / 2;

    const flyer = document.createElement('div');
    flyer.className = 'flyer-effect';
    flyer.style.position = 'absolute';
    flyer.style.top = `${startY}px`;
    flyer.style.left = `${startX}px`;
    flyer.style.transform = 'translate(-50%, -50%)';
    flyer.style.fontSize = '2.8rem';
    flyer.style.zIndex = '60';
    flyer.textContent = isButterfly ? '🦋' : '🐝';

    overlay.appendChild(flyer);

    const trailInterval = setInterval(() => {
        const rect = flyer.getBoundingClientRect();
        const star = document.createElement('span');
        star.textContent = '✨';
        star.style.position = 'absolute';
        star.style.left = `${rect.left - parentRect.left + rect.width / 2 + (Math.random() * 12 - 6)}px`;
        star.style.top = `${rect.top - parentRect.top + rect.height / 2 + (Math.random() * 12 - 6)}px`;
        star.style.fontSize = '1.1rem';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '55';
        overlay.appendChild(star);
        star.animate([
            { transform: 'scale(1) rotate(0deg)', opacity: 1 },
            { transform: 'scale(0.2) rotate(180deg)', opacity: 0 }
        ], { duration: 600 });
        setTimeout(() => star.remove(), 600);
    }, 45);

    flyer.animate([
        { left: `${startX}px`, top: `${startY}px`, transform: 'translate(-50%, -50%) scale(1)' },
        { left: `${(startX + endX) / 2}px`, top: `${Math.min(startY, endY) - 90}px`, transform: 'translate(-50%, -50%) scale(1.5)' },
        { left: `${endX}px`, top: `${endY}px`, transform: 'translate(-50%, -50%) scale(1)' }
    ], {
        duration: 1200,
        easing: 'ease-in-out'
    });

    try {
        if ("AudioContext" in window || "webkitAudioContext" in window) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            if (isButterfly) {
                osc.frequency.setValueAtTime(320, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 1.0);
            } else {
                osc.frequency.setValueAtTime(160, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(190, ctx.currentTime + 0.3);
                osc.frequency.linearRampToValueAtTime(160, ctx.currentTime + 0.6);
                osc.frequency.linearRampToValueAtTime(190, ctx.currentTime + 0.9);
            }
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.15);
            osc.start();
            osc.stop(ctx.currentTime + 1.25);
        }
    } catch (e) {}

    setTimeout(() => {
        clearInterval(trailInterval);
        flyer.remove();
    }, 1200);
}

// ============================================================
// TRILHA EM GRID CONTÍGUO – Estilo "Jogo da Geniação Contínua"
// Grade 11 colunas × 12 linhas.
// A trilha reproduz o formato espiral exato, com as quebras
// e espaços corretos entre os corredores.
// ============================================================

const JOGO2_GRID_COLS = 11;
const JOGO2_GRID_ROWS = 12;

const JOGO2_GRID_PATH = [
    // 1. Início: desce a borda esquerda
    [0,0], [0,1], [0,2], [0,3], 
    // 2. Curva para a direita e sobe formando o U inicial
    [1,3], [2,3], [3,3], [3,2], [3,1], [3,0],
    // 3. Topo indo para a direita
    [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0],
    // 4. Desce toda a borda direita
    [10,1], [10,2], [10,3], [10,4], [10,5], [10,6], [10,7], [10,8], [10,9],
    // 5. Curva para a esquerda e desce um pequeno degrau
    [9,9], [8,9], [7,9], [7,10], [7,11],
    // 6. Vai até a borda esquerda pelo fundo
    [6,11], [5,11], [4,11], [3,11], [2,11], [1,11], [0,11],
    // 7. Sobe a borda esquerda (deixando gap com o início)
    [0,10], [0,9], [0,8], [0,7], [0,6], [0,5],
    // 8. Entra para a direita
    [1,5], [2,5],
    // 9. Desce formando o corredor final
    [2,6], [2,7], [2,8], [2,9]
];

const jogo2Players = [
    { name: 'Jogador 1', position: 0, avatar: 'azul', trapAttempts: 0 },
    { name: 'Jogador 2', position: 0, avatar: 'vermelho', trapAttempts: 0 }
];

// Cores vibrantes para cada virtude
function getSpaceVirtueColor(virtue, type) {
    if (type === 'start') return '#dc2626';
    if (type === 'finish') return '#f59e0b';
    const colors = {
        sabedoria:      '#d8eba5',
        coragem:        '#ff5757',
        humanidade:     '#ffad18',
        justica:        '#ffd400',
        temperanca:     '#8bd3e1',
        moderacao:      '#8bd3e1',
        transcendencia: '#b568e8',
        desafio:        '#8b5cf6',
        penalidade:     '#082b1d'
    };
    return colors[virtue] || getJogo2VirtueMeta(virtue).color || '#64748b';
}

function updateJogo2SVGRoute() {
    const svg = document.getElementById('jogo2-board-route-svg');
    if (svg) svg.style.display = 'none';
}


function announceJogo2(message) {
    const live = document.getElementById('jogo2-position-status');
    if (live) live.textContent = message;
}

function getActiveJogo2Player() {
    return jogo2Players[activeJogo2PlayerIndex];
}

function getJogo2ActivePlayers() {
    return jogo2Players.slice(0, selectedJogo2PlayerCount);
}

function isJogo2RobotTurn() {
    return jogo2SoloMode && activeJogo2PlayerIndex === 1;
}

function syncJogo2Position() {
    if (activeJogo2PlayerIndex >= selectedJogo2PlayerCount) {
        activeJogo2PlayerIndex = 0;
    }
    jogo2Position = getActiveJogo2Player().position;
}

function normalizeJogo2Virtue(value) {
    const normalized = (value || 'desafio')
        .toString()
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const aliases = {
        justica: 'justica',
        moderacao: 'moderacao',
        temperanca: 'temperanca',
        trancendencia: 'transcendencia'
    };

    const virtue = aliases[normalized] || normalized;
    return JOGO2_VIRTUE_META[virtue] ? virtue : 'desafio';
}

function getJogo2VirtueMeta(virtue) {
    return JOGO2_VIRTUE_META[normalizeJogo2Virtue(virtue)] || JOGO2_VIRTUE_META.desafio;
}

function getJogo2MatchingVirtues(virtue) {
    const normalized = normalizeJogo2Virtue(virtue);
    if (normalized === 'temperanca' || normalized === 'moderacao') {
        return ['temperanca', 'moderacao'];
    }
    return [normalized];
}

function parseJogo2CardItem(item, fallbackIndex = 0) {
    let meta = {};
    try {
        meta = item.link ? JSON.parse(item.link) : {};
    } catch (e) {
        meta = {};
    }

    return {
        id: item.pair_id || item.pairId || item.id?.toString() || `jogo2-${fallbackIndex}`,
        question: item.word || meta.question || '',
        options: Array.isArray(meta.options) && meta.options.length >= 3 ? meta.options.slice(0, 3) : ['', '', ''],
        answerIndex: Number.isInteger(Number(meta.answerIndex)) ? Number(meta.answerIndex) : 0,
        virtue: normalizeJogo2Virtue(meta.virtue),
        icon: meta.icon || getJogo2VirtueMeta(meta.virtue).icon,
        spaceNumber: Number(meta.spaceNumber) || 0
    };
}

function serializeJogo2CardItem(card, exerciseId) {
    return {
        exercise_id: exerciseId,
        word: card.question,
        pair_id: card.id,
        role: JOGO2_CARD_ROLE,
        link: JSON.stringify({
            options: card.options,
            answerIndex: card.answerIndex,
            virtue: card.virtue,
            icon: card.icon,
            spaceNumber: card.spaceNumber || 0
        })
    };
}

async function getOrCreateJogo2CardsContainer() {
    if (supabaseClient) {
        const container = await getOrCreateGameContainer(JOGO2_CARDS_SEED_KEY, JOGO2_CARDS_TITLE);
        if (container.fromSupabase) {
            const { data, error } = await supabaseClient
                .from('exercise_items')
                .select('*')
                .eq('exercise_id', container.id)
                .eq('role', JOGO2_CARD_ROLE)
                .order('id', { ascending: true });

            if (error) throw error;
            return {
                ...container,
                items: (data || []).map(parseJogo2CardItem)
            };
        }
    }

    return new Promise((resolve, reject) => {
        const tx = db.transaction(['exercises'], 'readonly');
        tx.onerror = () => reject(tx.error);
        tx.objectStore('exercises').getAll().onsuccess = (e) => {
            const found = (e.target.result || []).find(ex => ex.seedKey === JOGO2_CARDS_SEED_KEY);
            if (found) {
                resolve(found);
                return;
            }

            const writeTx = db.transaction(['exercises'], 'readwrite');
            writeTx.onerror = () => reject(writeTx.error);
            const request = writeTx.objectStore('exercises').add({ title: JOGO2_CARDS_TITLE, items: [], seedKey: JOGO2_CARDS_SEED_KEY, visible: false });
            request.onsuccess = (ev) => {
                resolve({ id: ev.target.result, title: JOGO2_CARDS_TITLE, items: [], seedKey: JOGO2_CARDS_SEED_KEY, visible: false });
            };
        };
    });
}

async function saveJogo2CardsContainer(container) {
    container.items = jogo2CustomCards;

    if (container.fromSupabase && supabaseClient) {
        const { error: deleteError } = await supabaseClient
            .from('exercise_items')
            .delete()
            .eq('exercise_id', container.id)
            .eq('role', JOGO2_CARD_ROLE);
        if (deleteError) throw deleteError;

        const dbItems = jogo2CustomCards.map(card => serializeJogo2CardItem(card, container.id));
        if (dbItems.length > 0) {
            const { error: insertError } = await supabaseClient.from('exercise_items').insert(dbItems);
            if (insertError) throw insertError;
        }
        return;
    }

    await putLocalGameContainer(container);
}

function updateJogo2SetupSelection() {
    document.querySelectorAll('.jogo2-player-count-btn').forEach(button => {
        button.classList.toggle('active', Number(button.dataset.playerCount) === selectedJogo2PlayerCount);
    });
}

// Carregar cartas customizadas da base local ou do Supabase
async function loadJogo2CustomCards() {
    try {
        const container = await getOrCreateJogo2CardsContainer();
        if (container && container.items) {
            jogo2CustomCards = Array.isArray(container.items) ? container.items : [];
        } else {
            jogo2CustomCards = [];
        }
    } catch (e) {
        console.error('Erro ao carregar cartas do jogo2:', e);
        jogo2CustomCards = [];
    }

    // Importação inicial automática de fábrica caso a base esteja vazia e nunca inicializada com a versão v2 (sem emojis nas opções)
    if (!localStorage.getItem('jogo2_factory_initialized_v2')) {
        jogo2CustomCards = [];
        let defaultIdCounter = 1;
        for (let virtue in jogo2DefaultQuestions) {
            const list = jogo2DefaultQuestions[virtue];
            const icon = getJogo2VirtueMeta(virtue).icon;
            list.forEach(item => {
                jogo2CustomCards.push({
                    id: `factory-${defaultIdCounter++}`,
                    question: item.q,
                    options: [...item.opt],
                    answerIndex: item.ans,
                    virtue: virtue,
                    icon: icon,
                    spaceNumber: 0
                });
            });
        }
        try {
            const container = await getOrCreateJogo2CardsContainer();
            await saveJogo2CardsContainer(container);
            localStorage.setItem('jogo2_factory_initialized_v2', 'true');
        } catch (err) {
            console.error('Erro ao salvar importação inicial de fábrica:', err);
        }
    }
    
    // Atualizar o contador no gerenciador
    const countSpan = document.getElementById('jogo2-custom-count');
    if (countSpan) countSpan.textContent = jogo2CustomCards.length;
}

function getFirstPlayerDefaultName(session) {
    let rawName = '';
    
    // Tenta pegar o name do user_metadata
    if (session?.user?.user_metadata?.name) {
        rawName = session.user.user_metadata.name;
    } 
    // Tenta pegar o full_name do user_metadata
    else if (session?.user?.user_metadata?.full_name) {
        rawName = session.user.user_metadata.full_name;
    }
    // Tenta extrair do e-mail
    else if (session?.user?.email) {
        const parts = session.user.email.split('@')[0].split('.');
        rawName = parts[0];
    }
    
    // Fallback absoluto se vazio
    if (!rawName) return 'Elefante';
    
    // Limpa espaços extras e pega apenas o primeiro nome
    const firstName = rawName.trim().split(/\s+/)[0];
    
    // Capitaliza apenas a primeira letra (ex: sidney -> Sidney)
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}

// ============================================================
// SISTEMA DE ADVERSÁRIOS (dados fixos — fotos em img/opponents/)
// ============================================================

// Para trocar uma foto, basta substituir o arquivo correspondente em img/opponents/
// e manter o mesmo nome de arquivo.
const JOGO2_OPPONENTS_FIXED = [
    { id: 0, name: 'Silvio Santos',   photo: 'img/opponents/silvio.png'   },
    { id: 1, name: 'Hebe Camargo',    photo: 'img/opponents/hebe.png'     },
    { id: 2, name: 'Albert Einstein', photo: 'img/opponents/einstein.png' }
];

const JOGO2_SELECTED_OPPONENT_KEY = 'jogo2_selected_opponent';

function getSelectedOpponentIndex() {
    const v = localStorage.getItem(JOGO2_SELECTED_OPPONENT_KEY);
    return v !== null ? parseInt(v) : 0;
}

function setSelectedOpponentIndex(idx) {
    localStorage.setItem(JOGO2_SELECTED_OPPONENT_KEY, String(idx));
}

function renderJogo2OpponentCards() {
    const container = document.getElementById('jogo2-opponent-cards');
    if (!container) return;

    const selectedIdx = getSelectedOpponentIndex();
    container.innerHTML = '';

    JOGO2_OPPONENTS_FIXED.forEach((opp, idx) => {
        const isSelected = idx === selectedIdx;

        const card = document.createElement('div');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        card.style.cssText = `
            display: flex; flex-direction: column; align-items: center; gap: 8px;
            padding: 12px 10px 8px; border-radius: 16px; cursor: pointer;
            border: 3px solid ${isSelected ? '#a855f7' : '#e2e8f0'};
            background: ${isSelected ? '#faf5ff' : '#f8fafc'};
            box-shadow: ${isSelected ? '0 6px 20px rgba(168,85,247,0.25)' : '0 2px 6px rgba(0,0,0,0.06)'};
            transition: all 0.2s; min-width: 96px; position: relative;
            transform: ${isSelected ? 'scale(1.06)' : 'scale(1)'};
        `;

        // Área da foto
        const photoWrap = document.createElement('div');
        photoWrap.style.cssText = `
            width: 66px; height: 66px; border-radius: 50%; overflow: hidden;
            border: 3px solid ${isSelected ? '#a855f7' : '#cbd5e1'};
            background: #f1f5f9; position: relative;
            box-shadow: ${isSelected ? '0 0 0 4px rgba(168,85,247,0.15)' : 'none'};
        `;
        photoWrap.innerHTML = `
            <img src="${opp.photo}" alt="${opp.name}"
                 style="width:100%;height:100%;object-fit:cover;"
                 onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:2.4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>👤</span>';" />
        `;

        // Badge de selecionado
        if (isSelected) {
            const badge = document.createElement('div');
            badge.style.cssText = `
                position: absolute; bottom: -2px; right: -2px;
                background: #a855f7; color: white; border-radius: 50%;
                width: 24px; height: 24px; display: flex; align-items: center;
                justify-content: center; font-size: 0.8rem;
                box-shadow: 0 2px 8px rgba(168,85,247,0.5);
                border: 2px solid white;
            `;
            badge.textContent = '✓';
            photoWrap.appendChild(badge);
        }

        // Nome (somente leitura)
        const nameLabel = document.createElement('span');
        nameLabel.textContent = opp.name;
        nameLabel.style.cssText = `
            font-family: 'Outfit'; font-size: 0.72rem; font-weight: 700;
            color: ${isSelected ? '#7e22ce' : '#475569'}; text-align: center;
            max-width: 88px; line-height: 1.1;
        `;

        // Clicar no card seleciona o adversário
        const selectOpponent = () => {
            setSelectedOpponentIndex(idx);
            jogo2Players[1].name = opp.name;
            jogo2Players[1].avatar = opp.photo;
            const nameEl = document.getElementById('jogo2-player-name-1');
            if (nameEl) nameEl.value = opp.name;
            renderJogo2OpponentCards();
            renderJogo2PlayerLegend();
        };
        card.addEventListener('click', selectOpponent);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') selectOpponent(); });

        card.appendChild(photoWrap);
        card.appendChild(nameLabel);
        container.appendChild(card);
    });
}


function showJogo2Setup() {

    const container = document.getElementById('game-jogo2-container');
    if (container) container.classList.add('is-setup');
    if (container && !container.dataset.submitGuardAttached) {
        container.addEventListener('submit', (e) => {
            e.preventDefault();
        }, true);
        container.dataset.submitGuardAttached = '1';
    }
    
    // Configurar botão de gerenciar cartas (exibe se for administrador)
    const manageBtn = document.getElementById('btn-jogo2-manage');
    if (manageBtn) {
        manageBtn.style.display = isAdmin ? 'inline-block' : 'none';
        manageBtn.onclick = () => showJogo2Manager();
    }

    // Configurar os listeners de clique para botões de quantidade de jogadores
    if (container) {
        container.querySelectorAll('.jogo2-player-count-btn').forEach(btn => {
            btn.onclick = (e) => {
                selectedJogo2PlayerCount = Number(e.currentTarget.dataset.playerCount);
                updateJogo2SetupSelection();
                updateJogo2SetupPlayersList();
            };
        });
    }

    // Listener do botao iniciar
    const startBtn = document.getElementById('btn-jogo2-start');
    if (startBtn) {
        startBtn.onclick = () => startJogo2Game();
    }

    // Listener do botao novo jogo do header
    const headerNewGameBtn = document.getElementById('btn-jogo2-new-game');
    if (headerNewGameBtn) {
        headerNewGameBtn.onclick = () => {
            clearAllJogo2Timeouts();
            showJogo2Setup();
        };
    }

    // Listener do botao rolar dado
    const rollBtn = document.getElementById('btn-jogo2-roll');
    if (rollBtn) {
        rollBtn.onclick = () => rollJogo2Die();
    }

    // Listener do botao concluir carta (passar vez)
    const completeBtn = document.getElementById('btn-jogo2-complete');
    if (completeBtn) {
        completeBtn.onclick = () => completeJogo2Card();
    }

    // Configurar listeners de fechar modal de gerenciamento
    const closeManagerBtn = document.getElementById('btn-jogo2-manager-close');
    if (closeManagerBtn) {
        closeManagerBtn.onclick = () => hideJogo2Manager();
    }
    
    // Listener de submissão do formulário de novas cartas
    const form = document.getElementById('jogo2-card-form');
    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            await saveJogo2CustomCard();
        };
    }

    jogo2Started = false;
    jogo2Rolling = false;
    jogo2WaitingCard = false;
    pendingJogo2Challenge = null;
    activeJogo2PlayerIndex = 0;

    // Ativar o Modo Solo vs Computador por padrão para 1 jogador
    const soloCheckbox = document.getElementById('jogo2-solo-mode-checkbox');
    if (soloCheckbox) {
        soloCheckbox.checked = true;
        toggleJogo2SoloMode(soloCheckbox);
    } else {
        jogo2SoloMode = true;
        const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
        jogo2Players[1].name = selOpp ? selOpp.name : 'Computador';
        jogo2Players[1].avatar = selOpp ? selOpp.photo : null;
    }

    jogo2Players.forEach((player, i) => {
        player.position = 0;
    });
    jogo2Position = 0;

    // Carrega avatar e nome do Jogador 1
    jogo2Players[0].avatar = localStorage.getItem('jogo2_player1_avatar') || null;
    
    // Resetar roleta
    jogo2WheelRotation = 30; // 30 graus inicial aponta para a fatia 1 no topo
    const arrow = document.getElementById('jogo2-wheel-arrow');
    if (arrow) arrow.style.transform = 'translate(-50%, -50%) rotate(30deg)';
    
    selectedJogo2PlayerCount = 2; // Sempre 2 jogadores
    
    if (supabaseClient) {
        supabaseClient.auth.getSession().then(({ data }) => {
            const savedP1Name = localStorage.getItem('jogo2_player1_name');
            const defaultName = savedP1Name || getFirstPlayerDefaultName(data?.session);
            jogo2Players[0].name = defaultName;
            updateJogo2SetupPlayersList();
            renderJogo2PlayerLegend();
        }).catch(err => {
            console.error("Erro ao obter sessão para o primeiro jogador:", err);
            const savedP1Name = localStorage.getItem('jogo2_player1_name');
            jogo2Players[0].name = savedP1Name || 'Jogador 1';
            updateJogo2SetupPlayersList();
            renderJogo2PlayerLegend();
        });
    } else {
        const savedP1Name = localStorage.getItem('jogo2_player1_name');
        jogo2Players[0].name = savedP1Name || 'Jogador 1';
        updateJogo2SetupPlayersList();
        renderJogo2PlayerLegend();
    }
    
    loadJogo2CustomCards().then(() => {
        updateJogo2Card(jogo2Spaces[0]);
    });
    
    announceJogo2('Configure os jogadores');

    // Renderiza os cards de adversários e aplica o selecionado ao jogador 2
    renderJogo2OpponentCards();
    const opps = loadJogo2Opponents();
    const selIdx = getSelectedOpponentIndex();
    if (opps[selIdx]) {
        jogo2Players[1].name = opps[selIdx].name || `Adversário ${selIdx + 1}`;
        jogo2Players[1].avatar = opps[selIdx].photo || null;
    }
}

function toggleJogo2SoloMode(checkbox) {
    jogo2SoloMode = !!checkbox.checked;
    
    const player2 = jogo2Players[1];
    const input2 = document.getElementById('jogo2-player-name-1');
    const oppPicker = document.getElementById('jogo2-opponent-picker');
    
    if (jogo2SoloMode) {
        if (oppPicker) oppPicker.style.display = 'block';
        const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
        player2.name = selOpp ? selOpp.name : 'Computador';
        player2.avatar = selOpp ? selOpp.photo : null;
        if (input2) {
            input2.value = player2.name;
            input2.disabled = true;
            input2.style.background = '#f1f5f9';
            input2.style.color = '#94a3b8';
        }
    } else {
        if (oppPicker) oppPicker.style.display = 'none';
        player2.name = 'Jogador 2';
        player2.avatar = null;
        if (input2) {
            input2.value = player2.name;
            input2.disabled = false;
            input2.style.background = '#ffffff';
            input2.style.color = '#475569';
        }
    }
    // Re-renderizar lista e legenda de jogadores para refletir o avatar correto
    updateJogo2SetupPlayersList();
    renderJogo2PlayerLegend();
}

function updateJogo2SetupPlayersList() {
    const listContainer = document.getElementById('jogo2-players-setup-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    for (let i = 0; i < 2; i++) {
        const player = jogo2Players[i];
        
        const row = document.createElement('div');
        row.className = 'jogo2-player-setup-row';
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.gap = '15px';
        row.style.marginBottom = '15px';
        
        const borderCol = i === 0 ? '#3b82f6' : '#ec4899';
        const bgCol = i === 0 ? '#dbeafe' : '#fce7f3';
        const iconHTML = getPlayerIconHTML(player, i, '100%');
        const pawnHTML = `<span class="jogo2-player-pawn player-pawn-${i + 1}" style="position:relative; width:40px; height:40px; border-radius:50%; border:3px solid ${borderCol}; background:${bgCol}; overflow:hidden; display:grid; place-items:center; font-size:1.35rem; box-shadow:0 3px 6px rgba(0,0,0,0.1); padding:0;">${iconHTML}</span>`;

        const labelText = i === 0 ? 'Jogador 1:' : (jogo2SoloMode ? 'Adversário:' : 'Jogador 2:');
        const placeholderText = i === 0 ? 'Nome do Jogador 1' : (jogo2SoloMode ? 'Nome do Adversário' : 'Nome do Jogador 2');
        const fallbackText = i === 0 ? 'Jogador 1' : (jogo2SoloMode ? 'Adversário' : 'Jogador 2');

        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px; width: 170px; flex-shrink: 0;">
                ${pawnHTML}
                <strong style="font-size:0.95rem; color:#475569; width:120px;">${labelText}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:8px; flex:1;">
                <input type="text" id="jogo2-player-name-${i}" value="${player.name}" placeholder="${placeholderText}" style="flex:1; padding:10px 14px; border:2px solid #cbd5e1; border-radius:12px; font-family:'Outfit'; font-size:0.95rem; font-weight:700;" />
                
                <!-- Botão de Upload de Foto (Apenas para humanos — Jogador 1 sempre, Jogador 2 se não for solo) -->
                ${!(i === 1 && jogo2SoloMode) ? `
                    <label style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 10px 12px; border-radius: 12px; border: 2px solid #e2e8f0; background: #f8fafc; color: #64748b; font-size: 0.8rem; font-weight: 700; cursor: pointer; font-family: 'Outfit'; height: 42px; flex-shrink: 0;">
                        <i class="fas fa-camera"></i> Foto
                        <input type="file" accept="image/*" class="jogo2-photo-upload" style="display:none;" />
                    </label>
                ` : ''}
            </div>
        `;
        listContainer.appendChild(row);
        
        const input = row.querySelector('input');
        input.addEventListener('input', (e) => {
            player.name = e.target.value.trim() || fallbackText;
            localStorage.setItem(`jogo2_player${i + 1}_name`, player.name);
            renderJogo2PlayerLegend();
        });

        const fileInput = row.querySelector('.jogo2-photo-upload');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = ev => {
                    player.avatar = ev.target.result;
                    localStorage.setItem(`jogo2_player${i + 1}_avatar`, ev.target.result);
                    updateJogo2SetupPlayersList();
                    renderJogo2PlayerLegend();
                };
                reader.readAsDataURL(file);
            });
        }
    }
}

function renderJogo2PlayerLegend() {
    const legend = document.getElementById('jogo2-player-legend');
    if (!legend) return;

    legend.innerHTML = jogo2Players.map((player, index) => {
        const iconHTML = getPlayerIconHTML(player, index, '26px');
        return `
            <span class="jogo2-player-chip ${index === activeJogo2PlayerIndex ? 'active' : ''}">
                <span class="jogo2-player-pawn player-pawn-${index + 1}" aria-hidden="true" style="${player.avatar ? 'overflow:hidden;padding:0;display:inline-grid;place-items:center;' : ''}">${iconHTML}</span>
                ${player.name}
            </span>
        `;
    }).join('');
}

function showJogo2WaitingForRollCard() {
    const card = document.getElementById('jogo2-current-card');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const kicker = document.getElementById('jogo2-card-kicker');
    const iconArea = document.getElementById('jogo2-card-icon-area');
    const qTitle = document.getElementById('jogo2-card-question');
    const qText = document.getElementById('jogo2-card-text');
    const completeBtn = document.getElementById('btn-jogo2-complete');

    if (!card) return;

    // A troca de turno precisa limpar qualquer auto-avanço pendente do jogador anterior,
    // senão o card pode ficar com contagem regressiva "vazada" no estado de espera.
    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }
    
    if (optionsContainer) optionsContainer.style.display = 'none';
    if (feedbackArea) feedbackArea.style.display = 'none';
    if (qText) qText.style.display = 'none';
    if (completeBtn) {
        completeBtn.disabled = true;
        completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
    }
    
    const activePlayer = getActiveJogo2Player();
    if (kicker) kicker.textContent = `Vez de ${activePlayer ? activePlayer.name : 'Jogador'}`;
    if (iconArea) iconArea.textContent = '❓';
    if (qTitle) qTitle.textContent = 'Gire a roleta para jogar!';
    
    card.className = 'jogo2-card';
}

function advanceJogo2PlayerTurn() {
    if (!jogo2Started) return;
    activeJogo2PlayerIndex = (activeJogo2PlayerIndex + 1) % selectedJogo2PlayerCount;
    syncJogo2Position();
    
    const activePlayer = getActiveJogo2Player();
    
    if (activePlayer.skipNextTurn) {
        activePlayer.skipNextTurn = false;
        renderJogo2Board();
        
        const card = document.getElementById('jogo2-current-card');
        const optionsContainer = document.getElementById('jogo2-card-options');
        const feedbackArea = document.getElementById('jogo2-card-feedback');
        const kicker = document.getElementById('jogo2-card-kicker');
        const iconArea = document.getElementById('jogo2-card-icon-area');
        const qTitle = document.getElementById('jogo2-card-question');
        const qText = document.getElementById('jogo2-card-text');
        
        if (optionsContainer) optionsContainer.style.display = 'none';
        if (feedbackArea) feedbackArea.style.display = 'none';
        if (kicker) kicker.textContent = `Vez de ${activePlayer.name}`;
        if (iconArea) iconArea.textContent = '🚫';
        if (qTitle) qTitle.textContent = 'Passou a vez!';
        if (qText) {
            qText.style.display = 'block';
            qText.innerHTML = 'Você está cumprindo uma penalidade e não joga nesta rodada.';
        }
        if (card) card.className = 'jogo2-card virtue-penalidade';
        
        announceJogo2(`${activePlayer.name} perdeu a vez devido à penalidade!`);
        speak(`${activePlayer.name} perdeu a vez.`);
        
        const rollBtn = document.getElementById('btn-jogo2-roll');
        if (rollBtn) rollBtn.disabled = true;
        
        jogo2TurnTimeout = setTimeout(() => {
            advanceJogo2PlayerTurn();
        }, 3500);
        return;
    }

    renderJogo2Board();
    showJogo2WaitingForRollCard();
    
    announceJogo2(`Agora é a vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);

    setupJogo2RollButtonListeners();
    resetJogo2PowerMeter();

    const rollBtn = document.getElementById('btn-jogo2-roll');
    const labelEl = document.getElementById('btn-jogo2-roll-label');

    if (isJogo2RobotTurn()) {
        if (rollBtn) rollBtn.disabled = true;
        if (labelEl) labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Pensando...`;
        
        triggerOpponentQuote('turnStart');
        const waitForAnimation = () => {
            if (jogo2Animating) {
                jogo2WalkStepTimeout = setTimeout(waitForAnimation, 300);
                return;
            }
            jogo2RobotTurnTimeout = setTimeout(() => {
                if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
                rollJogo2Die();
            }, 3000);
        };
        waitForAnimation();
    } else {
        if (rollBtn) rollBtn.disabled = false;
        if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        speak(`Vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);
    }
}

function renderJogo2Board() {
    const container = document.getElementById('jogo2-board-path');
    if (!container) return;

    updateJogo2SVGRoute();
    syncJogo2Position();

    // Remover apenas as casas do jogo, preservando o banner central
    container.querySelectorAll('.jogo2-space').forEach(el => el.remove());

    jogo2Spaces.forEach((space, index) => {
        if (index >= JOGO2_GRID_PATH.length) return;

        const [col, row] = JOGO2_GRID_PATH[index];
        const tile = document.createElement('div');
        tile.className = `jogo2-space virtue-${space.virtue}`;
        if (space.type === 'challenge') tile.classList.add('challenge-space');
        if (index === jogo2Position) tile.classList.add('active');
        if (space.type === 'start') tile.classList.add('start');
        if (space.type === 'finish') tile.classList.add('finish');

        // Posicionar no grid
        tile.style.gridColumn = `${col + 1}`;
        tile.style.gridRow = `${row + 1}`;

        const color = getSpaceVirtueColor(space.virtue, space.type);
        tile.style.backgroundColor = color;

        tile.setAttribute('aria-label', `${index}. ${space.name || space.label}`);
        tile.dataset.spaceIndex = index;

        // Peões dos jogadores nesta casa
        const playerPawns = jogo2Players
            .map((player, playerIndex) => {
                if (player.position !== index) return '';
                const iconHTML = getPlayerIconHTML(player, playerIndex, '100%');
                return `
                    <span class="jogo2-player-pawn player-pawn-${playerIndex + 1} ${playerIndex === activeJogo2PlayerIndex ? 'active' : ''}" title="${player.name}" aria-label="${player.name}" style="${player.avatar ? 'overflow:hidden;padding:0;' : ''}">
                        ${iconHTML}
                    </span>
                `;
            })
            .join('');

        // Nome da força ou label
        const displayName = space.name || space.label;
        const badgeHTML = space.type !== 'start' && space.type !== 'finish' ? `<span class="jogo2-space-badge" style="color: ${color};">${index}</span>` : '';

        tile.innerHTML = `
            <span class="jogo2-space-name">${displayName}</span>
            ${badgeHTML}
            ${playerPawns ? `<span class="jogo2-player-pawns">${playerPawns}</span>` : ''}
        `;
        container.appendChild(tile);
    });

    renderJogo2PlayerLegend();
}

function flipJogo2Card(card) {
    card.style.transform = 'rotateY(10deg) scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'rotateY(0deg) scale(1)';
    }, 150);
}

// Abrir e fechar overlay do gerenciador
function showJogo2Manager() {
    const overlay = document.getElementById('jogo2-manager-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('open'), 10);
    }
    renderJogo2CustomQuestionsList();
}

function hideJogo2Manager() {
    const overlay = document.getElementById('jogo2-manager-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        setTimeout(() => overlay.style.display = 'none', 250);
    }
}

// Salvar pergunta customizada (cria ou atualiza existente)
async function saveJogo2CustomCard() {
    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (!qInput || !opt0Input || !opt1Input || !opt2Input) return;

    const question = qInput.value.trim();
    const opt0 = opt0Input.value.trim();
    const opt1 = opt1Input.value.trim();
    const opt2 = opt2Input.value.trim();
    const icon = iconInput ? iconInput.value.trim() : '❓';
    const virtue = normalizeJogo2Virtue(virtueSelect ? virtueSelect.value : 'desafio');
    const spaceNumber = spaceInput && spaceInput.value ? Number(spaceInput.value) : 0;
    
    let answerIndex = 0;
    for (let r of correctRadios) {
        if (r.checked) {
            answerIndex = Number(r.value);
            break;
        }
    }

    if (!question || !opt0 || !opt1 || !opt2) {
        alert('Por favor, preencha a pergunta e todas as três opções.');
        return;
    }

    if (jogo2EditingCardId !== null) {
        // Modo Edição: Atualizar carta existente
        const card = jogo2CustomCards.find(c => c.id === jogo2EditingCardId);
        if (card) {
            card.question = question;
            card.options = [opt0, opt1, opt2];
            card.answerIndex = answerIndex;
            card.virtue = virtue;
            card.icon = icon;
            card.spaceNumber = spaceNumber;
        }
    } else {
        // Modo Cadastro: Criar nova carta
        const newCard = {
            id: Date.now().toString(),
            question: question,
            options: [opt0, opt1, opt2],
            answerIndex: answerIndex,
            virtue: virtue,
            icon: icon,
            spaceNumber: spaceNumber
        };
        jogo2CustomCards.push(newCard);
    }

    // Salvar na base (Supabase ou Local)
    try {
        const container = await getOrCreateJogo2CardsContainer();
        await saveJogo2CardsContainer(container);
        
        const wasEditing = (jogo2EditingCardId !== null);
        
        // Resetar formulário e estados de edição
        cancelJogo2CardEdit();

        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;

        speak(wasEditing ? 'Pergunta atualizada com sucesso!' : 'Pergunta adicionada com sucesso!');
    } catch (e) {
        console.error('Erro ao salvar carta customizada:', e);
        alert('Ocorreu um erro ao salvar a carta.');
    }
}

// Iniciar edição de uma pergunta
function editJogo2CustomCard(cardId) {
    const card = jogo2CustomCards.find(c => c.id === cardId);
    if (!card) return;

    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (qInput) qInput.value = card.question;
    if (opt0Input) opt0Input.value = card.options[0];
    if (opt1Input) opt1Input.value = card.options[1];
    if (opt2Input) opt2Input.value = card.options[2];
    if (iconInput) iconInput.value = card.icon || '❓';
    if (virtueSelect) virtueSelect.value = card.virtue || 'desafio';
    if (spaceInput) spaceInput.value = card.spaceNumber && card.spaceNumber > 0 ? card.spaceNumber : '';
    
    if (correctRadios && correctRadios[card.answerIndex]) {
        correctRadios[card.answerIndex].checked = true;
    }

    jogo2EditingCardId = cardId;

    // Atualizar UI do botão de envio e mostrar botão cancelar
    const submitBtn = document.getElementById('jogo2-btn-submit');
    const cancelBtn = document.getElementById('jogo2-btn-cancel-edit');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Salvar Alterações';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    }
    if (cancelBtn) {
        cancelBtn.style.display = 'flex';
    }

    // Rolar suavemente até o topo do formulário para facilitar a visualização
    const formSection = document.querySelector('.manager-form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Cancelar edição e resetar o formulário
function cancelJogo2CardEdit() {
    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (qInput) qInput.value = '';
    if (opt0Input) opt0Input.value = '';
    if (opt1Input) opt1Input.value = '';
    if (opt2Input) opt2Input.value = '';
    if (iconInput) iconInput.value = '❓';
    if (virtueSelect) virtueSelect.value = 'sabedoria';
    if (spaceInput) spaceInput.value = '';
    if (correctRadios && correctRadios[0]) correctRadios[0].checked = true;

    jogo2EditingCardId = null;

    // Atualizar UI dos botões
    const submitBtn = document.getElementById('jogo2-btn-submit');
    const cancelBtn = document.getElementById('jogo2-btn-cancel-edit');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-floppy-disk"></i> Adicionar à Trilha';
        submitBtn.style.background = 'linear-gradient(135deg, #a855f7, #c084fc)';
    }
    if (cancelBtn) {
        cancelBtn.style.display = 'none';
    }
}

// Excluir pergunta customizada
async function deleteJogo2CustomCard(cardId) {
    if (!confirm('Tem certeza que deseja excluir esta pergunta?')) return;
    
    // Se estivermos editando a carta que está sendo excluída, cancela a edição
    if (jogo2EditingCardId === cardId) {
        cancelJogo2CardEdit();
    }

    jogo2CustomCards = jogo2CustomCards.filter(c => c.id !== cardId);
    
    try {
        const container = await getOrCreateJogo2CardsContainer();
        await saveJogo2CardsContainer(container);
        
        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;
        
        speak('Pergunta excluída.');
    } catch (e) {
        console.error('Erro ao excluir carta:', e);
    }
}

// Listar perguntas customizadas cadastradas no overlay
function renderJogo2CustomQuestionsList() {
    const list = document.getElementById('jogo2-custom-questions-list');
    if (!list) return;

    if (jogo2CustomCards.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; color: #64748b; padding: 20px; font-size: 0.9rem;">
                <i class="fas fa-circle-info" style="font-size: 1.5rem; color: #cbd5e1; margin-bottom: 6px; display: block;"></i>
                Nenhuma carta customizada criada ainda.
            </div>
        `;
        return;
    }

    list.innerHTML = jogo2CustomCards.map(c => `
        <div class="jogo2-custom-question-item" style="border-left: 5px solid ${
            getJogo2VirtueMeta(c.virtue).color
        };">
            <div class="jogo2-custom-question-content">
                <strong>${c.icon} ${c.question}</strong>
                <span>Certa: ${c.options[c.answerIndex]}</span>
                <span style="font-size: 0.72rem; color: #94a3b8; display: flex; gap: 8px;">
                    <span>Categoria: ${getJogo2VirtueMeta(c.virtue).label}</span>
                    <strong>•</strong>
                    <span style="color: #a855f7; font-weight: 850;">${c.spaceNumber && Number(c.spaceNumber) > 0 ? `Casa ${c.spaceNumber}` : 'Qualquer casa'}</span>
                </span>
            </div>
            <div style="display: flex; gap: 4px;">
                <button class="jogo2-custom-question-edit" onclick="editJogo2CustomCard('${c.id}')" title="Editar pergunta" style="background: #f0fdf4; color: #16a34a; border: none; border-radius: 8px; width: 32px; height: 32px; display: grid; place-items: center; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-pen-to-square"></i>
                </button>
                <button class="jogo2-custom-question-delete" onclick="deleteJogo2CustomCard('${c.id}')" title="Excluir pergunta" style="background: #fef2f2; color: #ef4444; border: none; border-radius: 8px; width: 32px; height: 32px; display: grid; place-items: center; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Restaurar perguntas padrao de fabrica no banco customizado
async function resetJogo2CardsToFactory() {
    if (!confirm('Deseja apagar todas as cartas customizadas atuais e restaurar as 21 perguntas padrões de fábrica?')) return;
    
    jogo2CustomCards = [];
    localStorage.removeItem('jogo2_factory_initialized');
    cancelJogo2CardEdit();

    // Re-importa as perguntas de fábrica para a base
    let defaultIdCounter = 1;
    for (let virtue in jogo2DefaultQuestions) {
        const list = jogo2DefaultQuestions[virtue];
        const icon = getJogo2VirtueMeta(virtue).icon;
        list.forEach(item => {
            jogo2CustomCards.push({
                id: `factory-${defaultIdCounter++}`,
                question: item.q,
                options: [...item.opt],
                answerIndex: item.ans,
                virtue: virtue,
                icon: icon,
                spaceNumber: 0
            });
        });
    }

    try {
        const container = await getOrCreateJogo2CardsContainer();
        await saveJogo2CardsContainer(container);
        localStorage.setItem('jogo2_factory_initialized', 'true');
        
        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;
        
        speak('Perguntas padrões restauradas com sucesso!');
        alert('As 21 perguntas padrões foram restauradas na sua lista!');
    } catch (e) {
        console.error('Erro ao restaurar perguntas de fábrica:', e);
        alert('Ocorreu um erro ao restaurar as perguntas.');
    }
}

// Disparar input de arquivo para CSV
function triggerJogo2CSVUpload() {
    const input = document.getElementById('jogo2-csv-file-input');
    if (input) input.click();
}

// Baixar modelo de CSV com cabeçalho de exemplo para o Excel
function downloadJogo2CSVTemplate() {
    const csvContent = "\ufeff" + // BOM UTF-8 para o Excel ler acentos perfeitamente em portugues
        "Pergunta;Opcao_A;Opcao_B;Opcao_C;Resposta_Correta_A_B_ou_C;Virtude;Casa\n" +
        "Qual inseto faz mel?;Abelha;Joaninha;Borboleta;A;sabedoria;12\n" +
        "O que significa ter coragem?;Enfrentar os medos;Fugir correndo;Bater nos outros;A;coragem;\n" +
        "O que é generosidade?;Compartilhar o lanche;Guardar tudo só para você;Gritar;A;humanidade;30\n" +
        "Trabalhar em equipe é...;Ajudar os colegas;Fazer tudo sozinho;Atrapalhar;A;justica;\n" +
        "O que é autocontrole?;Acalmar-se respirando fundo;Chutar a parede;Gritar muito;A;moderacao;\n" +
        "O que é gratidão?;Agradecer as coisas boas;Reclamar de tudo;Esquecer as ajudas;A;transcendencia;";
        
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "modelo_perguntas_trilha.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function escapeJogo2CSVValue(value) {
    const text = value === null || value === undefined ? '' : String(value);
    if (/[;"\n\r]/.test(text)) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
}

async function downloadJogo2RegisteredCardsCSV() {
    try {
        await loadJogo2CustomCards();
    } catch (e) {
        console.error('Erro ao carregar cartas para exportação:', e);
    }

    if (!jogo2CustomCards.length) {
        alert('Nenhuma carta cadastrada para baixar.');
        return;
    }

    const header = ['#', 'Pergunta', 'Opcao_A', 'Opcao_B', 'Opcao_C', 'Resposta_Correta_A_B_ou_C', 'Virtude', 'Casa'];
    const rows = jogo2CustomCards.map((card, index) => {
        const answerLetter = ['A', 'B', 'C'][Number(card.answerIndex)] || 'A';
        return [
            index + 1,
            card.question || '',
            card.options?.[0] || '',
            card.options?.[1] || '',
            card.options?.[2] || '',
            answerLetter,
            normalizeJogo2Virtue(card.virtue || 'desafio'),
            card.spaceNumber && Number(card.spaceNumber) > 0 ? Number(card.spaceNumber) : ''
        ];
    });

    const csvContent = "\ufeff" + [header, ...rows]
        .map(row => row.map(escapeJogo2CSVValue).join(';'))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `cartas_trilha_${today}.csv`;
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Tratar upload e parsing de arquivo CSV importado
function handleJogo2CSVImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        const text = e.target.result;
        const lines = text.split(/\r?\n/);
        const shouldReplaceCards = confirm('Deseja substituir todas as cartas atuais da trilha por este arquivo? Clique em Cancelar para apenas adicionar as cartas ao banco atual.');
        if (shouldReplaceCards) {
            jogo2CustomCards = [];
            cancelJogo2CardEdit();
        }
        const delimiter = (lines[0] || '').includes(';') ? ';' : ',';
        const headers = (lines[0] || '').split(delimiter).map(header =>
            header.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );
        const hasNamedHeaders = headers.some(header => ['pergunta', 'descricao', 'opcao_a', 'resposta 1'].includes(header));
        const getCSVValue = (parts, names, fallbackIndex) => {
            if (hasNamedHeaders) {
                for (let name of names) {
                    const normalizedName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const idx = headers.indexOf(normalizedName);
                    if (idx >= 0) return (parts[idx] || '').trim();
                }
            }
            return (parts[fallbackIndex] || '').trim();
        };
        
        let importCounter = 0;
        let errors = [];
        let indexCounter = Date.now();
        
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            let parts = line.split(delimiter);
            if (!parts.some(part => part.trim())) continue;

            if (parts.length < 5) {
                errors.push(`Linha ${i + 1}: formato inválido (mínimo de 5 colunas).`);
                continue;
            }

            const question = getCSVValue(parts, ['Pergunta', 'Descrição'], 0);
            const opt0 = getCSVValue(parts, ['Opcao_A', 'Opção_A', 'Resposta 1'], 1);
            const opt1 = getCSVValue(parts, ['Opcao_B', 'Opção_B', 'Resposta 2'], 2);
            const opt2 = getCSVValue(parts, ['Opcao_C', 'Opção_C', 'Resposta 3'], 3);
            let ansStr = getCSVValue(parts, ['Resposta_Correta_A_B_ou_C', 'Resposta Correta'], 4).toUpperCase();
            
            let virtue = normalizeJogo2Virtue(getCSVValue(parts, ['Virtude', 'Tipo'], 5) || 'desafio');
            
            const spaceValue = getCSVValue(parts, ['Casa'], 6);
            const spaceNum = spaceValue ? Number(spaceValue) : 0;

            if (!question || !opt0 || !opt1 || !opt2 || !ansStr) {
                errors.push(`Linha ${i + 1}: dados incompletos.`);
                continue;
            }

            let answerIndex = 0;
            if (ansStr === 'A') answerIndex = 0;
            else if (ansStr === 'B') answerIndex = 1;
            else if (ansStr === 'C') answerIndex = 2;
            else if (ansStr.startsWith('1')) answerIndex = 0;
            else if (ansStr.startsWith('2')) answerIndex = 1;
            else if (ansStr.startsWith('3')) answerIndex = 2;
            else {
                errors.push(`Linha ${i + 1}: Resposta correta inválida ("${ansStr}"). Use A, B ou C.`);
                continue;
            }

            const icon = getJogo2VirtueMeta(virtue).icon;

            jogo2CustomCards.push({
                id: `csv-${indexCounter}-${importCounter}-${i}`,
                question: question,
                options: [opt0, opt1, opt2],
                answerIndex: answerIndex,
                virtue: virtue,
                icon: icon,
                spaceNumber: spaceNum || 0
            });
            importCounter++;
        }

        if (importCounter > 0) {
            try {
                const container = await getOrCreateJogo2CardsContainer();
                await saveJogo2CardsContainer(container);
                
                renderJogo2CustomQuestionsList();
                const countSpan = document.getElementById('jogo2-custom-count');
                if (countSpan) countSpan.textContent = jogo2CustomCards.length;
                
                speak(`${importCounter} perguntas importadas com sucesso!`);
                alert(`${importCounter} perguntas importadas com sucesso!`);
            } catch (err) {
                console.error('Erro ao salvar importação de CSV:', err);
                alert('Erro ao gravar perguntas importadas no banco.');
            }
        }

        if (errors.length > 0) {
            alert("Algumas linhas não puderam ser importadas:\n" + errors.join("\n"));
        }

        event.target.value = '';
    };
    
    reader.readAsText(file, 'utf-8');
}

// Sorteia ou pega uma pergunta para a casa (customizada se houver, senão padrão)
function getQuestionForSpace(space, spaceIndex) {
    const v = normalizeJogo2Virtue(space.virtue || 'desafio');
    const matchingVirtues = getJogo2MatchingVirtues(v);
    
    // 1. Tentar primeiro correspondência exata para o número desta casa (ex: Casa 12)
    const exactMatch = jogo2CustomCards.find(c => Number(c.spaceNumber) === spaceIndex);
    if (exactMatch) {
        return exactMatch;
    }
    
    // 2. Se não houver exata, procurar nas customizadas da categoria que servem para qualquer casa (spaceNumber nulo ou 0)
    const customMatching = jogo2CustomCards.filter(c => matchingVirtues.includes(normalizeJogo2Virtue(c.virtue)) && (!c.spaceNumber || Number(c.spaceNumber) === 0));
    if (customMatching.length > 0) {
        const rIndex = (spaceIndex) % customMatching.length;
        return customMatching[rIndex];
    }
    
    // 3. Se não há customizada correspondente, pega do banco padrão de backup
    const defaultVirtue = jogo2DefaultQuestions[v] ? v : (matchingVirtues.find(virtue => jogo2DefaultQuestions[virtue]) || 'desafio');
    const defaults = jogo2DefaultQuestions[defaultVirtue] || jogo2DefaultQuestions['desafio'];
    const rIndex = (spaceIndex) % defaults.length;
    const item = defaults[rIndex];
    
    return {
        id: `default-${defaultVirtue}-${rIndex}`,
        question: item.q,
        options: item.opt,
        answerIndex: item.ans,
        virtue: defaultVirtue,
        icon: getJogo2VirtueMeta(defaultVirtue).icon
    };
}

function updateJogo2Card(space, roll = null, shouldFlip = false) {
    const card = document.getElementById('jogo2-current-card');
    const completeBtn = document.getElementById('btn-jogo2-complete');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const kicker = document.getElementById('jogo2-card-kicker');
    const iconArea = document.getElementById('jogo2-card-icon-area');
    const qTitle = document.getElementById('jogo2-card-question');
    const qText = document.getElementById('jogo2-card-text');

    if (!card) return;
    pendingJogo2Challenge = null;
    
    if (optionsContainer) optionsContainer.style.display = 'none';
    if (feedbackArea) feedbackArea.style.display = 'none';
    if (qText) qText.style.display = 'block';

    if (space.type === 'start') {
        if (kicker) kicker.textContent = 'Partida';
        if (iconArea) iconArea.textContent = '🏁';
        if (qTitle) qTitle.textContent = 'Gire a roleta para começar!';
        if (qText) qText.textContent = 'Avance pela Trilha das Forças e divirta-se respondendo aos desafios de caráter!';
        
        card.className = 'jogo2-card';
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
        }
        if (shouldFlip) flipJogo2Card(card);
        return;
    }

    if (space.type === 'finish') {
        if (kicker) kicker.textContent = 'Chegada';
        if (iconArea) iconArea.textContent = '🏆';
        if (qTitle) qTitle.textContent = 'Parabéns, você conseguiu!';
        if (qText) qText.textContent = 'Você completou toda a Trilha das Forças com sabedoria!';
        
        card.className = 'jogo2-card virtue-chegada';
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
        }
        if (shouldFlip) flipJogo2Card(card);
        return;
    }

    const activePlayer = getActiveJogo2Player();
    const isSpecial = space.type === 'challenge';
    const isPenaltyHouse = [13, 23, 36].includes(jogo2Position) && !!activePlayer.isTrapped;
    
    let qData;
    if (isPenaltyHouse) {
        qData = {
            question: "Você pisou em uma armadilha! Você só pode sair se tirar o número 4 na roleta.",
            options: [],
            answerIndex: 0,
            virtue: "penalidade",
            icon: "🚫"
        };
        // Não marca skipNextTurn aqui – o jogador continua jogando mas preso na casa

    } else {
        qData = getQuestionForSpace(space, jogo2Position);
    }
    
    if (kicker) kicker.textContent = isPenaltyHouse ? `Casa ${jogo2Position} | Penalidade` : (isSpecial ? `Casa ${jogo2Position} | Especial` : `Casa ${jogo2Position}`);
    if (iconArea) iconArea.textContent = qData.icon;
    if (qTitle) qTitle.textContent = isPenaltyHouse ? 'Armadilha!' : space.label;
    if (qText) qText.style.display = 'none';

    if (isPenaltyHouse) {
        card.className = 'jogo2-card virtue-penalidade';
        if (optionsContainer) optionsContainer.style.display = 'none';
    } else {
        card.className = isSpecial ? 'jogo2-card virtue-desafio' : `jogo2-card virtue-${qData.virtue}`;
    }
    
    const isRobotTurn = isJogo2RobotTurn();
    
    if (optionsContainer && !isPenaltyHouse) {
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        optionsContainer.innerHTML = `
            <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 8px; color: #1e293b; line-height: 1.35;">
                ${qData.question}
            </div>
            ${qData.options.map((opt, oIdx) => `
                <button type="button" class="jogo2-option-btn" ${isRobotTurn ? 'disabled style="cursor:not-allowed; opacity:0.8;"' : ''} onclick="handleJogo2AnswerChoice(this, ${oIdx}, ${qData.answerIndex})">
                    <span style="display:inline-grid; place-items:center; width:22px; height:22px; border-radius:50%; background:#f1f5f9; color:#475569; font-size:0.75rem; font-weight:900; margin-right:4px;">
                        ${String.fromCharCode(65 + oIdx)}
                    </span>
                    ${opt}
                </button>
            `).join('')}
        `;
    }
    // Auto‑advance for trap (penalidade) cards – no answer needed
    if (isPenaltyHouse) {
        setTimeout(() => {
            completeJogo2Card();
        }, 5000);
    }

    if (completeBtn) {
        completeBtn.disabled = true;
        completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
    }

    if (shouldFlip) flipJogo2Card(card);
    return qData;
}

function handleJogo2AnswerChoice(clickedBtn, selectedIndex, correctIndex) {
    const card = document.getElementById('jogo2-current-card');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const completeBtn = document.getElementById('btn-jogo2-complete');

    if (!optionsContainer || !feedbackArea) return;

    const currentSpace = jogo2Spaces[jogo2Position];
    const specialChallenge = (currentSpace && currentSpace.type === 'challenge') ? currentSpace.challenge : null;

    optionsContainer.querySelectorAll('.jogo2-option-btn').forEach((btn, oIdx) => {
        btn.disabled = true;
        if (oIdx === correctIndex) {
            btn.classList.add('correct-choice');
        }
    });

    const isCorrect = selectedIndex === correctIndex;
    const activePlayer = getActiveJogo2Player();
    const previousPosition = activePlayer.position;
    const giveExtraSpeechRoom = !!(specialChallenge && specialChallenge.type === 'back_to_start');
    const isRobot = isJogo2RobotTurn();

    if (isCorrect) {
        clickedBtn.classList.add('correct-choice');
        feedbackArea.className = 'jogo2-card-feedback success';
        
        if (specialChallenge && specialChallenge.type === 'forward') {
            feedbackArea.innerHTML = `<i class="fas fa-circle-check"></i> Correto! Você avança +${specialChallenge.amount} casas de bônus!`;
            triggerOpponentQuote('correctAnswer');
            
            const targetPos = Math.min(previousPosition + specialChallenge.amount, jogo2Spaces.length - 1);
            const isButterfly = specialChallenge.amount === 3;
            triggerBeeOrButterflyEffect(previousPosition, targetPos, isButterfly);
            animateJogo2PawnSteps(previousPosition, targetPos);
        } else {
            feedbackArea.innerHTML = `<i class="fas fa-circle-check"></i> Correto! Muito bem!`;
            triggerOpponentQuote('correctAnswer');
            // Não anda casa extra, apenas consolida o lugar!
        }

    } else {
        clickedBtn.classList.add('wrong-choice');
        feedbackArea.className = 'jogo2-card-feedback danger';
        
        if (specialChallenge && specialChallenge.type === 'back_to_start') {
            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Você exagerou na força, por isso vai voltar ao início do jogo.`;
            triggerOpponentQuote('wrongAnswer');
            triggerExplosionEffect(previousPosition);
            announceJogo2(`${activePlayer.name} exagerou na força e voltou ao Início!`);
            animateJogo2PawnSteps(previousPosition, 0);
        } else if ([13, 23, 36].includes(previousPosition)) {
            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Como você já está em uma casa de penalidade, não voltará casas extras.`;
            triggerOpponentQuote('wrongAnswer');
            // Não anda para trás
        } else {
            let penaltyAmount = 2;
            if (specialChallenge && specialChallenge.type === 'back') {
                penaltyAmount = specialChallenge.amount;
            }

            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Você volta ${penaltyAmount} casas.`;
            triggerOpponentQuote('wrongAnswer');

            const targetPos = Math.max(0, previousPosition - penaltyAmount);
            animateJogo2PawnSteps(previousPosition, targetPos);
        }
    }

    feedbackArea.style.display = 'flex';
    
    // Avanço automático de turno (o usuário não precisa clicar em "Avançar Turno")
    if (completeBtn) {
        completeBtn.disabled = true;
        let count = isRobot ? (isCorrect ? 3 : 5) : 4;
        if (!isCorrect && giveExtraSpeechRoom) count += 1;
        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
        
        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
        jogo2CountdownInterval = setInterval(() => {
            count--;
            if (count > 0 && completeBtn) {
                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
            } else {
                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
            }
        }, 1000);

        if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
        jogo2TurnTimeout = setTimeout(() => {
            completeJogo2Card();
        }, (isRobot ? (isCorrect ? 3000 : 5000) : 4000) + ((!isCorrect && giveExtraSpeechRoom) ? 1000 : 0));

        // Rede de segurança: se o áudio do robô ou algum timer do card atrasar,
        // ainda assim finalizamos o turno depois de um pequeno buffer extra.
        if (isRobot) {
            if (jogo2RobotChoiceTimeout) clearTimeout(jogo2RobotChoiceTimeout);
            jogo2RobotChoiceTimeout = setTimeout(() => {
                if (jogo2WaitingCard) {
                    completeJogo2Card();
                }
            }, (isCorrect ? 5500 : 7500) + ((!isCorrect && giveExtraSpeechRoom) ? 1000 : 0));
        }
    }
}

function handleJogo2ComputerAnswer(qData, space) {
    if (!qData) return;
    
    const optionsContainer = document.getElementById('jogo2-card-options');
    if (!optionsContainer) return;

    const buttons = optionsContainer.querySelectorAll('.jogo2-option-btn');
    if (buttons.length === 0) return;

    // Sorteia se o computador acerta ou erra (taxa de acerto de 75%)
    const correctIndex = qData.answerIndex;
    const isCorrect = Math.random() < 0.75;
    let selectedIndex = correctIndex;

    if (!isCorrect) {
        const wrongIndices = [0, 1, 2].filter(idx => idx !== correctIndex);
        selectedIndex = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
    }

    const targetButton = buttons[selectedIndex];
    const specialChallenge = space.type === 'challenge' ? space.challenge : null;

    if (targetButton) {
        targetButton.style.border = '3px solid #a855f7';
        targetButton.style.boxShadow = '0 0 12px rgba(168, 85, 247, 0.4)';
        
        setTimeout(() => {
            handleJogo2AnswerChoice(targetButton, selectedIndex, correctIndex);
        }, 1500);

        // Fallback adicional: caso a seleção/feedback do robô fique preso por algum
        // atraso de fala ou atualização visual, encerramos a carta com segurança.
        if (jogo2RobotChoiceTimeout) clearTimeout(jogo2RobotChoiceTimeout);
        jogo2RobotChoiceTimeout = setTimeout(() => {
            if (jogo2WaitingCard) {
                completeJogo2Card();
            }
        }, 9000);
    }
}

function animateJogo2PawnSteps(fromPos, toPos) {
    const activePlayer = getActiveJogo2Player();
    let current = fromPos;
    const isForward = toPos > fromPos;

    if (fromPos === toPos) return;

    jogo2Animating = true; // Bloqueia ações durante animação

    function step() {
        if (!jogo2Started) {
            jogo2Animating = false;
            return;
        }
        if (isForward && current < toPos) {
            current++;
            activePlayer.position = current;
            syncJogo2Position();
            renderJogo2Board();
            playPawnJumpSound();
            setTimeout(step, 300);
        } else if (!isForward && current > toPos) {
            current--;
            activePlayer.position = current;
            syncJogo2Position();
            renderJogo2Board();
            playPawnJumpSound();
            setTimeout(step, 300);
        } else {
            jogo2Animating = false; // Animação concluída
            if (!isForward) {
                activePlayer.isTrapped = false;
            }
            syncJogo2Position();
            renderJogo2Board();
            
            if (activePlayer.position === jogo2Spaces.length - 1) {
                triggerConfettiCelebration();
                announceJogo2(`${activePlayer.name} chegou ao FIM da Trilha!`);
                if (jogo2SoloMode && activeJogo2PlayerIndex === 1) {
                    triggerOpponentQuote('wonGame');
                } else if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
                    triggerOpponentQuote('lostGame');
                } else {
                    speak('Parabéns! Você completou a trilha!');
                }
                updateJogo2Card(jogo2Spaces[activePlayer.position]);
            }
        }
    }
    setTimeout(step, 350);
}

function startJogo2Game() {
    const container = document.getElementById('game-jogo2-container');
    if (container) container.classList.remove('is-setup');
    
    jogo2Position = 0;
    jogo2Started = true;
    pendingJogo2Challenge = null;
    jogo2Rolling = false;
    jogo2WaitingCard = false;
    activeJogo2PlayerIndex = 0;
    jogo2PowerHintSpoken = false;
    jogo2Players.forEach(player => {
        player.position = 0;
        player.skipNextTurn = false;
        player.isTrapped = false;
        player.trapAttempts = 0;
    });
    
    if (!document.getElementById('jogo2-confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'jogo2-confetti-styles';
        style.innerHTML = `
            @keyframes confetti-fall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(90vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    renderJogo2Board();
    showJogo2WaitingForRollCard();
    
    registerUsageCatalog('activity', 'Jogo: Trilha de Aprendizado de Forças', {
        key: 'game:jogo2',
        group: 'Jogos'
    });
    trackUsageActivity('Jogo: Trilha de Aprendizado de Forças', {
        key: 'game:jogo2',
        group: 'Jogos',
        detail: 'Jogo iniciado'
    });
    
    const soloCheckbox = document.getElementById('jogo2-solo-mode-checkbox');
    if (soloCheckbox) {
        jogo2SoloMode = !!soloCheckbox.checked;
        if (jogo2SoloMode) {
            const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
            jogo2Players[1].name = selOpp ? selOpp.name : 'Computador';
            jogo2Players[1].avatar = selOpp ? selOpp.photo : null;
        }
    }

    const firstPlayer = getActiveJogo2Player();
    announceJogo2(`Partida iniciada! Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);

    setupJogo2RollButtonListeners();
    resetJogo2PowerMeter();

    const rollBtn = document.getElementById('btn-jogo2-roll');
    const labelEl = document.getElementById('btn-jogo2-roll-label');

    if (isJogo2RobotTurn()) {
        if (rollBtn) rollBtn.disabled = true;
        if (labelEl) labelEl.innerHTML = `<i class="fas fa-robot"></i> ${firstPlayer.name} Pensando...`;
        speak(`Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);
        jogo2RobotStartTimeout = setTimeout(() => {
            if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
            rollJogo2Die();
        }, 4000);
    } else {
        if (rollBtn) rollBtn.disabled = false;
        if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        if (!jogo2PowerHintSpoken) {
            jogo2PowerHintSpoken = true;
            speak(`${firstPlayer.name}, segure o botão para dar força na roleta`);
        } else {
            speak(`Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);
        }
    }
}

let jogo2PowerMeterInterval = null;
let jogo2HoldPower = 0;
let jogo2IsHoldingPower = false;
let jogo2PressStartTime = 0;

function getJogo2RollButtonControls() {
    const rollButton = document.getElementById('btn-jogo2-roll');
    if (!rollButton) return { rollButton: null, fillEl: null, labelEl: null };

    let fillEl = document.getElementById('btn-jogo2-roll-fill');
    let labelEl = document.getElementById('btn-jogo2-roll-label');

    if (!fillEl || !labelEl) {
        rollButton.innerHTML = `
            <div class="jogo2-roll-fill" id="btn-jogo2-roll-fill"></div>
            <span class="jogo2-roll-label" id="btn-jogo2-roll-label">
                <i class="fas fa-sync-alt" aria-hidden="true"></i> Girar Roleta
            </span>
        `;
        fillEl = document.getElementById('btn-jogo2-roll-fill');
        labelEl = document.getElementById('btn-jogo2-roll-label');
    }

    return { rollButton, fillEl, labelEl };
}

function resetJogo2PowerMeter() {
    if (jogo2PowerMeterInterval) {
        clearInterval(jogo2PowerMeterInterval);
        jogo2PowerMeterInterval = null;
    }
    jogo2HoldPower = 0;
    jogo2IsHoldingPower = false;
    
    const { rollButton, fillEl, labelEl } = getJogo2RollButtonControls();
    
    if (fillEl) fillEl.style.width = '0%';
    if (labelEl && !jogo2Rolling) {
        if (isJogo2RobotTurn()) {
            const activePlayer = getActiveJogo2Player();
            labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Jogando...`;
        } else {
            labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        }
    }
    if (rollButton && !jogo2Rolling) {
        rollButton.disabled = isJogo2RobotTurn();
    }
}

function updatePowerButtonDisplay(val) {
    jogo2HoldPower = Math.max(0, Math.min(100, Math.round(val)));
    const { fillEl, labelEl } = getJogo2RollButtonControls();
    if (fillEl) fillEl.style.width = `${jogo2HoldPower}%`;
    if (labelEl) {
        labelEl.innerHTML = `<i class="fas fa-bolt fa-bounce"></i> Força: ${jogo2HoldPower}%`;
    }
}

function startHoldingPower() {
    if (!jogo2Started || jogo2Rolling || jogo2WaitingCard || isJogo2RobotTurn()) return;
    
    jogo2IsHoldingPower = true;
    jogo2PressStartTime = Date.now();
    jogo2HoldPower = 10;
    updatePowerButtonDisplay(jogo2HoldPower);
    
    if (jogo2PowerMeterInterval) clearInterval(jogo2PowerMeterInterval);
    jogo2PowerMeterInterval = setInterval(() => {
        if (jogo2IsHoldingPower) {
            jogo2HoldPower += 2;
            if (jogo2HoldPower > 100) jogo2HoldPower = 100;
            updatePowerButtonDisplay(jogo2HoldPower);
        }
    }, 45);
}

function releaseHoldingPower() {
    if (!jogo2IsHoldingPower) return;
    
    jogo2IsHoldingPower = false;
    if (jogo2PowerMeterInterval) {
        clearInterval(jogo2PowerMeterInterval);
        jogo2PowerMeterInterval = null;
    }
    
    const pressDuration = Date.now() - jogo2PressStartTime;
    let finalPower = jogo2HoldPower;
    
    if (pressDuration < 150) {
        finalPower = 70;
        updatePowerButtonDisplay(70);
    }
    
    rollJogo2Die(finalPower);
}

function setupJogo2RollButtonListeners() {
    const btn = document.getElementById('btn-jogo2-roll');
    if (!btn) return;
    
    btn.onmousedown = (e) => { e.preventDefault(); startHoldingPower(); };
    btn.onmouseup = (e) => { e.preventDefault(); releaseHoldingPower(); };
    btn.onmouseleave = (e) => { if (jogo2IsHoldingPower) releaseHoldingPower(); };
    
    btn.ontouchstart = (e) => { e.preventDefault(); startHoldingPower(); };
    btn.ontouchend = (e) => { e.preventDefault(); releaseHoldingPower(); };
    btn.ontouchcancel = (e) => { if (jogo2IsHoldingPower) releaseHoldingPower(); };
}

function rollJogo2Die(appliedPower) {
    if (!jogo2Started) {
        showJogo2Setup();
        return;
    }
    const activePlayer = getActiveJogo2Player();
    if (activePlayer.position >= jogo2Spaces.length - 1) return;
    if (jogo2Rolling) return;
    if (jogo2WaitingCard) {
        announceJogo2('Escolha uma das opções para responder à pergunta antes de girar.');
        speak('Responda à pergunta primeiro.');
        return;
    }

    let power = appliedPower;
    if (power === undefined || power === null) {
        power = Math.floor(Math.random() * 46) + 50;
    }
    updatePowerButtonDisplay(power);

    jogo2Rolling = true;
    const roll = Math.floor(Math.random() * 7) + 1;
    const { rollButton, labelEl } = getJogo2RollButtonControls();
    
    if (rollButton) rollButton.disabled = true;
    if (labelEl) {
        labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
    }

    let extraSpins = 6;
    let spinDuration = 3000;
    if (power <= 40) {
        extraSpins = 3;
        spinDuration = 2200;
    } else if (power >= 80) {
        extraSpins = 9;
        spinDuration = 3800;
    }

    const arrow = document.getElementById('jogo2-wheel-arrow');
    if (arrow) {
        const targetSliceAngle = (roll - 1) * (360/7) + (180/7);
        const currentFullSpins = Math.floor(jogo2WheelRotation / 360);
        jogo2WheelRotation = (currentFullSpins + extraSpins) * 360 + targetSliceAngle;
        arrow.style.transition = `transform ${spinDuration}ms cubic-bezier(0.1, 0.8, 0.25, 1)`;
        arrow.style.transform = `translate(-50%, -50%) rotate(${jogo2WheelRotation}deg)`;
    }

    function showJogo2SpinningCard() {
        const card = document.getElementById('jogo2-current-card');
        const optionsContainer = document.getElementById('jogo2-card-options');
        const feedbackArea = document.getElementById('jogo2-card-feedback');
        const kicker = document.getElementById('jogo2-card-kicker');
        const iconArea = document.getElementById('jogo2-card-icon-area');
        const qTitle = document.getElementById('jogo2-card-question');
        const qText = document.getElementById('jogo2-card-text');

        if (!card) return;
        
        if (optionsContainer) optionsContainer.style.display = 'none';
        if (feedbackArea) feedbackArea.style.display = 'none';
        if (qText) qText.style.display = 'none';
        
        if (kicker) kicker.textContent = 'Girando...';
        if (iconArea) iconArea.textContent = '❓';
        if (qTitle) qTitle.textContent = 'Aguarde o sorteio...';
        
        card.className = 'jogo2-card'; // Reseta cor da carta para padrão
    }

    showJogo2SpinningCard();
    speak('Girando a roleta!', 0.2);
    playWheelTicks(spinDuration);

    jogo2WheelSpinTimeout = setTimeout(() => {
        if (!jogo2Started) return;
        const previousPosition = activePlayer.position;
        const isCurrentlyTrapped = !!activePlayer.isTrapped;

        if (isCurrentlyTrapped) {
            if (roll !== 4) {
                activePlayer.trapAttempts = (activePlayer.trapAttempts || 0) + 1;

                const card = document.getElementById('jogo2-current-card');
                const qTitle = document.getElementById('jogo2-card-question');
                const qText = document.getElementById('jogo2-card-text');
                const iconArea = document.getElementById('jogo2-card-icon-area');
                const kicker = document.getElementById('jogo2-card-kicker');
                const optionsContainer = document.getElementById('jogo2-card-options');
                const completeBtn = document.getElementById('btn-jogo2-complete');
                const failedAttempts = activePlayer.trapAttempts;
                const shouldReleaseTrap = failedAttempts >= 3;

                if (shouldReleaseTrap) {
                    const targetPos = Math.max(0, previousPosition - 5);
                    activePlayer.trapAttempts = 0;
                    activePlayer.isTrapped = false;

                    if (kicker) kicker.textContent = 'Armadilha liberada!';
                    if (iconArea) iconArea.textContent = '🔓';
                    if (qTitle) qTitle.textContent = 'Você saiu da armadilha!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você falhou pela terceira vez. A armadilha foi liberada, mas você perde 5 posições.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-penalidade';

                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    speak('Terceira tentativa sem sucesso. A armadilha foi liberada, mas você perde 5 posições.');
                    announceJogo2(`${activePlayer.name} saiu da armadilha após 3 tentativas e perdeu 5 posições.`);
                    animateJogo2PawnSteps(previousPosition, targetPos);
                } else {
                    if (kicker) kicker.textContent = 'Ainda preso...';
                    if (iconArea) iconArea.textContent = '🔒';
                    if (qTitle) qTitle.textContent = 'Não foi dessa vez!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você rolou ${roll}, mas precisa de um 4 para escapar da armadilha. Tentativa ${failedAttempts} de 3.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-penalidade';

                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    speak(`Você rolou ${roll}. Ainda está preso na armadilha. Tentativa ${failedAttempts} de 3.`);
                }

                jogo2Rolling = false;

                if (completeBtn) {
                    completeBtn.disabled = true;
                    const trapAdvanceDelay = shouldReleaseTrap ? 12000 : 10000;
                    let count = trapAdvanceDelay / 1000;
                    completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;

                    if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                    jogo2CountdownInterval = setInterval(() => {
                        count--;
                        if (count > 0 && completeBtn) {
                            completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                        } else {
                            if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                        }
                    }, 1000);

                    if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                    jogo2TurnTimeout = setTimeout(() => {
                        completeJogo2Card();
                    }, trapAdvanceDelay);
                }
                return;
            }

            // Escapou!
            activePlayer.trapAttempts = 0;
            activePlayer.isTrapped = false;
            speak('Parabéns! Você tirou 4 e escapou da armadilha!');
            announceJogo2(`${activePlayer.name} tirou 4 e escapou da armadilha!`);
        }
        
        if (roll === 7) {
            // Caiu na fatia "Passa a Vez" – a rodada ATUAL termina, sem penalidade extra
            
            const card = document.getElementById('jogo2-current-card');
            const qTitle = document.getElementById('jogo2-card-question');
            const qText = document.getElementById('jogo2-card-text');
            const iconArea = document.getElementById('jogo2-card-icon-area');
            const kicker = document.getElementById('jogo2-card-kicker');
            const optionsContainer = document.getElementById('jogo2-card-options');
            const completeBtn = document.getElementById('btn-jogo2-complete');

            if (kicker) kicker.textContent = `Poxa vida...`;
            if (iconArea) iconArea.textContent = '🚫';
            if (qTitle) qTitle.textContent = 'Passou a vez!';
            if (qText) {
                qText.style.display = 'block';
                qText.innerHTML = 'Você rodou a roleta e caiu em "Passa a Vez". Sua jogada termina aqui — na próxima rodada você joga normalmente!';
            }
            if (optionsContainer) optionsContainer.style.display = 'none';
            if (card) card.className = 'jogo2-card virtue-penalidade';
            
            jogo2WaitingCard = true;
            renderJogo2Board();
            
            speak(`Ah não! Você tirou Passa a vez na roleta.`);
            
            jogo2Rolling = false;
            
            if (completeBtn) {
                completeBtn.disabled = true;
                let count = 4;
                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                
                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                jogo2CountdownInterval = setInterval(() => {
                    count--;
                    if (count > 0 && completeBtn) {
                        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                    } else {
                        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                    }
                }, 1000);

                if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                jogo2TurnTimeout = setTimeout(() => {
                    completeJogo2Card();
                }, 4000);
            }
            return;
        }

        let escapedTrap = false;
        if (isCurrentlyTrapped && roll === 4) {
            escapedTrap = true;
        }

        const targetPosition = Math.min(previousPosition + roll, jogo2Spaces.length - 1);
        
        let currentStep = previousPosition;
        function walkStep() {
            if (!jogo2Started) return;
            if (currentStep < targetPosition) {
                currentStep++;
                activePlayer.position = currentStep;
                syncJogo2Position();
                renderJogo2Board();
                playPawnJumpSound();
                setTimeout(walkStep, 300);
            } else {
                const currentSpace = jogo2Spaces[targetPosition];
                const isPenaltyHouse = [13, 23, 36].includes(targetPosition);
                
                if (isPenaltyHouse && !escapedTrap) {
                    activePlayer.isTrapped = true;
                    activePlayer.trapAttempts = 0;
                } else {
                    activePlayer.isTrapped = false;
                    activePlayer.trapAttempts = 0;
                }
                
                if (escapedTrap) {
                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    
                    const card = document.getElementById('jogo2-current-card');
                    const qTitle = document.getElementById('jogo2-card-question');
                    const qText = document.getElementById('jogo2-card-text');
                    const iconArea = document.getElementById('jogo2-card-icon-area');
                    const kicker = document.getElementById('jogo2-card-kicker');
                    const optionsContainer = document.getElementById('jogo2-card-options');
                    const feedbackArea = document.getElementById('jogo2-card-feedback');
                    const completeBtn = document.getElementById('btn-jogo2-complete');

                    if (kicker) kicker.textContent = `Escapou!`;
                    if (iconArea) iconArea.textContent = '🔓';
                    if (qTitle) qTitle.textContent = 'Livre da armadilha!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você escapou da armadilha e avançou para a casa ${targetPosition} (${currentSpace.name}). Sua jogada termina aqui.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (feedbackArea) feedbackArea.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-escapou';
                    
                    speak(`Livre da armadilha! Você avançou para a casa ${currentSpace.name}. Passando a vez.`);
                    
                    jogo2Rolling = false;
                    
                    if (completeBtn) {
                        completeBtn.disabled = true;
                        let count = 4;
                        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                        
                        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                        jogo2CountdownInterval = setInterval(() => {
                            count--;
                            if (count > 0 && completeBtn) {
                                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                            } else {
                                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                            }
                        }, 1000);

                        if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                        jogo2TurnTimeout = setTimeout(() => {
                            completeJogo2Card();
                        }, 4000);
                    }
                    return;
                }
                
                jogo2WaitingCard = currentSpace.type !== 'finish';
                renderJogo2Board();

                // Disparar efeitos visuais lúdicos nas casas do tabuleiro
                if (currentSpace.virtue === 'exagerou_forca') {
                    triggerExplosionEffect(targetPosition);
                } else if (targetPosition === 15) {
                    triggerSpiderWebEffect(targetPosition);
                }
                
                const qData = updateJogo2Card(currentSpace, roll, true);
                
                if (isPenaltyHouse) {
                    announceJogo2(`${activePlayer.name} tirou ${roll} na roleta e caiu em uma armadilha na casa ${targetPosition}.`);
                    speak(`Você tirou ${roll} e caiu em uma armadilha!`);
                } else if (currentSpace.type === 'finish') {
                    triggerConfettiCelebration();
                    announceJogo2(`${activePlayer.name} chegou ao FIM da Trilha!`);
                    if (jogo2SoloMode && activeJogo2PlayerIndex === 1) {
                        triggerOpponentQuote('wonGame');
                    } else if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
                        triggerOpponentQuote('lostGame');
                    } else {
                        speak(`Parabéns, ${activePlayer.name}! Você é o grande campeão!`);
                    }
                    showJogo2ChampionModal(activePlayer.name);
                } else {
                    announceJogo2(`${activePlayer.name} tirou ${roll} na roleta e caiu na casa ${targetPosition} (${currentSpace.name}). Responda para consolidar!`);
                    speak(`Você tirou ${roll} e caiu na casa ${currentSpace.name}. Responda à pergunta!`);
                }
                
                jogo2Rolling = false;

                if (isJogo2RobotTurn()) {
                    if (rollButton) {
                        rollButton.disabled = true;
                    }
                    if (labelEl) {
                        labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Jogando...`;
                    }
                    if (currentSpace.type !== 'finish') {
                        jogo2RobotAnswerTimeout = setTimeout(() => {
                            handleJogo2ComputerAnswer(qData, currentSpace);
                        }, 7000);
                    }
                } else {
                    if (rollButton) {
                        rollButton.disabled = false;
                    }
                    if (labelEl) {
                        labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
                    }
                }
            }
        }
        const walkDelay = escapedTrap ? 4500 : 300;
        jogo2WalkStepTimeout = setTimeout(walkStep, walkDelay);

    }, 3000); // 3 segundos de rotacao da roleta
}

function completeJogo2Card() {
    // Se o peão ainda está animando, aguarda terminar antes de avançar
    if (jogo2Animating) {
        jogo2CompleteCardTimeout = setTimeout(completeJogo2Card, 400);
        return;
    }

    // Limpar TODOS os timers pendentes para evitar que ações residuais do turno anterior
    // disparem no turno do próximo jogador (bug: "jogo jogou sozinho na minha vez")
    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2RobotTurnTimeout) { clearTimeout(jogo2RobotTurnTimeout); jogo2RobotTurnTimeout = null; }
    if (jogo2RobotAnswerTimeout) { clearTimeout(jogo2RobotAnswerTimeout); jogo2RobotAnswerTimeout = null; }
    if (jogo2RobotChoiceTimeout) { clearTimeout(jogo2RobotChoiceTimeout); jogo2RobotChoiceTimeout = null; }
    if (jogo2RobotStartTimeout) { clearTimeout(jogo2RobotStartTimeout); jogo2RobotStartTimeout = null; }
    if (jogo2WalkStepTimeout) { clearTimeout(jogo2WalkStepTimeout); jogo2WalkStepTimeout = null; }
    if (jogo2WheelSpinTimeout) { clearTimeout(jogo2WheelSpinTimeout); jogo2WheelSpinTimeout = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }

    // Cancelar qualquer fala TTS pendente para evitar atropelamento de áudios
    try { window.speechSynthesis.cancel(); } catch(e) {}
    if (typeof currentAudio !== 'undefined' && currentAudio) { try { currentAudio.pause(); } catch(e) {} }

    const completeBtn = document.getElementById('btn-jogo2-complete');
    if (completeBtn) {
        completeBtn.disabled = true;
    }
    
    jogo2WaitingCard = false;
    jogo2Rolling = false;
    try {
        announceJogo2(`${getActiveJogo2Player().name} concluiu o seu turno.`);
    } catch (err) {
        console.warn('Falha ao anunciar conclusão do turno do Jogo 2:', err);
    }
    
    try {
        advanceJogo2PlayerTurn();
    } catch (err) {
        console.error('Falha ao avançar o turno do Jogo 2:', err);
        // Última proteção: tenta avançar de novo no próximo ciclo da UI.
        setTimeout(() => {
            try {
                advanceJogo2PlayerTurn();
            } catch (retryErr) {
                console.error('Falha ao reenfileirar o avanço do Jogo 2:', retryErr);
            }
        }, 0);
    }
}

function triggerConfettiCelebration() {
    const container = document.getElementById('game-jogo2-container');
    if (!container) return;
    
    for (let i = 0; i < 75; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 6 + 'px';
        confetti.style.height = Math.random() * 8 + 6 + 'px';
        
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#facc15'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        
        const duration = Math.random() * 2.5 + 2;
        const delay = Math.random() * 1.5;
        confetti.style.animation = `confetti-fall ${duration}s ${delay}s linear forwards`;
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
}

function showJogo2ChampionModal(winnerName) {
    let overlay = document.getElementById('jogo2-champion-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'jogo2-champion-overlay';
        document.body.appendChild(overlay);
    }
    
    const isRobot = winnerName && (winnerName.includes('Robô') || winnerName.includes('Computador'));
    const avatarEmoji = isRobot ? '🐘🤖' : '🐘👑';

    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeInOverlay 0.3s ease-out;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #ffffff 0%, #fff7ed 60%, #ffedd5 100%);
            border: 4px solid #f59e0b;
            border-radius: 32px;
            padding: 32px 28px;
            max-width: 480px;
            width: 100%;
            text-align: center;
            box-shadow: 0 25px 60px rgba(245, 158, 11, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.25);
            position: relative;
            animation: popUpModal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        ">
            <div style="font-size: 1rem; font-weight: 900; color: #d97706; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;">
                🏆 GRANDE CAMPEÃO 🏆
            </div>
            
            <div style="margin: 14px 0; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18));">
                <span style="font-size: 5.5rem; display: inline-block; animation: bounce-pawn 1.2s ease-in-out infinite alternate;">
                    ${avatarEmoji}
                </span>
            </div>

            <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 950; margin: 6px 0 10px 0; line-height: 1.15; color: #ea580c;">
                ${winnerName}
            </h2>

            <p style="font-size: 1rem; color: #475569; font-weight: 700; margin: 8px 0 24px 0; line-height: 1.4;">
                Superou todos os desafios com sabedoria, alegria e coragem! 🌟✨
            </p>

            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button type="button" onclick="closeJogo2ChampionModal(); showJogo2Setup();" style="
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    color: white;
                    border: none;
                    border-radius: 16px;
                    padding: 14px 28px;
                    font-size: 1.05rem;
                    font-weight: 900;
                    cursor: pointer;
                    box-shadow: 0 6px 16px rgba(34, 197, 94, 0.35);
                    transition: transform 0.15s, box-shadow 0.15s;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-rotate-right" aria-hidden="true"></i> Jogar Novamente
                </button>
                <button type="button" onclick="closeJogo2ChampionModal();" style="
                    background: #ffffff;
                    color: #475569;
                    border: 2px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 14px 20px;
                    font-size: 0.95rem;
                    font-weight: 800;
                    cursor: pointer;
                ">
                    Fechar
                </button>
            </div>
        </div>
    `;

    if (typeof confetti === 'function') {
        try {
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.55 } });
        } catch(e) {}
    }
}

function closeJogo2ChampionModal() {
    const overlay = document.getElementById('jogo2-champion-overlay');
    if (overlay) overlay.remove();
}


// =============================================
// CONTAINER GENÉRICO DE "JOGO" (exercício dedicado, seed_key próprio)
// Usado pelos 3 jogos com cartas manuais (Memória, Memória do Alfabeto,
// Reconhecimento de Palavras). Tenta Supabase primeiro — assim o admin cria as
// cartas num aparelho e quem joga vê no outro — e cai pro IndexedDB local só sem
// supabaseClient (uso offline). Nunca toca em exercícios reais do usuário.
// =============================================
async function getOrCreateGameContainer(seedKey, title) {
    if (supabaseClient) {
        try {
            const { data: existing, error } = await supabaseClient.from('exercises').select('*').eq('seed_key', seedKey).maybeSingle();
            if (!error) {
                if (existing) return { ...existing, fromSupabase: true };
                const { data: created, error: insertErr } = await supabaseClient.from('exercises')
                    .insert([{ title, visible: false, seed_key: seedKey }])
                    .select().single();
                if (!insertErr && created) return { ...created, fromSupabase: true };
            }
        } catch (e) {}
    }

    return new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
            const found = (e.target.result || []).find(ex => ex.seedKey === seedKey);
            if (found) { resolve({ ...found, fromSupabase: false }); return; }
            const store = db.transaction(['exercises'], 'readwrite').objectStore('exercises');
            const request = store.add({ title, items: [], seedKey, visible: false });
            request.onsuccess = (ev) => {
                resolve({ id: ev.target.result, title, items: [], seedKey, visible: false, fromSupabase: false });
            };
        };
    });
}

function putLocalGameContainer(container) {
    return new Promise((resolve) => {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises').put(container).onsuccess = resolve;
    });
}

// =============================================
// CARTAS DO JOGO DA MEMÓRIA (CRUD)
// Cada par usa duas imagens amarradas pelo mesmo pair_id — ver getMemoryCardPairs().
// =============================================
const MEMORY_CARDS_SEED_KEY = 'memory-cards-container';
const MEMORY_CARDS_TITLE = 'Cartas do Jogo da Memória|blue';

function makePairId() {
    return 'pair-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

async function addMemoryCardPair(label, imageFileA, imageFileB) {
    const container = await getOrCreateGameContainer(MEMORY_CARDS_SEED_KEY, MEMORY_CARDS_TITLE);
    const pairId = makePairId();

    if (container.fromSupabase) {
        try {
            const [imageUrlA, imageUrlB] = await Promise.all([
                uploadToSupabaseStorage('media_uploads', 'images', imageFileA),
                uploadToSupabaseStorage('media_uploads', 'images', imageFileB)
            ]);
            const { error: insertErr } = await supabaseClient.from('exercise_items').insert([
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlA, link: '' },
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlB, link: '' }
            ]);
            if (insertErr) console.error('Erro ao salvar carta no Supabase:', insertErr);
        } catch (e) {
            console.error('Erro ao subir imagem/salvar carta no Supabase:', e);
        }
    } else {
        const base = { word: label, textColor: '#333333', textSize: 100, isUppercase: false, isBold: true, videoLink: '', pairId };
        container.items = [
            ...(container.items || []),
            { ...base, imageBlob: imageFileA || null, image_url: null },
            { ...base, imageBlob: imageFileB || null, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

async function updateMemoryCardPair(pairId, label, imageFileA, imageFileB) {
    const container = await getOrCreateGameContainer(MEMORY_CARDS_SEED_KEY, MEMORY_CARDS_TITLE);

    if (container.fromSupabase) {
        const { data: pairItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!pairItems || pairItems.length !== 2) return;
        const files = [imageFileA, imageFileB];
        for (let i = 0; i < 2; i++) {
            const update = { word: label };
            if (files[i]) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', files[i]);
            await supabaseClient.from('exercise_items').update(update).eq('id', pairItems[i].id);
        }
    } else {
        const pairItems = (container.items || []).filter(it => it.pairId === pairId);
        if (pairItems.length !== 2) return;
        container.items = container.items.map(it => {
            if (it.pairId !== pairId) return it;
            const isFirst = it === pairItems[0];
            const newFile = isFirst ? imageFileA : imageFileB;
            return newFile ? { ...it, word: label, imageBlob: newFile, image_url: null } : { ...it, word: label };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

async function deleteMemoryCardPair(pairId) {
    const container = await getOrCreateGameContainer(MEMORY_CARDS_SEED_KEY, MEMORY_CARDS_TITLE);

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

// =============================================
// JOGO DA MEMÓRIA (PARES DE IMAGENS MANUAIS)
// =============================================
let memoryCards = [];
let memoryFlipped = [];
let memoryMatchedCount = 0;
let memoryMoveCount = 0;
let memoryBusy = false;
const MEMORY_MAX_PAIRS = 10;

function getMemoryCardPairs() {
    // Restrito ao container desse jogo especificamente: agora que existe mais de um
    // "jogo da memória" (ex.: o do Alfabeto), flatMap em lastMergedExercises inteiro
    // misturaria os pares dos dois jogos num só.
    const container = lastMergedExercises.find(ex => ex.seedKey === MEMORY_CARDS_SEED_KEY);
    return groupMemoryItemsByPair((container && container.items) || []);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function announceMemoryStatus(text) {
    const el = document.getElementById('memory-status-live');
    if (el) el.textContent = text;
}

function startMemoryGame() {
    const pairGroups = getMemoryCardPairs(); // pares deliberados (imagem + imagem), criados em Jogos > Editar
    const container = document.getElementById('grid-memory');
    if (!container) return;

    if (pairGroups.length < 3) {
        container.innerHTML = '';
        document.getElementById('memory-pairs-count').textContent = 'Pares: 0/0';
        document.getElementById('memory-moves-count').textContent = 'Jogadas: 0';
        const message = 'Crie cartas (em "Editar") para gerar pares para o jogo.';
        announceMemoryStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'grid-column:1/-1;padding:20px;color:#555;font-weight:600;';
        msg.textContent = message;
        container.appendChild(msg);
        return;
    }

    const numPairs = Math.min(MEMORY_MAX_PAIRS, pairGroups.length);
    const chosenPairGroups = shuffleArray([...pairGroups]).slice(0, numPairs);

    // src resolvido uma vez só por partida: URL estável entre re-renders do tabuleiro
    // e pré-carregável antes da primeira virada.
    const cardsFromPairs = chosenPairGroups.flatMap(({ pairId, itemA, itemB }) => [
        { pairId, word: itemA.word, src: resolveMemoryItemImageSrc(itemA), flipped: false, matched: false },
        { pairId, word: itemB.word, src: resolveMemoryItemImageSrc(itemB), flipped: false, matched: false }
    ]);

    memoryCards = shuffleArray(cardsFromPairs);
    preloadGameImages(memoryCards.map(c => c.src));
    // Pré-carrega o áudio de todas as palavras únicas do deck — assim o som
    // ao acertar o par é instantâneo, sem esperar a rede na hora do match.
    [...new Set(memoryCards.map(c => c.word).filter(Boolean))].forEach(prefetchTts);
    memoryFlipped = [];
    memoryMatchedCount = 0;
    memoryMoveCount = 0;
    memoryBusy = false;

    document.getElementById('memory-pairs-count').textContent = `Pares: 0/${numPairs}`;
    document.getElementById('memory-moves-count').textContent = 'Jogadas: 0';
    announceMemoryStatus('Novo jogo iniciado. Encontre os pares.');
    renderMemoryBoard();
}

// ---- Gerenciamento de cartas (modo "Editar") ----

function groupMemoryItemsByPair(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .filter(([, group]) => group.length === 2)
        .map(([pairId, group]) => ({ pairId, itemA: group[0], itemB: group[1] }));
}

function resolveMemoryItemImageSrc(item) {
    if (item.imageBlob instanceof Blob) return URL.createObjectURL(item.imageBlob);
    if (item.image_url) return item.image_url;
    return '';
}

// Pré-carrega as imagens no cache do navegador assim que a partida começa — os
// tabuleiros só criam o <img> quando a carta vira, então sem isso o download
// começava no clique e a carta ficava em branco enquanto a imagem baixava.
function preloadGameImages(srcs) {
    srcs.filter(Boolean).forEach(src => { const img = new Image(); img.src = src; });
}

async function renderMemoryManageGrid() {
    const container = document.getElementById('grid-memory');
    if (!container) return;
    container.classList.remove('memory-board');
    container.innerHTML = '';

    const cardsContainer = lastMergedExercises.find(ex => ex.seedKey === MEMORY_CARDS_SEED_KEY);
    const pairs = groupMemoryItemsByPair((cardsContainer && cardsContainer.items) || []);

    pairs.forEach(({ pairId, itemA, itemB }) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-blue';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [itemA, itemB].forEach(item => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = resolveMemoryItemImageSrc(item);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = itemA.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir par');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir o par "${itemA.word}"?`)) deleteMemoryCardPair(pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar par');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openMemoryCardModal(pairId, itemA, itemB); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Cartas novas ainda não enviadas (ficam só na tela até clicar em "Salvar") —
    // ver flushMemoryDraftPairs(). Mostradas com um selo "Pendente" e só podem ser
    // removidas do rascunho, não editadas (é mais simples excluir e recriar).
    memoryDraftPairs.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-blue';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.imageFileA, draft.imageFileB].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover carta pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            memoryDraftPairs = memoryDraftPairs.filter(d => d.tempId !== draft.tempId);
            renderMemoryManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Carta</div>';
    addBtn.addEventListener('click', () => openMemoryCardModal(null, null, null));
    container.appendChild(addBtn);
}

// Cartas novas ficam num rascunho local (sem chamada de rede) até o usuário clicar em
// "Salvar" ao sair do modo Editar — evita a demora de subir imagem por imagem uma a uma.
let memoryDraftPairs = [];

async function flushMemoryDraftPairs() {
    const pending = memoryDraftPairs;
    memoryDraftPairs = [];
    for (const draft of pending) {
        await addMemoryCardPair(draft.word, draft.imageFileA, draft.imageFileB);
    }
}

let editingMemoryPairId = null;

function openMemoryCardModal(pairId, itemA, itemB) {
    editingMemoryPairId = pairId;
    const isEdit = !!pairId;
    document.getElementById('memory-card-modal-title').textContent = isEdit ? 'Editar Par' : 'Nova Carta';
    document.getElementById('memory-card-word').value = isEdit ? itemA.word : '';
    document.getElementById('memory-card-image-a').value = '';
    document.getElementById('memory-card-image-b').value = '';
    document.getElementById('memory-card-image-a').required = !isEdit;
    document.getElementById('memory-card-image-b').required = !isEdit;

    const previewA = document.getElementById('memory-card-img-preview-a');
    const previewB = document.getElementById('memory-card-img-preview-b');
    [[itemA, previewA], [itemB, previewB]].forEach(([item, preview]) => {
        if (item && item.imageBlob instanceof Blob) { preview.src = URL.createObjectURL(item.imageBlob); preview.style.display = 'block'; }
        else if (item && item.image_url) { preview.src = item.image_url; preview.style.display = 'block'; }
        else { preview.style.display = 'none'; }
    });

    document.getElementById('memory-card-modal').style.display = 'flex';
}

function closeMemoryCardModal() {
    document.getElementById('memory-card-modal').style.display = 'none';
    editingMemoryPairId = null;
}

const observedMemoryBoards = new WeakSet();
const memoryBoardResizeObserver = typeof ResizeObserver === 'function'
    ? new ResizeObserver(entries => {
        entries.forEach(({ target }) => fitMemoryBoard(target));
    })
    : null;

// Mantém o tabuleiro inteiro visível sempre que houver espaço suficiente.
// A largura final considera tanto o limite horizontal quanto a altura das
// linhas (as cartas destes jogos têm proporção 4:5).
function fitMemoryBoard(container) {
    if (!container || !container.classList.contains('memory-board')) return;

    const cardCount = container.querySelectorAll('.memory-card').length;
    if (!cardCount || !container.clientWidth || !container.clientHeight) return;

    const columns = window.matchMedia('(max-width: 768px)').matches ? 4 : 5;
    const rows = Math.ceil(cardCount / columns);
    const styles = getComputedStyle(container);
    const columnGap = parseFloat(styles.columnGap) || 0;
    const rowGap = parseFloat(styles.rowGap) || 0;
    const horizontalPadding = (parseFloat(styles.paddingLeft) || 0) + (parseFloat(styles.paddingRight) || 0);
    const verticalPadding = (parseFloat(styles.paddingTop) || 0) + (parseFloat(styles.paddingBottom) || 0);
    const widthPerCard = (container.clientWidth - horizontalPadding - columnGap * (columns - 1)) / columns;
    const heightPerCard = (container.clientHeight - verticalPadding - rowGap * (rows - 1)) / rows;
    const widthFromHeight = heightPerCard * (4 / 5);
    const fittedWidth = Math.max(64, Math.floor(Math.min(130, widthPerCard, widthFromHeight)));

    container.style.setProperty('--memory-board-columns', columns);
    container.style.setProperty('--memory-card-width', `${fittedWidth}px`);
}

function keepMemoryBoardFitted(container) {
    if (memoryBoardResizeObserver && !observedMemoryBoards.has(container)) {
        observedMemoryBoards.add(container);
        memoryBoardResizeObserver.observe(container);
    }
    requestAnimationFrame(() => fitMemoryBoard(container));
}

function renderMemoryBoard() {
    const container = document.getElementById('grid-memory');
    if (!container) return;
    // Tabuleiro em jogo: bloco compacto de 5 colunas centralizado (a grade de
    // edição reusa este mesmo elemento, por isso a classe entra e sai por JS).
    container.classList.add('memory-board');
    container.innerHTML = '';

    memoryCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'memory-card' + (card.matched ? ' matched' : '') + (card.wrong ? ' wrong' : '') + (card.flipped ? ' flipped' : '');
        btn.setAttribute('aria-label', (card.flipped || card.matched) ? `Carta: ${card.word}` : 'Carta virada para baixo');

        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';

        const back = document.createElement('div');
        back.className = 'memory-card-face memory-card-back';
        back.innerHTML = '<i class="fas fa-clone" aria-hidden="true"></i>';

        const front = document.createElement('div');
        front.className = 'memory-card-face memory-card-front';
        if (card.flipped || card.matched) {
            if (card.src) {
                const img = document.createElement('img');
                img.alt = '';
                img.className = 'memory-card-img';
                img.src = card.src;
                front.appendChild(img);
            } else {
                front.innerHTML = '<i class="fas fa-image" aria-hidden="true"></i>';
            }
            // Nome da carta na base, para a pessoa ler a palavra junto com a imagem
            if (card.word) {
                const nameEl = document.createElement('div');
                nameEl.className = 'memory-card-name';
                nameEl.textContent = card.word;
                front.appendChild(nameEl);
            }
        }

        inner.appendChild(back);
        inner.appendChild(front);
        btn.appendChild(inner);
        btn.addEventListener('click', () => handleMemoryCardClick(index));
        container.appendChild(btn);
    });

    keepMemoryBoardFitted(container);
}

function handleMemoryCardClick(index) {
    if (memoryBusy) return;
    const card = memoryCards[index];
    if (card.flipped || card.matched) return;
    if (memoryFlipped.length >= 2) return;

    card.flipped = true;
    memoryFlipped.push(index);
    renderMemoryBoard();

    if (memoryFlipped.length === 2) {
        memoryMoveCount++;
        document.getElementById('memory-moves-count').textContent = `Jogadas: ${memoryMoveCount}`;
        memoryBusy = true;
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    const [i1, i2] = memoryFlipped;
    const card1 = memoryCards[i1];
    const card2 = memoryCards[i2];

    if (card1.pairId === card2.pairId) {
        card1.matched = true;
        card2.matched = true;
        memoryMatchedCount++;
        const totalPairs = memoryCards.length / 2;
        document.getElementById('memory-pairs-count').textContent = `Pares: ${memoryMatchedCount}/${totalPairs}`;
        announceMemoryStatus(`Par encontrado: ${card1.word}!`);
        speak(card1.word);
        memoryFlipped = [];
        memoryBusy = false;
        renderMemoryBoard();

        if (memoryMatchedCount === totalPairs) {
            setTimeout(() => {
                announceMemoryStatus(`Parabéns! Você encontrou todos os ${totalPairs} pares em ${memoryMoveCount} jogadas.`);
            }, 400);
        }
    } else {
        announceMemoryStatus('Não foi dessa vez, tente de novo.');
        card1.wrong = true;
        card2.wrong = true;
        renderMemoryBoard();
        setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
            card1.wrong = false;
            card2.wrong = false;
            memoryFlipped = [];
            memoryBusy = false;
            renderMemoryBoard();
        }, 900);
    }
}

// =============================================
// CARTAS DO JOGO DA MEMÓRIA DO ALFABETO (CRUD)
// Duplicata do Jogo da Memória acima, como jogo separado: aqui o usuário sobe as
// próprias cartas de letras (A, B, C...) em vez de objetos.
// =============================================
const ALPHABET_MEMORY_SEED_KEY = 'alphabet-memory-cards-container';
const ALPHABET_MEMORY_TITLE = 'Cartas do Jogo da Memória do Alfabeto|green';

async function addAlphabetMemoryCardPair(label, imageFileA, imageFileB) {
    const container = await getOrCreateGameContainer(ALPHABET_MEMORY_SEED_KEY, ALPHABET_MEMORY_TITLE);
    const pairId = makePairId();

    if (container.fromSupabase) {
        try {
            const [imageUrlA, imageUrlB] = await Promise.all([
                uploadToSupabaseStorage('media_uploads', 'images', imageFileA),
                uploadToSupabaseStorage('media_uploads', 'images', imageFileB)
            ]);
            const { error: insertErr } = await supabaseClient.from('exercise_items').insert([
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlA, link: '' },
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlB, link: '' }
            ]);
            if (insertErr) console.error('Erro ao salvar carta no Supabase:', insertErr);
        } catch (e) {
            console.error('Erro ao subir imagem/salvar carta no Supabase:', e);
        }
    } else {
        const base = { word: label, textColor: '#333333', textSize: 100, isUppercase: false, isBold: true, videoLink: '', pairId };
        container.items = [
            ...(container.items || []),
            { ...base, imageBlob: imageFileA || null, image_url: null },
            { ...base, imageBlob: imageFileB || null, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

async function updateAlphabetMemoryCardPair(pairId, label, imageFileA, imageFileB) {
    const container = await getOrCreateGameContainer(ALPHABET_MEMORY_SEED_KEY, ALPHABET_MEMORY_TITLE);

    if (container.fromSupabase) {
        const { data: pairItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!pairItems || pairItems.length !== 2) return;
        const files = [imageFileA, imageFileB];
        for (let i = 0; i < 2; i++) {
            const update = { word: label };
            if (files[i]) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', files[i]);
            await supabaseClient.from('exercise_items').update(update).eq('id', pairItems[i].id);
        }
    } else {
        const pairItems = (container.items || []).filter(it => it.pairId === pairId);
        if (pairItems.length !== 2) return;
        container.items = container.items.map(it => {
            if (it.pairId !== pairId) return it;
            const isFirst = it === pairItems[0];
            const newFile = isFirst ? imageFileA : imageFileB;
            return newFile ? { ...it, word: label, imageBlob: newFile, image_url: null } : { ...it, word: label };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

async function deleteAlphabetMemoryCardPair(pairId) {
    const container = await getOrCreateGameContainer(ALPHABET_MEMORY_SEED_KEY, ALPHABET_MEMORY_TITLE);

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

// =============================================
// JOGO DA MEMÓRIA DO ALFABETO (PARES DE IMAGENS MANUAIS)
// =============================================
let alphabetMemoryCards = [];
let alphabetMemoryFlipped = [];
let alphabetMemoryMatchedCount = 0;
let alphabetMemoryMoveCount = 0;
let alphabetMemoryBusy = false;
const ALPHABET_MEMORY_MAX_PAIRS = 10;

function getAlphabetMemoryCardPairs() {
    const container = lastMergedExercises.find(ex => ex.seedKey === ALPHABET_MEMORY_SEED_KEY);
    return groupMemoryItemsByPair((container && container.items) || []);
}

function announceAlphabetMemoryStatus(text) {
    const el = document.getElementById('alphabet-memory-status-live');
    if (el) el.textContent = text;
}

function startAlphabetMemoryGame() {
    const pairGroups = getAlphabetMemoryCardPairs();
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;

    if (pairGroups.length < 3) {
        container.innerHTML = '';
        document.getElementById('alphabet-memory-pairs-count').textContent = 'Pares: 0/0';
        document.getElementById('alphabet-memory-moves-count').textContent = 'Jogadas: 0';
        const message = 'Crie cartas (em "Editar") para gerar pares para o jogo.';
        announceAlphabetMemoryStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'grid-column:1/-1;padding:20px;color:#555;font-weight:600;';
        msg.textContent = message;
        container.appendChild(msg);
        return;
    }

    const numPairs = Math.min(ALPHABET_MEMORY_MAX_PAIRS, pairGroups.length);
    const chosenPairGroups = shuffleArray([...pairGroups]).slice(0, numPairs);

    // src resolvido uma vez só por partida — ver comentário em startMemoryGame().
    const cardsFromPairs = chosenPairGroups.flatMap(({ pairId, itemA, itemB }) => [
        { pairId, word: itemA.word, src: resolveMemoryItemImageSrc(itemA), flipped: false, matched: false },
        { pairId, word: itemB.word, src: resolveMemoryItemImageSrc(itemB), flipped: false, matched: false }
    ]);

    alphabetMemoryCards = shuffleArray(cardsFromPairs);
    preloadGameImages(alphabetMemoryCards.map(c => c.src));
    // Pré-carrega o áudio de todas as palavras únicas do deck
    [...new Set(alphabetMemoryCards.map(c => c.word).filter(Boolean))].forEach(prefetchTts);
    alphabetMemoryFlipped = [];
    alphabetMemoryMatchedCount = 0;
    alphabetMemoryMoveCount = 0;
    alphabetMemoryBusy = false;

    document.getElementById('alphabet-memory-pairs-count').textContent = `Pares: 0/${numPairs}`;
    document.getElementById('alphabet-memory-moves-count').textContent = 'Jogadas: 0';
    announceAlphabetMemoryStatus('Novo jogo iniciado. Encontre os pares.');
    renderAlphabetMemoryBoard();
}

// ---- Gerenciamento de cartas (modo "Editar") ----

async function renderAlphabetMemoryManageGrid() {
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;
    container.classList.remove('memory-board');
    container.innerHTML = '';

    const cardsContainer = lastMergedExercises.find(ex => ex.seedKey === ALPHABET_MEMORY_SEED_KEY);
    const pairs = groupMemoryItemsByPair((cardsContainer && cardsContainer.items) || []);

    pairs.forEach(({ pairId, itemA, itemB }) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-green';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [itemA, itemB].forEach(item => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = resolveMemoryItemImageSrc(item);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = itemA.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir par');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir o par "${itemA.word}"?`)) deleteAlphabetMemoryCardPair(pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar par');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openAlphabetMemoryCardModal(pairId, itemA, itemB); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Cartas novas ainda não enviadas — ver flushAlphabetMemoryDraftPairs().
    alphabetMemoryDraftPairs.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-green';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.imageFileA, draft.imageFileB].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover carta pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            alphabetMemoryDraftPairs = alphabetMemoryDraftPairs.filter(d => d.tempId !== draft.tempId);
            renderAlphabetMemoryManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Carta</div>';
    addBtn.addEventListener('click', () => openAlphabetMemoryCardModal(null, null, null));
    container.appendChild(addBtn);
}

let alphabetMemoryDraftPairs = [];

async function flushAlphabetMemoryDraftPairs() {
    const pending = alphabetMemoryDraftPairs;
    alphabetMemoryDraftPairs = [];
    for (const draft of pending) {
        await addAlphabetMemoryCardPair(draft.word, draft.imageFileA, draft.imageFileB);
    }
}

let editingAlphabetMemoryPairId = null;

function openAlphabetMemoryCardModal(pairId, itemA, itemB) {
    editingAlphabetMemoryPairId = pairId;
    const isEdit = !!pairId;
    document.getElementById('alphabet-memory-card-modal-title').textContent = isEdit ? 'Editar Par' : 'Nova Carta';
    document.getElementById('alphabet-memory-card-word').value = isEdit ? itemA.word : '';
    document.getElementById('alphabet-memory-card-image-a').value = '';
    document.getElementById('alphabet-memory-card-image-b').value = '';
    document.getElementById('alphabet-memory-card-image-a').required = !isEdit;
    document.getElementById('alphabet-memory-card-image-b').required = !isEdit;

    const previewA = document.getElementById('alphabet-memory-card-img-preview-a');
    const previewB = document.getElementById('alphabet-memory-card-img-preview-b');
    [[itemA, previewA], [itemB, previewB]].forEach(([item, preview]) => {
        if (item && item.imageBlob instanceof Blob) { preview.src = URL.createObjectURL(item.imageBlob); preview.style.display = 'block'; }
        else if (item && item.image_url) { preview.src = item.image_url; preview.style.display = 'block'; }
        else { preview.style.display = 'none'; }
    });

    document.getElementById('alphabet-memory-card-modal').style.display = 'flex';
}

function closeAlphabetMemoryCardModal() {
    document.getElementById('alphabet-memory-card-modal').style.display = 'none';
    editingAlphabetMemoryPairId = null;
}

function renderAlphabetMemoryBoard() {
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;
    // Tabuleiro em jogo: bloco compacto de 5 colunas centralizado (a grade de
    // edição reusa este mesmo elemento, por isso a classe entra e sai por JS).
    container.classList.add('memory-board');
    container.innerHTML = '';

    alphabetMemoryCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'memory-card' + (card.matched ? ' matched' : '') + (card.wrong ? ' wrong' : '') + (card.flipped ? ' flipped' : '');
        btn.setAttribute('aria-label', (card.flipped || card.matched) ? `Carta: ${card.word}` : 'Carta virada para baixo');

        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';

        const back = document.createElement('div');
        back.className = 'memory-card-face memory-card-back';
        back.innerHTML = '<i class="fas fa-clone" aria-hidden="true"></i>';

        const front = document.createElement('div');
        front.className = 'memory-card-face memory-card-front';
        if (card.flipped || card.matched) {
            if (card.src) {
                const img = document.createElement('img');
                img.alt = '';
                img.className = 'memory-card-img';
                img.src = card.src;
                front.appendChild(img);
            } else {
                front.innerHTML = '<i class="fas fa-image" aria-hidden="true"></i>';
            }
            // Nome da carta na base, para a pessoa ler a palavra junto com a imagem
            if (card.word) {
                const nameEl = document.createElement('div');
                nameEl.className = 'memory-card-name';
                nameEl.textContent = card.word;
                front.appendChild(nameEl);
            }
        }

        inner.appendChild(back);
        inner.appendChild(front);
        btn.appendChild(inner);
        btn.addEventListener('click', () => handleAlphabetMemoryCardClick(index));
        container.appendChild(btn);
    });

    keepMemoryBoardFitted(container);
}

function handleAlphabetMemoryCardClick(index) {
    if (alphabetMemoryBusy) return;
    const card = alphabetMemoryCards[index];
    if (card.flipped || card.matched) return;
    if (alphabetMemoryFlipped.length >= 2) return;

    card.flipped = true;
    alphabetMemoryFlipped.push(index);
    renderAlphabetMemoryBoard();

    if (alphabetMemoryFlipped.length === 2) {
        alphabetMemoryMoveCount++;
        document.getElementById('alphabet-memory-moves-count').textContent = `Jogadas: ${alphabetMemoryMoveCount}`;
        alphabetMemoryBusy = true;
        checkAlphabetMemoryMatch();
    }
}

function checkAlphabetMemoryMatch() {
    const [i1, i2] = alphabetMemoryFlipped;
    const card1 = alphabetMemoryCards[i1];
    const card2 = alphabetMemoryCards[i2];

    if (card1.pairId === card2.pairId) {
        card1.matched = true;
        card2.matched = true;
        alphabetMemoryMatchedCount++;
        const totalPairs = alphabetMemoryCards.length / 2;
        document.getElementById('alphabet-memory-pairs-count').textContent = `Pares: ${alphabetMemoryMatchedCount}/${totalPairs}`;
        announceAlphabetMemoryStatus(`Par encontrado: ${card1.word}!`);
        speak(card1.word);
        alphabetMemoryFlipped = [];
        alphabetMemoryBusy = false;
        renderAlphabetMemoryBoard();

        if (alphabetMemoryMatchedCount === totalPairs) {
            setTimeout(() => {
                announceAlphabetMemoryStatus(`Parabéns! Você encontrou todos os ${totalPairs} pares em ${alphabetMemoryMoveCount} jogadas.`);
            }, 400);
        }
    } else {
        announceAlphabetMemoryStatus('Não foi dessa vez, tente de novo.');
        card1.wrong = true;
        card2.wrong = true;
        renderAlphabetMemoryBoard();
        setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
            card1.wrong = false;
            card2.wrong = false;
            alphabetMemoryFlipped = [];
            alphabetMemoryBusy = false;
            renderAlphabetMemoryBoard();
        }, 900);
    }
}

// =============================================
// JOGO DE RECONHECIMENTO (PALAVRA → IMAGEM)
// Cada palavra é um conjunto de 3 itens (1 imagem correta + 2 distratoras) amarrados
// pelo mesmo pair_id, com "role" marcando qual é qual — ver groupNamingItemsBySet().
// =============================================
const NAMING_SEED_KEY = 'naming-game-container';
const NAMING_TITLE = 'Jogo de Reconhecimento|red';

function makeNamingSetId() {
    return 'naming-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

async function addNamingSet(word, correctFile, distractorFile1, distractorFile2) {
    const container = await getOrCreateGameContainer(NAMING_SEED_KEY, NAMING_TITLE);
    const pairId = makeNamingSetId();

    if (container.fromSupabase) {
        const [correctUrl, d1Url, d2Url] = await Promise.all([
            uploadToSupabaseStorage('media_uploads', 'images', correctFile),
            uploadToSupabaseStorage('media_uploads', 'images', distractorFile1),
            uploadToSupabaseStorage('media_uploads', 'images', distractorFile2)
        ]);
        await supabaseClient.from('exercise_items').insert([
            { exercise_id: container.id, word, pair_id: pairId, role: 'correct', image_url: correctUrl, link: '' },
            { exercise_id: container.id, word, pair_id: pairId, role: 'distractor', image_url: d1Url, link: '' },
            { exercise_id: container.id, word, pair_id: pairId, role: 'distractor', image_url: d2Url, link: '' }
        ]);
    } else {
        container.items = [
            ...(container.items || []),
            { word, pairId, role: 'correct', imageBlob: correctFile, image_url: null },
            { word, pairId, role: 'distractor', imageBlob: distractorFile1, image_url: null },
            { word, pairId, role: 'distractor', imageBlob: distractorFile2, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

async function updateNamingSet(pairId, word, correctFile, distractorFile1, distractorFile2) {
    const container = await getOrCreateGameContainer(NAMING_SEED_KEY, NAMING_TITLE);

    if (container.fromSupabase) {
        const { data: setItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!setItems || setItems.length !== 3) return;
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const updates = [[correctItem, correctFile], [distractorItems[0], distractorFile1], [distractorItems[1], distractorFile2]];
        for (const [item, file] of updates) {
            const update = { word };
            if (file) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', file);
            await supabaseClient.from('exercise_items').update(update).eq('id', item.id);
        }
    } else {
        const setItems = (container.items || []).filter(it => it.pairId === pairId);
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const fileFor = (item) => item === correctItem ? correctFile : item === distractorItems[0] ? distractorFile1 : item === distractorItems[1] ? distractorFile2 : null;
        container.items = (container.items || []).map(it => {
            if (it.pairId !== pairId) return it;
            const file = fileFor(it);
            return file ? { ...it, word, imageBlob: file, image_url: null } : { ...it, word };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

async function deleteNamingSet(pairId) {
    const container = await getOrCreateGameContainer(NAMING_SEED_KEY, NAMING_TITLE);

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

function resolveNamingImageSrc(img) {
    if (img && img.imageBlob instanceof Blob) return URL.createObjectURL(img.imageBlob);
    if (img && img.image_url) return img.image_url;
    return '';
}

// Agrupa itens flat (word, pairId, role, imagem) em sets de 3: 1 correct + 2 distractor.
function groupNamingItemsBySet(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .map(([pairId, group]) => {
            const correct = group.find(it => it.role === 'correct');
            const distractors = group.filter(it => it.role === 'distractor');
            if (!correct || distractors.length !== 2) return null;
            return { pairId, word: correct.word, correct, distractors };
        })
        .filter(Boolean);
}

// ---- Gerenciamento de palavras (modo "Editar") ----

async function renderNamingManageGrid() {
    const container = document.getElementById('grid-naming');
    if (!container) return;
    container.innerHTML = '';

    const namingContainer = lastMergedExercises.find(ex => ex.seedKey === NAMING_SEED_KEY);
    const sets = groupNamingItemsBySet((namingContainer && namingContainer.items) || []);

    sets.forEach(set => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-red';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [set.correct, ...set.distractors].forEach(img => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '30%';
            imgEl.alt = '';
            imgEl.src = resolveNamingImageSrc(img);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = set.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir palavra');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir a palavra "${set.word}"?`)) deleteNamingSet(set.pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar palavra');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openNamingSetModal(set); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Palavras novas ainda não enviadas — ver flushNamingDraftSets().
    namingDraftSets.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-red';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.correctFile, draft.d1File, draft.d2File].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '30%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover palavra pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            namingDraftSets = namingDraftSets.filter(d => d.tempId !== draft.tempId);
            renderNamingManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Palavra</div>';
    addBtn.addEventListener('click', () => openNamingSetModal(null));
    container.appendChild(addBtn);
}

let namingDraftSets = [];

async function flushNamingDraftSets() {
    const pending = namingDraftSets;
    namingDraftSets = [];
    for (const draft of pending) {
        await addNamingSet(draft.word, draft.correctFile, draft.d1File, draft.d2File);
    }
}

let editingNamingSetId = null;
let namingQuickCreate = false;

function openNamingSetModal(set) {
    editingNamingSetId = set ? set.pairId : null;
    const isEdit = !!set;
    document.getElementById('naming-set-modal-title').textContent = isEdit ? 'Editar Palavra' : 'Nova Palavra';
    document.getElementById('naming-set-word').value = isEdit ? set.word : '';
    document.getElementById('naming-set-image-correct').value = '';
    document.getElementById('naming-set-image-d1').value = '';
    document.getElementById('naming-set-image-d2').value = '';
    document.getElementById('naming-set-image-correct').required = !isEdit;
    document.getElementById('naming-set-image-d1').required = !isEdit;
    document.getElementById('naming-set-image-d2').required = !isEdit;

    const previewPairs = [
        [isEdit ? set.correct : null, document.getElementById('naming-set-img-preview-correct')],
        [isEdit ? set.distractors[0] : null, document.getElementById('naming-set-img-preview-d1')],
        [isEdit ? set.distractors[1] : null, document.getElementById('naming-set-img-preview-d2')]
    ];
    previewPairs.forEach(([img, previewEl]) => {
        const src = img ? resolveNamingImageSrc(img) : '';
        if (src) { previewEl.src = src; previewEl.style.display = 'block'; }
        else { previewEl.style.display = 'none'; }
    });

    document.getElementById('naming-set-modal').style.display = 'flex';
}

function closeNamingSetModal() {
    const shouldExitQuickCreate = namingQuickCreate;
    document.getElementById('naming-set-modal').style.display = 'none';
    editingNamingSetId = null;
    namingQuickCreate = false;
    if (shouldExitQuickCreate) {
        editModes.naming = false;
        updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
        closeGame();
    }
}

// ---- Partida (modo "Jogar") ----

function getNamingSets() {
    const container = lastMergedExercises.find(ex => ex.seedKey === NAMING_SEED_KEY);
    return groupNamingItemsBySet((container && container.items) || []);
}

let namingQueue = [];
let namingIndex = 0;
let namingCorrectCount = 0;
let namingTotalCount = 0;
let namingBusy = false;

function announceNamingStatus(text) {
    const el = document.getElementById('naming-status-live');
    if (el) el.textContent = text;
}

function updateNamingScore() {
    document.getElementById('naming-score').textContent = `${namingCorrectCount}/${namingTotalCount} correto`;
}

function startNamingGame() {
    const sets = getNamingSets();
    const playArea = document.getElementById('naming-play-area');
    const manageGrid = document.getElementById('grid-naming');
    manageGrid.style.display = 'none';
    playArea.style.display = 'flex';

    namingCorrectCount = 0;
    namingTotalCount = 0;
    namingBusy = false;
    updateNamingScore();

    if (sets.length < 1) {
        document.getElementById('naming-word-display').textContent = '';
        document.getElementById('naming-choices').innerHTML = '';
        const message = 'Crie palavras (em "Editar") para gerar o jogo.';
        announceNamingStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'padding:20px;color:#555;font-weight:600;text-align:center;';
        msg.textContent = message;
        document.getElementById('naming-choices').appendChild(msg);
        return;
    }

    namingQueue = shuffleArray([...sets]);
    namingIndex = 0;
    preloadGameImages(namingQueue.flatMap(set => [set.correct, ...set.distractors].map(resolveNamingImageSrc)));
    // Pré-carrega o áudio de todas as palavras da fila para o jogo ser instantâneo
    [...new Set(namingQueue.map(s => s.word).filter(Boolean))].forEach(prefetchTts);
    announceNamingStatus('Novo jogo iniciado.');
    renderNamingRound();
}

function renderNamingRound() {
    if (namingIndex >= namingQueue.length) {
        namingQueue = shuffleArray([...namingQueue]);
        namingIndex = 0;
    }

    const set = namingQueue[namingIndex];
    namingBusy = false;
    document.getElementById('naming-word-display').textContent = set.word;
    prefetchTts(set.word); // botão de ouvir a palavra responde na hora

    const options = shuffleArray([
        { ...set.correct, isCorrect: true },
        { ...set.distractors[0], isCorrect: false },
        { ...set.distractors[1], isCorrect: false }
    ]);

    const choicesEl = document.getElementById('naming-choices');
    choicesEl.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'naming-choice-btn';
        const img = document.createElement('img');
        img.alt = '';
        img.src = resolveNamingImageSrc(opt);
        btn.appendChild(img);
        btn.addEventListener('click', () => handleNamingChoice(btn, opt.isCorrect, set.word));
        choicesEl.appendChild(btn);
    });

    announceNamingStatus(`Encontre a imagem de: ${set.word}`);
}

function handleNamingChoice(btn, isCorrect, word) {
    if (namingBusy || btn.disabled) return;

    if (isCorrect) {
        namingBusy = true;
        const allBtns = document.querySelectorAll('#naming-choices .naming-choice-btn');
        allBtns.forEach(b => b.disabled = true);

        namingTotalCount++;
        namingCorrectCount++;
        btn.classList.add('is-correct');
        announceNamingStatus(`Isso mesmo, ${word}!`);
        speakWithAzure(word); // mesma voz do botão de ouvir (já pré-carregada na rodada)
        updateNamingScore();

        setTimeout(() => {
            namingIndex++;
            renderNamingRound();
        }, 1200);
    } else {
        // Errou: mostra o feedback vermelho só por um instante e depois volta ao normal
        // (sem ficar marcado, sem trocar as cartas), pra pessoa poder tentar de novo.
        namingBusy = true;
        btn.classList.add('is-incorrect');
        announceNamingStatus('Tente de novo.');
        setTimeout(() => {
            btn.classList.remove('is-incorrect');
            namingBusy = false;
        }, 600);
    }
}

function namingHelp() {
    if (namingIndex >= namingQueue.length) return;
    speak(namingQueue[namingIndex].word);
}

function namingSkip() {
    if (namingBusy) return;
    namingIndex++;
    renderNamingRound();
}

// =============================================
// ATIVIDADES PARA AFASIA (IMAGEM → PALAVRA)
// Inverso do Jogo de Reconhecimento: mostra uma imagem com uma pergunta e a pessoa
// escolhe a palavra certa entre 3 opções escritas. Cada atividade são 3 itens amarrados
// pelo mesmo pair_id: o 'correct' guarda a imagem, a palavra certa e a pergunta (no
// campo link, que os jogos não usam para vídeo), e os 2 'distractor' guardam só as
// palavras erradas — ver groupAfasiaItemsBySet().
// =============================================
const AFASIA_SEED_KEY = 'afasia-game-container';
const AFASIA_TITLE = 'Reconhecimento de Imagem|yellow';
const AFASIA_DEFAULT_QUESTION = 'Qual palavra combina com a imagem?';

function makeAfasiaSetId() {
    return 'afasia-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

async function addAfasiaSet(question, correctWord, d1Word, d2Word, imageFile) {
    const container = await getOrCreateGameContainer(AFASIA_SEED_KEY, AFASIA_TITLE);
    const pairId = makeAfasiaSetId();

    if (container.fromSupabase) {
        const imageUrl = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        await supabaseClient.from('exercise_items').insert([
            { exercise_id: container.id, word: correctWord, pair_id: pairId, role: 'correct', image_url: imageUrl, link: question },
            { exercise_id: container.id, word: d1Word, pair_id: pairId, role: 'distractor', image_url: null, link: '' },
            { exercise_id: container.id, word: d2Word, pair_id: pairId, role: 'distractor', image_url: null, link: '' }
        ]);
    } else {
        container.items = [
            ...(container.items || []),
            { word: correctWord, pairId, role: 'correct', imageBlob: imageFile, image_url: null, videoLink: question },
            { word: d1Word, pairId, role: 'distractor', imageBlob: null, image_url: null, videoLink: '' },
            { word: d2Word, pairId, role: 'distractor', imageBlob: null, image_url: null, videoLink: '' }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

async function updateAfasiaSet(pairId, question, correctWord, d1Word, d2Word, imageFile) {
    const container = await getOrCreateGameContainer(AFASIA_SEED_KEY, AFASIA_TITLE);

    if (container.fromSupabase) {
        const { data: setItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!setItems || setItems.length !== 3) return;
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const correctUpdate = { word: correctWord, link: question };
        if (imageFile) correctUpdate.image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        await supabaseClient.from('exercise_items').update(correctUpdate).eq('id', correctItem.id);
        await supabaseClient.from('exercise_items').update({ word: d1Word }).eq('id', distractorItems[0].id);
        await supabaseClient.from('exercise_items').update({ word: d2Word }).eq('id', distractorItems[1].id);
    } else {
        const distractors = (container.items || []).filter(it => it.pairId === pairId && it.role === 'distractor');
        container.items = (container.items || []).map(it => {
            if (it.pairId !== pairId) return it;
            if (it.role === 'correct') {
                const updated = { ...it, word: correctWord, videoLink: question };
                if (imageFile) { updated.imageBlob = imageFile; updated.image_url = null; }
                return updated;
            }
            return { ...it, word: it === distractors[0] ? d1Word : d2Word };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

async function deleteAfasiaSet(pairId) {
    const container = await getOrCreateGameContainer(AFASIA_SEED_KEY, AFASIA_TITLE);

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

// Agrupa itens flat (word, pairId, role, imagem, pergunta) em atividades de 3 itens.
function groupAfasiaItemsBySet(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .map(([pairId, group]) => {
            const correct = group.find(it => it.role === 'correct');
            const distractors = group.filter(it => it.role === 'distractor');
            if (!correct || distractors.length !== 2) return null;
            return {
                pairId,
                question: correct.videoLink || AFASIA_DEFAULT_QUESTION,
                correct,
                distractorWords: distractors.map(it => it.word)
            };
        })
        .filter(Boolean);
}

// ---- Gerenciamento de atividades (modo "Editar") ----

async function renderAfasiaManageGrid() {
    const container = document.getElementById('grid-afasia');
    if (!container) return;
    container.innerHTML = '';

    const afasiaContainer = lastMergedExercises.find(ex => ex.seedKey === AFASIA_SEED_KEY);
    const sets = groupAfasiaItemsBySet((afasiaContainer && afasiaContainer.items) || []);

    sets.forEach(set => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-yellow';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgEl.src = resolveNamingImageSrc(set.correct);
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = set.correct.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir atividade');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir a atividade "${set.correct.word}"?`)) deleteAfasiaSet(set.pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar atividade');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openAfasiaSetModal(set); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Atividades novas ainda não enviadas — ver flushAfasiaDraftSets().
    afasiaDraftSets.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-yellow';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgEl.src = draft.imageFile ? URL.createObjectURL(draft.imageFile) : '';
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.correctWord} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover atividade pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            afasiaDraftSets = afasiaDraftSets.filter(d => d.tempId !== draft.tempId);
            renderAfasiaManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Imagem</div>';
    addBtn.addEventListener('click', () => openAfasiaSetModal(null));
    container.appendChild(addBtn);
}

let afasiaDraftSets = [];

async function flushAfasiaDraftSets() {
    const pending = afasiaDraftSets;
    afasiaDraftSets = [];
    for (const draft of pending) {
        await addAfasiaSet(draft.question, draft.correctWord, draft.d1Word, draft.d2Word, draft.imageFile);
    }
}

let editingAfasiaSetId = null;
let afasiaQuickCreate = false;

function openAfasiaSetModal(set) {
    editingAfasiaSetId = set ? set.pairId : null;
    const isEdit = !!set;
    document.getElementById('afasia-set-modal-title').textContent = isEdit ? 'Editar Reconhecimento de Imagem' : 'Novo Reconhecimento de Imagem';
    document.getElementById('afasia-set-question').value = isEdit ? set.question : '';
    document.getElementById('afasia-set-word-correct').value = isEdit ? set.correct.word : '';
    document.getElementById('afasia-set-word-d1').value = isEdit ? set.distractorWords[0] : '';
    document.getElementById('afasia-set-word-d2').value = isEdit ? set.distractorWords[1] : '';
    document.getElementById('afasia-set-image').value = '';
    document.getElementById('afasia-set-image').required = !isEdit;

    const preview = document.getElementById('afasia-set-img-preview');
    const src = isEdit ? resolveNamingImageSrc(set.correct) : '';
    if (src) { preview.src = src; preview.style.display = 'block'; }
    else { preview.style.display = 'none'; }

    document.getElementById('afasia-set-modal').style.display = 'flex';
}

function closeAfasiaSetModal() {
    const shouldExitQuickCreate = afasiaQuickCreate;
    document.getElementById('afasia-set-modal').style.display = 'none';
    editingAfasiaSetId = null;
    afasiaQuickCreate = false;
    if (shouldExitQuickCreate) {
        editModes.afasia = false;
        updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
        closeGame();
    }
}

// ---- Partida (modo "Jogar") ----

function getAfasiaSets() {
    const container = lastMergedExercises.find(ex => ex.seedKey === AFASIA_SEED_KEY);
    return groupAfasiaItemsBySet((container && container.items) || []);
}

let afasiaQueue = [];
let afasiaIndex = 0;
let afasiaCorrectCount = 0;
let afasiaTotalCount = 0;
let afasiaBusy = false;

function announceAfasiaStatus(text) {
    const el = document.getElementById('afasia-status-live');
    if (el) el.textContent = text;
}

function updateAfasiaScore() {
    document.getElementById('afasia-score').textContent = `${afasiaCorrectCount}/${afasiaTotalCount} correto`;
}

function startAfasiaGame() {
    const sets = getAfasiaSets();
    const playArea = document.getElementById('afasia-play-area');
    const manageGrid = document.getElementById('grid-afasia');
    manageGrid.style.display = 'none';
    playArea.style.display = 'flex';

    afasiaCorrectCount = 0;
    afasiaTotalCount = 0;
    afasiaBusy = false;
    updateAfasiaScore();

    if (sets.length < 1) {
        document.getElementById('afasia-image-frame').style.display = 'none';
        document.getElementById('afasia-question').textContent = '';
        document.getElementById('afasia-choices').innerHTML = '';
        const message = 'Crie atividades (em "Editar") para gerar o jogo.';
        announceAfasiaStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'padding:20px;color:#555;font-weight:600;text-align:center;';
        msg.textContent = message;
        document.getElementById('afasia-choices').appendChild(msg);
        return;
    }

    afasiaQueue = shuffleArray([...sets]);
    afasiaIndex = 0;
    preloadGameImages(afasiaQueue.map(set => resolveNamingImageSrc(set.correct)));
    // Pré-carrega o áudio de todas as perguntas e palavras da fila
    [...new Set(afasiaQueue.flatMap(s => [s.word, s.question]).filter(Boolean))].forEach(prefetchTts);
    announceAfasiaStatus('Novo jogo iniciado.');
    renderAfasiaRound();
}

function renderAfasiaRound() {
    if (afasiaIndex >= afasiaQueue.length) {
        afasiaQueue = shuffleArray([...afasiaQueue]);
        afasiaIndex = 0;
    }

    const set = afasiaQueue[afasiaIndex];
    afasiaBusy = false;

    document.getElementById('afasia-image-frame').style.display = 'flex';
    document.getElementById('afasia-image').src = resolveNamingImageSrc(set.correct);
    document.getElementById('afasia-question').textContent = set.question;

    const options = shuffleArray([
        { word: set.correct.word, isCorrect: true },
        { word: set.distractorWords[0], isCorrect: false },
        { word: set.distractorWords[1], isCorrect: false }
    ]);

    const choicesEl = document.getElementById('afasia-choices');
    choicesEl.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'afasia-choice-btn';
        btn.textContent = opt.word;
        btn.addEventListener('click', () => handleAfasiaChoice(btn, opt.isCorrect, set.correct.word));
        choicesEl.appendChild(btn);
    });

    announceAfasiaStatus(set.question);
}

function handleAfasiaChoice(btn, isCorrect, word) {
    if (afasiaBusy || btn.disabled) return;

    if (isCorrect) {
        afasiaBusy = true;
        const allBtns = document.querySelectorAll('#afasia-choices .afasia-choice-btn');
        allBtns.forEach(b => b.disabled = true);

        afasiaTotalCount++;
        afasiaCorrectCount++;
        btn.classList.add('is-correct');
        announceAfasiaStatus(`Isso mesmo, ${word}!`);
        speak(word);
        updateAfasiaScore();

        setTimeout(() => {
            afasiaIndex++;
            renderAfasiaRound();
        }, 1200);
    } else {
        // Errou: mostra o feedback vermelho só por um instante e depois volta ao normal
        // (sem ficar marcado, sem trocar as opções), pra pessoa poder tentar de novo.
        afasiaBusy = true;
        btn.classList.add('is-incorrect');
        announceAfasiaStatus('Tente de novo.');
        setTimeout(() => {
            btn.classList.remove('is-incorrect');
            afasiaBusy = false;
        }, 600);
    }
}

function afasiaHelp() {
    if (afasiaIndex >= afasiaQueue.length) return;
    speak(afasiaQueue[afasiaIndex].question);
}

function afasiaSkip() {
    if (afasiaBusy) return;
    afasiaIndex++;
    renderAfasiaRound();
}

// =============================================
// SISTEMA DE PERSONALIZAÇÃO DE CARDS
// =============================================
// 🔐 ADMIN: Controle de acesso
// isAdmin aqui significa "pode editar conteúdo" (papéis editor ou admin),
// mantendo compatibilidade com todo o restante do arquivo que já usa essa
// variável para mostrar barras de edição. canManageUsers é o papel
// exclusivamente admin (gerenciar usuários), usado só pela aba Admin.
let isAdmin = false; // Bloqueado por padrão (Apenas fala)
let canManageUsers = false;

function isCompleteSentenceLocalDemo() {
    const localHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    return localHost && new URLSearchParams(window.location.search).get('demo') === 'complete-sentence';
}

function isLocalAppHost() {
    return ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
}

// Verificar sessão no carregamento
if (supabaseClient) {
    supabaseClient.auth.getSession().then(async ({ data }) => {
        if (!data?.session) {
            if (isLocalAppHost()) {
                isAdmin = true;
                showEditBars();
                applyModuleVisibility();
                renderGamesList();
                return;
            }
            // Ninguém pode acessar sem login! Redireciona para a landing page (index.html).
            window.location.href = 'index.html';
            return;
        }

        // Se chegou aqui, a pessoa fez login.
        const userId = data.session.user.id;

        try {
            const { data: roleData, error } = await supabaseClient
                .from('user_roles')
                .select('role')
                .eq('user_id', userId)
                .single();

            const role = roleData?.role || 'viewer';
            isAdmin = isCompleteSentenceLocalDemo() || role === 'editor' || role === 'admin';
            canManageUsers = role === 'admin';
            startUsageSession({
                id: userId,
                email: data.session.user.email || 'sem e-mail',
                role
            });

            const logoutLabel = canManageUsers ? 'Sair (Admin)' : (isAdmin ? 'Sair (Editor)' : 'Sair');
            document.getElementById('text-login-logout').textContent = logoutLabel;
            if (document.getElementById('btn-login-logout')) {
                const icon = document.getElementById('btn-login-logout').querySelector('i');
                if (icon) icon.className = isAdmin ? 'fas fa-unlock' : 'fas fa-user';
            }

            const adminNavBtn = document.getElementById('btn-nav-admin');
            if (adminNavBtn) adminNavBtn.style.display = canManageUsers ? 'flex' : 'none';

            if (isAdmin) {
                // Re-render grids to show edit buttons se editor/admin
                loadCoreAndRender();
                if (typeof initVirtuesDB === 'function') initVirtuesDB();
                if (typeof initTopicsDB === 'function') initTopicsDB();
                loadMediaCards();
                loadExerciseCards();
            }
            
            // Mostra/oculta o botão Editar do Carômetro conforme papel do usuário
            const btnEditCarometro = document.getElementById('btn-edit-carometro');
            if (btnEditCarometro) {
                btnEditCarometro.style.display = isAdmin ? '' : 'none';
            }

            applyModuleVisibility(); // Aplica visibilidade de módulos (para ambos admin e usuário)
        } catch (e) {
            console.error("Erro ao checar permissões:", e);
        }

        showEditBars();
    });
}

document.getElementById('btn-login-logout')?.addEventListener('click', async () => {
    if (confirm("Deseja sair do aplicativo?")) {
        closeUsageSession('logout');
        if (supabaseClient) await supabaseClient.auth.signOut();
        window.location.href = 'index.html';
    }
});

// =============================================
// PAINEL ADMIN (gestão de usuários e papéis)
// =============================================
const ADMIN_FN_URL = `${supabaseUrl}/functions/v1/admin-users`;

async function callAdminUsersFn(action, payload) {
    const { data } = await supabaseClient.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) throw new Error('Sessão expirada. Faça login novamente.');

    const res = await fetch(ADMIN_FN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ action, payload })
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || `Erro ${res.status}`);
    return body;
}

function showAdminFeedback(message, isError = false) {
    const box = document.getElementById('admin-users-feedback');
    if (!box) return;
    box.textContent = message;
    box.classList.toggle('error', isError);
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 5000);
}

function formatAdminDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

async function loadAdminUsers() {
    const tbody = document.getElementById('admin-users-tbody');
    if (!tbody || !canManageUsers) return;
    tbody.innerHTML = '<tr><td colspan="5">Carregando...</td></tr>';

    try {
        const { data: sessionData } = await supabaseClient.auth.getSession();
        const currentUserId = sessionData?.session?.user?.id;
        const { users } = await callAdminUsersFn('list');

        users.sort((a, b) => a.email.localeCompare(b.email));
        tbody.innerHTML = '';

        users.forEach(u => {
            const tr = document.createElement('tr');
            const isSelf = u.id === currentUserId;

            const nameCell = document.createElement('td');
            nameCell.className = 'admin-name-cell';
            nameCell.style.display = 'flex';
            nameCell.style.alignItems = 'center';
            nameCell.style.gap = '8px';

            const nameSpan = document.createElement('span');
            nameSpan.textContent = u.name || '-';
            
            const nameEditBtn = document.createElement('button');
            nameEditBtn.innerHTML = '<i class="fas fa-pen" aria-hidden="true"></i>';
            nameEditBtn.style.background = 'none';
            nameEditBtn.style.border = 'none';
            nameEditBtn.style.color = '#718096';
            nameEditBtn.style.cursor = 'pointer';
            nameEditBtn.title = 'Editar Nome';

            nameCell.appendChild(nameSpan);
            nameCell.appendChild(nameEditBtn);

            nameEditBtn.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = u.name || '';
                input.style.padding = '4px 8px';
                input.style.border = '1px solid #ccc';
                input.style.borderRadius = '4px';

                const saveBtn = document.createElement('button');
                saveBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
                saveBtn.style.background = 'none';
                saveBtn.style.border = 'none';
                saveBtn.style.color = '#38a169';
                saveBtn.style.cursor = 'pointer';

                const cancelBtn = document.createElement('button');
                cancelBtn.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
                cancelBtn.style.background = 'none';
                cancelBtn.style.border = 'none';
                cancelBtn.style.color = '#e53e3e';
                cancelBtn.style.cursor = 'pointer';

                nameCell.innerHTML = '';
                nameCell.appendChild(input);
                nameCell.appendChild(saveBtn);
                nameCell.appendChild(cancelBtn);

                input.focus();

                const finishEdit = () => {
                    nameCell.innerHTML = '';
                    nameCell.appendChild(nameSpan);
                    nameCell.appendChild(nameEditBtn);
                };

                cancelBtn.addEventListener('click', finishEdit);
                saveBtn.addEventListener('click', async () => {
                    const newName = input.value;
                    input.disabled = true;
                    saveBtn.disabled = true;
                    try {
                        await callAdminUsersFn('setName', { userId: u.id, name: newName });
                        u.name = newName;
                        nameSpan.textContent = newName || '-';
                        showAdminFeedback('Nome atualizado.');
                    } catch (err) {
                        console.error('Erro no setName:', err);
                        showAdminFeedback(err.message || 'Erro ao atualizar nome.', true);
                    } finally {
                        finishEdit();
                    }
                });
            });

            tr.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.className = 'admin-email-cell';
            emailCell.textContent = u.email + (isSelf ? ' (você)' : '');
            tr.appendChild(emailCell);

            const roleCell = document.createElement('td');
            if (isSelf) {
                const badge = document.createElement('span');
                badge.className = `admin-role-badge ${u.role}`;
                badge.textContent = u.role;
                roleCell.appendChild(badge);
            } else {
                const select = document.createElement('select');
                select.className = 'admin-role-select';
                ['viewer', 'editor', 'admin'].forEach(r => {
                    const opt = document.createElement('option');
                    opt.value = r;
                    opt.textContent = r;
                    if (r === u.role) opt.selected = true;
                    select.appendChild(opt);
                });
                select.addEventListener('change', async () => {
                    const newRole = select.value;
                    select.disabled = true;
                    try {
                        await callAdminUsersFn('setRole', { userId: u.id, role: newRole });
                        showAdminFeedback(`Papel de ${u.email} atualizado para ${newRole}.`);
                    } catch (err) {
                        showAdminFeedback(err.message || 'Erro ao atualizar papel.', true);
                        select.value = u.role;
                    } finally {
                        select.disabled = false;
                    }
                });
                roleCell.appendChild(select);
            }
            tr.appendChild(roleCell);

            const createdCell = document.createElement('td');
            createdCell.textContent = formatAdminDate(u.created_at);
            tr.appendChild(createdCell);

            const lastSignInCell = document.createElement('td');
            lastSignInCell.textContent = formatAdminDate(u.last_sign_in_at);
            tr.appendChild(lastSignInCell);

            const actionsCell = document.createElement('td');
            actionsCell.className = 'admin-actions-cell';

            const passBtn = document.createElement('button');
            passBtn.className = 'admin-edit-password-btn';
            passBtn.innerHTML = '<i class="fas fa-key" aria-hidden="true"></i>';
            passBtn.title = 'Alterar senha';
            passBtn.addEventListener('click', () => openChangePasswordModal(u.id, u.email));
            actionsCell.appendChild(passBtn);

            if (!isSelf) {
                const delBtn = document.createElement('button');
                delBtn.className = 'admin-delete-user-btn';
                delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
                delBtn.title = 'Excluir usuário';
                delBtn.addEventListener('click', async () => {
                    if (!confirm(`Excluir a conta de ${u.email}? Essa ação não pode ser desfeita.`)) return;
                    delBtn.disabled = true;
                    try {
                        await callAdminUsersFn('delete', { userId: u.id });
                        showAdminFeedback(`Usuário ${u.email} excluído.`);
                        loadAdminUsers();
                    } catch (err) {
                        showAdminFeedback(err.message || 'Erro ao excluir usuário.', true);
                        delBtn.disabled = false;
                    }
                });
                actionsCell.appendChild(delBtn);
            }
            tr.appendChild(actionsCell);

            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="5">Erro ao carregar usuários: ${err.message}</td></tr>`;
    }
    renderUsageDashboard();
}

document.getElementById('btn-nav-admin')?.addEventListener('click', async () => {
    setAdminTab('users');
    await loadAdminUsers();
});
document.getElementById('btn-admin-tab-users')?.addEventListener('click', () => setAdminTab('users'));
document.getElementById('btn-admin-tab-usage')?.addEventListener('click', () => setAdminTab('usage'));
document.getElementById('btn-admin-tab-modules')?.addEventListener('click', () => setAdminTab('modules'));
document.getElementById('btn-refresh-usage')?.addEventListener('click', renderUsageDashboard);
document.getElementById('btn-clear-usage')?.addEventListener('click', clearLocalUsageData);

const newUserModal = document.getElementById('new-user-modal');
const newUserForm = document.getElementById('new-user-form');
const newUserError = document.getElementById('new-user-error');

document.getElementById('btn-open-new-user')?.addEventListener('click', () => {
    newUserForm?.reset();
    if (newUserError) newUserError.style.display = 'none';
    if (newUserModal) newUserModal.style.display = 'flex';
});

function closeNewUserModal() {
    if (newUserModal) newUserModal.style.display = 'none';
}
document.getElementById('btn-close-new-user')?.addEventListener('click', closeNewUserModal);
document.getElementById('btn-cancel-new-user')?.addEventListener('click', closeNewUserModal);

newUserForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('new-user-email').value.trim();
    const name = document.getElementById('new-user-name')?.value.trim();
    const password = document.getElementById('new-user-password').value;
    const role = document.getElementById('new-user-role').value;
    const submitBtn = document.getElementById('btn-submit-new-user');

    if (newUserError) newUserError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Criando...';

    try {
        await callAdminUsersFn('create', { email, password, role, name });
        closeNewUserModal();
        showAdminFeedback(`Usuário ${email} criado com papel ${role}.`);
        loadAdminUsers();
    } catch (err) {
        if (newUserError) {
            newUserError.textContent = err.message || 'Erro ao criar usuário.';
            newUserError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Criar usuário';
    }
});

const changePasswordModal = document.getElementById('change-password-modal');
const changePasswordForm = document.getElementById('change-password-form');
const changePasswordError = document.getElementById('change-password-error');
let changePasswordTargetId = null;

function openChangePasswordModal(userId, email) {
    changePasswordTargetId = userId;
    changePasswordForm?.reset();
    if (changePasswordError) changePasswordError.style.display = 'none';
    const emailLabel = document.getElementById('change-password-email');
    if (emailLabel) emailLabel.textContent = email;
    if (changePasswordModal) changePasswordModal.style.display = 'flex';
}

function closeChangePasswordModal() {
    if (changePasswordModal) changePasswordModal.style.display = 'none';
    changePasswordTargetId = null;
}
document.getElementById('btn-close-change-password')?.addEventListener('click', closeChangePasswordModal);
document.getElementById('btn-cancel-change-password')?.addEventListener('click', closeChangePasswordModal);

changePasswordForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const password = document.getElementById('change-password-input').value;
    const submitBtn = document.getElementById('btn-submit-change-password');

    if (changePasswordError) changePasswordError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Salvando...';

    try {
        await callAdminUsersFn('setPassword', { userId: changePasswordTargetId, password });
        closeChangePasswordModal();
        showAdminFeedback('Senha atualizada com sucesso.');
    } catch (err) {
        if (changePasswordError) {
            changePasswordError.textContent = err.message || 'Erro ao alterar senha.';
            changePasswordError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Salvar senha';
    }
});

// Estado global
const editModes = { core: false, virtue: false, topic: false, memory: false, naming: false, alphabetMemory: false, afasia: false };
let cardEditorState = { section: null, cardId: null, folderRecord: null };
let currentVirtueFolders = [];
let currentOpenFolderRecord = null;
let currentTopicsFolders = [];
let currentOpenTopicFolderRecord = null;

// ---- Helpers de visibilidade de edição ----
function showEditBars() {
    ['btn-edit-core', 'btn-edit-virtues', 'btn-edit-topics', 'btn-edit-memory', 'btn-edit-naming', 'btn-edit-alphabet-memory', 'btn-edit-afasia'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = isAdmin ? 'inline-block' : 'none';
    });
    document.querySelectorAll('.media-header').forEach(header => {
        header.style.display = isAdmin ? 'flex' : 'none';
    });
    const completeSentenceManager = document.getElementById('btn-manage-complete-sentence');
    if (completeSentenceManager) completeSentenceManager.style.display = isAdmin ? 'flex' : 'none';
}

// Mostra "Salvando..." e desabilita os botões de ação enquanto as cartas pendentes
// (ver flushMemoryDraftPairs/flushAlphabetMemoryDraftPairs/flushNamingDraftSets) sobem
// pro Supabase — sem isso o clique em "Salvar" parecia travado durante o envio.
function setGameButtonsProcessing(editBtnId, newGameBtnId, isProcessing) {
    const editBtn = document.getElementById(editBtnId);
    const newGameBtn = document.getElementById(newGameBtnId);
    if (isProcessing) {
        if (editBtn) { editBtn.disabled = true; editBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...'; }
        if (newGameBtn) newGameBtn.disabled = true;
    } else {
        if (editBtn) editBtn.disabled = false;
        if (newGameBtn) newGameBtn.disabled = false;
    }
}

function updateEditBtn(section, btnId, doneLabel = 'Concluir') {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (editModes[section]) {
        btn.classList.add('active');
        btn.innerHTML = `<i class="fas fa-check"></i> ${doneLabel}`;
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
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = card.word;

        // Pré-carrega o áudio neural apenas quando não há áudio customizado no card
        if (!(card.audioBlob instanceof Blob) && !(typeof card.audio_url === 'string' && card.audio_url.trim() !== '')) {
            prefetchTts(card.word);
        }

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes[section]) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
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
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
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
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }
    }

    // Botão + Novo Card (admin)
    if (isAdmin && editModes[section]) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Novo Card</div>';
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
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        // Pré-carrega o áudio da pasta para o clique ser instantâneo
        prefetchTts(record.folder);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        const folderKey = record.folder.toLowerCase().trim();
        const localImgUrl = localForcesImages[folderKey];
        if (localImgUrl) {
            imgEl.src = localImgUrl;
        } else {
            fetchArasaacImage(record.folder).then(url => {
                if (url) imgEl.src = url;
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
            });
        }

        if (isAdmin && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
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
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('topic', null, null, record); };
            btn.appendChild(editBtn);

            // Avisar usuários por e-mail sobre a pasta de tópicos
            btn.appendChild(createNotifyUsersButton(record.folder, 'Tópico'));
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
        addBtn.innerHTML = '<i class="fas fa-plus" aria-hidden="true"></i><div class="word-btn-text">Nova Pasta</div>';
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
        imgEl.alt = '';
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
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        // Pré-carrega o áudio ao renderizar o item, assim o clique é instantâneo
        prefetchTts(item.word);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
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
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
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
        addBtn.innerHTML = '<i class="fas fa-plus" aria-hidden="true"></i><div class="word-btn-text">Novo Item</div>';
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
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        // Pré-carrega o áudio da pasta para o clique ser instantâneo
        prefetchTts(record.folder);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
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

            // Avisar usuários por e-mail sobre a pasta de Fomes e Forças
            btn.appendChild(createNotifyUsersButton(record.folder, 'Categoria'));
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
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
            });
        }
    }

    if (isAdmin && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Categoria</div>';
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
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        // Pré-carrega o áudio ao renderizar, para o clique ser instantâneo
        prefetchTts(item.word);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
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
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
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
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }
    }

    if (isAdmin && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Novo Card</div>';
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

// ---- CHAT IA AZURE (Via Supabase Edge Function ou Servidor Local) ----
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.protocol === 'file:';

const SUPABASE_CHAT_ENDPOINT = "https://rrubmvykindvilptjhma.supabase.co/functions/v1/chat";

const AZURE_AI_ENDPOINT = isLocalhost
    ? "http://127.0.0.1:5001/chat"
    : SUPABASE_CHAT_ENDPOINT;


const iaChatInput = document.getElementById('ia-chat-input');
const btnIaSend = document.getElementById('btn-ia-send');
const btnIaRecord = document.getElementById('btn-ia-record');
const iaChatMessages = document.getElementById('ia-chat-messages');
const btnIaRestart = document.getElementById('btn-ia-restart');

// O agente Azure (falafacil) já tem suas próprias instruções completas configuradas
// no Azure AI Foundry — não injetamos nenhuma instrução daqui. chatHistory guarda só
// as mensagens reais da conversa, pra não competir/conflitar com a configuração de lá.
let chatHistory = [];
// Acompanha o chatHistory: o servidor não guarda mais isso globalmente (um global
// compartilhado por todas as abas/usuários fazia uma conversa "vazar" contexto pra
// outra). Reseta junto com chatHistory sempre que a página recarrega.
let lastResponseId = null;
// Último áudio de resposta da IA em reprodução — guardado para poder ser
// interrompido ao reiniciar a conversa.
let iaChatAudio = null;

function restartIaChat() {
    if (!confirm('Começar uma nova conversa? O histórico atual será apagado.')) return;
    chatHistory = [];
    lastResponseId = null; // sem isso a Azure continuaria "lembrando" da conversa antiga
    if (iaChatAudio) { iaChatAudio.pause(); iaChatAudio = null; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (iaChatMessages) iaChatMessages.innerHTML = '';
    addMessageToChat('Olá! Sou o Comunica Fácil IA. Como posso ajudar você hoje?', 'ia');
    if (iaChatInput) { iaChatInput.value = ''; iaChatInput.focus(); }
}
btnIaRestart?.addEventListener('click', restartIaChat);

async function sendIaMessage() {
    const text = iaChatInput.value.trim();
    if (!text) return;
    
    addMessageToChat(text, 'user');
    iaChatInput.value = '';
    
    chatHistory.push({ role: "user", content: text });
    const typingIndicator = addMessageToChat('Digitando...', 'ia', true);
    
    try {
        const response = await fetch(AZURE_AI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: chatHistory,
                generateAudio: true, // Solicita síntese de voz na resposta
                previous_response_id: lastResponseId
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na API do Supabase: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || data.error);
        }

        const reply = data.reply;
        lastResponseId = data.response_id || lastResponseId;

        chatHistory.push({ role: "assistant", content: reply });
        
        typingIndicator.remove();
        addMessageToChat(reply, 'ia', false, data.audio);
        
        // Toca automaticamente se houver áudio (rastreado para o "Nova conversa" poder parar)
        if (data.audio) {
            iaChatAudio = new Audio(`data:audio/mp3;base64,${data.audio}`);
            iaChatAudio.play();
        }
        
    } catch (error) {
        console.error('Erro ao chamar Azure AI via Supabase:', error);
        typingIndicator.remove();
        addMessageToChat('Desculpe, ocorreu um erro de conexão com a IA.', 'ia');
    }
}

function addMessageToChat(text, sender, isTyping = false, audioBase64 = null) {
    const msgDiv = document.createElement('div');
    msgDiv.style.padding = '12px 16px';
    msgDiv.style.maxWidth = '85%';
    msgDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    msgDiv.style.color = 'var(--text-main)';
    msgDiv.style.lineHeight = '1.4';
    msgDiv.style.display = 'flex';
    msgDiv.style.alignItems = 'center';
    msgDiv.style.justifyContent = 'space-between';
    msgDiv.style.gap = '15px';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    msgDiv.appendChild(textSpan);
    
    if (sender === 'user') {
        msgDiv.style.alignSelf = 'flex-end';
        msgDiv.style.background = 'var(--color-blue)'; // Azul do tema
        msgDiv.style.color = 'black';                  // Texto preto
        msgDiv.style.borderRadius = '16px 16px 0 16px';
    } else {
        msgDiv.style.alignSelf = 'flex-start';
        msgDiv.style.background = 'white';
        msgDiv.style.borderRadius = '0 16px 16px 16px';
        
        if (isTyping) {
            msgDiv.style.fontStyle = 'italic';
        } else if (audioBase64) {
            // Cria o botão de ouvir novamente
            const playBtn = document.createElement('button');
            playBtn.style.background = 'transparent';
            playBtn.style.border = 'none';
            playBtn.style.color = 'var(--color-blue)';
            playBtn.style.cursor = 'pointer';
            playBtn.style.fontSize = '18px';
            playBtn.style.display = 'flex';
            playBtn.style.alignItems = 'center';
            playBtn.style.justifyContent = 'center';
            playBtn.innerHTML = '<i class="fas fa-volume-up" aria-hidden="true"></i>';
            playBtn.title = "Ouvir resposta";
            playBtn.setAttribute('aria-label', 'Ouvir resposta');
            
            let currentAudio = null;
            playBtn.addEventListener('click', () => {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio = null;
                    playBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                } else {
                    playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                    currentAudio = new Audio(`data:audio/mp3;base64,${audioBase64}`);
                    iaChatAudio = currentAudio; // "Nova conversa" consegue parar este áudio também
                    currentAudio.onended = () => {
                        playBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                        currentAudio = null;
                    };
                    currentAudio.onerror = () => {
                        playBtn.innerHTML = '<i class="fas fa-exclamation-circle" style="color:red;"></i>';
                        currentAudio = null;
                    };
                    currentAudio.play();
                }
            });
            msgDiv.appendChild(playBtn);
        }
    }
    
    if (iaChatMessages) {
        iaChatMessages.appendChild(msgDiv);
        iaChatMessages.scrollTop = iaChatMessages.scrollHeight;
    }
    return msgDiv;
}

// ---- GRAVADOR WAV (16kHz mono) PURE JS ----
let audioContext;
let audioInput;
let recorderNode;
let recordingBuffer = [];
let isRecording = false;
let recordingSourceSampleRate = 16000;

async function startWavRecording() {
    recordingBuffer = [];
    // Pede explicitamente cancelamento de eco, redução de ruído e ganho automático —
    // importante para microfones de webcam, que costumam captar mais baixo/com mais
    // ruído de ambiente do que um microfone de headset.
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
        }
    });

    // Usa a taxa nativa do dispositivo em vez de forçar 16kHz no AudioContext: alguns
    // microfones (comuns em webcams USB) não lidam bem com a reamostragem interna do
    // navegador quando o AudioContext é forçado para uma taxa diferente da nativa,
    // e isso pode corromper o áudio captado. A reamostragem para 16kHz (exigida pela
    // Azure) é feita manualmente em resampleTo16k(), com controle total do processo.
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    recordingSourceSampleRate = audioContext.sampleRate;
    audioInput = audioContext.createMediaStreamSource(stream);

    // ScriptProcessor para compatibilidade total Chrome/Safari/Firefox
    recorderNode = audioContext.createScriptProcessor(4096, 1, 1);
    recorderNode.onaudioprocess = (e) => {
        if (!isRecording) return;
        const inputData = e.inputBuffer.getChannelData(0);
        recordingBuffer.push(new Float32Array(inputData));
    };

    audioInput.connect(recorderNode);
    recorderNode.connect(audioContext.destination);
    isRecording = true;
}

// Reamostragem para 16kHz via OfflineAudioContext: o próprio navegador aplica o
// filtro anti-aliasing necessário antes de reduzir a taxa de amostragem. Uma
// interpolação linear manual (like antes) não filtra as frequências acima do novo
// limite de Nyquist, e isso introduz ruído/distorção que atrapalha o reconhecimento
// de voz — mais perceptível em mics que gravam nativamente a 44.1kHz/48kHz.
async function resampleTo16k(float32Array, sourceSampleRate) {
    const targetSampleRate = 16000;
    if (Math.round(sourceSampleRate) === targetSampleRate) return float32Array;

    const targetLength = Math.ceil(float32Array.length * targetSampleRate / sourceSampleRate);
    const offlineCtx = new OfflineAudioContext(1, targetLength, targetSampleRate);
    const sourceBuffer = offlineCtx.createBuffer(1, float32Array.length, sourceSampleRate);
    sourceBuffer.copyToChannel(float32Array, 0);

    const source = offlineCtx.createBufferSource();
    source.buffer = sourceBuffer;
    source.connect(offlineCtx.destination);
    source.start();

    const renderedBuffer = await offlineCtx.startRendering();
    return renderedBuffer.getChannelData(0);
}

async function stopWavRecording() {
    isRecording = false;
    
    if (recorderNode) recorderNode.disconnect();
    if (audioInput) audioInput.disconnect();
    if (audioContext && audioContext.state !== 'closed') audioContext.close();
    
    const totalLength = recordingBuffer.reduce((acc, buf) => acc + buf.length, 0);
    const rawResult = new Float32Array(totalLength);
    let offset = 0;
    for (const buf of recordingBuffer) {
        rawResult.set(buf, offset);
        offset += buf.length;
    }

    const result = await resampleTo16k(rawResult, recordingSourceSampleRate);

    // Amplifica o áudio se estiver baixo (comum em mic de webcam, mais longe da boca).
    // Normaliza o pico pra perto de 0 dBFS sem estourar (clipping).
    let peak = 0;
    for (let i = 0; i < result.length; i++) {
        const abs = Math.abs(result[i]);
        if (abs > peak) peak = abs;
    }
    if (peak > 0 && peak < 0.9) {
        // Sem limite de ganho: mic embutido de notebook (o mais comum entre os usuários)
        // captou em teste real um pico de ~0.009 antes de normalizar — um limite de 6x
        // deixava o áudio ainda muito baixo pra Azure reconhecer bem.
        const gain = 0.95 / peak;
        for (let i = 0; i < result.length; i++) {
            result[i] *= gain;
        }
    }

    // Converte float32 para PCM de 16 bits
    const buffer = new ArrayBuffer(44 + result.length * 2);
    const view = new DataView(buffer);
    
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + result.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, 16000, true);
    view.setUint32(28, 16000 * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, result.length * 2, true);
    
    let index = 44;
    for (let i = 0; i < result.length; i++) {
        let s = Math.max(-1, Math.min(1, result[i]));
        view.setInt16(index, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        index += 2;
    }
    
    return new Blob([view], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

async function toggleIaAudioRecording() {
    if (isRecording) {
        btnIaRecord.classList.remove('recording-pulse');
        btnIaRecord.style.background = 'var(--color-blue)';
        btnIaRecord.style.color = 'black';
        btnIaRecord.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btnIaRecord.disabled = true;
        
        // Restaura estado do input de texto
        if (iaChatInput) {
            iaChatInput.placeholder = "Digite sua mensagem...";
            iaChatInput.disabled = false;
        }
        
        try {
            const audioBlob = await stopWavRecording();
            await sendIaAudioMessage(audioBlob);
        } catch (error) {
            console.error('Erro ao parar gravação de áudio:', error);
            alert('Não foi possível processar a sua gravação de áudio.');
        } finally {
            btnIaRecord.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i>';
            btnIaRecord.setAttribute('aria-label', 'Gravar mensagem de voz');
            btnIaRecord.disabled = false;
        }
    } else {
        btnIaRecord.style.background = '#f44336'; // Botão vermelho indicando gravação
        btnIaRecord.style.color = 'white';
        btnIaRecord.innerHTML = '<i class="fas fa-stop" aria-hidden="true"></i>';
        btnIaRecord.setAttribute('aria-label', 'Parar gravação');
        btnIaRecord.classList.add('recording-pulse');
        
        // Altera o estado do input de texto para indicar gravação
        if (iaChatInput) {
            iaChatInput.placeholder = "🔴 Gravando áudio... fale agora!";
            iaChatInput.disabled = true;
        }
        
        try {
            await startWavRecording();
        } catch (error) {
            console.error('Erro ao acessar microfone:', error);
            alert('Erro ao acessar microfone. Certifique-se de conceder a permissão no navegador.');
            btnIaRecord.classList.remove('recording-pulse');
            btnIaRecord.style.background = 'var(--color-blue)';
            btnIaRecord.style.color = 'black';
            btnIaRecord.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i>';
            btnIaRecord.setAttribute('aria-label', 'Gravar mensagem de voz');
            if (iaChatInput) {
                iaChatInput.placeholder = "Digite sua mensagem...";
                iaChatInput.disabled = false;
            }
        }
    }
}

async function sendIaAudioMessage(audioBlob) {
    const typingIndicator = addMessageToChat('Processando áudio...', 'ia', true);
    
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.wav');
    formData.append('messages', JSON.stringify(chatHistory));
    if (lastResponseId) formData.append('previous_response_id', lastResponseId);

    try {
        const response = await fetch(AZURE_AI_ENDPOINT, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erro na Edge Function do Supabase: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || data.error);
        }

        typingIndicator.remove();
        lastResponseId = data.response_id || lastResponseId;

        // Exibe a pergunta transcrita no chat
        addMessageToChat(data.user_transcription, 'user');
        chatHistory.push({ role: "user", content: data.user_transcription });

        // Exibe a resposta com o player
        addMessageToChat(data.reply, 'ia', false, data.audio);
        chatHistory.push({ role: "assistant", content: data.reply });
        
        // Reproduz o som automaticamente
        if (data.audio) {
            const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
            audio.play();
        }
        
    } catch (error) {
        console.error('Erro ao enviar áudio para a IA:', error);
        typingIndicator.remove();
        addMessageToChat('Desculpe, ocorreu um erro ao transcrever ou processar seu áudio.', 'ia');
    }
}

// Configuração dos Event Listeners
if (btnIaSend && iaChatInput) {
    btnIaSend.addEventListener('click', sendIaMessage);
    iaChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendIaMessage();
    });
}

if (btnIaRecord) {
    btnIaRecord.addEventListener('click', toggleIaAudioRecording);
}

// --- Lógica do Carômetro Dinâmico ---
document.addEventListener('DOMContentLoaded', () => {
    const btnEditCarometro = document.getElementById('btn-edit-carometro');
    const viewCarometro = document.getElementById('view-carometro');
    const fileInput = document.getElementById('carometro-file-input');
    const textToolbar = document.getElementById('carometro-text-toolbar');
    const dynamicContainer = document.getElementById('carometro-dynamic-container');
    const globalActions = document.getElementById('carometro-global-actions');
    const btnAddSector = document.getElementById('btn-add-carometro-sector');
    const tabsBar = document.getElementById('carometro-tabs-bar');
    
    let activeCarometroTabId = null;
    let currentPhotoTarget = null;
    let isEditingCarometro = false;
    let draggedCarometroCard = null;
    let dragHandleActiveCard = null;
    let selectedCarometroSwapCard = null;
    const STORAGE_KEY = 'comunicafacil_carometro_state';

    // Gerador de IDs simples
    const generateId = () => 'id_' + Math.random().toString(36).substr(2, 9);

    // Estrutura Padrão caso não haja dados
    const defaultData = [
        {
            id: generateId(),
            titleHTML: 'Administrativo',
            people: [
                { id: generateId(), nameHTML: 'Eduardo', ageHTML: '45 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Eduardo' },
                { id: generateId(), nameHTML: 'Aline', ageHTML: '36 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Aline' }
            ]
        }
    ];

    // Carregar Estado
    async function loadState() {
        if (supabaseClient) {
            try {
                const { data: dbSectors, error: secErr } = await supabaseClient.from('carometro_sectors').select('*').order('order_index', { ascending: true });
                if (secErr) throw secErr;
                
                const { data: dbPeople, error: peoErr } = await supabaseClient.from('carometro_people').select('*').order('order_index', { ascending: true });
                if (peoErr) throw peoErr;

                if (dbSectors && dbSectors.length > 0) {
                    const data = dbSectors.map(sec => {
                        const peopleForSector = (dbPeople || []).filter(p => p.sector_id === sec.id).map(p => ({
                            id: p.id,
                            nameHTML: p.name_html,
                            ageHTML: p.age_html,
                            photoSrc: p.photo_url || 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Foto'
                        }));
                        return {
                            id: sec.id,
                            titleHTML: sec.title_html,
                            people: peopleForSector
                        };
                    });
                    return data;
                }
            } catch (e) {
                console.warn('Erro ao carregar carômetro do Supabase, caindo para localStorage:', e);
            }
        }

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { return defaultData; }
        }
        return defaultData;
    }

    // Salvar Estado varrendo o DOM
    async function saveState() {
        if (!dynamicContainer) return;
        const sections = dynamicContainer.querySelectorAll('.carometro-section-wrapper');
        const data = [];
        const dbSectors = [];
        const dbPeople = [];
        let sectorOrder = 0;
        let peopleOrder = 0;
        
        sections.forEach(sec => {
            const titleEl = sec.querySelector('.carometro-title');
            if (!titleEl) return;
            
            const sectorId = sec.dataset.id || generateId();
            const sectorData = {
                id: sectorId,
                titleHTML: titleEl.innerHTML,
                people: []
            };
            
            dbSectors.push({
                id: sectorId,
                title_html: titleEl.innerHTML,
                order_index: sectorOrder++
            });
            
            const cards = sec.querySelectorAll('.carometro-card');
            cards.forEach(card => {
                const nameEl = card.querySelector('.carometro-name');
                const ageEl = card.querySelector('.carometro-age');
                const imgEl = card.querySelector('.carometro-photo');
                
                if (nameEl && ageEl && imgEl) {
                    const personId = card.dataset.id || generateId();
                    sectorData.people.push({
                        id: personId,
                        nameHTML: nameEl.innerHTML,
                        ageHTML: ageEl.innerHTML,
                        photoSrc: imgEl.src
                    });
                    
                    dbPeople.push({
                        id: personId,
                        sector_id: sectorId,
                        name_html: nameEl.innerHTML,
                        age_html: ageEl.innerHTML,
                        photo_url: imgEl.src,
                        order_index: peopleOrder++
                    });
                }
            });
            
            data.push(sectorData);
        });

        if (supabaseClient) {
            try {
                // Sync Sectors
                const { data: existingSectors } = await supabaseClient.from('carometro_sectors').select('id');
                const existingSectorIds = (existingSectors || []).map(s => s.id);
                const newSectorIds = dbSectors.map(s => s.id);
                const sectorsToDelete = existingSectorIds.filter(id => !newSectorIds.includes(id));
                
                if (sectorsToDelete.length > 0) {
                    await supabaseClient.from('carometro_sectors').delete().in('id', sectorsToDelete);
                }
                if (dbSectors.length > 0) {
                    await supabaseClient.from('carometro_sectors').upsert(dbSectors);
                }

                // Sync People
                const { data: existingPeople } = await supabaseClient.from('carometro_people').select('id');
                const existingPeopleIds = (existingPeople || []).map(p => p.id);
                const newPeopleIds = dbPeople.map(p => p.id);
                const peopleToDelete = existingPeopleIds.filter(id => !newPeopleIds.includes(id));
                
                if (peopleToDelete.length > 0) {
                    await supabaseClient.from('carometro_people').delete().in('id', peopleToDelete);
                }
                if (dbPeople.length > 0) {
                    await supabaseClient.from('carometro_people').upsert(dbPeople);
                }
            } catch (err) {
                console.warn('Erro ao salvar no Supabase:', err);
            }
        }
        
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn('Erro ao salvar no localStorage (possível limite de quota):', e);
        }
    }

    // Renderizar Card de Pessoa
    function createPersonCardHTML(person, isEditing) {
        return `
            <div class="carometro-card" data-id="${person.id}" ${isEditing ? 'draggable="true"' : ''}>
                ${isEditing ? `
                    <div class="carometro-card-actions">
                        <button class="btn-move-card" type="button" data-direction="prev" title="Mover para a esquerda" aria-label="Mover para a esquerda">
                            <i class="fas fa-arrow-left" aria-hidden="true"></i>
                        </button>
                        <button class="btn-swap-card" type="button" title="Trocar este card com outro" aria-label="Trocar este card com outro">
                            <i class="fas fa-retweet" aria-hidden="true"></i>
                            <span>Trocar</span>
                        </button>
                        <button class="btn-move-card" type="button" data-direction="next" title="Mover para a direita" aria-label="Mover para a direita">
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                ` : ''}
                ${isEditing ? `<button class="btn-delete btn-delete-person" title="Excluir pessoa"><i class="fas fa-trash"></i></button>` : ''}
                <div class="carometro-info">
                    <span class="carometro-name" ${isEditing ? 'contenteditable="true"' : ''}>${person.nameHTML}</span>
                    <span class="carometro-age" ${isEditing ? 'contenteditable="true"' : ''}>${person.ageHTML}</span>
                </div>
                <div class="photo-wrapper">
                    <img src="${person.photoSrc}" alt="Foto" class="carometro-photo">
                </div>
            </div>
        `;
    }

    // Renderizar Setor Completo
    function createSectorHTML(sector, isEditing) {
        let peopleHTML = sector.people.map(p => createPersonCardHTML(p, isEditing)).join('');
        
        // Adicionar botão "+ Pessoa" se estiver editando
        if (isEditing) {
            peopleHTML += `
                <div class="btn-add-person-card" title="Adicionar pessoa a este setor">
                    <i class="fas fa-user-plus"></i>
                    <span>Adicionar</span>
                </div>
            `;
        }

        return `
            <div class="carometro-section-wrapper" data-id="${sector.id}">
                ${isEditing ? `<button class="btn-delete-sector" title="Excluir setor inteiro"><i class="fas fa-trash"></i> Excluir Setor</button>` : ''}
                <h2 class="carometro-title" style="${dynamicContainer.children.length > 0 || isEditing ? 'margin-top: 60px;' : ''}" ${isEditing ? 'contenteditable="true"' : ''}>${sector.titleHTML}</h2>
                <div class="carometro-grid">
                    ${peopleHTML}
                </div>
            </div>
        `;
    }

    // Atualizar a Interface Inteira
    async function renderCarometro(isEditing = false) {
        if (!dynamicContainer) return;
        const data = await loadState();
        dynamicContainer.innerHTML = '';
        if (tabsBar) tabsBar.innerHTML = '';
        
        if (data.length > 0 && !activeCarometroTabId) {
            activeCarometroTabId = data[0].id;
        }

        data.forEach(sector => {
            // Criar Aba
            if (tabsBar) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = sector.titleHTML;
                const plainTitle = tempDiv.textContent.trim() || 'Sem Título';
                
                const tabBtn = document.createElement('button');
                tabBtn.className = `carometro-tab-btn ${sector.id === activeCarometroTabId ? 'active' : ''}`;
                tabBtn.textContent = plainTitle;
                tabBtn.dataset.targetId = sector.id;
                
                tabBtn.addEventListener('click', () => {
                    activeCarometroTabId = sector.id;
                    // Atualizar visual das abas
                    tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));
                    tabBtn.classList.add('active');
                    // Atualizar visual dos containers
                    dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                        if (sec.dataset.id === sector.id) {
                            sec.classList.remove('hidden');
                        } else {
                            sec.classList.add('hidden');
                        }
                    });
                });
                tabsBar.appendChild(tabBtn);
            }

            // Criar Conteúdo (Setor)
            const sectorHTML = createSectorHTML(sector, isEditing);
            dynamicContainer.insertAdjacentHTML('beforeend', sectorHTML);
            
            const newlyAddedSector = dynamicContainer.lastElementChild;
            if (sector.id !== activeCarometroTabId) {
                newlyAddedSector.classList.add('hidden');
            }

            // Sincronizar título editado com a aba
            if (isEditing) {
                const titleEl = newlyAddedSector.querySelector('.carometro-title');
                if (titleEl) {
                    titleEl.addEventListener('input', () => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = titleEl.innerHTML;
                        const newTitle = tempDiv.textContent.trim() || 'Sem Título';
                        const tabBtn = tabsBar.querySelector(`.carometro-tab-btn[data-target-id="${sector.id}"]`);
                        if (tabBtn) tabBtn.textContent = newTitle;
                    });
                }
            }
        });
        
        // Adicionar eventos de clique (áudio) nos cartões
        dynamicContainer.querySelectorAll('.carometro-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Não tocar áudio se estiver clicando em controles de edição ou editando texto
                if (
                    e.target.closest('.btn-delete') ||
                    e.target.closest('.carometro-drag-handle') ||
                    e.target.closest('.btn-swap-card') ||
                    e.target.closest('.btn-move-card') ||
                    e.target.closest('[contenteditable="true"]')
                ) return;
                
                const nameEl = card.querySelector('.carometro-name');
                if (nameEl && nameEl.textContent.trim()) {
                    speak(nameEl.textContent.trim());
                }
            });
        });

        if (isEditing) {
            dynamicContainer.querySelectorAll('.carometro-card').forEach(card => {
                const dragHandle = card.querySelector('.carometro-drag-handle');
                if (dragHandle) {
                    const armDrag = (event) => {
                        event.stopPropagation();
                        dragHandleActiveCard = card;
                    };

                    dragHandle.addEventListener('mousedown', armDrag);
                    dragHandle.addEventListener('touchstart', armDrag, { passive: true });
                }

                card.addEventListener('dragstart', (event) => {
                    if (dragHandleActiveCard !== card) {
                        event.preventDefault();
                        return;
                    }

                    draggedCarometroCard = card;
                    card.classList.add('is-dragging');
                    if (event.dataTransfer) {
                        event.dataTransfer.effectAllowed = 'move';
                        event.dataTransfer.setData('text/plain', card.dataset.id || '');
                    }
                });

                card.addEventListener('dragend', () => {
                    card.classList.remove('is-dragging');
                    draggedCarometroCard = null;
                    dragHandleActiveCard = null;
                    dynamicContainer.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));
                });
            });

            dynamicContainer.querySelectorAll('.carometro-grid').forEach(grid => {
                grid.addEventListener('dragover', (event) => {
                    if (!draggedCarometroCard) return;
                    event.preventDefault();

                    const relatedCard = event.target.closest('.carometro-card');
                    grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));

                    if (!relatedCard || relatedCard === draggedCarometroCard) return;
                    relatedCard.classList.add('drag-target-swap');
                });

                grid.addEventListener('drop', (event) => {
                    if (!draggedCarometroCard) return;
                    event.preventDefault();

                    const relatedCard = event.target.closest('.carometro-card');

                    grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));

                    if (!relatedCard || relatedCard === draggedCarometroCard) {
                        return;
                    }

                    const draggedNextSibling = draggedCarometroCard.nextElementSibling;
                    const relatedNextSibling = relatedCard.nextElementSibling;

                    if (draggedNextSibling === relatedCard) {
                        grid.insertBefore(relatedCard, draggedCarometroCard);
                    } else if (relatedNextSibling === draggedCarometroCard) {
                        grid.insertBefore(draggedCarometroCard, relatedCard);
                    } else {
                        const draggedReference = draggedNextSibling;
                        const relatedReference = relatedNextSibling;
                        grid.insertBefore(draggedCarometroCard, relatedReference);
                        grid.insertBefore(relatedCard, draggedReference);
                    }
                });

                grid.addEventListener('dragleave', (event) => {
                    if (!grid.contains(event.relatedTarget)) {
                        grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));
                    }
                });
            });
        }
    }

    // Compressão de Imagem via Canvas
    function compressImage(file, callback) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const max = 400; // Tamanho máximo (largura ou altura)
                
                if (width > height) {
                    if (width > max) { height = Math.round((height *= max / width)); width = max; }
                } else {
                    if (height > max) { width = Math.round((width *= max / height)); height = max; }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                // Comprime em JPEG com 80% de qualidade
                callback(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Eventos Principais ---
    if (btnEditCarometro && viewCarometro && fileInput && dynamicContainer) {
        // O botão Editar está oculto no HTML por padrão (display:none).
        // A função de autenticação (getSession) mostrará se for admin/editor.

        // Inicializar a renderização da primeira vez
        renderCarometro(false);

        // Toggle do Modo de Edição
        btnEditCarometro.addEventListener('click', async () => {
            isEditingCarometro = !isEditingCarometro;
            
            if (isEditingCarometro) {
                // Entrando no modo de edição (Lê o estado e renderiza editável)
                viewCarometro.classList.add('editing');
                btnEditCarometro.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i> Salvar';
                globalActions.style.display = 'block';
                await renderCarometro(true);
            } else {
                // Saindo e salvando
                const originalHtml = btnEditCarometro.innerHTML;
                btnEditCarometro.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
                await saveState();
                viewCarometro.classList.remove('editing');
                btnEditCarometro.innerHTML = '<i class="fas fa-pen" aria-hidden="true"></i> Editar';
                globalActions.style.display = 'none';
                if (textToolbar) textToolbar.style.display = 'none';
                await renderCarometro(false);
            }
        });

        // Eventos Dinâmicos usando Delegação (Cliques no Container)
        dynamicContainer.addEventListener('click', (e) => {
            if (!isEditingCarometro) return;

            // 1. Clicar em Foto para Alterar
            if (e.target.classList.contains('carometro-photo')) {
                currentPhotoTarget = e.target;
                fileInput.click();
            }
            
            // 2. Excluir Setor
            const btnDelSector = e.target.closest('.btn-delete-sector');
            if (btnDelSector) {
                if (confirm('Tem certeza que deseja excluir ESTE SETOR INTEIRO e todas as pessoas nele?')) {
                    const section = btnDelSector.closest('.carometro-section-wrapper');
                    if (section) section.remove();
                    
                    // Fire-and-forget sync since we're in a sync event handler, or handle it async 
                    (async () => {
                        await saveState();
                        const currentState = await loadState();
                        if (!currentState.some(s => s.id === activeCarometroTabId)) {
                            activeCarometroTabId = currentState.length > 0 ? currentState[0].id : null;
                        }
                        await renderCarometro(isEditingCarometro);
                    })();
                }
            }

            // 3. Excluir Pessoa
            const btnDelPerson = e.target.closest('.btn-delete-person');
            if (btnDelPerson) {
                if (confirm('Deseja excluir esta pessoa?')) {
                    const card = btnDelPerson.closest('.carometro-card');
                    if (card) card.remove();
                }
            }

            // 4. Mover pessoa para a esquerda/direita
            const btnMoveCard = e.target.closest('.btn-move-card');
            if (btnMoveCard) {
                const card = btnMoveCard.closest('.carometro-card');
                const grid = card?.closest('.carometro-grid');
                if (!card || !grid) return;

                const direction = btnMoveCard.dataset.direction;
                const previousCard = card.previousElementSibling;
                const nextCard = card.nextElementSibling;

                if (direction === 'prev' && previousCard?.classList.contains('carometro-card')) {
                    grid.insertBefore(card, previousCard);
                }

                if (direction === 'next' && nextCard?.classList.contains('carometro-card')) {
                    grid.insertBefore(nextCard, card);
                }

                selectedCarometroSwapCard?.classList.remove('swap-selected');
                selectedCarometroSwapCard = null;
                return;
            }

            // 5. Trocar posição de duas pessoas
            const btnSwapCard = e.target.closest('.btn-swap-card');
            if (btnSwapCard) {
                const card = btnSwapCard.closest('.carometro-card');
                const grid = card?.closest('.carometro-grid');
                if (!card || !grid) return;

                if (!selectedCarometroSwapCard || !grid.contains(selectedCarometroSwapCard)) {
                    selectedCarometroSwapCard = card;
                    card.classList.add('swap-selected');
                    return;
                }

                if (selectedCarometroSwapCard === card) {
                    selectedCarometroSwapCard.classList.remove('swap-selected');
                    selectedCarometroSwapCard = null;
                    return;
                }

                const firstCard = selectedCarometroSwapCard;
                const secondCard = card;
                const firstNext = firstCard.nextElementSibling;
                const secondNext = secondCard.nextElementSibling;

                firstCard.classList.remove('swap-selected');

                if (firstNext === secondCard) {
                    grid.insertBefore(secondCard, firstCard);
                } else if (secondNext === firstCard) {
                    grid.insertBefore(firstCard, secondCard);
                } else {
                    grid.insertBefore(firstCard, secondNext);
                    grid.insertBefore(secondCard, firstNext);
                }

                selectedCarometroSwapCard = null;
                return;
            }

            // 6. Adicionar Pessoa
            const btnAddPerson = e.target.closest('.btn-add-person-card');
            if (btnAddPerson) {
                const grid = btnAddPerson.closest('.carometro-grid');
                if (grid) {
                    const newPerson = { id: generateId(), nameHTML: 'Novo Nome', ageHTML: '00 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Foto' };
                    // Insere o card da pessoa logo ANTES do botão de adicionar pessoa
                    btnAddPerson.insertAdjacentHTML('beforebegin', createPersonCardHTML(newPerson, true));
                }
            }
        });

        document.addEventListener('mouseup', () => {
            dragHandleActiveCard = null;
        });

        document.addEventListener('touchend', () => {
            dragHandleActiveCard = null;
        });

        // Adicionar Novo Setor (Botão Global) — re-referenciado pois o DOM muda a cada renderCarometro
        const currentBtnAddSector = document.getElementById('btn-add-carometro-sector');
        if (currentBtnAddSector) {
            // Clona para remover eventos anteriores (evita empilhar chamadas duplicadas)
            const freshBtn = currentBtnAddSector.cloneNode(true);
            currentBtnAddSector.parentNode.replaceChild(freshBtn, currentBtnAddSector);
            
            freshBtn.addEventListener('click', async () => {
                const newId = generateId();
                const newSector = {
                    id: newId,
                    titleHTML: 'Novo Setor',
                    people: []
                };

                activeCarometroTabId = newId;

                dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                    sec.classList.add('hidden');
                });

                if (tabsBar) {
                    tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));

                    const tabBtn = document.createElement('button');
                    tabBtn.className = 'carometro-tab-btn active';
                    tabBtn.textContent = 'Novo Setor';
                    tabBtn.dataset.targetId = newId;
                    tabBtn.addEventListener('click', () => {
                        activeCarometroTabId = newId;
                        tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));
                        tabBtn.classList.add('active');
                        dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                            sec.classList.toggle('hidden', sec.dataset.id !== newId);
                        });
                    });
                    tabsBar.appendChild(tabBtn);
                }

                dynamicContainer.insertAdjacentHTML('beforeend', createSectorHTML(newSector, true));
                const newSection = dynamicContainer.lastElementChild;
                const titleEl = newSection?.querySelector('.carometro-title');
                if (titleEl) {
                    titleEl.focus();
                    titleEl.addEventListener('input', () => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = titleEl.innerHTML;
                        const newTitle = tempDiv.textContent.trim() || 'Sem Título';
                        const tabBtn = tabsBar?.querySelector(`.carometro-tab-btn[data-target-id="${newId}"]`);
                        if (tabBtn) tabBtn.textContent = newTitle;
                    });
                }
            });
        }

        // Seleção de Nova Imagem (com upload opcional)
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file && currentPhotoTarget) {
                const originalSrc = currentPhotoTarget.src;
                
                if (supabaseClient) {
                    try {
                        currentPhotoTarget.src = 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Enviando...';
                        
                        // uploadToSupabaseStorage já comprime internamente
                        const url = await uploadToSupabaseStorage('media_uploads', 'carometro', file);
                        if (url) {
                            currentPhotoTarget.src = url;
                        } else {
                            currentPhotoTarget.src = originalSrc;
                            alert('Falha ao enviar imagem pro servidor.');
                        }
                    } catch(err) {
                        currentPhotoTarget.src = originalSrc;
                        console.error('Erro no upload da foto do carômetro:', err);
                    }
                } else {
                    compressImage(file, (compressedBase64) => {
                        currentPhotoTarget.src = compressedBase64;
                    });
                }
            }
            fileInput.value = ''; // Reset
        });

        // Lógica do Toolbar Flutuante de Texto (reaproveitada e adaptada)
        viewCarometro.addEventListener('focusin', (e) => {
            if (isEditingCarometro && textToolbar && e.target.contentEditable === "true") {
                const rect = e.target.getBoundingClientRect();
                const containerRect = viewCarometro.getBoundingClientRect();
                textToolbar.style.display = 'flex';
                textToolbar.style.top = `${rect.top - containerRect.top + viewCarometro.scrollTop - 45}px`;
                textToolbar.style.left = `${rect.left - containerRect.left + (rect.width/2) - (textToolbar.offsetWidth/2)}px`;
            }
        });

        document.addEventListener('click', (e) => {
            if (isEditingCarometro && textToolbar) {
                const isEditable = e.target.contentEditable === "true";
                const isToolbar = textToolbar.contains(e.target);
                const isEditBtn = btnEditCarometro.contains(e.target);
                
                if (!isEditable && !isToolbar && !isEditBtn) {
                    textToolbar.style.display = 'none';
                }
            }
        });

        if (textToolbar) {
            textToolbar.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.execCommand(btn.dataset.command, false, null);
                });
            });

            const colorPicker = document.getElementById('toolbar-color-picker');
            if (colorPicker) {
                colorPicker.addEventListener('input', (e) => {
                    document.execCommand('foreColor', false, e.target.value);
                });
            }

            const fontSizeSelect = document.getElementById('toolbar-font-size');
            if (fontSizeSelect) {
                fontSizeSelect.addEventListener('change', (e) => {
                    document.execCommand('fontSize', false, e.target.value);
                });
            }

            const fontNameSelect = document.getElementById('toolbar-font-name');
            if (fontNameSelect) {
                fontNameSelect.addEventListener('change', (e) => {
                    document.execCommand('fontName', false, e.target.value);
                });
            }

            textToolbar.addEventListener('mousedown', (e) => {
                if (e.target.tagName !== 'SELECT' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'OPTION') {
                    e.preventDefault();
                }
            });
        }
    }
});
