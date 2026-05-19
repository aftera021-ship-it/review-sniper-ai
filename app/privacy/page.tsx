export default function Privacy() {
  return (
    <div style={{ 
      backgroundColor: '#050505', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '80px 20px', 
      fontFamily: 'sans-serif', 
      lineHeight: '1.8' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#CCFF00', fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '30px', letterSpacing: '-0.05em' }}>
          PRIVACY POLICY
        </h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>Last Updated: May 19, 2026</p>
        
        <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
          At Review Sniper AI, we respect your privacy. We do not collect, store, or share any personal data from our users.
        </p>

        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '15px' }}>
          1. DATA PROCESSING
        </h2>
        <p style={{ color: '#aaa' }}>
          Our tool processes the text or URLs you provide locally to generate AI reviews using secure API endpoints. No user data, pasted text, or scraped information is ever saved on our servers.
        </p>

        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '15px' }}>
          2. COOKIES AND TRACKING
        </h2>
        <p style={{ color: '#aaa' }}>
          We do not use tracking cookies, analytics trackers, or third-party advertising scripts on our website. Your browsing history remains entirely yours.
        </p>

        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '40px', marginBottom: '15px' }}>
          3. THIRD-PARTY LINKS
        </h2>
        <p style={{ color: '#aaa' }}>
          Our website may contain links to external affiliate platforms or networks like JVZoo and WarriorPlus. We are not responsible for the privacy practices of those external sites.
        </p>

        <div style={{ marginTop: '60px', borderTop: '1px solid #222', paddingTop: '20px' }}>
          <a href="/" style={{ color: '#CCFF00', textDecoration: 'none', fontWeight: 'bold' }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}