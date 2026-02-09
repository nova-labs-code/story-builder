// ----------------- Meeting Notes -----------------
function initMeetingNotes() {
  const input = document.getElementById('meetingInput');
  const saveBtn = document.getElementById('saveMeeting');
  const copyBtn = document.getElementById('copyMeeting');
  const clearBtn = document.getElementById('clearMeeting');
  const savedDiv = document.getElementById('meetingSaved');

  // Load saved
  let notes = JSON.parse(localStorage.getItem('meetingNotes') || '[]');
  renderMeeting(notes);

  saveBtn.onclick = () => {
    const text = input.value.trim();
    if(text){
      const timestamp = new Date().toLocaleString();
      notes.push(`[${timestamp}] ${text}`);
      localStorage.setItem('meetingNotes', JSON.stringify(notes));
      renderMeeting(notes);
      input.value = '';
    }
  };

  copyBtn.onclick = () => {
    navigator.clipboard.writeText(notes.join('\n'));
    alert('Notes copied!');
  };

  clearBtn.onclick = () => {
    if(confirm('Clear all meeting notes?')){
      notes = [];
      localStorage.setItem('meetingNotes','[]');
      renderMeeting(notes);
    }
  };

  function renderMeeting(arr){
    savedDiv.innerHTML = arr.map(n => `<p>${n}</p>`).join('');
  }
}

// ----------------- Daily Standup -----------------
function initStandup() {
  const yesterdayInput = document.getElementById('yesterday');
  const todayInput = document.getElementById('today');
  const blockersInput = document.getElementById('blockers');
  const saveBtn = document.getElementById('saveStandup');
  const clearBtn = document.getElementById('clearStandup');
  const savedDiv = document.getElementById('standupSaved');

  let entries = JSON.parse(localStorage.getItem('standupEntries') || '[]');
  renderStandup(entries);

  saveBtn.onclick = () => {
    const y = yesterdayInput.value.trim();
    const t = todayInput.value.trim();
    const b = blockersInput.value.trim();
    if(y || t || b){
      const date = new Date().toLocaleDateString();
      entries.push({date, yesterday:y, today:t, blockers:b});
      localStorage.setItem('standupEntries', JSON.stringify(entries));
      renderStandup(entries);
      yesterdayInput.value = todayInput.value = blockersInput.value = '';
    }
  };

  clearBtn.onclick = () => {
    if(confirm('Clear all standup entries?')){
      entries = [];
      localStorage.setItem('standupEntries','[]');
      renderStandup(entries);
    }
  };

  function renderStandup(arr){
    savedDiv.innerHTML = arr.map(e =>
      `<p><strong>${e.date}</strong><br>
      Yesterday: ${e.yesterday}<br>
      Today: ${e.today}<br>
      Blockers: ${e.blockers}</p>`
    ).join('');
  }
}

// ----------------- Templates -----------------
function initTemplates() {
  const input = document.getElementById('templateInput');
  const saveBtn = document.getElementById('saveTemplate');
  const copyBtn = document.getElementById('copyTemplate');
  const clearBtn = document.getElementById('clearTemplate');
  const savedDiv = document.getElementById('templateSaved');

  let templates = JSON.parse(localStorage.getItem('templates') || '[]');
  renderTemplates(templates);

  saveBtn.onclick = () => {
    const text = input.value.trim();
    if(text){
      templates.push(text);
      localStorage.setItem('templates', JSON.stringify(templates));
      renderTemplates(templates);
      input.value = '';
    }
  };

  copyBtn.onclick = () => {
    if(templates.length){
      navigator.clipboard.writeText(templates.join('\n\n'));
      alert('Templates copied!');
    }
  };

  clearBtn.onclick = () => {
    if(confirm('Clear all templates?')){
      templates = [];
      localStorage.setItem('templates','[]');
      renderTemplates(templates);
    }
  };

  function renderTemplates(arr){
    savedDiv.innerHTML = arr.map(t => `<p>${t}</p>`).join('');
  }
}