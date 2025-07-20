
// Complete bypass - no imports at all
const VERSION = Date.now();
console.log('Emergency bypass - App version:', VERSION);

// Pure HTML/CSS solution
const container = document.getElementById('root');
if (container) {
  container.innerHTML = `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    </style>
    <div style="
      min-height: 100vh;
      background: linear-gradient(135deg, #ff6b35 0%, #ff4757 100%);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
    ">
      <h1 style="font-size: 3rem; margin-bottom: 1rem;">Safe or Stolen</h1>
      <p style="font-size: 1.2rem; opacity: 0.9;">Site is being restored...</p>
      <p style="font-size: 0.9rem; margin-top: 2rem; opacity: 0.7;">Emergency Mode Active (${VERSION})</p>
    </div>
  `;
} else {
  document.body.innerHTML = '<h1>Critical Error: Root element missing</h1>';
}
