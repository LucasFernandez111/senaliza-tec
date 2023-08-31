import React from 'react'
import OptionBtnError from '../OptionBtn/OptionBtnError'

export default function ConetOptionsErro({ options, juegoTerminado, handleClick }) {
  return (
    <div className="opts-error-game">
      {options.map((option) => (
        <OptionBtnError
          key={option.index}
          option={option}
          juegoTerminado={juegoTerminado}
          handleClick={handleClick}
        ></OptionBtnError>
      ))}
    </div>
  )
}
