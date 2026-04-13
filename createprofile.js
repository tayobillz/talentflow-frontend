const expLabels = ['Beginner', 'Intermediate', 'Advanced'];

function updatePreview() {
const bio  = document.getElementById('bio').value.trim();
const role = document.getElementById('role').value.trim();

document.getElementById('previewBio').textContent =
bio || 'Passionate about creating beautiful, user-friendly interfaces. Currently learning React and exploring modern frontend technologies.';

document.getElementById('previewRole').textContent =
role || 'Frontend Developer Intern';
}

function updateExp(val) {
const label = expLabels[val];
document.getElementById('previewBadge').innerHTML = `
<svg viewBox="0 0 24 24" fill="currentColor" style="width:12px;height:12px;">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
${label}
`;
}

function handlePhoto(event) {
const file = event.target.files[0];
if (!file) return;

const reader = new FileReader();
reader.onload = function(e) {
const src = e.target.result;

const preview = document.getElementById('photoPreview');
preview.src = src;
preview.classList.add('visible');
document.getElementById('photoPlaceholder').style.display = 'none';

const previewAvatar = document.getElementById('previewAvatar');
let img = previewAvatar.querySelector('img');
if (!img) {
    img = document.createElement('img');
    previewAvatar.appendChild(img);
}
img.src = src;
img.classList.add('visible');
const svg = previewAvatar.querySelector('svg');
if (svg) svg.style.display = 'none';
};
reader.readAsDataURL(file);
}

function handleSubmit() {
const role = document.getElementById('role').value.trim();

if (!role) {
const input = document.getElementById('role');
input.focus();
input.style.borderColor = '#EF4444';
setTimeout(() => { input.style.borderColor = ''; }, 2000);
return;
}

alert('Profile saved! Redirecting to dashboard...');
}

document.getElementById('previewName').textContent = 'Jordan Davis';