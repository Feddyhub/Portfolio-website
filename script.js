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



// Geçiş işlemi için gerekli JavaScript kodu
let currentProjectIndex = 0;  // Başlangıçta 1. proje görünsün
const projects = document.querySelectorAll('.project-container');
const totalProjects = projects.length;

function showProject(index) {
  // Tüm projeleri gizle
  projects.forEach((project, i) => {
    project.style.display = 'none';
  });
  
  // Geçerli projeyi göster
  projects[index].style.display = 'block';
}

document.getElementById('next').addEventListener('click', () => {
  // Sonraki projeye geç
  currentProjectIndex = (currentProjectIndex + 1) % totalProjects;
  showProject(currentProjectIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  // Önceki projeye geç
  currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
  showProject(currentProjectIndex);
});

// Sayfa yüklendiğinde ilk projeyi göster
showProject(currentProjectIndex);
