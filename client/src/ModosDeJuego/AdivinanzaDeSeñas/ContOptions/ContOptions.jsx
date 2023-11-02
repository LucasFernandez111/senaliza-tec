import OptionBtn from "../OptionBtn/OptionBtn";

export default function ContOptions({
  text,
  options,
  juegoTerminado,
  handleClick,
}) {
  return (
    <div className="opts-adivina-game">
      <h2>{text}</h2>

      {options.map((option) => (
        <OptionBtn
          key={option.index}
          option={option}
          juegoTerminado={juegoTerminado}
          handleClick={handleClick}
        ></OptionBtn>
      ))}
    </div>
  );
}
