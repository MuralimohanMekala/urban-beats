
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

document.getElementById('filter').addEventListener('change', (e) => {
  const value = e.target.value;
  const items = document.querySelectorAll('.menu-items .item');
  items.forEach(item => {
    if (value === 'all' || item.classList.contains(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

document.getElementById('searchBar').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.menu-items .item');
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? 'block' : 'none';
  });
});
