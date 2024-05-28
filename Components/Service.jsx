import React, { useState } from "react";

const Service = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false)); // Array to track expanded state of each service

  const services = [
    {
      title: "AI Trade Bots",
      description: "Explore high returns and enhance your investment strategies with our innovative algorithmic trading robot.",
      moreInfo: "Equipped with advanced algorithms and AI, it efficiently analyzes market movements and executes trades automatically.Key features include:High Performance: Quick decision-making on market trends.Automated Trading: Operates continuously, executing buy and sell strategies.Risk Management: Monitors and adjusts to protect your investments.Customization: Tailors to your preferences and diverse investment tactics.Ideal for any investor looking to diversify and adapt to market conditions, our robot maximizes your trading potential.Contact Goat Finance Team for more details or to start using our robot.",
    },
    {
      title: "Early Investment",
      description: "Goat Finance aims to support your financial growth by managing corporate portfolios and maximizing ",
      moreInfo: "returns through early investment in promising, yet-to-be-discovered cryptocurrency projects. By investing early, you gain access to potential high returns at lower costs, contribute to project development, and engage with the community. Our team rigorously evaluates each project, ensuring a comprehensive understanding and risk assessment, while offering opportunities to meet experts and expand your network in the crypto world.",
    },
    {
      title: "Copy Trade",
      description: "Goat Finance introduces a revolutionary system allowing users to automatically copy transactions from",
      moreInfo: "our community's most successful traders. This feature not only assists novice investors in navigating trading but also enables professionals to boost their portfolios by leveraging collective expertise. Users can select traders based on their performance, visible profit and loss rates, and detailed historical data. Additionally, the system provides insights into the assets and strategies used by traders. With an aim to support financial growth for all skill levels, Goat Finance plans to further enhance user expertise through training and seminars. Join the Goat Finance Community to elevate your trading experience.",
    },
  ];

  const toggleExpand = index => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Available Services
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay={`0.${i + 1}s`}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                {expanded[i] && <p>{service.moreInfo}</p>}
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => toggleExpand(i)}
                >
                  {expanded[i] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
