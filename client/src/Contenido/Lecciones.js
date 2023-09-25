import vocalA from "./Image/N0-Vocales/A.png";
import vocalE from "./Image/N0-Vocales/E.png";
import vocalI from "./Image/N0-Vocales/I.png";
import vocalO from "./Image/N0-Vocales/O.png";
import vocalU from "./Image/N0-Vocales/U.png";
import num1 from "./Image/N1-Numeros/1.png";
import num2 from "./Image/N1-Numeros/2.png";
import num3 from "./Image/N1-Numeros/3.png";
import num4 from "./Image/N1-Numeros/4.png";
import num5 from "./Image/N1-Numeros/5.png";
import num6 from "./Image/N1-Numeros/6.png";
import num7 from "./Image/N1-Numeros/7.png";
import num8 from "./Image/N1-Numeros/8.png";
import num9 from "./Image/N1-Numeros/9.png";
import num10 from "./Image/N1-Numeros/10.png";
import amarillo from "../Contenido/Image/N3-Colores/amarillo.png";
import azul from "../Contenido/Image/N3-Colores/azul.png";
import colores from "../Contenido/Image/N3-Colores/colores.png";
import rojo from "../Contenido/Image/N3-Colores/rojo.png";

export const lecciones = [
  {
    id: 0,
    titulo: "¡¡Empezando la aventura!!",
    contenido: {
      contPrincipal:
        "Bienvenido a SeñalizaTec y a tu camino de nuevo conocimiento donde aprenderás de forma divertida sobre la lengua de señas (LSA). En esta primera lección empezaremos con lo más básico de lo básico, las vocales “A,E,I,O,U”......",
      contSecundario: [
        {
          subtitulo: null,
          img: null,
          text: null,
        },
      ],
    },
    link: {
      return: "/home",
      next: "/leccion/1",
    },
  },
  {
    id: 1,
    titulo: "“A” por mi primera seña.",
    contenido: {
      contSecundario: [
        {
          subtitulo: "Para empezar vamos a reconocer la vocal “A”.",
          img: vocalA,
          text: "Esta seña se identifica como un puño completamente cerrado y con el pulgar casi sobresaliendo hacia arriba.",
        },
      ],
    },
    link: {
      return: "/leccion/0",
      next: "/mododejuego/0",
    },
  },
  {
    id: 2,
    titulo: "Siguiendo nuestra aventura",
    contenido: {
      contSecundario: [
        {
          subtitulo: "Para seguirle el orden miremos la “E”",
          img: vocalE,
          text: "Para poder realizarla de manera correcta se debe tener parte de la mano cerrada, menos los dedos pulgar e índice, estos estarán en forma de un arco, cerca del ojo como si estuviéramos sacando una medida.",
        },
      ],
    },
    link: {
      return: "/mododejuego/0",
      next: "/mododejuego/1",
    },
  },
  {
    id: 3,
    titulo: "Completando las vocales.",
    contenido: {
      contSecundario: [
        {
          subtitulo: "Empecemos con la “I”",
          img: vocalI,
          text: "Con el dedo índice como si tuviéramos señalando algo lo hacemos indicando a lo que sería como el ojo.",
        },
        {
          subtitulo: "Pasamos a la “O”",
          img: vocalO,
          text: "Esta seña se realiza juntando el dedo índice con el pulgar formando lo que sería un circulo mientras mantenemos los demás dedos estirado.",
        },
        {
          subtitulo: "Y por último la “U”",
          img: vocalU,
          text: "Para esta seña se mantienen extendidos los dedos índice y el meñique, mientras que los demás permanecen cerrados formando lo que sería como unos cuernos de toro.",
        },
      ],
    },
    link: {
      return: "/mododejuego/1",
      next: "/mododejuego/2",
    },
  },
  {
    id: 4,
    titulo: "Empecemos con los más sencillos",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "Para realizar el número 1",
          img: num1,
          text: "Debemos cerrar todos los dedos menos el dedo índice, dejándolo bien extendido.",
        },
        {
          subtitulo: "Para el número 2",
          img: num2,
          text: "Debemos hacer exactamente lo mismo que con el 1, solo que en este caso el dedo medio también tiene que estar extendido.",
        },
        {
          subtitulo: "Para el número 3",
          img: num3,
          text: "Además del índice y el medio, el pulgar también va a tener que estar extendido.",
        },
        {
          subtitulo: "Para el número 4",
          img: num4,
          text: "Vamos a dejar todos los dedos extendidos, excepto el pulgar. ",
        },
        {
          subtitulo: "Y por último el 5",
          img: num5,
          text: "Que se indica extendiendo todos los dedos. ",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/mododejuego/4",
    },
  },
  {
    id: 5,
    titulo: "Aprende a expresar el número 6",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "",
          img: num6,
          text: "Esta seña no se realiza simplemente extendiendo alguno de los dedos, como las anteriores. Para este número debemos cerrar todos los dedos, excepto el pulgar, que en este caso va a quedar extendido. Y por último, debemos apretar los dedos que quedaron cerrados, repetidamente contra nuestra palma.",
        },
      ],
    },
    link: {
      return: "/mododejuego/4",
      next: "/leccion/6",
    },
  },
  {
    id: 6,
    titulo: "Aprende a expresar el número 7 ",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "",
          img: num7,
          text: "Primero debemos cerrar todos los dedos, excepto el índice que debe quedar extendido, para luego pasarlo de forma horizontal por arriba de la naríz",
        },
      ],
    },
    link: {
      return: "/leccion/5",
      next: "/mododejuego/5",
    },
  },
  {
    id: 7,
    titulo: "Aprende a expresar el número 8, 9 y 10",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "8",
          img: num8,
          text: "Deben estar extendidos los dedos, medio, índice y pulgar, mientras q los demás deben estar cerrados. Ya con los dedos en esa posición, por último, apoyar el pulgar a un costado de nuestro ojo.",
        },
        {
          subtitulo: "9",
          img: num9,
          text: "La posición de los dedos debe ser la misma que la del número anterior, solo que en este caso, el índice y el medio, deben estar pegados. En esa posición, debemos arrastrar sobre la cara de forma semicircular esos mismos dedos de arriba hacia bajo, justo por encima de nuestra ceja.",
        },
        {
          subtitulo: "10",
          img: num10,
          text: "Para este último número, vamos a tener que dejar extendidos solamente el dedo índice y el pulgar. Luego con estos, vamos a intentar formar un circulo pero sin que las puntas se toquen, de forma que parezca la letra C. Por último, con los dedos en esa posición, solamente vamos a tener que apoyarlos a un costado de la cara, cerca del ojo.",
        },
      ],
    },
    link: {
      return: "/mododejuego/5",
      next: "/mododejuego/6",
    },
  },
  {
    id: 8,
    titulo: "COLORES",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo:
            "Presentamos el primer nivel dedicado a la temática COLORES.",
          img: colores,
          text: "Nos adentraremos en el apasionante mundo de la paleta de colores. En este punto inicial de nuestro viaje de aprendizaje, nos centraremos en uno de los conceptos fundamentales y fascinantes: los colores primarios.",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/leccion/9",
    },
  },
  {
    id: 9,
    titulo: "AMARILLO",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "Como primer color, vamos a conocer el AMARILLO",
          img: amarillo,
          text: "Se representa moviendo la mano de izquierda a derecha, con los dedos extendidos y el pulgar cerrado, con la palma hacia afuera. ¡Como si estuviéramos saludando!",
        },
      ],
    },
    link: {
      return: "/leccion/8",
      next: "/mododejuego/8",
    },
  },
  {
    id: 10,
    titulo: "ROJO",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "Es el turno del color Rojo, ¡vamos a conocerlo!",
          img: rojo,
          text: "Podemos observar un pequeño movimiento desde atrás hacia adelante desde nuestra barbilla, sólo extendiendo los dedos índice y pulgar.",
        },
      ],
    },
    link: {
      return: "/leccion/9",
      next: "/mododejuego/9",
    },
  },
  {
    id: 11,
    titulo: "AZUL",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "Vamos a finalizar este primer nivel con el color Azul.",
          img: azul,
          text: "Vamos a extender todos los dedos, excepto el pulgar y el dedo medio, que vamos a abrir y cerrar repetidamente.",
        },
      ],
    },
    link: {
      return: "/leccion/10",
      next: "/mododejuego/10",
    },
  },
];
