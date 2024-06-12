function tipoSeguro() {
  var tipoSeguro = document.getElementById("tipo_seguro_id").value;
  var precio;
  // el switch contempla el tipo de dato, no poner 1 sino "1"
  switch (tipoSeguro) {
    case "1":
      precio = 500;
      break;
    case "2":
      precio = 1000;
      break;
    case "3":
      precio = 1500;
      break;
  }
  document.getElementById("mensaje_valor").innerHTML = "$" + precio;
}
