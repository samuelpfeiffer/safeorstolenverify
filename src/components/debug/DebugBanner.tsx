import React, { useEffect, useState } from 'react';

export const DebugBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [ts] = useState(() => new Date().toLocaleString());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const debugParam = params.get('debug');
    const show = debugParam === '1' || debugParam === 'true' || debugParam === null; // show by default for now
    setVisible(show);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#111827',
      color: '#fff',
      padding: '6px 12px',
      fontSize: 12,
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      App loaded successfully • {ts} • Path: {window.location.pathname}
    </div>
  );
};