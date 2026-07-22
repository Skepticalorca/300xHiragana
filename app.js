// --- Data Kurikulum ---
const curriculum = {
    hiragana: [{ char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }],
    kanji: [{ char: '一', meaning: 'Satu' }, { char: '二', meaning: 'Dua' }],
    culture: [{ title: 'Etika Makan', desc: 'Jangan menancapkan sumpit di nasi.' }]
};

// --- State Management ---
const state = JSON.parse(localStorage.getItem('jp_hub_state')) || { streak: 0, score: 0 };
const save = () => localStorage.setItem('jp_hub_state', JSON.stringify(state));

// --- Routing & Rendering ---
function router(page) {
    const container = document.getElementById('app-container');
    container.innerHTML = ''; // Clear current
    
    switch(page) {
        case 'writing': renderWriting(); break;
        case 'quiz': renderQuiz(); break;
        case 'culture': renderCulture(); break;
        default: renderHome();
    }
}

function renderWriting() {
    document.getElementById('app-container').innerHTML = `
        <div class="card">
            <h2>Latihan Menulis</h2>
            <canvas id="canvas" height="300"></canvas>
            <button class="btn-primary" onclick="clearCanvas()">Hapus</button>
        </div>
    `;
    initCanvas();
}

// --- Canvas Logic ---
let ctx;
function initCanvas() {
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousemove', e => { /* logic draw */ });
}

function clearCanvas() { ctx.clearRect(0, 0, 300, 300); }

// Inisialisasi
router('home');
