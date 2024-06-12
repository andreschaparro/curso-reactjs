// ejecucion directa
alert("Hola Mundo File");

// ejecucion por evento
function saludo() {
  alert("Hola Mundo Evento");
}

var nombre; // variable global

function registrarse() {
  console.log("Registrarse");

  //uso del dom para capturar valores
  var nombre = document.form_registro.nombre.value; // variable local a la funcion
  console.log(nombre);
  var apellido = document.form_registro.apellido.value;
  console.log(nombre, apellido);

  // uso de selectores para acceder por id
  var email = document.getElementById("email_id").value;
  console.log(nombre, apellido, email);
  var password = document.getElementById("password_id").value;
  console.log(nombre, apellido, email, password);

  // modificar html usando selectores por id
  if (nombre == "") {
    document.getElementById("nombre_error").innerHTML =
      "El campo nombre es obligatorio";
  } else {
    document.getElementById("nombre_error").innerHTML = "";
  }

  document.getElementById("mensaje").innerHTML = "Gracias por registrarse";
}
