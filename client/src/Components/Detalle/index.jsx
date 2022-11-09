import { ArtTrackSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalle = (props) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  //   faltaria agregar "breadcrumbs" para volver hacia atras , etc

  useEffect(() => {
    props.from(id).then((data) => {
      setItem(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="container-fluid media">
      {item.img ? (
        <img
          src={item?.img}
          className="card"
          style={{
            borderRadius: "2rem",
            objectFit: "cover",
            width: "100%",
          }}
        />
      ) : null}
      <div className="media-body ml-4" style={{ minWidth: "50vw" }}>
        {item.title ? (
          <h1 className="mt-0" style={{ textTransform: "uppercase" }}>
            <strong>{item.title}</strong>
          </h1>
        ) : null}
        {item.subtitle ? (
          <h2 style={{ fontStyle: "italic" }}>{item.subtitle}</h2>
        ) : null}
        {item.description ? (
          <p className="card p-4">{item.description}</p>
        ) : null}
        {item.caracteristics
          ? item.caracteristics.map((carac) => (
              <div className="container">
                <h5>
                  <strong style={{ textTransform: "uppercase" }}>
                    {carac.type}
                  </strong>
                </h5>
                <h6>{carac.value}</h6>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Detalle;
