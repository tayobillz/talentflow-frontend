const tags = document.querySelectorAll('.tag');
const continueBtn = document.querySelector('.continue');
const countDisplay = document.getElementById('count');

let selectedCount = 0;

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('selected');

    if (tag.classList.contains('selected')) {
      selectedCount++;
    } else {
      selectedCount--;
    }

    countDisplay.textContent = selectedCount;

    if (selectedCount >= 3) {
      continueBtn.disabled = false;
      continueBtn.classList.add('active');
    } else {
      continueBtn.disabled = true;
      continueBtn.classList.remove('active');
    }
  });
});

document.querySelector('.back').addEventListener('click', () => {
  window.location.href = './onboarding3.html';
});