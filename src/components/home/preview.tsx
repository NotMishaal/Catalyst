import React from "react";

function SectionHeader() {
  return (
    <div className="col-lg-12">
      <h1 className="fw-bold display-3 text-center">Join Catalyst Today</h1>
    </div>
  );
}

function Card(props: { iconSrc: any; heading: any; description: any }) {
  const { iconSrc, heading, description } = props;
  return (
    <div className="col p-5">
      <img src={iconSrc} style={{ filter: "invert(100%)", width: "75px" }} />
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
}

function PreviewSection() {
  return (
    <div className="row bg-black text-white align-items-center min-vh-100 min-vw-100">
      <SectionHeader />
      <div className="row align-items-start">
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <Card
              iconSrc="../../public/icons/crown.svg"
              heading="Get started with your startup journey"
              description="Our platform connects startups with investors, making it easier for them to secure the funding. They need to bring their ideas to life. But we don't stop there. We offer a range of other services to help startups grow and succeed, including data analytics and other tools to help them make informed decisions about their business."
            />
          </div>
          <div className="row">
            <Card
              iconSrc="../../public/icons/chart.svg"
              heading="Taking it to the next level"
              description="Whether you're in the seed stage, early stage, or growth stage, Catalyst has the resources and support you need to take your startup to the next level. Our team of experts is here to help you every step of the way, providing personalized support and guidance to help you achieve your goals."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <Card
              iconSrc="../../public/icons/coin.svg"
              heading="Affordable and accessible"
              description="Our platform is designed to be accessible and affordable, which is why we offer our basic application for free. We believe that startups shouldn't have to spend a fortune to access the resources and support they need to succeed."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewSection;
