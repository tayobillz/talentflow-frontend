// Toggle mobile filter drawer
function toggleFilters() {
document.getElementById('filterDrawer').classList.toggle('open');
}

// Category chip selection
document.querySelectorAll('.filter-chips').forEach(group => {
group.querySelectorAll('.chip').forEach(chip => {
chip.addEventListener('click', () => {
    group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
});
});
});

// Pagination
document.querySelectorAll('.page-btn').forEach(btn => {
btn.addEventListener('click', () => {
if (btn.textContent === '‹' || btn.textContent === '›') return;
document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
});
});