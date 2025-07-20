
// Force cache bust and complete rebuild
const VERSION = Date.now();
console.log('App version:', VERSION);

// Direct DOM manipulation to bypass React entirely
const container = document.getElementById('root');
if (container) {
  container.innerHTML = `
    <div style="
      min-height: 100vh;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui;
      font-size: 2rem;
    ">
      Safe or Stolen - Site Loading... (v${VERSION})
    </div>
  `;
  console.log('Site loaded with direct DOM manipulation');
} else {
  console.error('Root element not found');
}
