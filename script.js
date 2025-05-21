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



document.addEventListener('DOMContentLoaded', function () {
  const experienceElement = document.getElementById('experience-text');
  const educationElement = document.getElementById('education-text');

  const experienceTexts = [
    '<span class="arkenom-text">Arkenom Teknoloji</span><br>Intern Data Scientist',
    '<span class="arkenom-text">OptiWisdom</span><br>Intern Data Analyst',
    '<span class="arkenom-text">FEDAI</span><br>YouTube Content Creator',
    '<span class="arkenom-text">Sunset Pier</span><br>Dishwasher - New Jersey',
    '<span class="arkenom-text">Azzura Pizza</span><br>Prep Cook - New Jersey'
  ];

  const educationTexts = [
    'Dokuz Eylül University<br>CS-AI Community Leader',
    'Faculty of Science <br>Content Creator with LightBoard'
  ];

  let experienceIndex = 0;
  let educationIndex = 0;

  if (experienceElement) {
    setInterval(() => {
      experienceElement.innerHTML = experienceTexts[experienceIndex];
      experienceIndex = (experienceIndex + 1) % experienceTexts.length;
    }, 3580);
  }

  if (educationElement) {
    setInterval(() => {
      educationElement.innerHTML = educationTexts[educationIndex];
      educationIndex = (educationIndex + 1) % educationTexts.length;
    }, 4660);
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


const iconButtons = document.querySelectorAll('.icon-button');
const animationDuration = 600; // CSS'deki transition süresi (milisaniye)
const holdDuration = 750; // Simgenin animasyon sonunda bekleme süresi (milisaniye)

iconButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');

    // Animasyon süresi + bekleme süresi kadar sonra 'clicked' sınıfını kaldır
    setTimeout(() => {
      button.classList.remove('clicked');
    }, animationDuration + holdDuration);
  });
});



// Accordion açma/kapama fonksiyonu
function toggleAccordion(index) {
  const items = document.querySelectorAll('.accordion-item');
  items[index].classList.toggle('open');
}



// Scroll animasyonu: IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Hedef class'lar
  const fadeElements = document.querySelectorAll('.fade-in-section, .fade-scale-section, .fade-left, .fade-right');
  fadeElements.forEach(el => fadeObserver.observe(el));
});



function toggleLang(input) {
  const lang = input.checked ? "usa" : "tr";
  setLanguage(lang); // varsa bu fonksiyonunla dili değiştir
}





