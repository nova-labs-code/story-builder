const textInput = document.getElementById('textInput');
const translateBtn = document.getElementById('translateBtn');
const emojiOutput = document.getElementById('emojiOutput');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

// Expanded emoji dictionary
const emojiDict = {
  "love":"❤️","heart":"❤️","happy":"😊","smile":"😊","laugh":"😂","sad":"😢",
  "cry":"😢","angry":"😡","surprised":"😲","excited":"🤩","cool":"😎",
  "sleep":"😴","tired":"😪","bored":"😐","party":"🎉",
  "dog":"🐶","cat":"🐱","fish":"🐟","bird":"🐦","mouse":"🐭","cow":"🐮","pig":"🐷",
  "lion":"🦁","tiger":"🐯","bear":"🐻","monkey":"🐵","octopus":"🐙","unicorn":"🦄",
  "rabbit":"🐰","frog":"🐸","bee":"🐝","elephant":"🐘","snake":"🐍",
  "pizza":"🍕","burger":"🍔","cake":"🎂","icecream":"🍨","donut":"🍩",
  "coffee":"☕","tea":"🍵","water":"💧","beer":"🍺","wine":"🍷","fruit":"🍎",
  "apple":"🍎","banana":"🍌","cherry":"🍒","grapes":"🍇","lemon":"🍋","bread":"🍞",
  "car":"🚗","bike":"🚲","plane":"✈️","train":"🚆","bus":"🚌","phone":"📱",
  "computer":"💻","book":"📖","pen":"🖊","money":"💵","gift":"🎁","clock":"🕒",
  "camera":"📷","light":"💡","key":"🔑","door":"🚪","house":"🏠",
  "sun":"☀️","moon":"🌙","star":"⭐","cloud":"☁️","rain":"🌧","snow":"❄️",
  "fire":"🔥","tree":"🌳","flower":"🌸","mountain":"🏔","river":"🏞","ocean":"🌊",
  "music":"🎵","dance":"💃","run":"🏃","swim":"🏊","play":"🎮","game":"🎮",
  "soccer":"⚽","basketball":"🏀","travel":"🌍","fly":"🕊","write":"✍️","read":"📖",
  "ok":"👌","yes":"✅","no":"❌","100":"💯","wow":"😲","hi":"👋","hello":"👋",
  "bye":"👋","thanks":"🙏","thank":"🙏","please":"🙏","sorry":"😔"
};

// Random fallback emojis
const fallbackEmojis = ["🌈","🍩","🤖","👽","🎈","⚡","🥳","✨","🎵","🔥","💎","🪐","🦖"];

function translateToEmojiAll(text){
  // Match words including punctuation
  let words = text.match(/\b[\w']+\b/g) || [];
  let result = words.map(word => {
    const lower = word.toLowerCase();
    return emojiDict[lower] || fallbackEmojis[Math.floor(Math.random()*fallbackEmojis.length)];
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