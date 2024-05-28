import React, { useState, useEffect } from 'react';

function CommunityMembers() {
  const [members, setMembers] = useState(0);

  useEffect(() => {
    fetch('https://api.example.com/members/count') // API'nin URL adresi örnektir.
      .then(response => response.json())
      .then(data => setMembers(data.count))
      .catch(error => console.error('Error fetching member count:', error));
  }, []);

  return (
    <div className="joinCommunity__channelMembers">
      <div className="numberCards">
        {members.toString().padStart(6, '0').split('').map((digit, index) => (
          <div key={index} className="numberCards__digitBlock">
            <div className="numberCards__digit">
              <div className="headline headline--level-1 headline--weight-semi headline--scheme-light headline--color-primary numberCards__digitTitle">
                {digit}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text text--level-1 text--type-default text--scheme-light text--weight-regular">
        Total community members
      </div>
    </div>
  );
}

export default CommunityMembers;
