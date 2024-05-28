import React, { useState } from 'react';

const Distribution = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [additionalModalContent, setAdditionalModalContent] = useState('');

  const showModal = (content, additionalContent) => {
    setModalContent(content);
    setAdditionalModalContent(additionalContent);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section id="distribution-section" className="container">
      <div id="row-container" className="row justify-content-center">
        <div id="column-container" className="col-lg-10 col-md-12">
          <div id="title-container" className="title_default_light title_border text-center">
            <div id="divider" className="divider small_divider"></div>
            <h4 id="tokenomics-title"
            className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              TOKENOMICS
            </h4>
            <p></p>
            <div id="image-container" className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInUp" data-animation-delay="0.4s">
              <img src="assets/images/distribution3.png" alt="Token Distribution Graph" style={{ maxWidth: '90%' }} />
            </div>
            <p></p>
            <ul id="distribution-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, listStyle: 'none' }}>
              {[
                { title: 'Public Sale', description: '%20 at TGE,then linear vesting for 8 Months.', additionalDescription: "The Public Sale phase is designed to increase participation and interest from the general public in the project.Funds raised in this phase will be used for events and extensive marketing campaigns to enhance the projects overall visibility." },
                { title: 'Marketing', description: '%10 at TGE,then linear vesting for 12 Months.', additionalDescription: "These funds will be utilized to enhance Goat Finance market presence and reach a broader audience. Impactful marketing campaigns and community events are planned to increase brand awareness and contribute to the project's success." },
                { title: 'Development-Security', description: '%10 at TGE,then linear vesting for 12 Months.', additionalDescription: "It will be used for the expenses planned to be made to develop and strengthen the technical infrastructure of the project and to ensure its security." },
                { title: 'Advisor-Partners-Liquidity', description: '12 Months cliff,then linear vesting for 36 Months.', additionalDescription: "Budget allocated for partners and promoters who will contribute to the project,These funds are set aside to ensure market dynamics and maintain the token's value. This will increase investor confidence and ensure the long-term stability of the Goat Fınance token" },
                { title: 'Team', description: '12 Months cliff,then linear vesting for 36 Months.', additionalDescription: "This category is reserved for the successful management and continuous development of the Goat Fianance project." },
                { title: 'Seed', description: '%5 at TGE,6 Months cliff,then linear vesting for 12 Months.', additionalDescription: "These funds are dedicated to solidifying Goat Finance's foundations and supporting its early-stage development. It represents the budget that will be used to invest early in quality projects in the future." },
                { title: 'Private Sale', description: '%10 at TGE,3 Months cliff,then linear vesting for 12 Months.', additionalDescription: "These funds are dedicated to solidifying Goat Finance's foundations and supporting its early-stage development. It represents the budget that will be used to invest early in quality projects in the future." },
              ].map((item, index) => (
                <li key={index} id={`distribution-item-${index}`} style={{ margin: '10px 0' }}>
                  <span className={`chart_bx color${index + 1}`}></span>
                  <span>{item.title}</span>
                  <img
                    src="./assets/images/app_bg.png"
                    style={{ cursor: 'pointer', margin: 'auto', width: '20px' }}
                    alt="Info"
                    onClick={() => showModal( item.additionalDescription)}
                  />
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div id="modal-container" style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <p id="modal-content">{modalContent}</p>
          {additionalModalContent && <p id="additional-modal-content">{additionalModalContent}</p>}
          <button id="close-modal-btn" onClick={closeModal}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Distribution;





/*
const Distribution = () => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="title_default_light title_border text-center">
            <div className="divider small_divider"></div>
            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Token Distribution
            </h4>
            <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInUp" data-animation-delay="0.4s">
              <img src="assets/images/distribution3.png" alt="Token Distribution Graph" style={{ maxWidth: '70%' }} />
            </div>
            <p></p>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, listStyle: 'none' }}>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color1"></span>
                <span>Public Sale</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px'}} alt="Info"/>
                <p>En iyi satış kampanyası.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color2"></span>
                <span>Marketing</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Yapılandırma ve geliştirme aşamaları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color3"></span>
                <span>Development-Security</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Takım ve danışmanlarla ilgili detaylar.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color4"></span>
                <span>Advisor</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Özel yatırımcı katkıları ve bilgileri.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Team</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Partners</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Liquidity</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Liquidity Rewards</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Seed</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
              <li style={{ margin: '10px 0' }}>
                <span className="chart_bx color5"></span>
                <span>Private Sale</span>
                <img src="./assets/images/app_bg.png" style={{ cursor: 'pointer', margin: 'auto',width: '20px' }} alt="Info"/>
                <p>Ödül ve teşvik programı detayları.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
*/







/*




import React, { useState } from 'react';

const Distribution = () => {
  // Inline stilleri tanımlayın
  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    position: 'relative'
  };

  const textStyle = {
    color: 'white',
    fontSize: '18px',
    flex: '1 0 auto'
  };
  const textStyles = {
    color: 'white',
    fontSize: '25px',
    flex: '1 0 auto'
  };

  const buttonStyle = {
    marginLeft: '20px',
    padding: '2px 5px',
    fontSize: '12px',
    cursor: 'pointer'
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '300px',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const backdropStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 999
  };

  // Modal görünürlüğünü ve içeriğini yönetmek için state
  const [modal, setModal] = useState({ visible: false, content: '' });

  // Modalı göstermek için fonksiyon
  const showModal = (content) => {
    setModal({ visible: true, content });
  };

  // Modalı gizlemek için fonksiyon
  const hideModal = () => {
    setModal({ visible: false, content: '' });
  };

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-14 col-sm-14">
          <div className="title_default_light title_border text-center">
            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={textStyles}>
              Tokenomics
            </h4>
            <p></p>
          </div>
          <div className="divider small_divider"></div>
          <div className="title_default_light title_border text-center">
          </div>
          <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
            <img src="assets/images/distribution3.png" alt="" className="sale-proceeds3" style={{ width: '150%', height: 'auto' }}/>
          </div>
          <div className="divider small_divider"></div>
          <ul className="list_chart">
            {[
              {
                label: 'GOAT Sale: Represents proceeds from the general sale of tokens.',
                description: 'GOAT Sale refers to the revenue generated from the general public sale of tokens.'
              },
              {
                label: 'Build Out: Funds allocated for development and infrastructure.',
                description: 'Build Out includes funding reserved for the development and establishment of project infrastructure.'
              },
              {
                label: 'Team & Advisers: Share of funds designated for the team and advisors.',
                description: 'This segment covers the allocation of funds specifically set aside for compensating the project team and advisors.'
              },
              {
                label: 'Private Investors: Funding from private investors prior to public sale.',
                description: 'Refers to the capital raised from private investors before the tokens are offered to the general public.'
              },
              {
                label: 'Bounty: Budget set aside for community incentives and bounties.',
                description: 'Bounty involves the budget allocated for community engagement through rewards and incentives.'
              }
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={textStyle}>{item.label}</span>
                <button style={buttonStyle} onClick={() => showModal(item.description)}>More Info</button>
              </li>
            ))}
          </ul>
          {modal.visible && (
            <>
              <div style={backdropStyle} onClick={hideModal}></div>
              <div style={modalStyle}>
                <h4>{modal.content}</h4>
                <button onClick={hideModal} style={{ cursor: 'pointer', padding: '5px 10px' }}>Close</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Distribution;
*/
