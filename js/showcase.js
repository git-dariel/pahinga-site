// Showcase tab switcher
(function initShowcase() {
  const SHOWS = {
    dashboard: {
      src: "assets/04_dashboard.png",
      title: "A calm overview",
      desc: "Current focus block, next break, hydration window, and today's progress — all at a glance.",
      n: "01 / 06",
    },
    timer: {
      src: "assets/05_focus_timer.png",
      title: "Breathing focus blocks",
      desc: "A minimal timer with a quietly progressing ring and a clear next-step rhythm: focus, break, focus.",
      n: "02 / 06",
    },
    stretchA: {
      src: "assets/06_stretch_guide.png",
      title: "Four small stretches",
      desc: "Neck, shoulder, wrist, and 20-20-20 eyes. Each under a minute, each one helps.",
      n: "03 / 06",
    },
    stretchB: {
      src: "assets/07_stretch_guide.png",
      title: "Step-by-step prompts",
      desc: "Plain-language instructions, a steady countdown, slow steady breathing.",
      n: "04 / 06",
    },
    summary: {
      src: "assets/08_daily_summary.png",
      title: "Daily summary, no guilt",
      desc: "Focus time, breaks taken, water sipped, stretches done — a kind end-of-day mirror.",
      n: "05 / 06",
    },
    settings: {
      src: "assets/09_settings.png",
      title: "Tune it to your day",
      desc: "Pick your focus length, break interval, and how insistent the rest-lock overlay should be.",
      n: "06 / 06",
    },
  };
  const tabs = document.querySelectorAll(".show-tab");
  const showImg = document.getElementById("show-img");
  const showTitle = document.getElementById("show-title");
  const showDesc = document.getElementById("show-desc");
  const showNum = document.getElementById("show-num");
  if (!tabs.length || !showImg) return;
  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("is-active"));
      t.classList.add("is-active");
      const d = SHOWS[t.dataset.target];
      showImg.src = d.src;
      showTitle.textContent = d.title;
      showDesc.textContent = d.desc;
      showNum.textContent = d.n;
    }),
  );
})();
