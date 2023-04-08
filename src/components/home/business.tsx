import React from "react";

type CardProps = {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
};

const Card = ({ title, description, link, imgSrc, imgAlt }: CardProps) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Card Link
          </a>
        </div>
      </div>
    </div>
  );
};

const Businesses: React.FC = () => {
  return (
    <div className="row min-vh-100 min-vw-100 align-items-center">
      <h1 className="fw-bold display-2">Featured Businesses</h1>
      <Card
        title="Card Title 1"
        description="This is the description for Card 1."
        link="#"
        imgSrc="https://picsum.photos/200/150"
        imgAlt="Card Image"
      />
      <Card
        title="Card Title 1"
        description="This is the description for Card 1."
        link="#"
        imgSrc="https://picsum.photos/200/150"
        imgAlt="Card Image"
      />
      <Card
        title="Card Title 1"
        description="This is the description for Card 1."
        link="#"
        imgSrc="https://picsum.photos/200/150"
        imgAlt="Card Image"
      />
    </div>
  );
};

export default Businesses;
