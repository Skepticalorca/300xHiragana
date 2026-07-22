// ===== app.js (LENGKAP) =====
'use strict';

// ============================================================
// 1. DATA MASTER - Semua konten kurikulum inline
// ============================================================

const DATA = {};

// -- HIRAGANA (46 huruf) --
DATA.hiragana = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

// -- KATAKANA (46 huruf) --
DATA.katakana = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

// -- KANJI N5 (50 karakter dasar) --
DATA.kanji = [
    { char: '一', romaji: 'ichi', meaning: 'satu' },
    { char: '二', romaji: 'ni', meaning: 'dua' },
    { char: '三', romaji: 'san', meaning: 'tiga' },
    { char: '四', romaji: 'shi/yon', meaning: 'empat' },
    { char: '五', romaji: 'go', meaning: 'lima' },
    { char: '六', romaji: 'roku', meaning: 'enam' },
    { char: '七', romaji: 'shichi/nana', meaning: 'tujuh' },
    { char: '八', romaji: 'hachi', meaning: 'delapan' },
    { char: '九', romaji: 'kyuu/ku', meaning: 'sembilan' },
    { char: '十', romaji: 'juu', meaning: 'sepuluh' },
    { char: '百', romaji: 'hyaku', meaning: 'ratus' },
    { char: '千', romaji: 'sen', meaning: 'ribu' },
    { char: '日', romaji: 'nichi/hi', meaning: 'hari/matahari' },
    { char: '月', romaji: 'getsu/tsuki', meaning: 'bulan' },
    { char: '火', romaji: 'ka/hi', meaning: 'api' },
    { char: '水', romaji: 'sui/mizu', meaning: 'air' },
    { char: '木', romaji: 'boku/ki', meaning: 'pohon' },
    { char: '金', romaji: 'kin/kane', meaning: 'emas/uang' },
    { char: '土', romaji: 'do/tsuchi', meaning: 'tanah' },
    { char: '人', romaji: 'jin/hito', meaning: 'orang' },
    { char: '子', romaji: 'shi/ko', meaning: 'anak' },
    { char: '女', romaji: 'jo/onna', meaning: 'wanita' },
    { char: '男', romaji: 'dan/otoko', meaning: 'pria' },
    { char: '大', romaji: 'dai/oo', meaning: 'besar' },
    { char: '小', romaji: 'shou/chii', meaning: 'kecil' },
    { char: '上', romaji: 'jou/ue', meaning: 'atas' },
    { char: '下', romaji: 'ka/shita', meaning: 'bawah' },
    { char: '中', romaji: 'chuu/naka', meaning: 'tengah' },
    { char: '外', romaji: 'gai/soto', meaning: 'luar' },
    { char: '前', romaji: 'zen/mae', meaning: 'depan' },
    { char: '後', romaji: 'go/ushi', meaning: 'belakang' },
    { char: '右', romaji: 'u/migi', meaning: 'kanan' },
    { char: '左', romaji: 'sa/hidari', meaning: 'kiri' },
    { char: '東', romaji: 'tou/higashi', meaning: 'timur' },
    { char: '西', romaji: 'sei/nishi', meaning: 'barat' },
    { char: '南', romaji: 'nan/minami', meaning: 'selatan' },
    { char: '北', romaji: 'hoku/kita', meaning: 'utara' },
    { char: '山', romaji: 'san/yama', meaning: 'gunung' },
    { char: '川', romaji: 'sen/kawa', meaning: 'sungai' },
    { char: '田', romaji: 'den/ta', meaning: 'sawah' },
    { char: '雨', romaji: 'u/ame', meaning: 'hujan' },
    { char: '電', romaji: 'den', meaning: 'listrik' },
    { char: '車', romaji: 'sha/kuruma', meaning: 'mobil' },
    { char: '魚', romaji: 'gyo/sakana', meaning: 'ikan' },
    { char: '花', romaji: 'ka/hana', meaning: 'bunga' },
    { char: '名', romaji: 'mei/na', meaning: 'nama' },
    { char: '学', romaji: 'gaku/mana', meaning: 'belajar' },
    { char: '生', romaji: 'sei/i', meaning: 'hidup' },
    { char: '先', romaji: 'sen/saki', meaning: 'sebelum' },
    { char: '何', romaji: 'ka/nani', meaning: 'apa' }
];

