import React from "react";

const Pagination = (props) => {

  
  const max = props.max;
  const curr = props.curr;
  const apply = props.apply;
  // const { page_count, page } = useSelector((state) => state.arrayHuerta);
  // const dispatch = useDispatch();

  const movements = {
    prev: () => curr > 0 ? parseInt(curr) - 1 : parseInt(curr),
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
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      {max > 1 && (
        <>
          <button
            onClick={() => move("prev")}
            style={{
              background:
                "linear-gradient(to right, #bafd4e, #79f952, #53f65b, #54f35c, #54f090, #56ed9a, #56efb4, #4ceec5)",
              marginRight: "10px",
              border: "none",
              width: "35px",
              borderRadius: "5px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {"<"}
          </button>
          {
            [...Array(max).keys()].map((index) => (
              <button
                onClick={() => move(index)}
                style={
                  parseInt(curr) === index
                    ? {
                        background:
                          "linear-gradient(to right, #bafd4e, #79f952, #53f65b, #54f35c, #54f090, #56ed9a, #56efb4, #4ceec5)",
                        margin: "0px 10px",
                        border: "none",
                        width: "35px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        outline: "none",
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
              background:
                "linear-gradient(to right, #bafd4e, #79f952, #53f65b, #54f35c, #54f090, #56ed9a, #56efb4, #4ceec5)",
              marginLeft: "10px",
              border: "none",
              width: "35px",
              borderRadius: "5px",
              cursor: "pointer",
              outline: "none",
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
