/**
 * SafeOrStolen Verification Widget v1.0
 * Modern Web Component for business integration
 * 2026 Standards: Shadow DOM, SEO-friendly, accessible, WCAG 2.1 AA
 * 
 * Usage:
 *   <script src="https://safeorstolen.com/widget.js" async></script>
 *   <safeorstolen-verify api-key="YOUR_API_KEY" theme="light"></safeorstolen-verify>
 */

(function() {
  'use strict';

  class SafeOrStolenVerify extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._loading = false;
    }

    static get observedAttributes() {
      return ['item-id', 'item-type', 'api-key', 'theme'];
    }

    connectedCallback() {
      this.render();
      this.attachEventListeners();
    }

    attributeChangedCallback() {
      if (this.shadowRoot && this.shadowRoot.innerHTML) {
        this.render();
        this.attachEventListeners();
      }
    }

    get theme() {
      return this.getAttribute('theme') || 'light';
    }

    render() {
      var t = this.theme;
      var bg = t === 'light' ? '#ffffff' : '#1a1a2e';
      var border = t === 'light' ? '#e5e7eb' : '#374151';
      var text = t === 'light' ? '#111827' : '#f9fafb';
      var muted = t === 'light' ? '#6b7280' : '#9ca3af';
      var inputBg = t === 'light' ? '#ffffff' : '#111827';
      var inputBorder = t === 'light' ? '#d1d5db' : '#4b5563';

      this.shadowRoot.innerHTML = '\
        <style>\
          :host { display: block; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; max-width: 420px; }\
          * { box-sizing: border-box; }\
          .sos-widget { background: ' + bg + '; border: 2px solid ' + border + '; border-radius: 12px; padding: 20px; }\
          .sos-header { font-size: 17px; font-weight: 600; margin-bottom: 14px; color: ' + text + '; display: flex; align-items: center; gap: 8px; }\
          .sos-shield { width: 22px; height: 22px; }\
          .sos-form { display: flex; gap: 8px; margin-bottom: 4px; }\
          .sos-input { flex: 1; padding: 11px 14px; border: 1px solid ' + inputBorder + '; border-radius: 8px; font-size: 14px; background: ' + inputBg + '; color: ' + text + '; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }\
          .sos-input:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.12); }\
          .sos-btn { padding: 11px 22px; background: #10b981; color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.15s; white-space: nowrap; }\
          .sos-btn:hover { background: #059669; transform: translateY(-1px); }\
          .sos-btn:active { transform: translateY(0); }\
          .sos-btn:disabled { background: #9ca3af; cursor: not-allowed; transform: none; }\
          .sos-result { padding: 14px; border-radius: 8px; margin-top: 14px; }\
          .sos-safe { background: #d1fae5; border: 2px solid #10b981; color: #065f46; }\
          .sos-stolen { background: #fee2e2; border: 2px solid #ef4444; color: #991b1b; }\
          .sos-unknown { background: #fef3c7; border: 2px solid #f59e0b; color: #92400e; }\
          .sos-error { background: #fef3c7; border: 2px solid #f59e0b; color: #92400e; }\
          .sos-result-title { font-size: 15px; font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }\
          .sos-result-msg { font-size: 13px; line-height: 1.5; }\
          .sos-result-meta { font-size: 11px; opacity: 0.75; border-top: 1px solid currentColor; padding-top: 8px; margin-top: 8px; }\
          .sos-spinner { border: 3px solid ' + border + '; border-top-color: #10b981; border-radius: 50%; width: 32px; height: 32px; animation: sos-spin 0.8s linear infinite; margin: 8px auto; }\
          @keyframes sos-spin { to { transform: rotate(360deg); } }\
          .sos-loading { text-align: center; padding: 16px 0; color: ' + muted + '; font-size: 13px; }\
          .sos-footer { text-align: center; margin-top: 10px; font-size: 11px; color: ' + muted + '; }\
          .sos-footer a { color: #10b981; text-decoration: none; }\
          .sos-footer a:hover { text-decoration: underline; }\
          @media (max-width: 480px) { .sos-form { flex-direction: column; } .sos-btn { width: 100%; } }\
        </style>\
        <div class="sos-widget" role="region" aria-label="SafeOrStolen Item Verification">\
          <div class="sos-header">\
            <svg class="sos-shield" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>\
            Verify Item\
          </div>\
          <div class="sos-form">\
            <input class="sos-input" id="sos-input" type="text" placeholder="Enter IMEI, VIN, or Serial #" aria-label="Item identifier" autocomplete="off" />\
            <button class="sos-btn" id="sos-btn">Verify</button>\
          </div>\
          <div id="sos-result"></div>\
          <div class="sos-footer">Powered by <a href="https://safeorstolen.com?ref=widget" target="_blank" rel="noopener">SafeOrStolen</a></div>\
        </div>\
      ';
    }

    attachEventListeners() {
      var self = this;
      var btn = this.shadowRoot.getElementById('sos-btn');
      var input = this.shadowRoot.getElementById('sos-input');
      if (!btn || !input) return;

      btn.addEventListener('click', function() { self.verifyItem(); });
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') self.verifyItem();
      });
    }

    verifyItem() {
      if (this._loading) return;
      var input = this.shadowRoot.getElementById('sos-input');
      var btn = this.shadowRoot.getElementById('sos-btn');
      var result = this.shadowRoot.getElementById('sos-result');
      var itemId = (input.value || '').trim();

      if (!itemId || itemId.length < 3) {
        this.showResult(result, 'error', 'Invalid Input', 'Please enter a valid IMEI, VIN, or serial number (minimum 3 characters).');
        return;
      }

      this._loading = true;
      btn.disabled = true;
      btn.textContent = 'Checking...';
      result.innerHTML = '<div class="sos-loading"><div class="sos-spinner"></div>Searching 100+ databases...</div>';

      var apiKey = this.getAttribute('api-key') || 'widget-demo';
      var apiBase = 'https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1';
      var self = this;

      fetch(apiBase + '/verify-widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({ identifier: itemId, type: 'auto' })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.status === 'stolen') {
          self.showResult(result, 'stolen', '🚨 STOLEN — Do Not Purchase', data.message || 'This item has been reported as stolen. Contact local authorities.');
        } else if (data.status === 'safe') {
          self.showResult(result, 'safe', '✅ SAFE — No Issues Found', data.message || 'No theft reports found for this item.', data);
        } else {
          self.showResult(result, 'unknown', '⚠️ UNKNOWN — Proceed with Caution', data.message || 'Could not verify status in our databases.');
        }
        self.dispatchEvent(new CustomEvent('verification-complete', { detail: data, bubbles: true, composed: true }));
      })
      .catch(function() {
        self.showResult(result, 'error', '⚠️ Connection Error', 'Could not reach verification servers. Please try again.');
      })
      .finally(function() {
        self._loading = false;
        btn.disabled = false;
        btn.textContent = 'Verify';
      });
    }

    showResult(container, type, title, message, data) {
      var cls = 'sos-result sos-' + type;
      var meta = '';
      if (data && data.verificationId) {
        meta = '<div class="sos-result-meta">Checked: ' + (data.databasesChecked || 100) + '+ databases &bull; Confidence: ' + (data.confidence || 95) + '% &bull; ID: ' + data.verificationId + '</div>';
      }
      container.innerHTML = '<div class="' + cls + '"><div class="sos-result-title">' + title + '</div><div class="sos-result-msg">' + message + '</div>' + meta + '</div>';
    }
  }

  if (!customElements.get('safeorstolen-verify')) {
    customElements.define('safeorstolen-verify', SafeOrStolenVerify);
  }
})();
