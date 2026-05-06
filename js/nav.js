// Nav border on scroll
(function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    },
    { passive: true },
  );
})();
