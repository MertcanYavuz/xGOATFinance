import React from "react";

const Telegram = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <img src="./assets/images/client_logo_wt3.png" style={{ borderRadius: '0px' }} alt="Client Logo" />
      <MyButton />
    </div>
  );
};

function MyButton() {
  const buttonStyle = {
    gap: "8px",
    padding: "0px 16px",
    height: "40px",
    width: "25%",
    background: "",
    marginLeft: "-15px",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: "500",
    lineHeight: "1.4",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out", // Animasyon için geçiş süresi ekliyoruz
  };

  const handleMouseOver = (e) => {
    e.target.style.transform = "scale(1.1)"; // Mouse üzerine geldiğinde büyütme
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = "scale(1)"; // Mouse çıktığında normale dönme
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', top: '18.66%', width: '100%' }}>
      <button
        onClick={() => window.open("https://t.me/goatfinancecommunity", "_blank")}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={buttonStyle}
      >
        COMMUNITY
      </button>
    </div>
  );
}

export default Telegram;
