import { Instagram, LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import platango from "../../img/plantangoTexto.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const iniciarSesion = () => {
    navigate("/iniciarSesion");
  };
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
          <p className="d-flex justify-content-center align-items-center">
            <span style={{ marginRight: "1rem" }}>Registrese, es gratis!</span>
            <button
              type="button"
              className="btn btn-outline-light btn-rounded"
              onClick={iniciarSesion}
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
