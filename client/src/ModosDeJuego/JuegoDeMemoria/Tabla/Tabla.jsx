import Blocke from "../Blocke/Blocke";

export default function Tabla({
  animacion,
  handleClick,
  blockes,
  style = none,
}) {
  const estiloTabla = {
    display: "grid",
    gridTemplateColumns: `repeat(${style.grid_repet}, 150px)`,
    gridGap: "10px",
    maxWidth: style.maxWidth,
    margin: "auto",
  };

  return (
    <main style={estiloTabla}>
      {blockes.map((blocke, i) => {
        return (
          <Blocke
            key={`${i}_${blocke.name}`}
            animating={animacion}
            handleBlockeClick={handleClick}
            blocke={blocke}
          />
        );
      })}
    </main>
  );
}
