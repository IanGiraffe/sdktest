export function setupTabs() {
  try {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const panels = Array.from(document.querySelectorAll('.tab-content'));

    if (!tabs.length || !panels.length) return;

    const activate = (targetSelector) => {
      panels.forEach(p => {
        const isTarget = `#${p.id}` === targetSelector;
        p.classList.toggle('active', isTarget);
        if (isTarget) {
          p.removeAttribute('hidden');
        } else {
          p.setAttribute('hidden', '');
        }
      });
      tabs.forEach(t => {
        const isActive = t.dataset.target === targetSelector;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = tab.dataset.target;
        if (!target) return;
        activate(target);
      });
    });

    // Ensure initial state based on pre-marked active elements
    const initiallyActive = tabs.find(t => t.classList.contains('active'))?.dataset.target || `#${panels[0].id}`;
    activate(initiallyActive);
  } catch (err) {
    console.warn('Tabs setup failed:', err);
  }
}

