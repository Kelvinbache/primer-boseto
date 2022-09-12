import { borrar } from "./app.js";
export function alerta() {
  swal
    .fire({
      icon: "error",
      title: "Quiere borrar",
      confirmButtonText: "Borrar foto",
    })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(borrar(), "foto borrada con exicto", "success");
      }
    });
}
