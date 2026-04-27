const cards = document.querySelectorAll('.card');
const continueBtn = document.querySelector('.btn-continue');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    const radio = card.querySelector('input[type="radio"]');
    radio.checked = true;
    continueBtn.disabled = false;
    continueBtn.classList.add('active');
  });
});