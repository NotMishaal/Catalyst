import React from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  linkUrl,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={linkUrl} className="btn btn-primary">
          More Info
        </a>
      </div>
    </div>
  );
};

const Businesses: React.FC = () => {
  return <Card imageUrl={""} title={""} description={""} linkUrl={""} />;
};

export default Businesses;
