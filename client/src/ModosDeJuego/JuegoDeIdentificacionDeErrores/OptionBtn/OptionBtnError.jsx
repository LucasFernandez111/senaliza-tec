import React from 'react'
import './OptionBtnError.css'

export default function OptionBtnError({ option, juegoTerminado, handleClick }) {
  return (
    <div
      className={`opt-btn-error-game ${
        option.clicket ? option.result
          ? "opt-btn-error-game-false"
          : "opt-btn-error-game-true"
          : ""
      }`}
      onClick={() =>
        !juegoTerminado ? handleClick(option) : console.log("Juego Termino")
      }
    >
      <img src={option.url} alt={option.url}/>
    </div>
  )
}
