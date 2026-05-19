import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      {/* הـ Header الفوقاني مقاد وفيه الروابط باينين */}
      <header style={{ 
        marginBottom: '60px', 
        width: '100%', 
        maxWidth: '600px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>
          ⚡ REVIEW<span style={{ color: '#bfff00' }}>SNIPER</span>
        </h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/privacy" style={{ color: '#aaa', fontSize: '0.95rem', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/contact" style={{ color: '#aaa', fontSize: '0.95rem', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </header>

      {/* البلاصة الحقيقية فين غايحط بنادم الـ Text ولا الـ Link */}
      <main style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', fontStyle: 'italic', margin: '0 0 10px 0', letterSpacing: '-1px' }}>
          SNIPE <span style={{ color: '#bfff00' }}>PROFITS.</span>
        </h2>
        
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#aaa', marginBottom: '30px', marginTop: 0 }}>
          Turn any product URL into a killer review in seconds.
        </p>

        {/* الـ Input Box والـ Button د الـ GENERATE الحاضرين فـ التصويرة الأولى */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Paste JVZoo or Amazon URL..." 
            style={{
              width: '100%',
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#111',
              border: '1px solid #222',
              color: '#fff',
              fontSize: '1.1rem',
              outline: 'none',
              boxSizing: 'border-box',
              textAlign: 'left'
            }}
          />
          <button style={{
            width: '100%',
            padding: '18px',
            borderRadius: '12px',
            backgroundColor: '#bfff00',
            color: '#000',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            🚀 GENERATE
          </button>
        </div>
      </main>

      {/* الـ Footer التحتاني */}
      <footer style={{ marginTop: '80px', fontSize: '0.9rem', color: '#444' }}>
        <p>&copy; 2026 Review Sniper AI. All rights reserved.</p>
        <div style={{ marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="/privacy" style={{ color: '#bfff00', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/contact" style={{ color: '#bfff00', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </footer>
    </div>
  );
}