import React from "react";

const Tradepng = () => {
  return (
    <>
      <style>
        {`
          .largeImage {
            width: 130%; /* Genişliği konteynere göre ayarla */
            height: auto; /* Yüksekliği orantılı olarak ayarla */
          }
        `}
      </style>
      <section id="about" className="small_pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-25 col-md-22 col-sm-50">
              <div className="text-center">
                <img
                  src=""
                  alt="About Us"
                  className="animation largeImage"
                  data-animation="zoomIn"
                  data-animation-delay="0.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tradepng;
