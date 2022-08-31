import {buscador} from "./app.js";

async function api() {
  /*datos  para buscar*/
  const DosApi = await fetch(`https://dog.ceo/api/breeds/${buscador}/images/random`);
  const datos = DosApi.json();

  /*verificar si no tenemos error de busqueda */
  if (DosApi.status === 404 || DosApi === 405) console.error("tenemos problemas");
  else  datos.then((mostra) => {console.log(mostra) });
}

api();
