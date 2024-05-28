import React from "react";
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
              <img
                src="/assets/images/logo_dark.png"
                alt=""
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                className="animation"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4 className="animation" data-animation-delay="0.2s" data-animation="fadeInUp">
                About Us
              </h4>
              <p className="animation" data-animation-delay="0.4s" data-animation="fadeInUp">
              Goat Finance is a community created by entrepreneurs in the cryptocurrency industry since 2018, with corporate portfolio management capabilities. It aims to invest in crypto assets and also to trade crypto with artificial intelligence-based algorithmic trading bots. We want to distribute profits to our investors from the income obtained through licensed portfolio management at the corporate level , and also support quality and reliable projects that have just entered the sector and are looking for investors, follow the development of the projects we finance as investors, and reward our investors with maximum profit. The ultimate goal is where we want to be; We want to become the largest community in crypto by making our vault the strongest with coins with the largest market value and actively using artificial intelligence in every field of trade. We describe Goat Finance Coin as the store of value of this large community



              </p>
              <a href="#" className="btn btn-default btn-radius video animation" data-animation-delay="0.8s" data-animation="fadeInUp">
                Let's Start <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
