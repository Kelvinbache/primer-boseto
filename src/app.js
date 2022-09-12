const buscardor = document.querySelector("input");
const caja = document.getElementById("caja");

/*exportando la api*/
import { api } from "./api.js";
import { alerta } from "./swataler.js";

/*comienza el envio*/
const btn = document.getElementById("btn");
btn.addEventListener("click", valor);

/*validando la busquedad */
function valor(e) {
  e.preventDefault();
  api(buscardor.value);
}

/*esto se encarga de crear nuevas imagenes */
export function creadorElemento(perros) {
  /********************agregando la imgen*****************************/
  const imagen = document.createElement("img");
  imagen.setAttribute("src", perros);
  imagen.setAttribute("class","fotos")
  /*********agregando link****************/

  caja.appendChild(imagen);

  /*funtiones llamadas*/
  imagLInk(imagen);
  return cambio(imagen);
}

/*pone un evento a las imagenes para mostra un alerta para decidir*/
function imagLInk(imagen) {
  imagen.addEventListener("click", alerta);
}

/*busca por toda la cajas y borra los elementos*/
export function borrar() {
  for (let i = 0; i < caja.childNodes.length; i++) {
    const element = caja.childNodes[i].remove();
  }
}

/*funcion de cambio*/
function cambio(){
  if (caja.childNodes.length > 1) caja.childNodes[0].remove(); 
}


/*cosas que falta poner 
2) creador de links
*/
