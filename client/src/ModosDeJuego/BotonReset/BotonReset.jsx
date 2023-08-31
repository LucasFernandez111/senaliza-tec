import React from "react";

export default function BotonReset({ onReset, gameOver }) {
  return (
    <div className={`cont-reset-button ${gameOver ? "show" : ""}`}>
      <button
        onClick={onReset}
        className={`reset-button ${gameOver ? "show" : ""}`}
      >
        Reintentar
      </button>
    </div>
  );
}
