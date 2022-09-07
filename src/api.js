/*llamando a la contendor*/
import {creadorElemento} from "./app.js";

export async function api(buscardor) {

  /*datos  para buscar*/
  const DosApi = await fetch(`https://dog.ceo/api/breed/${buscardor}/images/random`);
  const datos = DosApi.json();

  /*verificar si no tenemos error de busqueda */
  if (DosApi.status === 404 || DosApi.status === 405)
    console.error("tenemos problemas");
  else
       datos.then((mostra) => {
         recorrer(mostra.message);
    });
}

/*estructurando forma visual*/
function recorrer(perros){
  creadorElemento(perros);
}

/*cambiar foto  
usar una condicion para ver sia una foto

*/