// -- BUDAYA (artikel) --
DATA.culture = {
    etika: [
        { title: 'Membungkuk (Ojigi)', content: 'Membungkuk adalah salam tradisional Jepang. Semakin dalam bungkukan, semakin besar rasa hormat. Untuk teman sebaya cukup 15°, untuk atasan 30°, dan untuk permintaan maaf bisa 45°.', tag: 'Etika Sosial' },
        { title: 'Melepas Sepatu (Genkan)', content: 'Saat memasuki rumah Jepang, selalu lepas sepatu di area genkan. Gunakan sandal dalam rumah. Jangan injak area tatami dengan sandal. Pastikan kaus kakimu bersih dan tidak bolong!', tag: 'Kebiasaan' },
        { title: 'Cara Makan (Chopsticks)', content: 'Jangan menancapkan sumpit vertikal ke nasi (mirip ritual kematian). Jangan juga menyilangkan sumpit atau memindahkan makanan dari sumpit ke sumpit. Gunakan sumpit yang bersih untuk mengambil dari piring bersama.', tag: 'Etika Makan' },
        { title: 'Antre (Ritsu)', content: 'Orang Jepang sangat disiplin dalam antre. Jangan menyerobot antrean atau berdiri terlalu dekat dengan orang di depan. Beri jarak sekitar 50cm. Di transportasi umum, antre rapi di samping pintu.', tag: 'Publik' }
    ],
    sejarah: [
        { title: 'Periode Jomon (14.000-300 SM)', content: 'Periode paling awal Jepang. Manusia hidup berburu-meramu dan membuat tembikar dengan tali (jomon = pola tali). Ini adalah salah satu tembikar tertua di dunia. Mereka tinggal di rumah lubang (pit dwellings).', tag: 'Zaman Kuno' },
        { title: 'Zaman Samurai (1185-1868)', content: 'Kasta prajurit yang menguasai Jepang selama ~700 tahun. Mereka mengikuti bushido (jalan prajurit): kesetiaan, keberanian, dan kehormatan. Samurai terkenal: Minamoto no Yoritomo, Oda Nobunaga, Toyotomi Hideyoshi, Tokugawa Ieyasu.', tag: 'Feodal' },
        { title: 'Restorasi Meiji (1868)', content: 'Revolusi yang mengembalikan kekuasaan ke Kaisar Meiji. Jepang berubah total: dari feodal ke modern. Mengadopsi teknologi barat, membangun kereta api, dan sistem pendidikan wajib. Dalam 50 tahun, Jepang jadi kekuatan global.', tag: 'Modernisasi' },
        { title: 'Perang Dunia II & Rekonstruksi', content: 'Jepang bergabung Poros dan menyerang Pearl Harbor (1941). Setelah bom atom Hiroshima & Nagasaki, Jepang menyerah (1945). Pasca perang, Jepang bangkit sebagai negara demokrasi dengan konstitusi baru dan menjadi ekonomi terbesar ke-3 dunia.', tag: 'Kontemporer' }
    ],
    popculture: [
        { title: 'Manga & Anime', content: 'Manga (komik Jepang) dan Anime (animasi Jepang) adalah ikon budaya global terbesar Jepang. Karya terkenal: Naruto, One Piece, Attack on Titan, Studio Ghibli. Industri manga bernilai >$20 miliar/tahun. Banyak kosakata slang Jepang berasal dari anime.', tag: 'Hiburan' },
        { title: 'J-Pop & Idol Culture', content: 'Musik pop Jepang (J-Pop) didominasi grup idol seperti Arashi, AKB48, dan individu seperti Hikaru Utada. Budaya idol unik: penggemar mendukung idol mereka dengan cheers (wota) dan membeli CD untuk vote di pemilihan tahunan.', tag: 'Musik' },
        { title: 'Gacha & Game', content: 'Jepang adalah raja game mobile dengan sistem gacha (loot box). Nintendo, Sony (PlayStation), dan Bandai Namco berasal dari Jepang. Game terkenal: Pokemon, Final Fantasy, Super Mario. Istilah "gacha" sendiri dari "gachapon" (mesin kapsul mainan).', tag: 'Game' },
        { title: 'Kawaii Culture', content: 'Budaya "imut" (kawaii) mendominasi Jepang. Dari Hello Kitty (Sanrio) hingga fashion Harajuku. Ciri khas: warna pastel, aksesori lucu, karakter bermata besar. Kawaii adalah estetika dan sikap hidup yang merayakan kepolosan.', tag: 'Fashion' }
    ],
    tradisi: [
        { title: 'Matsuri (Festival)', content: 'Festival Jepang diadakan sepanjang tahun. Terkenal: Gion Matsuri (Kyoto, Juli), Aomori Nebuta Matsuri (Agustus), dan Hanami (melihat bunga sakura, Maret-April). Biasanya ada kembang api, tarian tradisional (bon odori), dan jajanan yatai.', tag: 'Perayaan' },
        { title: 'Teh Seremonial (Sado)', content: 'Upacara minum teh (matcha) adalah seni yang membutuhkan tahunan latihan. Bukan sekedar minum, tapi filosofi: harmoni (wa), hormat (kei), kebersihan (sei), dan ketenangan (jaku). Gerakan dalam upacara teh sangat presisi.', tag: 'Seni' },
        { title: 'Kimono & Yukata', content: 'Kimono adalah pakaian tradisional Jepang dengan lengan lebar. Dipakai dengan obi (ikat pinggang). Yukata adalah kimono katil ringan untuk musim panas. Cara memakai kimono ada aturan: sisi kiri di atas kanan (kecuali untuk orang meninggal).', tag: 'Busana' },
        { title: 'Shinto & Kuil', content: 'Shinto adalah kepercayaan asli Jepang: menyembah kami (roh alam). Kuil Shinto ditandai gerbang torii. Pengunjung: cuci tangan, bow, lempar koin, bow 2x, tepuk 2x, berdoa, bow 1x. Tahun Baru (Hatsumode) adalah kunjungan kuil paling ramai.', tag: 'Religi' }
    ]
};

