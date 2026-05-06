// Mobile hamburger menu toggle
(function initMenu() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // Close when an internal anchor is tapped
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setOpen(false)),
  );

  // Reset state when crossing the breakpoint
  const mq = window.matchMedia("(min-width: 761px)");
  mq.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
})();
