const plantaACarta = ({
  codPlant,
  namePlant,
  descripPlant,
  type,
  imagePlant,
}) => ({
  id: codPlant,
  nombre: namePlant,
  subnombre: namePlant?.split(",").slice(1),
  caracteristica: type,
  img: imagePlant,
  descripcion: descripPlant,
});

const plantaADetalle = ({
  codPlant,
  namePlant,
  descripPlant,
  ubication,
  ligth,
  whater,
  size,
  type,
  climate,
  toxicity,
  statePlant,
  imagePlant,
}) => ({
  title: namePlant.split(",")[0],
  subtitle: namePlant.split(",").slice(1),
  img: imagePlant,
  description: descripPlant,
  caracteristics: [
    { type: "type", value: type.join(", ") },
    { type: "ubication", value: ubication.join(", ") },
    { type: "ligth", value: ligth.join(", ") },
    { type: "whater", value: whater.join(", ") },
    { type: "size", value: size.join(", ") },
    { type: "climate", value: climate.join(", ") },
    {
      type: "toxicity",
      value: toxicity
        ? "Si, y bastante. Tenga cuidado!"
        : "No tiene toxicidad",
    },
  ],
});
export { plantaACarta, plantaADetalle };
