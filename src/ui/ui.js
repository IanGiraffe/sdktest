// Helper function to display output
export function displayOutput(elementId, data) {
    const element = document.getElementById(elementId);
    // Update text content first (this clears children)
    element.textContent = JSON.stringify(data, null, 2);

    // Add copy button inside the output if not present
    if (!element.querySelector('.copy-btn')) {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = 'padding: 8px; background: #28a745; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center;';

        // Create the copy icon
        const copyIcon = document.createElement('img');
        copyIcon.src = 'https://static.thenounproject.com/png/361082-200.png';
        copyIcon.style.cssText = 'width: 16px; height: 16px; filter: brightness(0) invert(1);';
        copyIcon.alt = 'Copy';
        copyBtn.appendChild(copyIcon);

        copyBtn.onclick = (ev) => {
            ev.stopPropagation();
            navigator.clipboard.writeText(element.textContent).then(() => {
                copyIcon.style.filter = 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)';
                copyIcon.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgNEw2IDExLjMzMzNMMi42NjY2NyA4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
                setTimeout(() => {
                    copyIcon.src = 'https://static.thenounproject.com/png/361082-200.png';
                    copyIcon.style.filter = 'brightness(0) invert(1)';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                copyIcon.style.filter = 'brightness(0) saturate(100%) invert(17%) sepia(94%) saturate(7151%) hue-rotate(359deg) brightness(95%) contrast(118%)';
                copyIcon.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRMMTAgNkw4IDRMMTYgNCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgMTJMMTAgMTBMMTggMTIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
                setTimeout(() => {
                    copyIcon.src = 'https://static.thenounproject.com/png/361082-200.png';
                    copyIcon.style.filter = 'brightness(0) invert(1)';
                }, 1500);
            });
        };
        element.appendChild(copyBtn);
    }

    // Attach one-time click-to-copy on the output itself
    if (!element.dataset.copyClickInit) {
        element.addEventListener('click', () => {
            navigator.clipboard.writeText(element.textContent).catch(() => {});
        });
        element.dataset.copyClickInit = '1';
    }
}


