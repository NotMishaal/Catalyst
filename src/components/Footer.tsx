import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Catalyst</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt"></i> Colombo, Sri Lanka
              </li>
              <li>
                <i className="bi bi-envelope"></i> info@catalyst.com
              </li>
              <li>
                <i className="bi bi-phone"></i> +1 (123) 456-7890
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Catalyst
      </div>
    </footer>
  );
}

export default Footer;
