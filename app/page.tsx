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
      <header style={{ marginBottom: '40px', width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>
    ⚡ REVIEW<span style={{ color: '#bfff00' }}>SNIPER</span>
  </h1>
  <div style={{ display: 'flex', gap: '15px' }}>
    <a href="/privacy" style={{ color: '#aaa', fontSize: '0.9rem', textDecoration: 'none' }}>Privacy</a>
    <a href="/contact" style={{ color: '#aaa', fontSize: '0.9rem', textDecoration: 'none' }}>Contact</a>
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
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#e0e0e0' }}>
          Welcome to Review Sniper AI. Our agent is optimizing live launches, analyzing markets, and delivering precision feedback for affiliate networks.
        </p>
      </main>

      <footer style={{ marginTop: '60px', fontSize: '0.9rem', color: '#555' }}>
        <p>&copy; 2026 Review Sniper AI. All rights reserved.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="/privacy" style={{ color: '#ffcc00', marginRight: '15px', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/contact" style={{ color: '#ffcc00', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </footer>
    </div>
  );
}