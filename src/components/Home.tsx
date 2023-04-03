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
            <p className="fw-medium my-5">
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
            <img
              src="../../public/clipart/sheet.svg"
              className="img-fluid w-75"
            />
          </div>
        </div>
        <div className="row row-cols-1 bg-black text-white align-items-center vh-100 vw-100">
          <div className="col mt-5">
            <h1 className="fw-bold display-3 text-center">
              Join Catalyst Today
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col col1">
              <div className="row">
                <div className="col col1-row1 p-5 p-5">
                  <h1>Get started with your startup journey</h1>
                  <p>
                    Our platform connects startups with investors, making it
                    easier for them to secure the funding. They need to bring
                    their ideas to life. But we don't stop there. We offer a
                    range of other services to help startups grow and succeed,
                    including data analytics and other tools to help them make
                    informed decisions about their business
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col1-row2 p-5">
                  <h1>Taking it to the next level</h1>
                  <p>
                    Whether you're in the seed stage, early stage, or growth
                    stage, Catalyst has the resources and support you need to
                    take your startup to the next level. Our team of experts is
                    here to help you every step of the way, providing
                    personalized support and guidance to help you achieve your
                    goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="row">
                <div className="col col2-row1"></div>
              </div>
              <div className="row">
                <div className="col col2-row2 p-5">
                  <h1>Affordable and accessible</h1>
                  <p>
                    Our platform is designed to be accessible and affordable,
                    which is why we offer our basic application for free. We
                    believe that startups shouldn't have to spend a fortune to
                    access the resources and support they need to succeed.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col2-row3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