// -- QUIZ POOL --
DATA.quizPool = {
    hiragana: DATA.hiragana.map(d => ({ char: d.char, answer: d.romaji, type: 'hiragana' })),
    katakana: DATA.katakana.map(d => ({ char: d.char, answer: d.romaji, type: 'katakana' })),
    kanji: DATA.kanji.map(d => ({ char: d.char, answer: d.romaji, meaning: d.meaning, type: 'kanji' }))
};


// ============================================================
// 2. LOCALSTORAGE MANAGER
// ============================================================
const Storage = {
    get(key, def) {
        try { const v = localStorage.getItem('jm_' + key); return v !== null ? JSON.parse(v) : def; }
        catch { return def; }
    },
    set(key, val) { localStorage.setItem('jm_' + key, JSON.stringify(val)); },

    getReps(type) { return this.get('reps_' + type, {}); },
    setReps(type, obj) { this.set('reps_' + type, obj); },
    addRep(type, index) {
        const reps = this.getReps(type);
        reps[index] = (reps[index] || 0) + 1;
        this.setReps(type, reps);
        return reps[index];
    },
    getRepCount(type, index) {
        const reps = this.getReps(type);
        return reps[index] || 0;
    },

    getQuizStats() { return this.get('quizStats', { highScore: 0, totalCorrect: 0, totalQuestions: 0 }); },
    setQuizStats(s) { this.set('quizStats', s); },

    getStreak() { return this.get('streak', { count: 0, lastDate: null }); },
    setStreak(s) { this.set('streak', s); },
    updateStreak() {
        const s = this.getStreak();
        const today = new Date().toDateString();
        if (s.lastDate === today) return s.count;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (s.lastDate === yesterday) { s.count += 1; }
        else { s.count = 1; }
        s.lastDate = today;
        this.setStreak(s);
        return s.count;
    },
    getStreakCount() { return this.getStreak().count; }
};


// ============================================================
// 3. TTS (Text-to-Speech)
// ============================================================
function playTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}


