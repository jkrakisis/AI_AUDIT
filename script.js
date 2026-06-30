document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Animate score bars when score section enters view
  const scoreBars = document.querySelectorAll(".score-bar-track span, .hero-bar span");
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const span = entry.target;
          const width = span.style.width;
          span.style.width = "0";
          requestAnimationFrame(() => {
            span.style.width = width;
          });
          barObserver.unobserve(span);
        }
      });
    },
    { threshold: 0.4 }
  );
  scoreBars.forEach((bar) => barObserver.observe(bar));

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 600);
  });
});
