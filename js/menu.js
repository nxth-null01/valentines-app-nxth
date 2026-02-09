import { plan } from './storage.js';
import { openWear, openEat, openMovie, openTime } from './sections.js';

const optionsScreen = document.getElementById('optionsScreen');
const subScreen = document.getElementById('subScreen');

export function backToMenu() {
  subScreen.classList.add('hidden');
  optionsScreen.classList.remove('hidden');
  renderMainMenu();
}

export function renderMainMenu() {
  optionsScreen.innerHTML = `
    <h1>Yay! 💘</h1>
    <p>Let’s plan our date ✨</p>
    <div class="options">
      <div class="option ${plan.wear ? 'done' : ''}" onclick="openWear()">👗 What to wear</div>
      <div class="option ${plan.eat ? 'done' : ''}" onclick="openEat()">🍽️ Where to eat</div>
      <div class="option ${plan.activity ? 'done' : ''}" onclick="openMovie()">🎬 Movie / Activity</div>
      <div class="option ${plan.time ? 'done' : ''}" onclick="openTime()">⏰ Pick-up time</div>
      <div class="option" onclick="showSummary()">📋 View plan</div>
    </div>
  `;
}

// Expose functions globally so HTML onclick works
import * as Sections from './sections.js';
window.openWear = Sections.openWear;
window.openEat = Sections.openEat;
window.openMovie = Sections.openMovie;
window.openTime = Sections.openTime;
window.showSummary = Sections.showSummary;
window.editSection = Sections.editSection;
