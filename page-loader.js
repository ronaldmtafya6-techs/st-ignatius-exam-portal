(function () {
  const loader = document.createElement('div');
  loader.id = 'pageLoader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.innerHTML = '<div class="spinner" aria-hidden="true"></div><span>Loading site...</span>'; 

  const styles = document.createElement('style');
  styles.id = 'pageLoaderStyles';
  styles.textContent = `
    #pageLoader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      background: #eef2f7;
      color: #0b2a4a;
      transition: opacity .3s ease;
    }
    #pageLoader.hidden-loader {
      opacity: 0;
      pointer-events: none;
    }
    #pageLoader .spinner {
      width: 48px;
      height: 48px;
      border: 5px solid #ccc;
      border-top-color: #1a7a3a;
      border-radius: 50%;
      animation: pageSpin .8s linear infinite;
    }
    @keyframes pageSpin {
      to { transform: rotate(360deg); }
    }
  `;

  document.head.appendChild(styles);
  document.body.insertBefore(loader, document.body.firstChild);

  window.addEventListener('load', function () {
    loader.classList.add('hidden-loader');
    setTimeout(function () {
      loader.remove();
      styles.remove();
    }, 350);
  });
})();
