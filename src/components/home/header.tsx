import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <h1 className="fw-bold display-1">
        Welcome to Catalyst, your all-in-one platform for startup success.
      </h1>
      <p className="fw-medium my-5">
        We believe that every startup has the potential to succeed with the
        right resources and support. That's why we offer a wide range of
        services to help startups at every stage of their journey, from ideation
        to growth.
      </p>
      <button type="button" className="btn btn-primary btn-lg py-2 px-5 my-5">
        Start Now
      </button>
    </div>
  );
};

export default HeaderSection;
