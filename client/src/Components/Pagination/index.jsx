import React from "react";

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

  // console.log(max, curr);

  const move = (dir) => {
    apply(movements[dir] ? movements[dir]() : dir);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      {max > 1 && (
        <>
          <button
            onClick={() => move("prev")}
            style={{
              outline: "1px solid #90b89b",
              marginRight: "10px",
              border: "none",
              width: "35px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>
          {[...Array(max).keys()].map((index) => (
            <button
              onClick={() => move(index)}
              style={
                parseInt(curr) === index
                  ? {
                      outline: "2px solid #90b89b",
                      margin: "0px 10px",
                      border: "none",
                      width: "35px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }
                  : {
                      margin: "0px 10px",
                      border: "none",
                      width: "35px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      outline: "none",
                    }
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => move("next")}
            style={{
              outline: "1px solid #90b89b",
              marginLeft: "10px",
              border: "none",
              width: "35px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
