const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.remove("max-h-0", "opacity-0");
  navLinks.classList.add("max-h-96", "opacity-100");

  menuBtn.classList.add("hidden"); // hide ☰
  crossBtn.classList.remove("hidden"); // show ×
});

crossBtn.addEventListener("click", () => {
  navLinks.classList.add("max-h-0", "opacity-0");
  navLinks.classList.remove("max-h-96", "opacity-100");

  crossBtn.classList.add("hidden"); // hide ×
  menuBtn.classList.remove("hidden"); // show ☰
});

var typed = new Typed(".multiple-text", {
  strings: ["IT Student", "IT Student", "IT Student"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 500,
  loop: true,
  onComplete: function () {
    // Ensure cursor is styled when typing finishes
    document.querySelector(".typed-cursor").classList.add("text-blue-600");
  },
});



// achievement js 
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.card_slider', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      speed: 1000,
      autoplay:{
        delay: 2000,
      },
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });