import "./boton.css";

const Pregunta = ({ pregunta, opciones, onHandleClick, finalGame }) => {
  return (
    <div className="cont-ge">
      <h1>{pregunta}</h1>
      <div className="btn-img-option-ge">
        {opciones.map((opcion) => (
          <button
            key={opcion.index}
            onClick={() => onHandleClick(opcion)}
            className={`${
              opcion.clicket && opcion.type
                ? "correcta"
                : opcion.clicket && !opcion.type
                ? "incorrecta"
                : ""
            }`}
            disabled={finalGame}
          >
            <img src={opcion.url} alt="Imagen de opción" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pregunta;
