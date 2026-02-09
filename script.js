const textInput = document.getElementById('textInput');
const translateBtn = document.getElementById('translateBtn');
const emojiOutput = document.getElementById('emojiOutput');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

// Huge emoji dictionary
const emojiDict = {
  // Emotions
  "love":"❤️","heart":"❤️","happy":"😊","smile":"😊","laugh":"😂","sad":"😢",
  "cry":"😢","angry":"😡","surprised":"😲","excited":"🤩","cool":"😎",
  "sleep":"😴","tired":"😪","bored":"😐","party":"🎉",

  // Animals
  "dog":"🐶","cat":"🐱","fish":"🐟","bird":"🐦","mouse":"🐭","cow":"🐮","pig":"🐷",
  "lion":"🦁","tiger":"🐯","bear":"🐻","monkey":"🐵","octopus":"🐙","unicorn":"🦄",
  "rabbit":"🐰","frog":"🐸","bee":"🐝","elephant":"🐘","snake":"🐍",

  // Food & drink
  "pizza":"🍕","burger":"🍔","cake":"🎂","icecream":"🍨","donut":"🍩",
  "coffee":"☕","tea":"🍵","water":"💧","beer":"🍺","wine":"🍷","fruit":"🍎",
  "apple":"🍎","banana":"🍌","cherry":"🍒","grapes":"🍇","lemon":"🍋","bread":"🍞",

  // Objects
  "car":"🚗","bike":"🚲","plane":"✈️","train":"🚆","bus":"🚌","phone":"📱",
  "computer":"💻","book":"📖","pen":"🖊","money":"💵","gift":"🎁","clock":"🕒",
  "camera":"📷","light":"💡","key":"🔑","door":"🚪","house":"🏠",

  // Weather & Nature
  "sun":"☀️","moon":"🌙","star":"⭐","cloud":"☁️","rain":"🌧","snow":"❄️",
  "fire":"🔥","tree":"🌳","flower":"🌸","mountain":"🏔","river":"🏞","ocean":"🌊",

  // Activities
  "music":"🎵","dance":"💃","run":"🏃","swim":"🏊","play":"🎮","game":"🎮",
  "soccer":"⚽","basketball":"🏀","travel":"🌍","fly":"🕊","write":"✍️","read":"📖",

  // Common expressions
  "ok":"👌","yes":"✅","no":"❌","100":"💯","wow":"😲","hi":"👋","hello":"👋",
  "bye":"👋","thanks":"🙏","thank":"🙏","please":"🙏","sorry":"😔"
};

// Random fallback emojis
const fallbackEmojis = ["🌈","🍩","🤖","👽","🎈","⚡","🥳","✨","🎵","🔥","💎","🪐","🦖"];

function translateToEmojiAll(text){
  let words = text.toLowerCase().split(/\s+/);
  let result = words.map(word => {
    word = word.replace(/[.,!?]/g,'');
    // Replace word with dictionary emoji or fallback
    return emojiDict[word] || fallbackEmojis[Math.floor(Math.random()*fallbackEmojis.length)];
  });
  return result.join(" ");
}

translateBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim();
  if(inputText){
    emojiOutput.textContent = translateToEmojiAll(inputText);
  }
});

// Copy
copyBtn.addEventListener('click', () => {
  if(emojiOutput.textContent){
    navigator.clipboard.writeText(emojiOutput.textContent);
    alert("Emoji copied!");
  }
});

// Clear
clearBtn.addEventListener('click', () => {
  textInput.value = "";
  emojiOutput.textContent = "";
});