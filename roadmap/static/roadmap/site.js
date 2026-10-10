(() => {
  const STORAGE_KEY = "datlas-progress-v2";

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

  const updateRoadmapSummary = () => {
    const cards = [...document.querySelectorAll("[data-phase-card]")];
    if (!cards.length) return;
    const complete = cards.filter((card) => progress.has(card.dataset.chapterId)).length;
    const text = document.querySelector("[data-roadmap-progress]");
    const bar = document.querySelector("[data-roadmap-progress-bar]");
    if (text) text.textContent = `${complete} of ${cards.length} chapters`;
    if (bar) bar.style.width = `${(complete / cards.length) * 100}%`;
  };

  const updateChapterSummary = () => {
    const panel = document.querySelector("[data-chapter-progress]");
    if (!panel) return;
    const topics = [...document.querySelectorAll("[data-topic-id]")];
    const complete = topics.filter((topic) => progress.has(topic.dataset.topicId)).length;
    const total = topics.length;
    const chapterComplete = total > 0 && complete === total;
    const chapterId = panel.dataset.chapterId;
    const progressChanged = progress.has(chapterId) !== chapterComplete;
    chapterComplete ? progress.add(chapterId) : progress.delete(chapterId);
    if (progressChanged) saveProgress();
    const text = panel.querySelector("[data-chapter-progress-text]");
    const bar = panel.querySelector("[data-chapter-progress-bar]");
    const state = panel.querySelector("[data-chapter-state]");
    if (text) text.textContent = `${complete} of ${total} videos watched`;
    if (bar) bar.style.width = `${total ? (complete / total) * 100 : 0}%`;
    if (state) {
      state.classList.toggle("is-complete", chapterComplete);
      state.innerHTML = chapterComplete ? "<span>✓</span>Chapter completed" : "<span>○</span>In progress";
    }
  };

  const renderProgress = () => {
    document.querySelectorAll("[data-phase-card]").forEach((card) => {
      const complete = progress.has(card.dataset.chapterId);
      card.classList.toggle("is-complete", complete);
      const status = card.querySelector("[data-phase-status]");
      if (status) status.innerHTML = complete ? "<span>✓</span>Completed" : "<span>○</span>Watch lessons";
    });
    document.querySelectorAll("[data-topic-id]").forEach((status) => {
      const complete = progress.has(status.dataset.topicId);
      status.classList.toggle("is-complete", complete);
      status.setAttribute("aria-label", complete ? "Video watched" : "Video not watched");
      const row = status.closest(".topic-row");
      if (row) row.classList.toggle("is-complete", complete);
      const watch = row?.querySelector("[data-watch-topic]");
      if (watch) {
        watch.classList.toggle("is-watched", complete);
        const label = watch.querySelector("[data-watch-label]");
        if (label) label.textContent = complete ? "WATCHED" : "WATCH LESSON";
      }
    });
    updateChapterSummary();
    updateRoadmapSummary();
  };

  document.addEventListener("click", (event) => {
    const watch = event.target.closest("a[data-watch-topic]");
    if (!watch) return;
    progress.add(watch.dataset.watchTopic);
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
      const complete = progress.has(card.dataset.chapterId);
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
