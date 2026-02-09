const storyArea = document.getElementById('storyArea');
const randomBtn = document.getElementById('randomBtn');
const writeBtn = document.getElementById('writeBtn');
const wordBtn = document.getElementById('wordBtn');
const inputArea = document.getElementById('inputArea');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

const randomSentences = [
  "The cat wore a tiny top hat.",
  "Suddenly, a spaceship appeared in the backyard.",
  "She danced on the clouds while singing.",
  "A mysterious box arrived on the doorstep.",
  "The dragon sneezed and rained glitter everywhere."
];

const randomWords = ["unicorn", "pickle", "octopus", "spaceship", "pirate", "rainbow"];

function addSentence(text) {
  const p = document.createElement('p');
  p.textContent = text;
  storyArea.appendChild(p);
  storyArea.scrollTop = storyArea.scrollHeight;
}

// Random sentence
randomBtn.addEventListener('click', () => {
  const sentence = randomSentences[Math.floor(Math.random() * randomSentences.length)];
  addSentence(sentence);
});

// Write your own
writeBtn.addEventListener('click', () => {
  inputArea.classList.remove('hidden');
  userInput.value = '';
  userInput.focus();
});

// Include random word
wordBtn.addEventListener('click', () => {
  const word = randomWords[Math.floor(Math.random() * randomWords.length)];
  inputArea.classList.remove('hidden');
  userInput.value = `I saw a ${word}...`;
  userInput.focus();
});

// Submit user sentence
submitBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if(text) addSentence(text);
  inputArea.classList.add('hidden');
});

// Reset story
resetBtn.addEventListener('click', () => {
  storyArea.innerHTML = '';
});