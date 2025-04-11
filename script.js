
  document.addEventListener("DOMContentLoaded", () => {
    // AOS Init
    AOS.init();

    // Consultation Button Animated Words
    const button = document.querySelector(".consultation-btn");
    if (button) {
      const text = button.getAttribute("data-text");
      const words = text.split(" ");
      button.innerHTML = "";
      words.forEach(word => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        button.appendChild(span);
      });
    }

    // ✅ Hamburger Menu — FIXED: Removed nested DOMContentLoaded
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
    // FAQ Toggle
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      if (question) {
        question.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          faqItems.forEach(el => el.classList.remove("active"));
          if (!isActive) {
            item.classList.add("active");
          }
        });
      }
    });

    // Carousel Scroll Animation
    const carousel = document.getElementById("carousel");
    const scrollSpeed = 0.5;

    if (carousel) {
      const cards = Array.from(carousel.children);
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add("clone");
        carousel.appendChild(clone);
      });

      let scrollPos = 0;
      function smoothScroll() {
        scrollPos += scrollSpeed;
        if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
        carousel.scrollLeft = scrollPos;
        requestAnimationFrame(smoothScroll);
      }

      requestAnimationFrame(smoothScroll);
    }
  });

  // Popup show on load
  window.addEventListener("load", () => {
    setTimeout(() => {
      const popup = document.getElementById("popup");
      if (popup) popup.classList.add("show");
    }, 1000);
  });

  // Popup form and thank you handling
  const popupForm = document.getElementById("popupForm");
  if (popupForm) {
    popupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const popup = document.getElementById("popup");
      const thankYou = document.getElementById("thankYou");

      if (popup) popup.classList.remove("show");
      if (thankYou) {
        setTimeout(() => thankYou.classList.add("show"), 300);
        setTimeout(() => thankYou.classList.remove("show"), 4000);
      }
    });
  }

  const skipBtn = document.getElementById("skipBtn");
  if (skipBtn) {
    skipBtn.addEventListener("click", function () {
      const popup = document.getElementById("popup");
      if (popup) popup.classList.remove("show");
    });
  }
  // const hamburger = document.getElementById("hamburger");
  // const navMenu = document.getElementById("navMenu");

  // hamburger.addEventListener("click", () => {
  //   navMenu.classList.toggle("active");
  // });
  