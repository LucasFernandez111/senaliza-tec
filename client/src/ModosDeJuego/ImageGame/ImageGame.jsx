import React, { useState, useEffect } from "react";
import "./imageGame.css";

function ImageGame({ cont, gameComplete, gameOver, reset }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [point, setPoint] = useState(0);
  const [currentImgs, setCurrentImgs] = useState([]);
  const [currentOpts, setCurrentOpts] = useState([]);
  const [final, setFinal] = useState(false);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    // Desordenar las matrices al inicio y reinicio del juego
    const imgsDesordenadas = arrayRevuelto([...cont.imgs]).map(
      (img, index) => ({
        ...img,
        id: index,
        clicked: false,
      })
    );

    setCurrentImgs(imgsDesordenadas);
    setCurrentOpts(arrayRevuelto([...cont.opts]));
    setCurrentStep(0);
    setPoint(0);
    setFinal(false);
  }, [reset]);

  useEffect(() => {
    if (final) {
      if (point === currentOpts.length) {
        gameComplete(); // El usuario ha completado todas las imágenes
      } else {
        gameOver(); // El usuario ha completado todas las opciones, pero no todas las imágenes
      }
    }
  }, [final]);

  const handleImageClick = (opt) => {
    // Cambiar la propiedad "clicked" de la imagen a "true"
    const copyImgs = [...currentImgs];
    const updatedImgs = copyImgs.map((img) => {
      if (img.id === opt.id) {
        return { ...img, clicked: true };
      }
      return img;
    });

    setCurrentImgs(updatedImgs);

    const allImagesClicked = updatedImgs.every((image) => image.clicked);

    if (allImagesClicked) {
      setFinal(true);
    }

    console.log(opt.opt);
    console.log(currentOpts[currentStep].opt);
    setCurrentStep(currentStep + 1);

    if (opt.opt === currentOpts[currentStep].opt) {
      // Si la opción es correcta, aumentar currentStep
      setPoint(point + 1);
    }
  };

  return (
    <div className="cont-img-game">
      <div>
        {currentImgs.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt} // Utiliza el atributo "alt" de la imagen
            onClick={image.clicked ? () => {} : () => handleImageClick(image)}
            className={`img-img-game ${image.clicked ? "select" : ""}`}
          />
        ))}
      </div>

      <h1 className="title-img-game">
        Presione las opciones de arriba según el orden de las siguientes
        palabras:
      </h1>

      <div className="text-cont-game">
        {currentOpts.map((item, index) => (
          <span key={index} className="text-game">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageGame;
