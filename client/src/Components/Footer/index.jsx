import { Instagram, LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import platango from "../../img/plantangoTexto.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const iniciarSesion = () => {
    navigate("/iniciarSesion");
  };
  return (
    <footer
      class="bg-dark text-center text-white"
      style={{
        bottom: 0,
        width: "100%",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <div
        class=""
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
            class="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Twitter />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <Instagram />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <LinkedIn />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#"
            role="button"
          >
            <GitHub />
          </a>
        </div>
        <div>
          <p class="d-flex justify-content-center align-items-center">
            <span style={{ marginRight: "1rem" }}>Registrese, es gratis!</span>
            <button
              type="button"
              class="btn btn-outline-light btn-rounded"
              onClick={() => loginWithRedirect()}
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
