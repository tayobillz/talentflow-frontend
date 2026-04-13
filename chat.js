const panels = {
sidebar: document.getElementById('panelSidebar'),
chat:    document.getElementById('panelChat'),
info:    document.getElementById('panelInfo'),
};

const backBtn     = document.getElementById('backBtn');
const infoBtn     = document.getElementById('infoBtn');
const topbarTitle = document.getElementById('topbarTitle');

function isDesktop() { return window.innerWidth >= 1024; }
function isTablet()  { return window.innerWidth >= 768; }

function showPanel(name) {
// Desktop: info panel is always visible, nothing to switch
if (isDesktop()) return;

// Tablet: toggle info panel only
if (isTablet()) {
if (name === 'info') {
    panels.info.classList.toggle('info-open');
}
return;
}

// Mobile: show one panel at a time
Object.values(panels).forEach(p => {
p.classList.remove('active');
p.style.display = 'none';
});

if (name === 'sidebar') {
panels.sidebar.style.display = 'flex';
panels.sidebar.classList.add('active');
backBtn.style.display = 'none';
infoBtn.style.display = 'none';
topbarTitle.textContent = 'TalentFlow';
} else if (name === 'chat') {
panels.chat.style.display = 'flex';
panels.chat.classList.add('active');
backBtn.style.display = 'grid';
infoBtn.style.display = 'grid';
} else if (name === 'info') {
panels.info.style.display = 'flex';
panels.info.classList.add('active');
backBtn.style.display = 'grid';
infoBtn.style.display = 'none';
}
}

function toggleInfoPanel() {
if (isDesktop()) return; // always open on desktop
if (isTablet()) {
panels.info.classList.toggle('info-open');
return;
}
showPanel('info');
}

function closeInfo() {
if (isTablet()) {
panels.info.classList.remove('info-open');
} else {
showPanel('chat');
}
}

// Init mobile
if (!isTablet()) {
panels.chat.style.display = 'none';
panels.info.style.display = 'none';
}

function openChat(name, initials, color, bg) {
document.querySelectorAll('.contact-item').forEach(el => el.classList.remove('active'));
event.currentTarget.classList.add('active');

document.getElementById('chatName').textContent = name;
const av = document.getElementById('chatAvatar');
av.textContent = initials === '#' ? '#' : initials;
av.style.background = bg;
av.style.color = color;
topbarTitle.textContent = name;

showPanel('chat');
}

function sendMessage() {
const input = document.getElementById('msgInput');
const text = input.value.trim();
if (!text) return;

const area = document.getElementById('messagesArea');
const msgEl = document.createElement('div');
msgEl.className = 'message message--me';
msgEl.innerHTML = `
<div class="msg-content">
    <div class="msg-meta me">
    <span class="msg-time">${getTime()}</span>
    <span class="msg-name">You</span>
    </div>
    <div class="msg-bubble me">${escapeHtml(text)}</div>
</div>
<div class="msg-avatar you-avatar">You</div>
`;
area.appendChild(msgEl);
area.scrollTop = area.scrollHeight;
input.value = '';
}

document.getElementById('msgInput').addEventListener('keydown', e => {
if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

function toggleSection(header) {
header.classList.toggle('collapsed');
header.nextElementSibling.classList.toggle('hidden');
}

function getTime() {
const now = new Date();
let h = now.getHours();
const m = now.getMinutes().toString().padStart(2, '0');
const ampm = h >= 12 ? 'PM' : 'AM';
h = h % 12 || 12;
return `${h}:${m} ${ampm}`;
}

function escapeHtml(str) {
return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

window.addEventListener('resize', () => {
if (isTablet()) {
Object.values(panels).forEach(p => { p.style.display = ''; p.classList.remove('active'); });
} else {
Object.values(panels).forEach(p => { p.style.display = 'none'; p.classList.remove('active'); });
panels.sidebar.style.display = 'flex';
panels.sidebar.classList.add('active');
backBtn.style.display = 'none';
infoBtn.style.display = 'none';
}
});