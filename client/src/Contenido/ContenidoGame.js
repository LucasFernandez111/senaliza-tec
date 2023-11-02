import vocalA from "./Image/N0-Vocales/A_v2_G.png";
import vocalE from "./Image/N0-Vocales/E_v2_G.png";
import vocalI from "./Image/N0-Vocales/i-bn.png";
import vocalO from "./Image/N0-Vocales/O_v2_G.png";
import vocalU from "./Image/N0-Vocales/U_v2_G.png";
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
import amarillo from "../Contenido/Image/N3-Colores/amarilloB&W.png";
import azul from "../Contenido/Image/N3-Colores/AzulB&W.png";
import colores from "../Contenido/Image/N3-Colores/colorB&W.png";
import rojo from "../Contenido/Image/N3-Colores/rojoB&W.png";
import mama from "../Contenido/Image/N4-Familia/mama.png";
import papa from "../Contenido/Image/N4-Familia/papa.png";

export const contGames = [
  {
    id: 0,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: "¿Cuál de estas señas significa 'A'?",
      option: [
        {
          url: vocalE,
          type: false,
        },
        {
          url: vocalU,
          type: false,
        },
        {
          url: vocalI,
          type: false,
        },
        {
          url: vocalA,
          type: true,
        },
      ],
    },
    link: {
      return: "/leccion/1",
      next: "/leccion/2",
    },
    desblock: {
      leccionID: [2],
      modeGameID: [1],
      levelID: [],
    },
  },
  {
    id: 1,
    modeGame: "juego-de-completar",
    cont: {
      text: "Elefante comienza con la vocal ...",
      option: [
        {
          url: vocalE,
          type: true,
        },
        {
          url: vocalO,
          type: false,
        },
        {
          url: vocalI,
          type: false,
        },
        {
          url: vocalU,
          type: false,
        },
      ],
    },
    link: {
      return: "/leccion/2",
      next: "/leccion/3",
    },
    desblock: {
      leccionID: [3],
      modeGameID: [2],
      levelID: [],
    },
  },
  {
    id: 2,
    modeGame: "juego-de-memoria",
    cont: {
      items: [
        {
          item: "A",
          name: "A",
          type: "text",
        },
        {
          item: "E",
          name: "E",
          type: "text",
        },
        {
          item: "I",
          name: "I",
          type: "text",
        },
        {
          item: "O",
          name: "O",
          type: "text",
        },
        {
          item: "U",
          name: "U",
          type: "text",
        },
        {
          item: vocalA,
          name: "A",
          type: "img",
        },
        {
          item: vocalE,
          name: "E",
          type: "img",
        },
        {
          item: vocalI,
          name: "I",
          type: "img",
        },
        {
          item: vocalO,
          name: "O",
          type: "img",
        },
        {
          item: vocalU,
          name: "U",
          type: "img",
        },
      ],
    },
    link: {
      return: "/leccion/3",
      next: "/mododejuego/3",
    },
    desblock: {
      leccionID: [],
      modeGameID: [3],
      levelID: [],
    },
    style: {
      grid_repet: 5,
      maxWidth: "800px",
    },
  },
  {
    id: 3,
    modeGame: "adivinanza-de-señas",
    cont: {
      text: "Seleccione la vocal que corresponda",
      img: [
        {
          url: vocalA,
          name: "A",
        },
        {
          url: vocalU,
          name: "U",
        },
        {
          url: vocalE,
          name: "E",
        },
        {
          url: vocalI,
          name: "I",
        },
      ],
      options: ["A", "E", "I", "O", "U"],
    },
    link: {
      return: "/mododejuego/2",
      next: "/home",
    },
    desblock: {
      leccionID: [4, 8, 9, 12, 13, 14, 17, 18, 20],
      modeGameID: [4, 8, 11, 13],
      levelID: [1, 10, 19, 28, 37],
    },
  },
  {
    id: 4,
    modeGame: "juego-de-operaciones",

    cont: {
      text: '¿Cuántas letras contiene la palabra "ESCUELA"?',
      items: [],
    },
    link: {
      return: "/leccion/4",
      next: "/leccion/5",
    },
    desblock: {
      leccionID: [5, 6],
      modeGameID: [5],
      levelID: [],
    },
    style: {
      with: "30px",
    },
  },
  {
    id: 5,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: '¿Cuántas letras contiene la palabra "ESCUELA"?',
      option: [
        {
          url: num6,
          type: false,
        },
        {
          url: num3,
          type: false,
        },
        {
          url: num1,
          type: false,
        },
        {
          url: num7,
          type: true,
        },
      ],
    },
    link: {
      return: "/leccion/6",
      next: "/leccion/7",
    },
    desblock: {
      leccionID: [7],
      modeGameID: [6],
      levelID: [],
    },
  },
  {
    id: 6,
    modeGame: "adivinanza-de-señas",

    cont: {
      text: "Seleccione el número que corresponda",
      img: [
        {
          url: num6,
          name: "6",
        },
        {
          url: num8,
          name: "8",
        },
        {
          url: num9,
          name: "9",
        },
        {
          url: num7,
          name: "7",
        },
      ],
      options: ["6", "8", "9", "7", "10"],
    },
    link: {
      return: "/leccion/7",
      next: "/mododejuego/7",
    },
    desblock: {
      leccionID: [],
      modeGameID: [7],
      levelID: [],
    },
  },
  {
    id: 7,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: "¿Cuál es el resultado de 4 + 5 = ?",
      option: [
        {
          url: num1,
          type: false,
        },
        {
          url: num10,
          type: false,
        },
        {
          url: num6,
          type: false,
        },
        {
          url: num9,
          type: true,
        },
      ],
    },
    link: {
      return: "/mododejuego/6",
      next: "/home",
    },
    desblock: {
      leccionID: [7],
      modeGameID: [],
      levelID: [],
    },
  },
  {
    id: 8,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: "¿Qué seña representa la palabra “COLORES”?",
      option: [
        {
          url: azul,
          type: false,
        },
        {
          url: rojo,
          type: false,
        },
        {
          url: amarillo,
          type: false,
        },
        {
          url: colores,
          type: true,
        },
      ],
    },
    link: {
      return: "/leccion/9",
      next: "/leccion/10",
    },
    desblock: {
      leccionID: [10],
      modeGameID: [9],
      levelID: [],
    },
  },
  {
    id: 9,
    modeGame: "adivinanza-de-señas",
    cont: {
      text: "Seleccione el color que corresponda",
      img: [
        {
          url: amarillo,
          name: "AMARILLO",
        },

        {
          url: amarillo,
          name: "AMARILLO",
        },
        {
          url: amarillo,
          name: "AMARILLO",
        },
        {
          url: amarillo,
          name: "AMARILLO",
        },
      ],
      options: ["COLORES", "ROJO", "AZUL", "AMARILLO", "VIOLETA"],
    },
    link: {
      return: "/leccion/10",
      next: "/leccion/11",
    },
    desblock: {
      leccionID: [11],
      modeGameID: [10],
      levelID: [],
    },
  },
  {
    id: 10,
    modeGame: "juego-ordenamiento",
    cont: {
      text: "Seleccione el color que corresponda",
      option: [],
    },
    link: {
      return: "/leccion/11",
      next: "/home",
    },
    desblock: {
      leccionID: [],
      modeGameID: [],
      levelID: [],
    },
  },
  {
    id: 11,
    modeGame: "flechas-game",
    cont: {},
    link: {
      return: "/leccion/14",
      next: "/leccion/15",
    },
    desblock: {
      leccionID: [15, 16],
      modeGameID: [12],
      levelID: [],
    },
  },
  {
    id: 12,
    modeGame: "familia-game",
    cont: {},
    link: {
      return: "/leccion/16",
      next: "/home",
    },
    desblock: {
      leccionID: [11],
      modeGameID: [10],
      levelID: [],
    },
  },
  {
    id: 13,
    modeGame: "juego-pr-letras",
    cont: {
      pregunta:
        "¿Cuál es la seña que para poder representarla se debe realizar la seña de la vocal “A”,  al final?",
      opciones: [
        {
          text: "Lunes",
          opcion: false,
        },
        {
          text: "Día",
          opcion: true,
        },
        {
          text: "Semana",
          opcion: false,
        },
      ],
    },
    link: {
      return: "/leccion/18",
      next: "/leccion/19",
    },
    desblock: {
      leccionID: [19],
      modeGameID: [14],
      levelID: [],
    },
  },
  {
    id: 14,
    modeGame: "image-game",
    cont: {
      imgs: [
        {
          url: amarillo,
          opt: "semana",
          alt: "Semana",
        },
        {
          url: azul,
          opt: "dia",
          alt: "Dia",
        },
        {
          url: rojo,
          opt: "mes",
          alt: "Mes",
        },
      ],
      opts: [
        {
          text: "Semana",
          opt: "semana",
        },
        {
          text: "Dia",
          opt: "dia",
        },
        {
          text: "Mes",
          opt: "mes",
        },
      ],
    },
    link: {
      return: "/leccion/19",
      next: "/home",
    },
    desblock: {
      leccionID: [],
      modeGameID: [],
      levelID: [],
    },
  },
];
