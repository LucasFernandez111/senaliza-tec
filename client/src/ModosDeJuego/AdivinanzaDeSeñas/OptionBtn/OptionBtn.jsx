import "./OptionBtn.css";

export default function OptionBtn({ option, juegoTerminado, handleClick }) {
  return (
    <div
      className={`opt-btn-adivina-game ${
        option.clicket ? !option.result
          ? "opt-btn-adivina-game-false"
          : "opt-btn-adivina-game-true"
          : ""
      }`}
      onClick={() =>
        !juegoTerminado ? handleClick(option) : console.log("Juego Termino")
      }
    >
      <span>{option.name}</span>
    </div>
  );
}
