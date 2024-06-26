import React from "react";
import { Link } from "react-router-dom";

function Boton({
    ruta, 
    texto}) {
    return(
        <button><Link to={ruta}>{texto}</Link></button>
    )
}

export default Boton