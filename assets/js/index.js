var precio = 400000;

totalPagarSpan = document.querySelector(".valor-total");

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var cantidad = 0;
var totalPagar = 0;

function calcularCompra(tipo_operacion) {

  // entra aqui si es para sumar
  if (tipo_operacion == "S") {
        cantidad = cantidad + 1;
  } else {
         // entra aqui si es para restar
        if (cantidad > 0) cantidad = cantidad - 1;
  }

  // se muestran los resultados
  cantidadSpan = document.querySelector(".cantidad");
  cantidadSpan.innerHTML = cantidad;

  // se calcula el precio total
  totalPagar = precio * cantidad;
  totalPagarSpan.innerHTML = totalPagar;

}
