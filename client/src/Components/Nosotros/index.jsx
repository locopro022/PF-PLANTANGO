import "./nosotros.css";

const nosotros = [
  {
    name: "Agustin Millan",
    description: "Esto es una descripcion",
    picture:
      "https://media-exp1.licdn.com/dms/image/D4D35AQGKj9A0Fya2Gw/profile-framedphoto-shrink_800_800/0/1662662693636?e=1669914000&v=beta&t=Aefev8GwReASia9KrSsFejIL_tQI5VdHquKkJEt_Dh4",
    linkedin: "https://www.buenosaires.gob.ar/gobierno/ceamse-0",
    github: "https://www.pedidosya.com.ar/cadenas/mi-gusto",
  },
  {
    name: "Aca va el nombre",
    description: "Esto es una descripcion",
    picture: null, //url de la imagen
    linkedin: "https://www.buenosaires.gob.ar/gobierno/ceamse-0", //aca va tu linkedin
    github: "https://github.com/AgustinMillan", //aca va tu github
  },
  {
    name: "Aca va el nombre",
    description: "Esto es una descripcion",
    picture: null, //url de la imagen
    linkedin: "https://www.buenosaires.gob.ar/gobierno/ceamse-0", //aca va tu linkedin
    github: "https://github.com/AgustinMillan", //aca va tu github
  },
  {
    name: "Aca va el nombre",
    description: "Esto es una descripcion",
    picture: null, //url de la imagen
    linkedin: "https://www.buenosaires.gob.ar/gobierno/ceamse-0", //aca va tu linkedin
    github: "https://github.com/AgustinMillan", //aca va tu github
  },
  {
    name: "Aca va el nombre",
    description: "Esto es una descripcion",
    picture: null, //url de la imagen
    linkedin: "https://www.buenosaires.gob.ar/gobierno/ceamse-0", //aca va tu linkedin
    github: "https://github.com/AgustinMillan", //aca va tu github
  },
  {
    name: "Juan Cruz Rolon",
    description:
      "Soy un habil programador el cual llego tarde al reparto de compañeros de equipo.",
    picture:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHlfnlOxICgxg/profile-displayphoto-shrink_800_800/0/1667884218391?e=1674691200&v=beta&t=fbtu6wrPgqF1I1qI1wyyB-lTqbMmLD10RYKv_JVG5IE",
    linkedin: "https://www.linkedin.com/in/juan-rol%C3%B3n-4b58bb23a/",
    github: "https://github.com/JohnCrossRollOn",
  },
];

const Linkedin = ({ linkedin }) => (
  <a href={linkedin} target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="4rem"
      fill="currentColor"
      class="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  </a>
);
const Github = ({ github }) => (
  <a href={github} target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="4rem"
      fill="black"
      class="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  </a>
);
export default function () {
  return (
    <div className="pagina">
      <div
        className="carta doble"
        style={{ padding: "2rem", fontSize: "1.3rem" }}
      >
        <h3 style={{ fontWeight: "bolder", fontSize: "5rem" }}>El grupo</h3>
        <br />
        <p>
          Somos un grupo de desarrolladores (creo) muy entusiastas (creo) y
          altamente calificados (menos de la mitad) tanto en backend (rascarse
          el final de la espalda (back y end)) y en front end (se sobre entiende
          el chiste).
        </p>
        <p>
          No dudes en contactarnos si te sobra la plata y desprecias tu tiempo!
        </p>
      </div>
      {nosotros.map(({ name, picture, description, linkedin, github }) => (
        <div className="carta">
          <img
            src={
              picture ||
              "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
            }
            alt="Una imagen de uno de nuestros miembros."
            className="imagenCarta"
          />
          <div style={{ padding: "0.5rem" }}>
            <h4 style={{ fontWeight: "bolder", fontSize: "2rem" }}>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="footer">
            {linkedin ? <Linkedin linkedin={linkedin} /> : null}
            {github ? <Github github={github} /> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
