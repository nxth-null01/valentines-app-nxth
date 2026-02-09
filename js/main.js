import { renderMainMenu } from './menu.js';
import * as Sections from './sections.js';

const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelopeScreen');
const questionScreen = document.getElementById('questionScreen');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesScale = 1;

// -------------------- ENVELOPE --------------------
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    envelopeScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
  }, 600);
});

// -------------------- QUESTION BUTTONS --------------------
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
  const optionsScreen = document.getElementById('optionsScreen');
  optionsScreen.classList.remove('hidden');
  renderMainMenu();
});

// -------------------- Expose section functions globally --------------------
window.selectWear = Sections.selectWear;
window.selectEat = Sections.selectEat;
window.selectMovie = Sections.selectMovie;
window.selectTime = Sections.selectTime;
window.showSummary = Sections.showSummary;
window.editSection = Sections.editSection;
window.openWear = Sections.openWear;
window.openEat = Sections.openEat;
window.openMovie = Sections.openMovie;
window.openTime = Sections.openTime;
