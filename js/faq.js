// FAQ accordion
(function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".faq-q").addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
  });
})();
