const carouselTrack = document.querySelector('.carousel-track');
const blogCards = document.querySelectorAll('.blog-card');
const categoryBtns = document.querySelectorAll('.category-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let currentCategory = 'all';

// Filter blog cards based on category
function filterBlogCards() {
  blogCards.forEach(card => {
    const category = card.dataset.category;
    if (currentCategory === 'all' || category === currentCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Update carousel position
function updateCarouselPosition() {
  const visibleCards = Array.from(blogCards).filter(card => card.style.display !== 'none');
  const maxIndex = visibleCards.length - 1;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  const translateX = -currentIndex * 320; // Adjust this value based on the card width
  carouselTrack.style.transform = `translateX(${translateX}px)`;
}

// Category button click event
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.textContent.toLowerCase();
    filterBlogCards();
    updateCarouselPosition();
  });
});

// Previous button click event
prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarouselPosition();
});

// Next button click event
nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarouselPosition();
});

// Initial setup
filterBlogCards();
updateCarouselPosition();