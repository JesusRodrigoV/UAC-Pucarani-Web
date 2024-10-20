const fadeElements = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1 
});

fadeElements.forEach(el => {
  observer.observe(el);
});