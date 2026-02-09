import { plan, savePlan } from './storage.js';
import { backToMenu } from './menu.js';

const subScreen = document.getElementById('subScreen');
const subTitle = document.getElementById('subTitle');
const subOptions = document.getElementById('subOptions');
const optionsScreen = document.getElementById('optionsScreen');


// -------------------- WEAR --------------------
export function openWear() {
    optionsScreen.classList.add('hidden'); // ✅ hide menu
    subScreen.classList.remove('hidden');  // ✅ show sub card
  
    subTitle.innerText = 'What color outfit? 👗';
  
    subOptions.innerHTML = ['❤️ Red','🖤 Black','🤍 White','💙 Blue','💗 Pink']
      .map(c => `<div class="option" onclick="selectWear('${c}')">${c}</div>`)
      .join('');
  }
  
export function selectWear(choice) {
  plan.wear = choice;
  savePlan();
  backToMenu();
}

// -------------------- EAT --------------------
export function openEat() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
  
    subTitle.innerText = 'Where to eat? 🍽️';
  
    subOptions.innerHTML = ['🥓 Samgyup','🥩 Steak House','🍣 Japanese','🍝 Italian','🍔 Burger Date']
      .map(e => `<div class="option" onclick="selectEat('${e}')">${e}</div>`)
      .join('');
  }
  
export function selectEat(choice) {
  plan.eat = choice;
  savePlan();
  backToMenu();
}

// -------------------- MOVIE / ACTIVITY --------------------
export function openMovie() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
  
    subTitle.innerText = 'Movie or activity? 🎬';
  
    subOptions.innerHTML = ['🎥 Latest movie','😂 Comedy','😱 Horror','🏛️ Museum first','🌆 City walk']
      .map(m => `<div class="option" onclick="selectMovie('${m}')">${m}</div>`)
      .join('');
  }
  

export function selectMovie(choice) {
  plan.activity = choice;
  savePlan();
  backToMenu();
}

// -------------------- TIME --------------------
export function openTime() {
    optionsScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
  
    subTitle.innerText = 'Pick-up time ⏰';
  
    subOptions.innerHTML = `
      <input type="time"
        onchange="selectTime(this.value)"
        style="padding:12px;border-radius:12px;border:1px solid #ddd;">
    `;
  }
  

export function selectTime(value) {
  plan.time = value;
  savePlan();
  backToMenu();
}

// -------------------- SUMMARY --------------------
export function showSummary() {
    optionsScreen.classList.add('hidden'); // ✅ hide menu
    subScreen.classList.remove('hidden');  // ✅ show summary card
  
    subTitle.innerText = 'Our Date Plan 💕';
  
    subOptions.innerHTML = `
      <div class="option">
        <span>👗 Outfit: ${plan.wear || '—'}</span>
        <button onclick="editSection('wear')">Edit</button>
      </div>
  
      <div class="option">
        <span>🍽️ Eat: ${plan.eat || '—'}</span>
        <button onclick="editSection('eat')">Edit</button>
      </div>
  
      <div class="option">
        <span>🎬 Activity: ${plan.activity || '—'}</span>
        <button onclick="editSection('activity')">Edit</button>
      </div>
  
      <div class="option">
        <span>⏰ Pick-up: ${plan.time || '—'}</span>
        <button onclick="editSection('time')">Edit</button>
      </div>
    `;
  }
  
  
export function editSection(type) {
    const optionsScreen = document.getElementById('optionsScreen');
    const subScreen = document.getElementById('subScreen');
  
    // Hide everything before opening the new sub-screen
    subScreen.classList.remove('hidden');
  
    if (type === 'wear') openWear();
    if (type === 'eat') openEat();
    if (type === 'activity') openMovie();
    if (type === 'time') openTime();
  }
  