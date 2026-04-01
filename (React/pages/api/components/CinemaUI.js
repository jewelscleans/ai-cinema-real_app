import React, { useState } from 'react';

export default function CinemaUI() {
  const [loading, setLoading] = useState(false);
  const [videoResult, setVideoResult] = useState(null);

  return (
    <div className="cinema-container">
      <h1 style={{color: '#e50914'}}>AI CINEMA SYNC</h1>
      
      <div className="screen-area">
        {loading ? <p>🍿 Popcorn is cooking... (AI Processing)</p> : 
         videoResult ? <video src={videoResult} controls width="100%" /> :
         <p>Upload your Photo & Audio to start the show</p>}
      </div>

      <div style={{marginTop: '30px', display: 'flex', gap: '10px'}}>
        <input type="file" accept="image/*" id="photo" />
        <input type="file" accept="audio/*" id="audio" />
        <button onClick={() => setLoading(true)}>Generate Movie</button>
      </div>

      {/* PAYPAL SECTION */}
      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <h3>Subscription: $29/mo | Basic Fee: $9</h3>
        {/* Replace YOUR_CLIENT_ID with your actual PayPal Developer ID */}
        <div id="paypal-button-container"></div>
        
        {videoResult && (
          <a href={videoResult} download className="btn-paypal" style={{background: '#4CAF50'}}>
            Download Result
          </a>
        )}
      </div>
    </div>
  );
}
