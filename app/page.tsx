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
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffcc00', marginBottom: '10px' }}>
          🎯 Review Sniper AI
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa' }}>
          The Ultimate AI Agent for Digital Product Evaluation
        </p>
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