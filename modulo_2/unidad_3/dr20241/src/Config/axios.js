import axios from "axios";

// Crea una conexion a la base de datos (instancia)
export default axios.create({
  baseURL: "https://api.mercadolibre.com/",
});