// ============================================================
// 4. CANVAS DRAWING ENGINE
// ============================================================
const CanvasEngine = {
    canvas: null,
    ctx: null,
    wrapper: null,
    isDrawing: false,
    lastX: 0, lastY: 0,
    w: 0, h: 0,

    init(canvasId, wrapperId) {
        this.canvas = document.getElementById(canvasId);
        this.wrapper = document.getElementById(wrapperId);
        this.ctx = this.canvas.getContext('2d');
        this._bindEvents();
    },

    _bindEvents() {
        const c = this.canvas;
        c.addEventListener('touchstart', (e) => this._start(e), { passive: false });
        c.addEventListener('touchmove', (e) => this._draw(e), { passive: false });
        c.addEventListener('touchend', (e) => this._stop(e), { passive: false });
        c.addEventListener('touchcancel', (e) => this._stop(e), { passive: false });
        c.addEventListener('mousedown', (e) => this._start(e));
        c.addEventListener('mousemove', (e) => this._draw(e));
        window.addEventListener('mouseup', (e) => this._stop(e));
        window.addEventListener('resize', () => this.resize());
    },

    _getPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        const t = e.touches ? e.touches[0] : e;
        return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    },

    _start(e) {
        e.preventDefault();
        const p = this._getPos(e);
        this.isDrawing = true;
        this.lastX = p.x;
        this.lastY = p.y;
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
    },

    _draw(e) {
        e.preventDefault();
        if (!this.isDrawing) return;
        const p = this._getPos(e);
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(p.x, p.y);
        this.ctx.stroke();
        this.lastX = p.x;
        this.lastY = p.y;
    },

    _stop(e) {
        e.preventDefault();
        this.isDrawing = false;
    },

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.wrapper.getBoundingClientRect();
        this.w = rect.width;
        this.h = rect.height;
        this.canvas.width = this.w * dpr;
        this.canvas.height = this.h * dpr;
        this.canvas.style.width = this.w + 'px';
        this.canvas.style.height = this.h + 'px';
        const ctx = this.ctx;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.strokeStyle = '#1d1d1f';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.w, this.h);
    },

    clear() {
        const ctx = this.ctx;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.w, this.h);
    }
};


