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
      {/* الـ Header المعدل وفيه الروابط باينين الفوق */}
      <header style={{ 
        marginBottom: '40px', 
        width: '100%', 
        maxWidth: '600px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffcc00', margin: 0 }}>
          🎯 Review Sniper AI
        </h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/privacy" style={{ color: '#ffffff', fontSize: '0.95rem', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</a>
          <a href="/contact" style={{ color: '#ffffff', fontSize: '0.95rem', textDecoration: 'none', fontWeight: '500' }}>Contact Us</a>
        </div>
      </header>

      <main style={{
        maxWidth: '600px',
        backgroundColor: '#111',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #222',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
      }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#e0e0e0', margin: 0 }}>
          Welcome to Review Sniper AI. Our agent is optimizing live launches, analyzing markets, and delivering precision feedback for affiliate networks.
        </p>
      </main>

      <footer style={{ marginTop: '60px', fontSize: '0.9rem', color: '#555' }}>
        <p style={{ margin: 0 }}>&copy; 2026 Review Sniper AI. All rights reserved.</p>
      </footer>
    </div>
  );
}