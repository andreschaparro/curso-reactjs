// ES5 funciones
var registrarse = function () {
  console.log("Registrarse");

  // ES5 variables
  var nombre = document.form_registro.nombre.value;
  var apellido = document.form_registro.apellido.value;

  // ES6
  // let y const son validas (tiene scope) dentro de las llaves donde se lo definio. No se recomienda usar var.
  // let es una variable y const una constante.
  const email = document.getElementById("email_id").value;
  let password = document.getElementById("password_id").value;

  console.log(nombre, apellido, email, password);

  if (nombre == "") {
    document.getElementById("nombre_error").innerHTML =
      "El campo nombre es obligatorio";
  } else {
    document.getElementById("nombre_error").innerHTML = "";
  }

  // ES6 alternativa a concatenacion con +
  document.getElementById(
    "mensaje"
  ).innerHTML = `Gracias ${nombre}, ${apellido} por registrarse`;
};

// ES6 funciones
const tipoSeguro = () => {
  const tipoSeguro = document.getElementById("tipo_seguro_id").value;
  let precio;
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
  console.log(precio);
};

// ES6 parametros por default
const sumar = (a, b = 0) => {
  return a + b;
};

const resultado = sumar(1, 2);
const resultadoSinB = sumar(1);
console.log(resultado);
console.log(resultadoSinB);

const getAlumno = () => {
  // Retorna un objeto
  return {
    nombreAlumno: "Andres",
    apellidoAlumno: "Chaparro",
    documentoAlumno: "12345678",
  };
};

// ES6 funcion que devuelve una promise
const getAlumnoPromise = (endpoint) => {
  return new Promise(function (resolve, reject) {
    if (endpoint) {
      resolve({
        nombreAlumno: "Andres",
        apellidoAlumno: "Chaparro",
        documentoAlumno: "12345678",
      });
    } else {
      reject("Error de lectura");
    }
  });
};

const getCursos = () => {
  // Es lo mismo que abajo pero mas largo
  /* 
  const cursos = new Array();
  cursos[0] = "php";
  cursos[1] = "js";
  cursos[2] = "12345678";
  return cursos;
  */
  return ["php", "js", "react"];
};

// ES6 declaracion de async para poder usar await
const init = async () => {
  console.log("----INIT----");
  const alumno = getAlumno();
  console.log(
    // ES5 Uso de '.' para acceder a las propiedades del objeto
    alumno.nombreAlumno,
    alumno.apellidoAlumno,
    alumno.documentoAlumno
  );

  // ES6 deconstruccion de un objeto por el nombre de las propiedades
  const { nombreAlumno, apellidoAlumno } = getAlumno();
  console.log(nombreAlumno, apellidoAlumno);

  // ES5 manejo de arrays
  const cursos = getCursos();
  console.log(cursos[0], cursos[1], cursos[2]);

  // ES6 deconstruccion de un array por posicion
  const [first, second] = getCursos();
  console.log(first, second);

  for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
  }

  // ES6 de la promise recuperamo loss datos o el mensaje de error con .then y .catch
  const alumnoDB = getAlumnoPromise("http")
    .then((alumno) => console.log("getAlumnoPromise", alumno))
    .catch((error) => console.log("error", error));

  // Primero se va a mostrar esto en la consola porque la promise se resulve antes de obtener los datos
  console.log("Next", alumnoDB);

  // ES6 de la promise recuperamos los datos o el mensaje de error con await y una estructura try catch
  // Es otra forma de hacer lo mismo de antes pero esta se suele usar mas.
  try {
    const { nombreAlumno, apellidoAlumno } = await getAlumnoPromise("http");
    console.log(nombreAlumno, apellidoAlumno);
  } catch (e) {
    console.log(e);
  }
};

init();