// ============================================================
// 5. APP CONTROLLER
// ============================================================
const App = {
    // State
    currentPage: 'home',
    writingType: 'hiragana',
    writingIndex: 0,
    quizState: 'idle', // idle | active | answered | result
    quizData: [],
    quizIndex: 0,
    quizScore: 0,
    quizStreak: 0,
    quizCorrectCount: 0,
    quizTotal: 10,

    // Init
    init() {
        this._cacheDOM();
        this._bindEvents();
        this._initCanvas();
        this._loadStreak();
        this._updateHomeStats();
        this._updateProgressPage();
        this._showPage('home');
    },

    _cacheDOM() {
        this.els = {
            // Sidebar
            sidebar: document.getElementById('sidebar'),
            sidebarOverlay: document.getElementById('sidebar-overlay'),
            navBtns: document.querySelectorAll('.nav-btn'),
            hamburgers: document.querySelectorAll('.hamburger'),
            streakCount: document.getElementById('streak-count'),

            // Pages
            pages: document.querySelectorAll('.page'),

            // Home
            homeStreak: document.getElementById('home-streak'),
            homeQuizScore: document.getElementById('home-quiz-score'),
            homeCharsLearned: document.getElementById('home-chars-learned'),
            moduleCards: document.querySelectorAll('.module-card'),

            // Writing
            writingTitle: document.getElementById('writing-title'),
            writingTabs: document.querySelectorAll('.writing-tab'),
            writingChar: document.getElementById('writing-char'),
            writingRomaji: document.getElementById('writing-romaji'),
            writingCounter: document.getElementById('writing-counter'),
            writingProgress: document.getElementById('writing-progress'),
            btnPrev: document.getElementById('btn-prev'),
            btnNext: document.getElementById('btn-next'),
            btnClear: document.getElementById('btn-clear'),
            btnReset: document.getElementById('btn-reset'),
            btnCheck: document.getElementById('btn-check'),

            // Quiz
            quizModBtns: document.querySelectorAll('.quiz-mod-btn'),
            quizStartScreen: document.getElementById('quiz-start-screen'),
            quizActiveScreen: document.getElementById('quiz-active-screen'),
            quizResultScreen: document.getElementById('quiz-result-screen'),
            btnStartQuiz: document.getElementById('btn-start-quiz'),
            btnRetry: document.getElementById('btn-retry'),
            btnQuizHome: document.getElementById('btn-quiz-home'),
            qNum: document.getElementById('q-num'),
            qScore: document.getElementById('q-score'),
            qStreak: document.getElementById('q-streak'),
            qQuestion: document.getElementById('q-question'),
            qChar: document.getElementById('q-char'),
            qOptions: document.getElementById('q-options'),
            qFeedback: document.getElementById('q-feedback'),
            resultScore: document.getElementById('result-score'),
            resultStreak: document.getElementById('result-streak'),
            resultMsg: document.getElementById('result-msg'),
            quizHighscore: document.getElementById('quiz-highscore'),
            quizStreakDisplay: document.getElementById('quiz-streak-display'),

            // Culture
            cultureTabs: document.querySelectorAll('.culture-tab'),
            cultureContent: document.getElementById('culture-content'),

            // Progress
            pHiragana: document.getElementById('p-hiragana'),
            pKatakana: document.getElementById('p-katakana'),
            pKanji: document.getElementById('p-kanji'),
            progressDetailList: document.getElementById('progress-detail-list'),
            btnResetAll: document.getElementById('btn-reset-all')
        };
    },

    _bindEvents() {
        // Navigation
        this.els.navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                this._showPage(page);
                this._closeSidebar();
            });
        });

        // Hamburger
        this.els.hamburgers.forEach(h => {
            h.addEventListener('click', () => this._toggleSidebar());
        });
        this.els.sidebarOverlay.addEventListener('click', () => this._closeSidebar());

        // Home module cards
        this.els.moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                const goto = card.dataset.goto;
                if (goto === 'hiragana' || goto === 'katakana' || goto === 'kanji') {
                    this._switchWritingType(goto);
                    this._showPage('writing');
                } else {
                    this._showPage(goto);
                }
                this._closeSidebar();
            });
        });

        // Writing tabs
        this.els.writingTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this._switchWritingType(tab.dataset.wtype);
            });
        });

        // Writing controls
        this.els.btnPrev.addEventListener('click', () => this._writingPrev());
        this.els.btnNext.addEventListener('click', () => this._writingNext());
        this.els.btnClear.addEventListener('click', () => this._writingClear());
        this.els.btnReset.addEventListener('click', () => this._writingReset());
        this.els.btnCheck.addEventListener('click', () => this._writingCheck());

        // Click char to play sound
        this.els.writingChar.addEventListener('click', () => {
            const list = this._getCurrentWritingList();
            if (list && list[this.writingIndex]) {
                playTTS(list[this.writingIndex].char);
            }
        });

        // Quiz
        this.els.quizModBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.els.quizModBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        this.els.btnStartQuiz.addEventListener('click', () => this._startQuiz());
        this.els.btnRetry.addEventListener('click', () => this._startQuiz());
        this.els.btnQuizHome.addEventListener('click', () => {
            this._showPage('home');
            this._closeSidebar();
        });

        // Culture tabs
        this.els.cultureTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.els.cultureTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this._renderCulture(tab.dataset.ctab);
            });
        });

        // Progress
        this.els.btnResetAll.addEventListener('click', () => this._resetAllData());
    },

    _toggleSidebar() {
        if (window.innerWidth <= 768) {
            this.els.sidebar.classList.toggle('open');
            this.els.sidebarOverlay.classList.toggle('active');
        }
    },

    _closeSidebar() {
        this.els.sidebar.classList.remove('open');
        this.els.sidebarOverlay.classList.remove('active');
    },

    _showPage(pageId) {
        // Update pages
        this.els.pages.forEach(p => p.classList.remove('active'));
        const target = document.getElementById('page-' + pageId);
        if (target) target.classList.add('active');

        // Update sidebar
        this.els.navBtns.forEach(b => b.classList.remove('active'));
        const navBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
        if (navBtn) navBtn.classList.add('active');

        this.currentPage = pageId;

        // Refresh per page
        if (pageId === 'home') this._updateHomeStats();
        if (pageId === 'writing') {
            setTimeout(() => CanvasEngine.resize(), 50);
            this._updateWritingUI();
        }
        if (pageId === 'quiz') this._updateQuizUI();
        if (pageId === 'culture') {
            // Activate first tab if none active
            const activeTab = document.querySelector('.culture-tab.active');
            if (!activeTab) {
                const first = document.querySelector('.culture-tab');
                if (first) { first.classList.add('active'); this._renderCulture(first.dataset.ctab); }
            } else {
                this._renderCulture(activeTab.dataset.ctab);
            }
        }
        if (pageId === 'progress') this._updateProgressPage();
        this._updateStreakDisplay();
    },

    // ---- Streak ----
    _loadStreak() {
        Storage.updateStreak();
    },

    _updateStreakDisplay() {
        const count = Storage.getStreakCount();
        this.els.streakCount.textContent = count;
        if (this.els.homeStreak) this.els.homeStreak.textContent = count;
        if (this.els.quizStreakDisplay) this.els.quizStreakDisplay.textContent = count;
    },

    // ---- Home ----
    _updateHomeStats() {
        const streak = Storage.getStreakCount();
        if (this.els.homeStreak) this.els.homeStreak.textContent = streak;

        const qStats = Storage.getQuizStats();
        if (this.els.homeQuizScore) this.els.homeQuizScore.textContent = qStats.highScore || 0;

        // Count total reps across all modules
        let totalReps = 0;
        ['hiragana', 'katakana', 'kanji'].forEach(type => {
            const reps = Storage.getReps(type);
            Object.values(reps).forEach(v => totalReps += v);
        });
        if (this.els.homeCharsLearned) this.els.homeCharsLearned.textContent = totalReps;
    },

    // ---- Writing Module ----
    _getCurrentWritingList() {
        if (this.writingType === 'hiragana') return DATA.hiragana;
        if (this.writingType === 'katakana') return DATA.katakana;
        if (this.writingType === 'kanji') return DATA.kanji;
        return DATA.hiragana;
    },

    _switchWritingType(type) {
        this.writingType = type;
        this.writingIndex = 0;
        this.els.writingTabs.forEach(t => {
            t.classList.toggle('active', t.dataset.wtype === type);
        });
        CanvasEngine.clear();
        this._updateWritingUI();
        setTimeout(() => CanvasEngine.resize(), 50);
    },

    _updateWritingUI() {
        const list = this._getCurrentWritingList();
        if (!list || list.length === 0) return;
        const item = list[this.writingIndex];
        const total = list.length;
        const repCount = Storage.getRepCount(this.writingType, this.writingIndex);

        // Title
        const names = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji N5' };
        this.els.writingTitle.textContent = names[this.writingType] || 'Writing';

        // Char & Romaji
        this.els.writingChar.textContent = item.char;
        if (this.writingType === 'kanji') {
            this.els.writingRomaji.textContent = `[ ${item.romaji} ] — ${item.meaning}`;
        } else {
            this.els.writingRomaji.textContent = `[ ${item.romaji} ]`;
        }

        // Counter
        this.els.writingCounter.textContent = repCount;
        this.els.writingProgress.textContent = `${this.writingIndex + 1}/${total}`;
    },

    _writingPrev() {
        const list = this._getCurrentWritingList();
        if (this.writingIndex > 0) {
            this.writingIndex--;
            CanvasEngine.clear();
            this._updateWritingUI();
        }
    },

    _writingNext() {
        const list = this._getCurrentWritingList();
        if (this.writingIndex < list.length - 1) {
            this.writingIndex++;
            CanvasEngine.clear();
            this._updateWritingUI();
        }
    },

    _writingClear() {
        // Add repetition count
        Storage.addRep(this.writingType, this.writingIndex);
        CanvasEngine.clear();
        this._updateWritingUI();
        // Update progress if visible
        if (this.currentPage === 'progress') this._updateProgressPage();
    },

    _writingReset() {
        // Reset all reps for this module
        Storage.setReps(this.writingType, {});
        CanvasEngine.clear();
        this._updateWritingUI();
        if (this.currentPage === 'progress') this._updateProgressPage();
    },

    _writingCheck() {
        const list = this._getCurrentWritingList();
        const total = list.length;
        let mastered = 0;
        let totalReps = 0;
        list.forEach((item, i) => {
            const c = Storage.getRepCount(this.writingType, i);
            totalReps += c;
            if (c >= 5) mastered++; // 5 reps = mastered
        });
        alert(`📊 Progres ${this.writingType.toUpperCase()}:\nTotal repetisi: ${totalReps}\nKarakter dikuasai (≥5x): ${mastered}/${total}\nSemangat belajar! がんばって！`);
    },

    // ---- Canvas Init ----
    _initCanvas() {
        CanvasEngine.init('draw-canvas', 'canvas-wrapper');
        // Resize when page becomes visible
        const observer = new ResizeObserver(() => {
            if (this.currentPage === 'writing') CanvasEngine.resize();
        });
        observer.observe(document.getElementById('canvas-wrapper'));
    },

    // ---- Quiz Module ----
    _getActiveQuizType() {
        const active = document.querySelector('.quiz-mod-btn.active');
        return active ? active.dataset.qtype : 'hiragana';
    },

    _updateQuizUI() {
        const qStats = Storage.getQuizStats();
        this.els.quizHighscore.textContent = qStats.highScore || 0;
        this.els.quizStreakDisplay.textContent = Storage.getStreakCount();
    },

    _startQuiz() {
        const type = this._getActiveQuizType();
        let pool = [];
        if (type === 'mixed') {
            pool = [...DATA.quizPool.hiragana, ...DATA.quizPool.katakana, ...DATA.quizPool.kanji];
        } else {
            pool = DATA.quizPool[type] || DATA.quizPool.hiragana;
        }

        // Shuffle & pick 10
        pool = pool.sort(() => Math.random() - 0.5);
        this.quizData = pool.slice(0, this.quizTotal);
        this.quizIndex = 0;
        this.quizScore = 0;
        this.quizStreak = 0;
        this.quizCorrectCount = 0;
        this.quizState = 'active';

        this.els.quizStartScreen.classList.add('hidden');
        this.els.quizActiveScreen.classList.remove('hidden');
        this.els.quizResultScreen.classList.add('hidden');

        this._renderQuestion();
    },

    _renderQuestion() {
        if (this.quizIndex >= this.quizData.length) {
            this._finishQuiz();
            return;
        }

        const q = this.quizData[this.quizIndex];
        this.els.qNum.textContent = this.quizIndex + 1;
        this.els.qScore.textContent = this.quizScore;
        this.els.qStreak.textContent = this.quizStreak;

        if (q.type === 'kanji') {
            this.els.qQuestion.textContent = 'Apa cara baca kanji ini?';
            this.els.qChar.textContent = q.char;
        } else {
            this.els.qQuestion.textContent = 'Huruf apa ini?';
            this.els.qChar.textContent = q.char;
        }

        // Build options
        const correctAnswer = q.answer;
        // Get wrong answers from same pool
        let wrongPool = this.quizData.filter(x => x.answer !== correctAnswer);
        // Also add from full pool if needed
        if (wrongPool.length < 3) {
            const fullPool = DATA.quizPool[q.type] || [];
            wrongPool = fullPool.filter(x => x.answer !== correctAnswer);
        }
        wrongPool = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [correctAnswer, ...wrongPool.map(x => x.answer)];
        options.sort(() => Math.random() - 0.5);

        this.els.qOptions.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt';
            btn.textContent = opt;
            btn.dataset.value = opt;
            btn.addEventListener('click', () => this._checkAnswer(btn, opt, correctAnswer));
            this.els.qOptions.appendChild(btn);
        });

        this.els.qFeedback.classList.add('hidden');
        this.els.qFeedback.className = 'quiz-feedback hidden';
        this.quizState = 'active';
    },

    _checkAnswer(btn, selected, correct) {
        if (this.quizState === 'answered') return;
        this.quizState = 'answered';

        const allOpts = this.els.qOptions.querySelectorAll('.quiz-opt');
        allOpts.forEach(o => o.classList.add('disabled'));

        if (selected === correct) {
            btn.classList.add('correct');
            this.quizStreak++;
            this.quizScore += 10 + (this.quizStreak * 2); // bonus streak
            this.quizCorrectCount++;
            this.els.qFeedback.textContent = `✅ Benar! +${10 + (this.quizStreak * 2)} poin`;
            this.els.qFeedback.className = 'quiz-feedback correct';
        } else {
            btn.classList.add('wrong');
            // Highlight correct
            allOpts.forEach(o => {
                if (o.dataset.value === correct) o.classList.add('correct');
            });
            this.quizStreak = 0;
            this.els.qFeedback.textContent = `❌ Salah. Jawaban: ${correct}`;
            this.els.qFeedback.className = 'quiz-feedback wrong';
        }
        this.els.qFeedback.classList.remove('hidden');
        this.els.qScore.textContent = this.quizScore;
        this.els.qStreak.textContent = this.quizStreak;

        // Next after delay
        setTimeout(() => {
            this.quizIndex++;
            this._renderQuestion();
        }, 1200);
    },

    _finishQuiz() {
        this.quizState = 'result';
        this.els.quizActiveScreen.classList.add('hidden');
        this.els.quizResultScreen.classList.remove('hidden');

        const total = this.quizData.length;
        this.els.resultScore.textContent = `${this.quizCorrectCount}/${total}`;
        this.els.resultStreak.textContent = this.quizStreak;

        // Message
        const pct = this.quizCorrectCount / total;
        if (pct === 1) this.els.resultMsg.textContent = '🎉 Sempurna! Kamu jenius! すごい！';
        else if (pct >= 0.8) this.els.resultMsg.textContent = '👏 Hebat! Pertahankan! よくできました！';
        else if (pct >= 0.6) this.els.resultMsg.textContent = '👍 Cukup baik, tingkatkan lagi!';
        else this.els.resultMsg.textContent = '💪 Terus berlatih! がんばって！';

        // Save high score
        const stats = Storage.getQuizStats();
        if (this.quizScore > stats.highScore) {
            stats.highScore = this.quizScore;
        }
        stats.totalCorrect += this.quizCorrectCount;
        stats.totalQuestions += total;
        Storage.setQuizStats(stats);

        // Update streak
        Storage.updateStreak();
        this._updateStreakDisplay();
        this._updateHomeStats();
    },

    // ---- Culture Module ----
    _renderCulture(tabId) {
        const articles = DATA.culture[tabId];
        if (!articles) {
            this.els.cultureContent.innerHTML = '<p>Tidak ada artikel untuk kategori ini.</p>';
            return;
        }
        let html = '';
        articles.forEach(a => {
            html += `
                <div class="culture-card">
                    <h3>${a.title}</h3>
                    <p>${a.content}</p>
                    <span class="culture-tag">${a.tag}</span>
                </div>
            `;
        });
        this.els.cultureContent.innerHTML = html;
    },

    // ---- Progress Page ----
    _updateProgressPage() {
        const types = ['hiragana', 'katakana', 'kanji'];
        const pEls = [this.els.pHiragana, this.els.pKatakana, this.els.pKanji];
        const names = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji N5' };

        let detailHtml = '';

        types.forEach((type, idx) => {
            const list = DATA[type];
            const total = list.length;
            const reps = Storage.getReps(type);
            let mastered = 0;
            list.forEach((item, i) => {
                const c = reps[i] || 0;
                if (c >= 5) mastered++;
            });
            const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
            pEls[idx].textContent = pct + '%';
        });

        // Detail list: show hiragana as default
        const type = 'hiragana';
        const list = DATA[type];
        const reps = Storage.getReps(type);
        detailHtml = `<h4>${names[type]} — Detail</h4><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(60px,1fr));gap:6px;">`;
        list.forEach((item, i) => {
            const c = reps[i] || 0;
            const done = c >= 5 ? 'done' : '';
            detailHtml += `<div class="progress-char-item ${done}"><span class="pci-char">${item.char}</span><span class="pci-count">${c}x</span></div>`;
        });
        detailHtml += '</div>';
        this.els.progressDetailList.innerHTML = detailHtml;

        // Add buttons to switch detail
        const switchHtml = `<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
            <button class="btn btn-sm btn-nav detail-switch active" data-dtype="hiragana">Hiragana</button>
            <button class="btn btn-sm btn-nav detail-switch" data-dtype="katakana">Katakana</button>
            <button class="btn btn-sm btn-nav detail-switch" data-dtype="kanji">Kanji</button>
        </div>`;
        this.els.progressDetailList.innerHTML = switchHtml + this.els.progressDetailList.innerHTML;

        document.querySelectorAll('.detail-switch').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.detail-switch').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this._renderDetailList(btn.dataset.dtype);
            });
        });
    },

    _renderDetailList(type) {
        const list = DATA[type];
        const reps = Storage.getReps(type);
        const names = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji N5' };
        let html = `<h4>${names[type]} — Detail</h4><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(60px,1fr));gap:6px;">`;
        list.forEach((item, i) => {
            const c = reps[i] || 0;
            const done = c >= 5 ? 'done' : '';
            html += `<div class="progress-char-item ${done}"><span class="pci-char">${item.char}</span><span class="pci-count">${c}x</span></div>`;
        });
        html += '</div>';

        // Keep the switch buttons
        const switchBtns = document.querySelector('.detail-switch')?.parentElement?.outerHTML || '';
        this.els.progressDetailList.innerHTML = switchBtns + html;

        // Re-bind
        document.querySelectorAll('.detail-switch').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.detail-switch').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this._renderDetailList(btn.dataset.dtype);
            });
        });
    },

    _resetAllData() {
        if (confirm('⚠️ Reset semua data progres? Tindakan ini tidak bisa dibatalkan!')) {
            ['hiragana', 'katakana', 'kanji'].forEach(t => Storage.setReps(t, {}));
            Storage.setQuizStats({ highScore: 0, totalCorrect: 0, totalQuestions: 0 });
            Storage.setStreak({ count: 0, lastDate: null });
            this._updateProgressPage();
            this._updateHomeStats();
            this._updateStreakDisplay();
            alert('✅ Semua data telah direset.');
        }
    }
};


// ============================================================
// 6. BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
