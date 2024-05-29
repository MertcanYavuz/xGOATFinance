import React from "react";
import { BiMenu } from "react-icons/bi";
import styles from '../styles/Header.module.css';

const Header = ({ address, setAddress, connectWallet }) => {
  const menuList = [
    { menu: "Home", link: "#home_section" },
    { menu: "About", link: "#about" },
    { menu: "Sale Plan", link: "#waitlist-section" },
    { menu: "Service", link: "#service" },
    { menu: "Team", link: "#team" },
    { menu: "Contact", link: "#contact" },
  ];

  // State for background color
  const [backgroundColor, setBackgroundColor] = React.useState("lightBackground");

  // Effect for changing background color on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setBackgroundColor("darkBackground");
      } else {
        setBackgroundColor("lightBackground");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_wrap fixed-top ${backgroundColor}`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg justify-content-center">
          <a
            href="#home_section"
            data-animation="fadeInDown"
            data-animation-delay="1s"
            className="navbar-brand page-scroll animation"
          >
            <img
              src="assets/images/fn.png"
              alt="logo"
              className="logo_light"
            />
            <img
              src="assets/images/fn.png"
              alt="logo"
              className="logo_dark"
            />
          </a>

          <button
            className="navbar-toggler animation"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <BiMenu />
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {menuList.map((menu, i) => (
                <li
                  key={i + 1}
                  className="nav-item animation"
                  data-animation="fadeInDown"
                  data-animation-delay={`1.${i + 1}s`}
                >
                  <a href={menu.link} className="nav-link">
                    {menu.menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;



/*

import React, { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';

// Bitcoin price fetching hook
const useBitcoinPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.p).toFixed(2)); // 'p' is typically the price field in Binance streams
    };

    // Clean up function to close the socket when the component unmounts
    return () => socket.close();
  }, []);

  return price;
};

const Header = ({ address, setAddress, connectWallet }) => {
  const price = useBitcoinPrice(); // Using the hook to get Bitcoin price

  const menuList = [
    { menu: 'Home', link: '#home_section' },
    { menu: 'About', link: '#about' },
    { menu: 'Sale Plan', link: '#waitlist-section' },
    { menu: 'Service', link: '#service' },
    { menu: 'Portfolio', link: '#portfolio' },
    { menu: 'Contact', link: '#contact' },
  ];

  const [backgroundColor, setBackgroundColor] = useState('lightBackground');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setBackgroundColor('darkBackground');
      } else {
        setBackgroundColor('lightBackground');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header_wrap fixed-top ${backgroundColor}`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a href="#home_section" className="navbar-brand page-scroll">
            <img src="assets/images/fn.png" alt="logo" className="logo_light" />
            <img src="assets/images/fn.png" alt="logo" className="logo_dark" />
          </a>

          <button className="navbar-toggler" type="button">
            <BiMenu />
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav" style={{ margin: '24rem' }}>
              {menuList.map((menu, i) => (
                <li key={i}>
                  <a href={menu.link} className="nav-link">
                    {menu.menu}
                  </a>
                </li>
              ))}
            </ul>

          
            <div style={{ position: 'absolute', top: -12, right: -20,width: 100 , height: 100,color:'white'}}>
              BTC/USDT { price ? `$${price}` : 'Loading...'}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
*/
