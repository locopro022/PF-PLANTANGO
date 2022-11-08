import React, { useEffect, useRef, useState } from "react";

export default function Chat(props) {
  const [current, setCurrent] = useState(0);
  const question = [...props.filters.map((filter) => filter.question)][
    current + 1
  ];
  const options = [...props.filters.map((filter) => filter.options)][current];

  const [messages, setMessages] = useState([
    { value: props.filters[0].question },
  ]);
  const bottom = useRef(null);

  const addMsg = (value, src) => {
    setMessages((prvMsg) => [...prvMsg, { value, src }]);
    setTimeout(
      () =>
        bottom.current.scrollIntoView({
          behavior: "smooth",
        }),
      0
    );
  };

  const [collected, setCollected] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const selected = [...e.target]
      .filter((item) => item.checked)
      .map((item) => item.id);

    if (selected.length > 0) {
      let response = selected
        .reduce((p, c, i) =>
          i + 1 === selected.length ? p + " y " + c : p + ", " + c
        )
        .toLowerCase();
      response = [...response, "."];
      addMsg(response, "user");

      setCollected((previous) => [
        ...previous,
        { type: question, values: selected },
      ]);

      setTimeout(() => {
        let previous = current;
        setCurrent(previous + 1);
        addMsg(question, "Grut");
      }, 1000);

      setCurrent(-1);
      e.target.reset();
    }
  };

  return (
    <div className="bg-slate-50 m-8 h-[38rem] shadow-lg flex flex-col justify-end rounded-2xl">
      <div className="p-2 mb-0 rounded-t-2xl flex flex-row bg-green-200 border-b-green-300 border shadow-md">
        <img src="/grut.png" className="w-16 ml-4 rounded-full shadow-lg" />
        <span className="my-auto ml-4 text-2xl font-bold">Grut</span>
        {/* {&& <span className="m-auto ml-4">En linea</span>} */}
      </div>

      <div
        className="shadow-inner bg-slate-100 flex-1 rounded-2xl m-4 mb-0 flex flex-col scrollbar overflow-y-scroll z-20 p-8"
        id="chat"
      >
        {messages.map((msg, index) => (
          <div
            className={`${
              msg.src === "user"
                ? "bg-blue-200 self-end pr-6"
                : "bg-green-200 self-start pl-6"
            } m-1 p-2 rounded-2xl px-4 max-w-[60%] animate-instantiate shadow-md text-left w-fit`}
            key={index}
          >
            {msg.value}
          </div>
        ))}
        <span ref={bottom} className=""></span>
      </div>

      <form
        className="flex flex-row m-2 mt-2 min-h-[4.3rem] transition-all"
        onSubmit={submitHandler}
      >
        <div className="bg-slate-200 m-1 rounded-md p-2 flex-1 shadow-inner flex flex-row flex-wrap justify-center transition-all">
          {options &&
            "checkbox" in options &&
            options.checkbox.map((option, index) => (
              <div key={index} className="m-2 mx-0 animate-instantiate">
                <input type="checkbox" id={option} className="peer hidden" />
                <label
                  className="sel;ect-none text-xl m-1 bg-blue-300 p-2 rounded-md peer-checked:bg-blue-900 peer-checked:text-white peer-checked:px-3 transition-all"
                  htmlFor={option}
                >
                  {option}
                </label>
              </div>
            ))}
          {options &&
            "radio" in options &&
            options.radio.map((option, index) => (
              <div key={index} className="m-2 mx-0 animate-instantiate">
                <input
                  type="radio"
                  id={option}
                  name={question}
                  className="peer hidden"
                />
                <label
                  className="select-none text-xl m-1 bg-blue-300 p-2 rounded-md peer-checked:bg-blue-900 peer-checked:text-white peer-checked:px-3 transition-all"
                  htmlFor={option}
                >
                  {option}
                </label>
              </div>
            ))}
          {options &&
            "buttons" in options &&
            options.buttons.map((button, index) => (
              <div key={index} className="m-2 mx-0 animate-instantiate">
                <button
                  onClick={() => button.callback(collected)}
                  className="select-none text-xl m-1 bg-blue-300 p-2 rounded-md peer-checked:bg-blue-900 peer-checked:text-white peer-checked:px-3 transition-all"
                >
                  {button.name}
                </button>
              </div>
            ))}
          {options && "reset" in options && (
            <div className="m-2 mx-0 animate-instantiate">
              <button
                onClick={() => {
                  setCollected([]);
                  setMessages([{ value: props.filters[0].question }]);
                  setCurrent(0);
                }}
                className="select-none text-xl m-1 bg-blue-300 p-2 rounded-md peer-checked:bg-blue-900 peer-checked:text-white peer-checked:px-3 transition-all"
              >
                {options.reset}
              </button>
            </div>
          )}
        </div>
        <button
          type="submit"
          id="send"
          className="bg-blue-400 shadow-md rounded-full px-4 m-1 font-bold active:translate-y-1 active:bg-blue-800 active:text-white transition-all"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=" fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
