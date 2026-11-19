(function () {
  const style = document.createElement('style');
  style.textContent = `
    .motto-pop {
      display: inline-block;
      transform-origin: center bottom;
      animation: mottoPop 1.2s ease-in-out infinite;
      will-change: transform, text-shadow;
    }

    @keyframes mottoPop {
      0%, 100% {
        transform: translateY(0) scale(1);
        text-shadow: none;
      }
      35% {
        transform: translateY(-12px) scale(1.2);
        text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
      }
      60% {
        transform: translateY(0) scale(0.98);
        text-shadow: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .motto-pop { animation: none; }
    }
  `;
  document.head.appendChild(style);

  const motto = document.querySelector('.header .motto');
  if (motto) {
    motto.classList.add('motto-pop');
  }
})();
