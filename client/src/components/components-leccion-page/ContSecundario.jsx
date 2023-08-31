import React from "react";

export default function ContSecundario({ cont }) {
  return (
    <div className="cont-secundario">
      {cont !== null ? (
        cont.map((c, i) => (
          <div key={i}>
            <h3 className="titulo-cont-sec">{c.subtitulo}</h3>
            <div className="cont-sec-item">
              {c.img !== null ? <img className="img-cont-sec" src={c.img}></img> : null}
              <p>{c.text}</p>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
