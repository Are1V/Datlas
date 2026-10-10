(() => {
  const STORAGE_KEY = "datlas-progress-v1";

  const readProgress = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return new Set(Array.isArray(value) ? value : []);
    } catch {
      return new Set();
    }
  };

  let progress = readProgress();

  const saveProgress = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...progress]));
    } catch {
      // Progress remains available for this page when storage is unavailable.
    }
  };

  const setPressed = (button, complete) => {
    button.setAttribute("aria-pressed", String(complete));
    button.classList.toggle("is-complete", complete);
    const label = button.querySelector(".progress-label");
    if (label) {
      label.textContent = complete
        ? (button.classList.contains("chapter-complete") ? "Chapter completed" : "Completed")
        : (button.classList.contains("chapter-complete") ? "Mark chapter complete" : "Mark done");
    }
    const card = button.closest("[data-phase-card]");
    if (card) card.classList.toggle("is-complete", complete);
    const topic = button.closest(".topic-row");
    if (topic) topic.classList.toggle("is-complete", complete);
  };

  const updateRoadmapSummary = () => {
    const cards = [...document.querySelectorAll("[data-phase-card]")];
    if (!cards.length) return;
    const complete = cards.filter((card) => {
      const button = card.querySelector("[data-progress-id]");
      return button && progress.has(button.dataset.progressId);
    }).length;
    const text = document.querySelector("[data-roadmap-progress]");
    const bar = document.querySelector("[data-roadmap-progress-bar]");
    if (text) text.textContent = `${complete} of ${cards.length} chapters`;
    if (bar) bar.style.width = `${(complete / cards.length) * 100}%`;
  };

  const updateChapterSummary = () => {
    const panel = document.querySelector("[data-chapter-progress]");
    if (!panel) return;
    const topicButtons = [...document.querySelectorAll('.topic-check[data-progress-id]')];
    const complete = topicButtons.filter((button) => progress.has(button.dataset.progressId)).length;
    const total = topicButtons.length;
    const text = panel.querySelector("[data-chapter-progress-text]");
    const bar = panel.querySelector("[data-chapter-progress-bar]");
    if (text) text.textContent = `${complete} of ${total} topics complete`;
    if (bar) bar.style.width = `${total ? (complete / total) * 100 : 0}%`;
  };

  const renderProgress = () => {
    document.querySelectorAll("[data-progress-id]").forEach((button) => {
      setPressed(button, progress.has(button.dataset.progressId));
    });
    updateRoadmapSummary();
    updateChapterSummary();
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-progress-id]");
    if (!button) return;
    const id = button.dataset.progressId;
    const completing = !progress.has(id);
    if (button.classList.contains("chapter-complete")) {
      document.querySelectorAll('.topic-check[data-progress-id]').forEach((topicButton) => {
        completing ? progress.add(topicButton.dataset.progressId) : progress.delete(topicButton.dataset.progressId);
      });
    }
    completing ? progress.add(id) : progress.delete(id);
    saveProgress();
    renderProgress();
    document.dispatchEvent(new CustomEvent("datlas:progress"));
  });

  const roadmapSearch = document.querySelector("[data-roadmap-search]");
  const roadmapFilters = [...document.querySelectorAll("[data-roadmap-filter]")];
  const phaseCards = [...document.querySelectorAll("[data-phase-card]")];
  let activeFilter = "all";

  const filterRoadmap = () => {
    if (!phaseCards.length) return;
    const query = (roadmapSearch?.value || "").trim().toLocaleLowerCase();
    let visibleCount = 0;
    phaseCards.forEach((card) => {
      const button = card.querySelector("[data-progress-id]");
      const complete = Boolean(button && progress.has(button.dataset.progressId));
      const matchesText = !query || card.dataset.search.toLocaleLowerCase().includes(query);
      const matchesStatus = activeFilter === "all" || (activeFilter === "complete" ? complete : !complete);
      card.hidden = !(matchesText && matchesStatus);
      if (!card.hidden) visibleCount += 1;
    });
    document.querySelectorAll(".stage").forEach((stage) => {
      stage.hidden = !stage.querySelector("[data-phase-card]:not([hidden])");
    });
    const empty = document.querySelector("[data-roadmap-empty]");
    if (empty) empty.hidden = visibleCount !== 0;
  };

  roadmapSearch?.addEventListener("input", filterRoadmap);
  roadmapFilters.forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.roadmapFilter;
    roadmapFilters.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    filterRoadmap();
  }));
  document.addEventListener("datlas:progress", filterRoadmap);

  document.querySelector("[data-progress-reset]")?.addEventListener("click", () => {
    if (progress.size && !window.confirm("Reset all saved Datlas progress on this device?")) return;
    progress = new Set();
    saveProgress();
    renderProgress();
    filterRoadmap();
  });

  const projectSearch = document.querySelector("[data-project-search]");
  const projectCards = [...document.querySelectorAll("[data-project-card]")];
  const filterProjects = () => {
    const query = (projectSearch?.value || "").trim().toLocaleLowerCase();
    let visibleCount = 0;
    projectCards.forEach((card) => {
      card.hidden = Boolean(query) && !card.dataset.search.toLocaleLowerCase().includes(query);
      if (!card.hidden) visibleCount += 1;
    });
    const count = document.querySelector("[data-project-count]");
    const empty = document.querySelector("[data-project-empty]");
    if (count) count.textContent = String(visibleCount);
    if (empty) empty.hidden = visibleCount !== 0;
  };
  projectSearch?.addEventListener("input", filterProjects);

  renderProgress();
  filterRoadmap();
  filterProjects();
})();
