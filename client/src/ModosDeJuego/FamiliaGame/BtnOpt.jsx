import React from "react";

export default function BtnOpt({handleClick, correct, e}) {
  return (
    <button
      className={`opt-btn-fa ${
        e.clicked ? (!correct ? "incorrecta" : "correcta") : " "
      }`}
      onClick={() => handleClick(e)}
    >
      {e.text}
    </button>
  );
}
