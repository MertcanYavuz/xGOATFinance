import React from "react";
import { Link } from 'react-router-dom';
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaDollarSign } from 'react-icons/fa'; // FaDollarSign ikonunu import ediyoruz

const Banner = ({ transferNativeToken }) => {
  return (
    
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      data-zindex="1"
      data-parallax="scroll"
      data-image-src="assets/images/png"
    >
      <div className="banner_effect">
        <div className="container">
          <div className="row align-items-center" style={{ height: "700px" }}>
            <div className="col-lg-6 col-md-12 col-sm-1 order-lg-first">
              <div className="banner_text_s2 text_md_center">
                <h1 className="animation text-white" data-animation="fadeInUp" data-animation-delay="1.1s">
                  <strong>Goat Finance</strong> serves AI-driven algorithmic trading for crypto <strong>network</strong>
                </h1>
                <h5 className="animation presale_txt text-white" data-animation="fadeInUp" data-animation-delay="1.3s">
                  Token Presale is <mark className="gradient_box">Live</mark>
                </h5>
                <div className="btn_group pt-2 pb-3 animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                <a href="https://drive.google.com/file/d/1N98XQs7AT84Ok6Dcf6_xgbilnOfWMWcD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-radius nav-link content-popup">
                      Whitepaper <BsArrowRight />
                  </a>
                  <a href="#saless" className="btn btn-border btn-radius">
                    Buy Token Now! <BsArrowRight/>
                  </a>
                </div>
                <div className="text-white icon_title animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                  We accept:
                  <span className="currency_icon" style={{ marginLeft: '10px' }}>
                    <FaDollarSign className="new_font_size" />
                    <span style={{ marginLeft: '5px' }}>USDT</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first">
              <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation="fadeInRight" data-animation-delay="1.5s">
                <img
                  src="assets/images/banner_img2.png"
                  alt=""
                  className="new_image_css"
                  style={{ width: '470px', height: 'auto', marginTop: '6em' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
