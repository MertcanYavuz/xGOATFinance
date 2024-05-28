import React from 'react';

const PartnerLogos = () => {
  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center',
    },
    marquee: {
      display: 'flex',
      width: '200%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      animation: 'marquee 20s linear infinite',
    },
    imageContainer: {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      gap: '20px',
    },
    logo: {
      height: '100px',
      background: 'transparent',
      border: '1px solid #000',
      borderRadius: '.4rem',
      padding: '10px',
      objectFit: 'contain',
    },
    bottomSpace: {
      marginBottom: '100px',
    },
  };

  const logos = Array.from({ length: 7 }, (_, i) => (
    <img
      key={`team_img${i + 1}`}
      src={`assets/images/team_img${i + 1}.png`}
      alt={`mobileapp${i + 1}`}
      style={styles.logo}
    />
  ));
  logos.push(
    <img
      key="team-lg-2"
      src="assets/images/team-lg-2.png"
      alt="Team Logo 2"
      style={styles.logo}
    />
  );
  logos.push(
    <img
      key="team-lg-2"
      src="assets/images/team-lg-1.png"
      alt="Team Logo 2"
      style={styles.logo}
    />
  );

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .whiteTitle {
            color: white;
          }
        `}
      </style>
      <h1 className="fw-light mb-5 whiteTitle">Happy To Work With</h1>
      <div style={styles.marquee}>
        <div style={styles.imageContainer}>
          {logos}
          {logos} {/* Duplicate logos for a continuous scrolling effect */}
        </div>
      </div>
      <div style={styles.bottomSpace}></div>
    </div>
  );
};

export default PartnerLogos;
