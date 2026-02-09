// Tab functionality
const tabs = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    tabContents.forEach(tc => tc.classList.add('hidden'));
    document.getElementById(target + 'Tab').classList.remove('hidden');
  });
});

// Transcript area
const transcriptArea = document.getElementById('transcriptArea');
function addTranscript(text) {
  const p = document.createElement('p');
  p.textContent = text;
  transcriptArea.appendChild(p);
  transcriptArea.scrollTop = transcriptArea.scrollHeight;
}

// Copy transcript
document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(transcriptArea.innerText);
  alert('Transcript copied!');
});

// Reset
document.getElementById('resetBtn').addEventListener('click', () => {
  transcriptArea.innerHTML = '';
});

// --- Voice Transcription ---
let recognition;
if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    let transcript = '';
    for(let i = event.resultIndex; i < event.results.length; ++i){
      transcript += event.results[i][0].transcript;
    }
    transcriptArea.innerHTML = transcript;
  }
}

document.getElementById('startVoice').addEventListener('click', () => {
  if(recognition) recognition.start();
});
document.getElementById('stopVoice').addEventListener('click', () => {
  if(recognition) recognition.stop();
});

// --- Video Transcription (placeholder) ---
document.getElementById('transcribeVideo').addEventListener('click', () => {
  const url = document.getElementById('videoURL').value.trim();
  if(url){
    addTranscript(`[Video transcription simulated for URL: ${url}]`);
  }
});

// --- Translate (simulation) ---
document.getElementById('translateBtn').addEventListener('click', () => {
  const lang = document.getElementById('langSelect').value;
  const text = transcriptArea.innerText;
  if(text){
    addTranscript(`[Translated to ${lang}]: ${text}`);
  }
});

// --- Meeting Simulation ---
document.getElementById('simulateMeeting').addEventListener('click', () => {
  const sample = [
    "Speaker 1: Welcome everyone to the meeting.",
    "Speaker 2: Thanks! Let's review the updates.",
    "Speaker 1: Project is on schedule.",
    "Speaker 3: Any blockers?",
    "Speaker 2: None so far."
  ];
  sample.forEach(line => addTranscript(line));
});

// --- Quick Notes ---
document.getElementById('addNote').addEventListener('click', () => {
  const note = document.getElementById('noteInput').value.trim();
  if(note){
    addTranscript(`[Note]: ${note}`);
    document.getElementById('noteInput').value = '';
  }
});