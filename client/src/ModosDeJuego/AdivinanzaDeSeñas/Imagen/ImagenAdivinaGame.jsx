export default function ImagenAdivinaGame({ img }) {
  const { url } = img;

  return <img className="img-adivina-game" src={url} />;
}
