(function () {
  const style = document.createElement('style');
  style.textContent = `
    .welcome-pop {
      display: inline-block;
      animation: welcomePop 2.4s ease-in-out infinite;
      transform-origin: center;
    }

    @keyframes welcomePop {
      0%, 100% { transform: scale(0.85); opacity: 0.45; }
      20%, 70% { transform: scale(1); opacity: 1; }
      45% { transform: scale(1.12); opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
      .welcome-pop { animation: none; }
    }
  `;
  document.head.appendChild(style);

  function addWelcome(container, beforeSelector) {
    if (!container) return;

    const existing = container.querySelector('.welcome-pop');
    if (existing) return;

    const word = document.createElement('span');
    word.className = 'welcome-pop';
    word.textContent = 'WELCOME';

    const before = beforeSelector ? container.querySelector(beforeSelector) : null;
    if (before) {
      container.insertBefore(word, before);
    } else {
      container.prepend(word);
    }
  }

  const header = document.querySelector('.header');
  if (header) {
    const marquee = header.querySelector('marquee');
    if (marquee) {
      marquee.replaceWith(Object.assign(document.createElement('span'), {
        className: 'welcome-pop',
        textContent: 'WELCOME'
      }));
    } else {
      addWelcome(header, '.header h1');
    }
  }

  const footer = document.querySelector('.footer');
  if (footer) {
    addWelcome(footer, 'i');
  }
})();
