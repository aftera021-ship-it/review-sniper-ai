'use client';
import React, { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate-review', { // تأكد من المسار الصحيح للملف عندك
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setReview(data.review || data.error);
    } catch (err) {
      setReview("Error: Could not generate review.");
    }
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-between', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>⚡ REVIEW<span style={{ color: '#bfff00' }}>SNIPER</span></h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </header>

      <main style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', fontStyle: 'italic' }}>SNIPE <span style={{ color: '#bfff00' }}>PROFITS.</span></h2>
        
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste JVZoo or Amazon URL..." 
            style={{ width: '100%', padding: '20px', borderRadius: '12px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', fontSize: '1.1rem' }}
          />
          <button 
            onClick={handleGenerate}
            disabled={loading}
            style={{ width: '100%', padding: '18px', borderRadius: '12px', backgroundColor: '#bfff00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            {loading ? 'ANALYZING...' : '🚀 GENERATE'}
          </button>
        </div>

        {/* بلاصة فين غاتبان الـ Review */}
        {review && (
          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
            <h3 style={{ color: '#bfff00' }}>AI ANALYSIS RESULT:</h3>
            <p>{review}</p>
          </div>
        )}
      </main>
    </div>
  );
}