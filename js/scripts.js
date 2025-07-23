document.addEventListener("DOMContentLoaded", function () {
  const text = "You've stumbled upon my lair, where I turn chaotic data into polished data.";
  const typingElement = document.querySelector(".typing-text");
  let i = 0;

  function type() {
    if (typingElement && i < text.length) { // Check if typingElement exists
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Optional: Add a subtle animation on scroll for sections
  const sections = document.querySelectorAll('main section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = 'translateY(20px)';
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = 0; // Initially hide sections
    section.style.transform = 'translateY(20px)'; // Initial position
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    sectionObserver.observe(section);
  });
});