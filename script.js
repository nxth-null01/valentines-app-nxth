const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelopeScreen');
const questionScreen = document.getElementById('questionScreen');
const optionsScreen = document.getElementById('optionsScreen');
const subScreen = document.getElementById('subScreen');
const subTitle = document.getElementById('subTitle');
const subOptions = document.getElementById('subOptions');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesScale = 1;
let plan = JSON.parse(localStorage.getItem('valentinePlan')) || {};

function savePlan() {
    localStorage.setItem('valentinePlan', JSON.stringify(plan));
}

function backToMenu() {
    subScreen.classList.add('hidden');
    optionsScreen.classList.remove('hidden');
}

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        envelopeScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    }, 600);
});

noBtn.addEventListener('click', () => {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 30 + 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    yesScale += 0.25;
    yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

    if (yesScale >= 1.8) {
        noBtn.style.zIndex = 0;
        yesBtn.style.zIndex = 2;
    }
});

yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    optionsScreen.classList.remove('hidden');
});

function openWear() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    subTitle.innerText = 'What color outfit? 👗';
    subOptions.innerHTML = ['❤️ Red', '🖤 Black', '🤍 White', '💙 Blue', '💗 Pink'].map(c =>
        `<div class="option" onclick="selectWear('${c}')">${c}</div>`).join('');
}

function selectWear(choice) {
    plan.wear = choice;
    savePlan();
    backToMenu();
}

function openEat() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    subTitle.innerText = 'Where to eat? 🍽️';
    subOptions.innerHTML = ['🥓 Samgyup', '🥩 Steak House', '🍣 Japanese', '🍝 Italian', '🍔 Burger Date'].map(e =>
        `<div class="option" onclick="selectEat('${e}')">${e}</div>`).join('');
}

function selectEat(choice) {
    plan.eat = choice;
    savePlan();
    backToMenu();
}

function openMovie() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    subTitle.innerText = 'Movie or activity? 🎬';
    subOptions.innerHTML = ['🎥 Latest movie', '😂 Comedy', '😱 Horror', '🏛️ Museum first', '🌆 City walk'].map(m =>
        `<div class="option" onclick="selectMovie('${m}')">${m}</div>`).join('');
}

function selectMovie(choice) {
    plan.activity = choice;
    savePlan();
    backToMenu();
}

function openTime() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    subTitle.innerText = 'Pick-up time ⏰';
    subOptions.innerHTML = `<input type="time" onchange="selectTime(this.value)" style="padding:12px;border-radius:12px;border:1px solid #ddd;">`;
}

function selectTime(value) {
    plan.time = value;
    savePlan();
    backToMenu();
}

function showSummary() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    subTitle.innerText = 'Our Date Plan 💕';
    subOptions.innerHTML = `
        <div class="option">👗 Outfit: ${plan.wear || '—'}</div>
        <div class="option">🍽️ Eat: ${plan.eat || '—'}</div>
        <div class="option">🎬 Activity: ${plan.activity || '—'}</div>
        <div class="option">⏰ Pick-up: ${plan.time || '—'}</div>
      `;
}