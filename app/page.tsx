{review && (
  <div style={{ marginTop: '40px', position: 'relative' }}>
    <button 
      onClick={() => navigator.clipboard.writeText(review)}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#222',
        color: '#bfff00',
        border: '1px solid #444',
        padding: '5px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.8rem'
      }}
    >
      Copy
    </button>
    <div style={{ padding: '30px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px', whiteSpace: 'pre-wrap', lineHeight: '1.6', textAlign: 'left' }}>
      {review}
    </div>
  </div>
)}