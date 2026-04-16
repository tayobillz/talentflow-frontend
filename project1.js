document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.card').forEach(card => {
        const tasksText = card.querySelector('.tasks').textContent;
        const percentEl = card.querySelector('.percent');
        const fill = card.querySelector('.progress-fill');

        const match = tasksText.match(/(\d+)\s*\/\s*(\d+)/);

        if (!match) return;

        const completed = parseInt(match[1]);
        const total = parseInt(match[2]);

        const percent = Math.round((completed / total) * 100);

        fill.style.width = percent + '%';
        percentEl.textContent = percent + '%';
    });

    const searchInput = document.querySelector('input[type="search"]');

    searchInput.addEventListener('input', function () {
        const value = this.value.toLowerCase();

        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });

});
