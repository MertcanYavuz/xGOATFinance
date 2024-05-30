import React from "react";

const Tier = () => {
  return (
    <>
      <style>
        {`
          .grid-item {
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .grid-item:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .header-box {
            background: #3F51B5; /* Renk kodunu istediğiniz bir renk ile değiştirebilirsiniz */
            padding: 20px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 20px;
            color: white;
            border-radius: 8px;
          }

          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(1, 1fr);
              gap: 20px;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
            }
          }

          @media (min-width: 1025px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
              gap: 50px;
            }
          }
        `}
      </style>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        padding: '20px',
        maxWidth: '1400px',
        margin: 'auto',
      }}>
        <div className="header-box">
          {/* Başlık içeriğini buraya ekleyebilirsiniz */}
        </div>
        <div className="grid-container" style={{
          display: 'grid',
          padding: '20px',
        }}>
          <div id="tier-1-section" className="grid-item" style={{
            background: '',
            border: '4px solid #3F51B5',
            padding: '80px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '28px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'blue',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>SEED SALE</div>
            <h4 style={{ fontSize: '30px', color: '#a6dced' }}>TIER 1</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $5k Minimum allocation of $500 Priced at $0.0070</p>
          </div>

          <div id="tier-2-section" className="grid-item" style={{
            background: '',
            border: '4px solid #3F51B5',
            padding: '80px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '28px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'red',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>PRIVATE SALE</div>
            <h4 style={{ fontSize: '30px', color: '#a6dced' }}>TIER 2</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $4k Minimum allocation of $500 Priced at $0.0080.</p>
          </div>

          <div id="tier-3-section" className="grid-item" style={{
            background: '',
            border: '4px solid #3F51B5',
            padding: '80px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '28px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'green',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>PUBLIC SALE</div>
            <h4 style={{ fontSize: '30px', color: '#a6dced' }}>TIER 3</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $500 Minimum allocation of $250 Priced at $0.0090</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tier;




/*

import React from "react";

const Tier = () => {
  return (
    <>
      <style>
        {`
          .grid-item {
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .grid-item:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .header-box {
            background: ;
            padding: 20px;
            margin-bottom: 20px;
            text-align: center;
            font-size: 16px;
            color: white;
            border-radius: 8px;
          }
        `}
      </style>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        padding: '20px',
        maxWidth: '1400px',
        margin: 'auto',
      }}>
        
        <p></p>
        <div className="header-box">
          The waitlist is designed to offer a maximum purchase right of $50 to the first 100 people who apply.
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '50px',
        }}>
         
          <div className="grid-item" style={{
            background: '',
            border: '1px solid #333',
            padding: '20px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '8px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'blue',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              SEED SALE
            </div>
            <h4 style={{ color: '#a6dced' }}>TIER 1</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $4k Minimum allocation of $500 Priced at $0.0070</p>
          </div>

         
          <div className="grid-item" style={{
            background: '',
            border: '1px solid #333',
            padding: '20px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '8px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'red',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              PRIVATE SALE
            </div>
            <h4 style={{ color: '#a6dced' }}>TIER 2</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $4k Minimum allocation of $500 Priced at $0.0080.</p>
          </div>

          
          <div className="grid-item" style={{
            background: '',
            border: '1px solid #333',
            padding: '20px',
            position: 'relative',
            textAlign: 'center',
            borderRadius: '8px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '20px',
              background: 'green',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              PUBLIC SALE
            </div>
            <h4 style={{ color: '#a6dced' }}>TIER 3</h4>
            <p style={{ color: 'white' }}>Maximum allocation of $500 Minimum allocation of $250 Priced at $0.0090</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tier;
*/