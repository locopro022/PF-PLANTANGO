import { Instagram, LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import platango from "../../img/plantangoTexto.png";
import { useAuth0 } from "@auth0/auth0-react";
import './footer.css'
const Footer = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <footer
      className=" footer-container text-center "
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        padding: "2px",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <a href="https://plantango.vercel.app/">
            <img
              src={platango}
              alt="plantango"
              className=""
              style={{ height: "50px" }}
            />
          </a>
        </div>
        <div>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Twitter style={{ color: 'green' }} />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Instagram style={{ color: 'green' }} />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <LinkedIn style={{ color: 'green' }} />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <GitHub style={{ color: 'green' }} />
          </a>
        </div>
        <div>
          {isAuthenticated ? null : (
            <p className="d-flex justify-content-center align-items-center">
              <span style={{ marginRight: "1rem" }}>
                Registrese, es gratis!
              </span>
              <button
                type="button"
                className="btn btn-outline-light btn-rounded m-1"
                onClick={() => loginWithRedirect()}
              >
                Sign up!
              </button>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
