const plantTypes = {
  localizacion: ["interior", "exterior"],
  luz: [
    "pleno sol",
    "media sombra",
    "luz filtrada",
    "intensa sin exposición solar directa",
  ],
  riego: [
    "poco frecuente",
    "espaciado",
    "abundante",
    "regular",
    "moderado",
    "abundante en verano y moderado en invierno",
  ],
  dimension: ["grande", "mediano", "pequeño"],
  tipo: [
    "floral",
    "sin flores",
    "apta maceta",
    "arbol",
    "aromatica",
    "huerta",
    "medicinal",
    "frutal",
    "arbusto",
    "suculenta",
    "cactus",
    "trepadora",
  ],
  clima: [
    "calido",
    "humedo",
    "templado",
    "resistente al frio",
    "resistente a la sequia",
    "poco resistente al viento",
    "arido",
    "resistente al viento",
  ],
};

module.exports = { plantTypes };
