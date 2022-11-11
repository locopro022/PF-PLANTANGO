import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constrainHuerta } from "../../redux/actions";
import s from "./pagination.module.css";

const Pagination = (props) => {
  const max = props.max;
  const curr = props.curr;
  const apply = props.apply;
  // const { page_count, page } = useSelector((state) => state.arrayHuerta);
  // const dispatch = useDispatch();

  const movements = {
    prev: () => (curr > 0 ? parseInt(curr) - 1 : parseInt(curr)),
    next: () => (curr < max - 1 ? parseInt(curr) + 1 : parseInt(curr)),
  };

  console.log(max, curr);

  const move = (dir) => {
    apply(movements[dir] ? movements[dir]() : dir);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "2rem",
        margin: "1rem",
      }}
    >
      {max > 1 && (
        <>
          <button onClick={() => move("prev")}>{"<"}</button>
          {Array(max)
            .fill("exequiel")
            .map((exequiel, index) => (
              <button
                onClick={() => move(index)}
                style={curr == index ? { backgroundColor: "lightgreen" } : {}}
              >
                {index + 1}
              </button>
            ))}
          <button onClick={() => move("next")}>{">"}</button>
        </>
      )}
    </div>
  );
};

export default Pagination;
