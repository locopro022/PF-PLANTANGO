import React from "react";

function ComentPlant({coments}) {
  function onChange(e){

  }
  function onSubmit(e){
    e.preventDefault();
  }
  return (
    <div>
      {coments.length &&
        coments.map((e) => (
          <>
            <h3>{e.title}</h3>
            <h5>{e.cont}</h5>
          </>
        ))}
      <form onSubmit={e=>onSubmit(e)}>
        <h2>Deja tu comentario</h2>
        <input type="text" />
        <textarea />
        <input type="submit" value={"comentar"} />
      </form>
    </div>
  );
}

export default ComentPlant;
