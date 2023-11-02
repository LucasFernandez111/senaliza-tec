export default function ImagenAdivinaGame({ img, text }) {
  const { url } = img;

  return <img className="img-adivina-game" src={url} />;
}
