import vocalA from "./Image/N0-Vocales/A.png";
import vocalE from "./Image/N0-Vocales/E.png";
import vocalI from "./Image/N0-Vocales/I.png";
import vocalO from "./Image/N0-Vocales/O.png";
import vocalU from "./Image/N0-Vocales/U.png";

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
      next: "/leccion/1"
    },
  },
  {
    id: 1,
    titulo: "“A” por mi primera seña.",
    contenido: {
      contPrincipal:
        "Como primera señas vamos a identificar cuáles son y cómo se hacen:",
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
      next: "/mododejuego/0"
    }
  },
  {
    id: 2,
    titulo: "Siguiendo nuestra aventura",
    contenido: {
      contPrincipal:
        "¡Muy bien! Ahora que sabes reconocer una de las 5 vocales, en esta lección aprenderemos la que sigue.",
      contSecundario: [
        {
          subtitulo: "Para seguirle el orden miremos la “E”",
          img: vocalE,
          text: "Para poder realizarla de manera correcta se debe tener parte de la mano cerrada, menos los dedos  pulgar e índice, éstos estarán en forma de un arco, cerca del ojo como si estuviéramos sacando una medida.",
        },
      ],
    },
    link: {
      return: "/mododejuego/0",
      next: "/mododejuego/1"
    }
  },
  {
    id: 3,
    titulo: "Completando las vocales.",
    contenido: {
      contPrincipal:
        "Ya para finalizar, con las 3 últimas vocales I, O y U, te dejaremos demostrar tus habilidades adquiridas en los siguientes ejercicios.",
      contSecundario: [
        {
          subtitulo: "Empecemos con la “I”",
          img: vocalI,
          text: "Con el dedo índice como si tuviéramos señalando algo lo hacemos indicando a lo que seria como el ojo.",
        },
        {
          subtitulo: "Pasamos a la “O”",
          img: vocalO,
          text: "Esta seña se realiza juntando el dedo índice con el pulgar formando lo que seria un circulo mientras mantenemos los demás dedos estirado.",
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
      next: "/mododejuego/2"
    }
  },
];
