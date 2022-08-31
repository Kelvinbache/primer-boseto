const buscardor = document.querySelector('input');
export const caja = document.getElementById('caja');

/*exportando la api*/
import {api} from "./api.js";

/*comienza el envio*/
const btn = document.getElementById('btn');
 btn.addEventListener('click',valor);

 /*validando la busquedad */
 function valor(e) {
   e.preventDefault();
  api(buscardor.value);
 }

