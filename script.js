function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const logoElementDesktop = document.getElementById('dynamic-logo-desktop');
  const logoTexts = ["Kimkio", "Carsell", "Fedai.ai","Arkenom Teknoloji","Optiwisdom"];
  let currentTextIndex = 0;

  if (logoElementDesktop) { // Elementin var olduğundan emin olun
    setInterval(() => {
      logoElementDesktop.textContent = logoTexts[currentTextIndex];
      currentTextIndex = (currentTextIndex + 1) % logoTexts.length;
    }, 2999); // Metin her 2 saniyede bir değişir (2000 milisaniye)
  }

});


  const originalTitle = document.title;
  let timeoutId;

  window.addEventListener('blur', () => {
    timeoutId = setTimeout(() => {
      document.title = "👋 Hey! :)";
    }, 2500); // 1 saniye sonra değiştirsin
  });

  window.addEventListener('focus', () => {
    clearTimeout(timeoutId);
    document.title = originalTitle;
  });



document.addEventListener('DOMContentLoaded', function () {
  const experienceElement = document.getElementById('experience-text');
  const educationElement = document.getElementById('education-text');

  const experienceTexts = [
    '<span class="arkenom-text">Arkenom Teknoloji</span><br>Intern Data Scientist',
    '<span class="arkenom-text">OptiWisdom</span><br>Intern Data Analyst',
    '<span class="arkenom-text">FEDAI</span><br>YouTube Content Creator',
    '<span class="arkenom-text">Sunset Pier</span><br>Dishwasher - New Jersey',
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
    }, 5580);
  }

  if (educationElement) {
    setInterval(() => {
      educationElement.innerHTML = educationTexts[educationIndex];
      educationIndex = (educationIndex + 1) % educationTexts.length;
    }, 5580);
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



  function toggleAccordion(index) {
    const allItems = document.querySelectorAll(".accordion-item");

    allItems.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("active");
      } else {
        item.classList.remove("active"); // sadece biri açık kalsın
      }
    });
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








  let currentIndex = 0;
  const slideImg = document.getElementById('memory-slide-img');
  const slideCaption = document.getElementById('memory-slide-caption');

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideImg.src = slideFolder + slides[currentIndex].file;
    slideCaption.textContent = slides[currentIndex].caption;
  }

  setInterval(showNextSlide, 7000);


 document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });










function toggleLang(checkbox) {
  const isTurkish = checkbox.checked;

  if (isTurkish) {
    fetch("lang/turkish.json")
      .then(res => res.json())
      .then(data => {
        // DOM'daki tüm text node'ları dolaş
        document.querySelectorAll("*").forEach(el => {
          for (let i = 0; i < el.childNodes.length; i++) {
            const node = el.childNodes[i];
            if (node.nodeType === 3) { // text node
              const text = node.nodeValue.trim();
              if (data[text]) {
                node._original = text; // İngilizce metni sakla
                node.nodeValue = data[text]; // Türkçe'ye çevir
              }
            }
          }
        });
      })
      .catch(err => console.error("JSON yüklenemedi:", err));
  } else {
    // İngilizceye geri dön
    document.querySelectorAll("*").forEach(el => {
      for (let i = 0; i < el.childNodes.length; i++) {
        const node = el.childNodes[i];
        if (node.nodeType === 3 && node._original) {
          node.nodeValue = node._original;
        }
      }
    });
  }
}


  const typed = new Typed("#typed-output", {
    strings: [
      "Data Scientist",
      "Backend Developer",
      "Machine Learning Engineer",
      "Full Stack Developer",
      "Software Engineer",
      
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });




  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-value");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 4411;
      const stepTime = 20;

      let count = 0;
      const step = Math.ceil(target / (duration / stepTime));

      const getColor = (value) => {
        if (value >= 300) return "#23c629";       // Parlak yeşil
        if (value >= 250) return "#70d66b";       // Açık yeşil
        if (value >= 150) return "#e6d03b";       // Sarı
        if (value >= 80)  return "#f19136";       // Turuncu
        return "#cc4444";                         // Kırmızı/Gri
      };

      const updateCounter = () => {
        count += step;
        if (count >= target) {
          counter.textContent = target;
          counter.style.color = getColor(target);
        } else {
          counter.textContent = count;
          counter.style.color = getColor(count);
          setTimeout(updateCounter, stepTime);
        }
      };

      updateCounter();
    });
  });






  const starContainer = document.getElementById('starRating');
  const stars = starContainer.querySelectorAll('.star');
  let locked = false;
  let rating = 2; // Başlangıçta 2 yıldız dolu

  function updateStars(tempRating = rating) {
    stars.forEach((star, index) => {
      star.classList.toggle('filled', index < tempRating);
    });
  }

  updateStars(); // İlk yüklemede 2 yıldız dolu

  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => {
      if (!locked) updateStars(idx + 1);
    });

    star.addEventListener('mouseleave', () => {
      if (!locked) updateStars(); // Geri eski rating'e dön
    });

    star.addEventListener('click', () => {
      if (!locked) {
        rating = idx + 1;
        updateStars();
        locked = true;
        starContainer.classList.add('locked');
        console.log("Kullanıcının verdiği puan:", rating);
      }
    });
  });



  function toggleMobileDropdown() {
    const menu = document.getElementById("mobileDropdownMenu");
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
  }

  // Dışarı tıklanırsa menüyü kapat
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobileDropdownMenu");
    const toggle = document.querySelector('a[onclick="toggleMobileDropdown()"]');

    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });




  document.querySelector('.donate-action-button').addEventListener('click', function () {
    window.location.href = '/donate/donate.html';
  });



window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("chatbotModal");
  const closeBtn = document.querySelector(".close-btn");

  modal.style.display = "block";

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

