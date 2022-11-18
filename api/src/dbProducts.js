const dbProducts = [
  {
    nameProd: "Humus de lombriz",
    descripProd:
      "Disponible en sacos de 17 litros (10 kg).\nEs un fertilizante orgánico y ecológico, resultado de la transformación, por parte de las lombrices rojas de California, del compostaje procedente de estiercol natural ya fermentado varias veces. Este proceso hace que el humus de lombriz sea un material muy fino y muy rico en nutrientes, fácilmente asimilable por las plantas.\nEl humus final tiene un tamaño de partícula fino y homogéneo, sin exceso de humedad y sin malos olores. Es muy rico en macro y micro nutrientes fácilmente asimilables por la planta, es biodinámico con un mayor número de componentes (enzimas, hormonas, vitaminas, población microbiana, etc.).\nPara la preparación de nuestros sustratos, en el cultivo en recipientes, podemos combinar la fibra de coco, que nos proporciona muy buenas características físicas, con el humus de lombriz, que nos va a proporcionar materia orgánica de calidad con abundantes nutrientes para nuestras plantas.",
    codCategory: 3,
    starts: 4,
    precio: 107,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/3340/3340_2.jpg?fit=crop&w=224&h=224&auto=format&q=100",
  },
  {
    nameProd: "Sustrato Universal",
    descripProd:
      "Sustrato de cultivo de muy altas prestaciones pensado para todo tipo de plantas ornamentales y hortícolas, en condiciones tanto de interior como de exterior.\nSacos de 20 litros.\nDisponemos de este sustrato de origen ecológico.\nComposición: mezcla de fibra de coco, turba rubia, turba negra, material vegetal compostado, materia orgánica y perlita.",
    codCategory: 3,
    starts: 4,
    precio: 100,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/2111/2111_1.png?fit=crop&w=224&h=224&auto=format&q=100",
  },
  {
    nameProd: "Fertilizante Líquido Universal COMPO 1300ml",
    descripProd:
      "Fertilizante ideal para todo tipo de plantas ornamentales, verdes, de flor, de interior o de terraza.\nCon magnesio y microelementos para un crecimiento vigoroso.\nLos microelementos aumentan la resistencia a enfermedades y estimula el crecimiento de las raíces.\nFormulación mineral universal idónea para todo tipo de plantas ornamentales, tanto verdes como de flor, de interior o terraza.\nDosificación sencilla y limpia gracias al tapón marcado con los niveles I a III.",
    codCategory: 4,
    starts: 5,
    precio: 210,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/169447/169447_1.JPG?fit=crop&w=224&h=224&auto=format&q=100",
  },
  {
    nameProd: "Sustrato universal ecológico Batlle 45 litros",
    descripProd:
      "El Sustrato Universal Ecológico BATLLE es un sustrato formulado con materias primeras de origen ecológico y sin aplicación de ningún componente químico, ofreciendo unas condiciones de cultivo excelente con un medio 100% ecológico y natural. La aportación de nutrientes con humus de lombriz y guano le confieren un excelente equilibrio nutricional para las plantas que garantiza su correcto crecimiento y desarrollo.\nComposición: turba rubia, turba negra, fibra de coco, perlita y humus de lombriz. Sustrato de cultivo. Sustrato de mezcla con 4g/l de abono peletizado 4-5-7 ecológico.\nCaracterísticas Técnicas: Materia orgánica sobre Materia Seca: 58% • pH: 7,2; Densidad aparente compactada en laboratorio: 350 g/l; Conductividad Eléctrica (CE): 1.4 dS/m",
    codCategory: 3,
    starts: 5,
    precio: 452400,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/101673/101673_1.jpg?fit=crop&w=224&h=224&auto=format&q=100",
  },
  {
    nameProd: "Abono Orgánico Frutales BioFlower 2kg",
    descripProd:
      "Bioflower Abono Frutales es un abono orgánico completo con una composición equilibrada de nutrientes NPK (nitrógeno-fósforo-potasio) junto micronutrientes, especialmente preparado para una adecuada producción de los árboles frutales. También puede aplicarse en olivo y vid. Contiene además magnesio (Mg), elemento esencial para la clorofila de las hojas.",
    codCategory: 2,
    starts: 4,
    precio: 175,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/3449/3449_1.jpg?fit=crop&w=224&h=224&auto=format&q=100",
  },
  {
    nameProd: "Abono Plantas de Flor y Rosales 1 kg - Asocoa",
    descripProd:
      "Abono complejo NPK granulado altamente soluble y equilibrado. Cada gránulo contiene todos los nutrientes necesarios para el perfecto desarrollo de todo tipo de plantas y árboles. Aplícalo regularmente según las dosis indicadas y verás crecer tus plantas sanas, resistentes y vigorosas. Contiene azufre que prolonga el tiempo de liberación del nitrógeno, y magnesio que estimula la formación de flores y otorga resistencia frente enfermedades, heladas, sequías y procesos de estrés de la planta.",
    codCategory: 1,
    starts: 5,
    precio: 123,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/186622/186622_1.jpeg?fit=crop&w=224&h=224&auto=format&q=100",
  },

  {
    nameProd: "Semillas ecológicas de Espinaca Gigante de Invierno",
    descripProd:
      "De porte voluminoso con hojas carnosas de gran tamaño de color verde oscuro. Buena resistencia a espigarse. Apta para todo tiempo, especialmente para cosechar en primavera e invierno. Variedad muy productiva.",
    codCategory: 1,
    starts: 4,
    precio: 12,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/70/70_1.jpg?fit=crop&w=384&h=384&auto=format&q=100",
  },

  {
    nameProd: "Semillas de Lavanda Officinalis",
    descripProd:
      "Vivaz, se utilizan sus hojas y sus flores. Muy apta en perfumería por su aroma, también se usa en especialidades culinarias. Forma de cultivo. Se siembra de Abril a Mayo y se cultiva de asiento en líneas a 40 cm. de distancia. Aclarar a 30 cm. Cosecha. A partir de verano.",
    codCategory: 1,
    starts: 4,
    precio: 15,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/70/70_1.jpg?fit=crop&w=384&h=384&auto=format&q=100",
  },

  {
    nameProd: "Semillas de Rúcula",
    descripProd:
      "Muy indicada para la formación de ensaladas mixtas, con sabor muy característico.Forma de cultivo. Se siembra de Enero a Octubre directamente en el lugar definitivo. Cosecha. A partir de 1 mes y medio.",
    codCategory: 1,
    starts: 5,
    precio: 13,
    stockActual: 50,
    stockMinimo: 5,
    stockMaximo: 50,
    imageProd:
      "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/70/70_1.jpg?fit=crop&w=384&h=384&auto=format&q=100",
  },
];

module.exports = dbProducts;
