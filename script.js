function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const logoElementDesktop = document.getElementById('dynamic-logo-desktop');
  const logoTexts = ["FEDAI", "Kimkio", "Carsell", "Fedai.ai","Arkenom Teknoloji","Optiwisdom"];
  let currentTextIndex = 0;

  if (logoElementDesktop) { // Elementin var olduğundan emin olun
    setInterval(() => {
      logoElementDesktop.textContent = logoTexts[currentTextIndex];
      currentTextIndex = (currentTextIndex + 1) % logoTexts.length;
    }, 2999); // Metin her 2 saniyede bir değişir (2000 milisaniye)
  }

});



document.addEventListener('DOMContentLoaded', function() {
  const carouselWrapper = document.querySelector('.carousel-projects-wrapper');
  const projectItems = document.querySelectorAll('.carousel-project-item');
  const prevButton = document.querySelector('.prev-arrow');
  const nextButton = document.querySelector('.next-arrow');
  const totalSlides = projectItems.length;
  let currentIndex = 0;

  function updateCarousel() {
      projectItems.forEach((item, index) => {
          if (index === currentIndex) {
              item.classList.add('active-slide');
          } else {
              item.classList.remove('active-slide');
          }
      });
  }

  function goToSlide(index) {
      if (index < 0) {
          currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
          currentIndex = 0;
      } else {
          currentIndex = index;
      }
      updateCarousel();
  }

  prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
  });

  // Sayfa yüklendiğinde ilk slaydı aktif et
  updateCarousel();
});