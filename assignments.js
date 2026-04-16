const navItems = document.querySelectorAll('.nav-item');
const pageBtns = document.querySelectorAll('.page-btn');
const searchInput = document.querySelector('.search-input');
const rows = document.querySelectorAll('tbody tr');
const filterHighlights = document.querySelectorAll('.filter-highlight');

let currentFilter = 'all';
let currentPage = 1;
const rowsPerPage = 5;

navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

filterHighlights.forEach(btn => {
  btn.addEventListener('click', function() {
    filterHighlights.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const text = this.textContent.trim().toLowerCase();
    currentFilter = text === 'status' ? 'all' : text;

    currentPage = 1;
    updateTable();
  });
});

searchInput.addEventListener('input', function() {
  currentPage = 1;
  updateTable();
});

document.querySelector('.search-icon').addEventListener('click', function() {
  searchInput.focus();
});

function getFilteredRows() {
  const searchText = searchInput.value.trim().toLowerCase();
  let filteredRows = [];

  rows.forEach(row => {
    const titleCell = row.querySelector('td');
    const badge = row.querySelector('.badge');

    if (!titleCell || !badge) return;

    const title = titleCell.textContent.trim().toLowerCase();
    const status = badge.textContent.trim().toLowerCase();

    const matchFilter = currentFilter === 'all' || status.includes(currentFilter);
    const matchSearch = title.includes(searchText);

    if (matchFilter && matchSearch) {
      filteredRows.push(row);
    }
  });

  return filteredRows;
}

function updatePagination(filteredRows) {
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginationEl = document.querySelector('.pagination');

  paginationEl.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.classList.add('page-btn');
    if (i === currentPage) btn.classList.add('active');
    btn.textContent = i;

    btn.addEventListener('click', function() {
      currentPage = i;
      updateTable();
    });

    paginationEl.appendChild(btn);
  }

  if (totalPages > 1) {
    const next = document.createElement('button');
    next.classList.add('page-btn', 'next');
    next.textContent = '›';
    next.addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        updateTable();
      }
    });
    paginationEl.appendChild(next);
  }
}

function updateTable() {
  const filteredRows = getFilteredRows();

  rows.forEach(row => row.style.display = 'none');

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  filteredRows.forEach((row, index) => {
    if (index >= start && index < end) {
      row.style.display = '';
    }
  });

  const noResults = document.querySelector('.no-results');
  if (noResults) {
    noResults.style.display = filteredRows.length ? 'none' : 'block';
  }

  updatePagination(filteredRows);
}

document.querySelectorAll('.upload-link').forEach(link => {
  link.addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();

    input.addEventListener('change', function () {
      if (input.files.length > 0) {
        link.outerHTML = '<span class="submitted">Submitted</span>';
      }
    });
  });
});