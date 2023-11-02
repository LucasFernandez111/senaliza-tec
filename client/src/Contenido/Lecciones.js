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
import familia from "../Contenido/Image/N4-Familia/familia.png";
import mama from "../Contenido/Image/N4-Familia/mama.png";
import hijo from "../Contenido/Image/N4-Familia/hijo.png";
import papa from "../Contenido/Image/N4-Familia/papa.png";

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
  {
    id: 12,
    titulo: "Conceptos básicos sobre la Familia en LSA",
    contenido: {
      contPrincipal:
        "En este primer nivel de la categoría “Familia”, vamos a conocer algunas señas básicas y cómo realizar las variaciones según el género.",
      contSecundario: [
        {
          subtitulo: "",
          img: familia,
          text: "Para representar la palabra Familia, se realiza con ambas manos una forma de “montito” tocando todos los dedos entre sí hacia adentro. Dejando una mano fija abajo y la otra por encima girando sobre ésta última.",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/leccion/13",
    },
  },
  {
    id: 13,
    titulo: "Mamá",
    contenido: {
      contPrincipal: "Vamos a aprender a decir “Mamá” en lengua de señas.",
      contSecundario: [
        {
          subtitulo: "",
          img: mama,
          text: "Se realiza tocándose levemente debajo de los hombros, en este caso, de izquierda a derecha.",
        },
      ],
    },
    link: {
      return: "/leccion/12",
      next: "/leccion/14",
    },
  },
  {
    id: 14,
    titulo: "Papá",
    contenido: {
      contPrincipal: "¿Cómo decir “Papá” en LSA?",
      contSecundario: [
        {
          subtitulo: "",
          img: papa,
          text: "Vamos a tocar repetidamente la nariz con nuestro dedo pulgar apoyado, y presionando con el dedo índice.",
        },
      ],
    },
    link: {
      return: "/leccion/13",
      next: "/mododejuego/11",
    },
  },
  {
    id: 15,
    titulo:
      "Vamos a hablar sobre cómo definir el género para la familia en LSA.",
    contenido: {
      contPrincipal:
        "Para ello, primero se presenta la seña que vamos a utilizar y al final se aclara el género, utilizando la seña de la vocal A, como femenino y la vocal O, como masculino. Vamos a recordar estas últimas señas..",
      contSecundario: [
        {
          subtitulo: "Vocal “A”.",
          img: vocalA,
          text: "Esta seña se identifica como un puño completamente cerrado y con el pulgar casi sobresaliendo hacia arriba.",
        },
        {
          subtitulo: "Vocal “O”.",
          img: vocalO,
          text: "Esta seña se realiza juntando el dedo índice con el pulgar formando lo que seria un circulo mientras mantenemos los demás dedos estirado.",
        },
      ],
    },
    link: {
      return: "/mododejuego/11",
      next: "/leccion/16",
    },
  },
  {
    id: 16,
    titulo: "Hij@",
    contenido: {
      contPrincipal:
        "Para finalizar este primer nivel vamos a aprender a decir “Hijo”",
      contSecundario: [
        {
          subtitulo: "Hijo",
          img: hijo,
          text: "Para realizar la seña, simplemente debemos sacar nuestra mano desde abajo de la barbilla hacia adelante, con el puño cerrado y extendiendo sólo los dedos índice y medio.",
        },
      ],
    },
    link: {
      return: "/leccion/15",
      next: "/mododejuego/12",
    },
  },
  {
    id: 17,
    titulo: "Conceptos básicos sobre el tiempo en LSA.",
    contenido: {
      contPrincipal:
        "Como primer nivel en esta sección, vamos a conocer algunos conceptos sobre días, semana y los meses del año.",
      contSecundario: [
        {
          subtitulo: "Conozcamos la palabra “Día”.",
          img: hijo,
          text: "Se realiza arrastrando sobre la mejilla el dedo indice, y luego se forma con el puño cerrado y el pulgar sobresaliendo levemente hacia arriba, como la vocal “A”",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/leccion/18",
    },
  },
  {
    id: 18,
    titulo: "Aprenderemos cómo representar la palabra “Semana” en LSA.",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "",
          img: hijo,
          text: "Con el dedo índice extendido se arrastra sobre el aire desde derecha a izquierda hasta llegar al hombro.",
        },
      ],
    },
    link: {
      return: "/leccion/17",
      next: "/mododejuego/13",
    },
  },
  {
    id: 19,
    titulo: "Mes",
    contenido: {
      contPrincipal: "Ahora aprenderemos a cómo representar la palabra “Mes”",
      contSecundario: [
        {
          subtitulo: "",
          img: hijo,
          text: "Esta empezará por arriba como si fuese una “A” y hará un recorrido hacia abajo como si estuviésemos golpeando con un martillo.",
        },
      ],
    },
    link: {
      return: "/mododejuego/13",
      next: "/mododejuego/14",
    },
  },
  {
    id: 20,
    titulo: "Realizar una presentación en “LSA”",
    contenido: {
      contPrincipal:
        "Vamos a ver la introducción a preguntas y algo de presentación.",
      contSecundario: [
        {
          subtitulo: "“YO”",
          img: hijo,
          text: "Para empezar, ¿Cómo hacemos para referirnos a nosotros mismos?. Sencillo, vamos a señalar sobre nuestro pecho con el dedo índice.",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/",
    },
  },
  {
    id: 21,
    titulo: "Realizar una presentación en “LSA”",
    contenido: {
      contPrincipal: "",
      contSecundario: [
        {
          subtitulo: "“VOS”",
          img: hijo,
          text: "Para referirse a alguien más, lo que tenemos que hacer es señalar a la persona en frente nuestro con el dedo índice.",
        },
      ],
    },
    link: {
      return: "/home",
      next: "/",
    },
  },
];
