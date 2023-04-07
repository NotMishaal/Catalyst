import NavBar from "./Nav";
import HeaderSection from "./home/header";
import PreviewSection from "./home/preview";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100 min-vw-100">
          <HeaderSection />
          <div className="col-lg-6 col-md-12">
            <img
              src="../../public/clipart/sheet.svg"
              className="img-fluid w-75"
            />
          </div>
        </div>
        <PreviewSection />
        <div className="row  min-vh-100 min-vw-100">
          <h1 className="fw-bold display-1">Featured Businesses</h1>
          <div className="row">
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
