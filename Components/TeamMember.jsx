/*
import React from 'react';
import { FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const TeamMember = ({ name, title, src, linkedinUrl, email, twitterUrl }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? '#001c3f' : '#001c3f',
        borderRadius: '58px',
        padding: '25px',
        marginBottom: '10px',
        width: '100%', // Mobilde tam genişlik
        maxWidth: '300px', // Webde maksimum genişlik
        textAlign: 'center',
        margin: '0 auto', // Webde ortalamak için
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <center>
        <img
          src={src}
          style={{ borderRadius: '50%', maxWidth: '200px', maxHeight: '200px' }}
          alt={name}
        />
      </center>
      <h6 style={{ color: '#fff', marginTop: '18px' }}>
        {name}<br />{title}
      </h6>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a target="_blank" href={linkedinUrl} style={{
          backgroundColor: '#343a40',
          color: '#fff',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          marginRight: '4px',
        }}>
          <FaLinkedin size={16} />
        </a>
        <a href={`mailto:${email}`} style={{
          backgroundColor: '#343a40',
          color: '#fff',
          border: 'none',
          padding: '12px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '9px',
        }}>
          <FaEnvelope size={16} />
        </a>
        {twitterUrl && (
          <a target="_blank" href={twitterUrl} style={{
            backgroundColor: '#55acee',
            color: '#fff',
            border: 'none',
            padding: '8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '4px',
          }}>
            <FaTwitter size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '100px', color: 'white' }}>Our Team</h2>
      <div
        id='team'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '16px',
          justifyContent: 'center',
          alignItems: 'flex-start', // Yeni eklenen stil
        }}
      >
        <TeamMember
          name="Buğra ÇÖMEZ"
          title="AI Trading Bot Expert"
          src="./assets/images/team-lg-5.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://x.com/BugraComez"
        />
        <TeamMember
          name="Ahmet Sadik GULLU"
          title="CEO"
          src="./assets/images/team-lg-9.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="ahmetsgullu@goatfinance.net"
          twitterUrl="https://x.com/ffelluce"
        />
        <TeamMember
          name="Mertcan YAVUZ"
          title="Developer"
          src="./assets/images/team-lg-10.png"
          linkedinUrl="https://www.linkedin.com/in/mertcnyavuz"
          email="mertcnyavuz@hotmail.com"
          twitterUrl="https://twitter.com/mertcnyavuz"
        />
        <TeamMember
          name="Batuhan AYDIN"
          title="Social Media Manager"
          src="./assets/images/team-lg-7.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
        <TeamMember
          name="Omer Faruk AKCAM"
          title="Technology Lawyer"
          src="./assets/images/team-lg-6.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
        <TeamMember
          name="Melisa Merve MALKOC"
          title=""
          src="./assets/images/about_img2.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
    
      </div>
    </>
  );
};


export default TeamMembers;


*/



import React from 'react';
import { FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const TeamMember = ({ name, title, src, linkedinUrl, email, twitterUrl }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: '#001c3f',
        borderRadius: '58px',
        padding: '25px',
        marginBottom: '26px',
        width: '100%', // Değişiklik
        textAlign: 'center',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && (
        <center>
          <img
            src={src}
            style={{ borderRadius: '50%', maxWidth: '200px', maxHeight: '200px' }}
            alt={name}
          />
        </center>
      )}
      {hover && (
        <>
          <h6 style={{ color: '#fff', marginTop: '18px' }}>
            {name}<br />{title}
          </h6>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a target="_blank" href={linkedinUrl} style={{
              backgroundColor: '#343a40',
              color: '#fff',
              border: 'none',
              padding: '8px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '4px',
            }}>
              <FaLinkedin size={16} />
            </a>
            <a href={`mailto:${email}`} style={{
              backgroundColor: '#343a40',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '9px',
            }}>
              <FaEnvelope size={16} />
            </a>
            {twitterUrl && (
              <a target="_blank" href={twitterUrl} style={{
                backgroundColor: '#55acee',
                color: '#fff',
                border: 'none',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '4px',
              }}>
                <FaTwitter size={16} />
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const TeamMembers = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '100px', color: 'white' }}>Our Team</h2>
      <div
        id='team'
        style={{
          display: 'flex',
          flexDirection: 'column', // Değişiklik
          alignItems: 'center',    // Değişiklik
          padding: '16px',
        }}
      >
       
        <TeamMember
          name="Ahmet Sadik GULLU"
          title="CEO"
          src="./assets/images/team-lg-9.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="ahmetsgullu@goatfinance.net"
          twitterUrl="https://x.com/ffelluce"
        />
        <TeamMember
          name="Mertcan YAVUZ"
          title="Developer"
          src="./assets/images/team-lg-10.png"
          linkedinUrl="https://www.linkedin.com/in/mertcnyavuz"
          email="mertcnyavuz@hotmail.com"
          twitterUrl="https://twitter.com/mertcnyavuz"
        />
         <TeamMember
          name="Buğra ÇÖMEZ"
          title="AI Trading Bot Expert"
          src="./assets/images/team-lg-5.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://x.com/BugraComez"
        />
        <TeamMember
          name="Batuhan AYDIN"
          title="Social Media Manager"
          src="./assets/images/team-lg-7.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
        <TeamMember
          name="Deniz SAHIN"
          title="Technology Lawyer"
          src="./assets/images/team-lg-6.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
        <TeamMember
          name="Melisa Merve MALKOC"
          title="Field Operations"
          src="./assets/images/about_img2.png"
          linkedinUrl="https://www.linkedin.com/in/jane-doe"
          email="jane.doe@example.com"
          twitterUrl="https://twitter.com/example"
        />
      </div>
    </>
  );
};

export default TeamMembers;







/*
import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMember = ({ name, title, src, linkedinUrl, email }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#001c3f',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        width: '30%',
        height: '250px',  // Kutunun yüksekliğini artırıyoruz.
        marginRight: '2%',
        textAlign: 'center',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && (
        <center>
          <img
            src={src}
            style={{ borderRadius: '50%', maxWidth: '128px' }}
            alt={name}
          />
        </center>
      )}
      {hover && (
        <>
          <h6 style={{ color: '#fff', marginTop: '18px' }}>
            {name}<br />{title}
          </h6>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a target="_blank" href={linkedinUrl} style={{
              backgroundColor: '#343a40',
              color: '#fff',
              border: 'none',
              padding: '8px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '4px',
            }}>
              <FaLinkedin size={16} />
            </a>
            <a href={`mailto:${email}`} style={{
              backgroundColor: '#343a40',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '9px',
            }}>
              <FaEnvelope size={16} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '16px', marginLeft: '92px' }}>
      <TeamMember
        name="Ahmet Sadık Güllü"
        title="CEO"
        src="ceo.jpg"  // Burada resim kaynağını doğru belirtin.
        linkedinUrl="https://www.linkedin.com/in/jane-doe"
        email="jane.doe@example.com"
      />
      <TeamMember
        name="Mertcan Yavuz"
        title="Team Leader"
        src="leader.jpg"  // Burada resim kaynağını doğru belirtin.
        linkedinUrl="https://www.linkedin.com/in/jane-doe"
        email="jane.doe@example.com"
      />
      <TeamMember
        name="Bugra Comez"
        title="AI Trade Bot"
        src="bot.jpg"  // Burada resim kaynağını doğru belirtin.
        linkedinUrl="https://www.linkedin.com/in/jane-doe"
        email="jane.doe@example.com"
      />
      </div>
      );
    };
    
    export default TeamMembers;
*/    