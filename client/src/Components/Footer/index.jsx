import { Instagram, LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import platango from "../../img/plantangoTexto.png";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0
  return (
    <footer
      className="bg-dark text-center text-white"
      style={{
        bottom: 0,
        width: "100%",
        padding: "1rem",
        marginTop: "2rem",
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
          © 2020 Copyright:
          <img
            src={platango}
            alt="plantango"
            className="text-white"
            style={{ height: "2rem", filter: "invert(100%)" }}
          />
        </div>
        <div>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Twitter />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Instagram />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <LinkedIn />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <GitHub />
          </a>
        </div>
        <div>
        {isAuthenticated? 
          <p className="d-flex justify-content-center align-items-center">
            <span style={{ marginRight: "1rem" }}>Registrese, es gratis!</span>
            <button
              type="button"
              className="btn btn-outline-light btn-rounded"
              onClick={() => loginWithRedirect()}
            >
              Sign up!
            </button>
          </p>: null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
