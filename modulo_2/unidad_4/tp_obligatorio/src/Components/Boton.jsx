import React from "react";
import { Link } from "react-router-dom";

function Boton({
    funcion, 
    ruta, 
    texto}) {
    return(
        <button onClick={funcion}><Link to={ruta}>{texto}</Link></button>
    )
}

export default Boton