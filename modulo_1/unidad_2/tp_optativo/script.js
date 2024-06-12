const sumar = () => {
  const { operando1, operando2 } = obtenerOperandos();
  actualizarResultado(operando1 + operando2);
};

const restar = () => {
  const { operando1, operando2 } = obtenerOperandos();
  actualizarResultado(operando1 - operando2);
};

const multiplicar = () => {
  const { operando1, operando2 } = obtenerOperandos();
  actualizarResultado(operando1 * operando2);
};

const dividir = () => {
  const { operando1, operando2 } = obtenerOperandos();
  if (operando2 == 0) {
    actualizarResultado("No se puede dividir por 0");
  } else {
    actualizarResultado(operando1 / operando2);
  }
};

const obtenerOperandos = () => {
  const operando1 = parseFloat(document.getElementById("operando1_id").value);
  const operando2 = parseFloat(document.getElementById("operando2_id").value);
  return {
    operando1: verificarOperando(operando1),
    operando2: verificarOperando(operando2),
  };
};

const verificarOperando = (operando = 0) => {
  if (isNaN(operando)) {
    return 0;
  } else {
    return operando;
  }
};

const actualizarResultado = (resultado = "ups...") => {
  document.getElementById(
    "resultado_id"
  ).innerHTML = `El resultado es: ${resultado}.`;
};
