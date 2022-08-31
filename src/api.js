/* const api = async () =>{
     const DosApi = await fetch('https://dog.ceo/api/breeds/list/all')
     .then(mostra => { console.log(mostra) });
}

api();
*/

const api = new Promise((resolve, reject) => {

  /*pidiendo a la api*/
  const dog = fetch("https://dog.ceo/api/breeds/list/all");
  /*esto si tira un error*/
  if (dog.status === 404 || dog.status === 405) reject(console.error());
  else resolve(dog);
});

api.then((mostra) => {
  console.log(mostra);
});
