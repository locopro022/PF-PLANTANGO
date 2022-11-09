const plantaACarta = ({
  codPlant,
  namePlant,
  descripPlant,
  ubication,
  luminosidad,
  riego,
  tamano,
  tipo,
  clima,
  toxicidad,
  statePlant,
  imagePlant,
}) => ({
  id: codPlant,
  nombre: namePlant.split(",")[0],
  subnombre: namePlant.split(",").slice(1),
  caracteristica: tipo.split(","),
  img: imagePlant,
});
export { plantaACarta };
