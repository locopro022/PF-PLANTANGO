import { ArtTrackSharp, SetMealOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import "./Detalle.css";
import ComentPlant from "../ComentPlant";

const Detalle = (props) => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    props.from(id).then((plant) => {
      setItem(plant);
    });
  }, []);
  return (
    <div className="detalle_grid container-fluid media altoMedia">
      <div className="media-body detalle_fijo" style={{ minWidth: "50vw" }}>
        {item.title ? (
          <h1 className="mt-0" style={{ textTransform: "uppercase" }}>
            <strong>{item.title}</strong>
          </h1>
        ) : null}
        {item.subtitle ? (
          <h2 style={{ fontStyle: "italic" }}>{item.subtitle}</h2>
        ) : null}
        <br />
        <br />

        {item.caracteristics
          ? item.caracteristics.map((carac, i) => (
              <div className="" key={i}>
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
      <div>
        {item.img ? (
          <img
            src={item?.img}
            alt="img"
            className="card"
            style={{
              borderRadius: "0.25rem",
              objectFit: "cover",
              width: "100%",
              height: "50%",
            }}
          />
        ) : null}
        {item.description ? (
          <p className="card p-4">{item.description}</p>
        ) : null}
        <div className="">
          <ComentPlant />
        </div>
      </div>
    </div>
  );
};

export default Detalle;
