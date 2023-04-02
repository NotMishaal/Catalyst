import NavBar from "./Nav";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="container-fluid ml-5 ">
        <div className="row align-items-center vh-100 vw-100">
          <div className="col mx-5">
            <h1 className="fw-bold display-1">
              Welcome to Catalyst, your all-in-one platform for startup success.
            </h1>
            <p className="fw-medium">
              We believe that every startup has the potential to succeed with
              the right resources and support. That's why we offer a wide range
              of services to help startups at every stage of their journey, from
              ideation to growth.
            </p>
            <button type="button" className="btn btn-primary btn-lg py-2 px-5">
              Start Now
            </button>
          </div>
          <div className="col">
            <img src="../../public/sheet.svg" className="img-fluid w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
