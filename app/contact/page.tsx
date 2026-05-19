import React from 'react';

export default function Contact() {
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
      <main style={{
        maxWidth: '500px',
        backgroundColor: '#111',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid #222'
      }}>
        <h1 style={{ color: '#bfff00', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
          Have questions about Review Sniper AI? Drop us a line.
        </p>
        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff', marginTop: '20px', letterSpacing: '0.5px' }}>
          📩 aftera021@gmail.com
        </p>
        <a href="/" style={{ display: 'inline-block', marginTop: '30px', color: '#bfff00', textDecoration: 'none' }}>
          &larr; Back to Home
        </a>
      </main>
    </div>
  );
}