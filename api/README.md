# Documentacion plantango back-end

## RUTAS plants

## objeto plant

Recibiras el siguiente objeto:

ej:

```javascript
const plant = {
  namePlant: "Yuyo de la calle, Callerious Yuyivolous",
  descripPlant: "Esta planta necesita agua y luz.",
  localizacion: ["exterior"],
  luz: ["pleno sol"],
  riego: ["Moderado"],
  dimension: ["grande"],
  tipo: ["floral", "arbol"],
  clima: ["calido", "Arido", "resistente a la sequia"],
  toxicidad: false,
  imagePlant:
    "https://deraiz.ar/wp-content/uploads/2022/08/ef26fd4c-8c51-4de9-86c2-3deebfba5abb.jpeg",
};
```

## get /plants

La ruta get plants devuelve todas las plantas.

ej:

```javascript
const query = {
  search: "string",
  //si se busca, no se aplican los filtros, y visceversa
  filter: {
    propiedad: "string",
    propiedadArray: ["string", "string"],
    // se pasa un objeto planta el cual sera usado como comparacion.
  },
  sort: ["columna", "ASC" || "DESC"],
  //la columna y alguno de los dos ordenes
  page: 0,
  //la pagina a la que queres ir
};
axios.get("api_url/plants", { query: query }).then((results) => {
  console.log(results);
}) >>>
  {
    page_count: 5, //cantidad de paginas
    results: [{}, {}, {}], //array de objetos plant
    page: 0, //pagina actual
  };
```

## get /plants/types

Devuelve todas las caracteristicas que puede tener una planata, **ideal filtros**.

```javascript
const plantTypes = {
  localizacion: ["interior", "exterior"],
  luz: [
    "pleno sol",
    "media sombra",
    ...
  ],
  riego: [
    "poco frecuente",
    "espaciado",
    ...
  ],
  dimension: ["grande", "mediano", "pequeño"],
  tipo: [
    "floral",
    ...
  ],
  clima: [
    "calido",
    ...
  ],
};
```

## get /plants/:codPlant

Su unico parametro es la primaryKey(UUID) y se retorna un unico objeto planta.
**Se envia por params.**

## post /plants/creacion

Crea una planta a partir de los parametros enviados, el cual es un objeto planta.
**Se envia por body.** Se devuelve el objeto creado.

## put /plants

Se le envia un objeto, el cual no necesariamente tiene que tener todas las caracteristicas, la unica obligatoria es la primaryKey. Las otras serviran de actualizacion. **Se envia por body.**. Se devuelve el objeto actualizado.

## delete /:codPlant

Al igual que la ruta getEspecifica, su unico parametro es la primaryKey. Al ser borrada la fila, se retornara un objeto:

```javascript
{
  deleted: codPlant;
}
```
