import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/1.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/2.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/3.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/4.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/5.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/6.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/7.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/8.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/9.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/10.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/11.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/12.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/13.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/14.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/15.png",
    "./assets/images/Goat Finance AI Powered Algorithmic Trade Robots/16.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`slider ${isModalOpen ? 'expanded' : ''}`}>
      <div className="image-container" onClick={nextSlide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>

      <div className="controls">
        <button className="previous" onClick={prevSlide}>Previous</button>
        <button className="next" onClick={nextSlide}>Next</button>
        <button className="expand" onClick={toggleModal}>
          {isModalOpen ? 'Shrink' : 'Expand'}
        </button>
        <a href="https://drive.google.com/file/d/1kYsLfKXfs2JholhEDIDYq0zkb8dF9u3h/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="link-button">Download PDF</button>
        </a>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>&times;</span>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>
      )}

      <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: auto;
          transition: max-width 0.5s ease;
        }
        .expanded {
          max-width: 100%;
          width: 100%;
          height: 100vh;
        }
        .image-container img {
          width: 100%;
          display: block;
        }
        .controls {
          text-align: center;
          margin-top: 50px;
        }
        .previous, .next, .expand, .link-button {
          cursor: pointer;
          border: none;
          background: grey;
          color: white;
          font-size: 16px;
          padding: 8px 25px;
          margin-right: 20px;
          margin-bottom: 100px;
        }
        .modal {
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: visible; /* Kaydırma engelini kaldır */
          background-color: rgba(0, 0, 0, 0.7);
        }
        .modal-content {
          position: relative;
          width: auto;
          max-width: 90%;
          height: auto;
          max-height: 90%;
          margin: 5% auto;
          padding: 20px;
          background: #fefefe;
          border: 1px solid #888;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .close {
          color: #aaa;
          font-size: 28px;
          font-weight: bold;
          position:absolute;
          top: 0;
          right: 0;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Slider;
