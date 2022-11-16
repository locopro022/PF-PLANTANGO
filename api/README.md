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

## Rutas /products

## objeto product

ej:

```javascript
{
  nameProd: "Un producto.",//string
  descripProd: "Es un fertilizante, que fertiliza la tierra para que quede fertilizada",//string
  codCategoria: "Tierras y fertilizantes",//string
  estrellas: 2.3,//float
  precio: 120000,//int (es en centavos, centavos/100 = 100.00$)
  stockActual: 50,//int
  stockMinimo: 5,//int
  stockMaximo: 50,//int
  imageProd: "https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/186622/186622_1.jpeg?fit=crop&w=224&h=224&auto=format&q=100",//string (url a la imagen)
}
```

## rutas

son exactamente iguales a las de plants. Solo que con sus equivalencias, obviamente. ]

1. codPlant => codProd,

1. usar la ruta de tipos para filtros,

1. los precios vienen en centavos (intenta sumar 0.1 + 0.2 y entenderas porque),

1. No existe la ruta types, cuando pidas todos los productos recibiras una propiedad extra de tipo, por el cual podras filtrar.
   NO SE IMPLEMENTO LA FUNCIONALIDAD DE FILTRAR ENTRE PRECIO MAX Y MIN (AUN), asi que no esperes que funcione, simplemente usar para adelantar.

```javascript
{
  "page_count": 1,
  "results": [...],
  "page": 0,
  "types": {
    "codCategoria": [
      "Semillas",
      "Macetas",
      "Accesorios",
      "Tierras y fertilizantes"
    ],
    "stars": {
      "min": 4,
      "max": 5
    },
    "precio": {
      "min": "107300",
      "max": "452400"
    }
  }
}
```
