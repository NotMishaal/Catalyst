import NavBar from "./Nav";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold">
              Welcome to Catalyst, your all-in-one platform for startup success.
            </h1>
            <p>
              We believe that every startup has the potential to succeed with
              the right resources and support. That's why we offer a wide range
              of services to help startups at every stage of their journey, from
              ideation to growth.
            </p>
            <button type="button" className="btn btn-primary">
              Start Now
            </button>
          </div>
          <div className="col">
            <img src="../../public/sheet.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
