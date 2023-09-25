import uno from "../Contenido/Image/N1-Numeros/1.png";
import dos from "../Contenido/Image/N1-Numeros/2.png";
import tres from "../Contenido/Image/N1-Numeros/3.png";
import cuatro from "../Contenido/Image/N1-Numeros/4.png";
import cinco from "../Contenido/Image/N1-Numeros/5.png";
import seis from "../Contenido/Image/N1-Numeros/6.png";
import siete from "../Contenido/Image/N1-Numeros/7.png";
import ocho from "../Contenido/Image/N1-Numeros/8.png";
import nueve from "../Contenido/Image/N1-Numeros/9.png";
import diez from "../Contenido/Image/N1-Numeros/10.png";
import amarillo from "../Contenido/Image/N3-Colores/amarilloB&W.png";
import azul from "../Contenido/Image/N3-Colores/AzulB&W.png";
import colores from "../Contenido/Image/N3-Colores/colorB&W.png";
import rojo from "../Contenido/Image/N3-Colores/rojoB&W.png";

export const operaciones = [
  {
    id: 1,
    señas: [uno, dos],
    signo: "+",
    resultado: tres,
    opciones: [cuatro, cinco, tres],
  },
  {
    id: 2,
    señas: [cuatro, uno],
    signo: "+",
    resultado: cinco,
    opciones: [cinco, dos, tres],
  },
  {
    id: 3,
    señas: [cuatro, dos],
    signo: "-",
    resultado: dos,
    opciones: [uno, tres, dos],
  },
];

export const contOrdenamiento = [
  {
    id: 0,
    señas: [amarillo, azul, colores, rojo],
    opciones: ["rojo", "azul", "amarillo", "colores"],
    orden: ["amarillo", "azul", "colores", "rojo"],
  },
  {
    id: 1,
    señas: [azul, colores, amarillo, rojo],
    opciones: ["rojo", "azul", "amarillo", "colores"],
    orden: ["azul", "colores", "amarillo", "rojo"],
  },
];
