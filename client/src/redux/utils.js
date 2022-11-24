const plantaACarta = ({
  codPlant,
  namePlant,
  descripPlant,
  tipo,
  imagePlant,
  likes
}) => ({
  id: codPlant,
  nombre: namePlant,
  subnombre: namePlant.split(",").slice(1),
  caracteristica: tipo,
  img: imagePlant,
  descripcion: descripPlant,
  likes
});

const plantaADetalle = ({
  namePlant,
  descripPlant,
  localizacion,
  luz,
  riego,
  dimension,
  tipo,
  clima,
  toxicidad,
  statePlant,
  likes,
  imagePlant,
}) => ({
  title: namePlant.split(",")[0],
  subtitle: namePlant.split(",").slice(1),
  img: imagePlant,
  description: descripPlant,
  likes,
  caracteristics: [
    { type: "localizacion", value: localizacion.join(", ") },
    { type: "luz", value: luz.join(", ") },
    { type: "riego", value: riego.join(", ") },
    { type: "dimension", value: dimension.join(", ") },
    { type: "tipo", value: tipo.join(", ") },
    { type: "clima", value: clima.join(", ") },
    {
      type: "toxicidad",
      value: toxicidad
        ? "Si, y bastante. Tenga cuidado!"
        : "No tiene toxicidad",
    },
  ],
});
export { plantaACarta, plantaADetalle };
