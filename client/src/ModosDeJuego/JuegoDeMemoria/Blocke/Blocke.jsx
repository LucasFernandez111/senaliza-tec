import "./Blocke.css";

export default function Blocke({ animating, handleBlockeClick, blocke }) {


  return (
    <div
      className="memo-block"
      onClick={() => !blocke.flipped && !animating && handleBlockeClick(blocke)}
    >
      <div
        className={`memo-block-inner ${blocke.flipped && "memo-block-flipped"}`}
      >
        <div className="memo-block-front"></div>
        <div className="memo-block-back">
          {blocke.type === "img" ? <img src={blocke.item} /> : blocke.item}
        </div>
      </div>
    </div>
  );
}
