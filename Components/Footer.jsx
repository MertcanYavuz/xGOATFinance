import React from "react";
import { FaInstagram, FaTelegramPlane, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import { BiPolygon } from 'react-icons/bi';
import { SiMedium } from 'react-icons/si';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Footer CSS */
  .footer-links {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 10px;
  }

  .footer-links a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 5px;
  }

  .footer-links a:hover svg,
  .footer-links a:hover img {
    transform: scale(1.2);
  }

  .footer-links svg,
  .footer-links img {
    transition: transform 0.2s ease-in-out;
  }

  /* Mobil uyum için medya sorguları */
  @media (max-width: 768px) {
    .footer-links {
      flex-wrap: wrap;
    }

    .footer_logo {
      text-align: center;
    }

    .footer_link {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer_menu {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    .footer_menu li {
      margin: 0 10px;
    }

    .newsletter_form {
      text-align: center;
    }
  }
`;

const Footer = () => {
  const footerList = [
    "AITrade", "How it works", "Token", "FAQ", "Contact"
  ];

  return (
    <footer>
      <GlobalStyle />
      <div
        id="contact"
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/fn.png" alt="" />
                </a>
              </div>

              <div className="footer-links mb-3">
                <a href="https://www.instagram.com/xgoatfinance/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} color="#e1306c" />
                </a>
                <a href="https://t.me/xgoatfinance" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane size={24} color="#0088cc" />
                </a>
                <a href="https://twitter.com/xgoatfinance" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} color="#1da1f2" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} color="#000000" />
                </a>
                <a href="https://polygonscan.com/token/" target="_blank" rel="noopener noreferrer">
                  <BiPolygon size={24} color="#8247e5" />
                </a>
                <a href="https://medium.com/@GoatFinance.net" target="_blank" rel="noopener noreferrer">
                  <SiMedium size={24} color="#00ab6c" />
                </a>
              </div>

              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Monthly digest of what's new.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Quick Links
              </h4>
              <ul className="footer_link">
                {footerList.map((list, i) => (
                  <li key={i} className="animation" data-animation="fadeInUp" data-animation-delay={`0.${i + 2}s`}>
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                  Monthly digest of what's new and exciting from us.
                </p>
                <form action="https://docs.google.com/forms/d/1x8dWISr4Z9WRNtBEaco34rom1l7Ib-86zrcjbXQrntA/edit" method="POST">
                  <input
                    type="text"
                    required
                    placeholder="Enter Email Address"
                    className="input-rounded"
                  />
                  <button
                    type="submit"
                    title="Subscribe"
                    className="btn-info"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; 2024 All Right reserved by @GoatFinance
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
