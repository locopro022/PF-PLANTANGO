import { ConstructionOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { pathname } = useLocation();
  const page = pathname
    .split("/")
    .reduce(
      (p, c) => [...p, [...(p[p.length - 1] ? p[p.length - 1] : []), c]],
      []
    );

  const breadcrumbs = page
    .map((dir) => ({
      name: dir != "" ? dir[dir.length - 1] : props.start ? props.start : "/",
      to: dir != "" ? dir.join("/") : props.start ? props.start : "/",
    }))
    .slice(0, -1);

  return (
    <div className="mb-4 container-fluid">
      {![...(props.exclude ? props.exclude : []), ""].some((item) => {
        console.log("Se esta haciendo esta comparacion: \n", item, pathname);
        return `/${item}` === pathname;
      }) && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {breadcrumbs.map((ruta, index) => (
              <Link key={index} to={ruta.to} style={{ marginRight: "0.2rem" }}>
                /{ruta.name}
              </Link>
            ))}
          </div>
        )}
    </div>
  );
};

export default Breadcrumbs;
