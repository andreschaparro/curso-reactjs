import React from "react";
import Nombre from "./Nombre";
import Precio from "./Precio";
import Boton from "./Boton";

function Producto ({nombre, precio}) {
    return(
        <>
            <Nombre texto={nombre}/>
            <Precio valor={precio}/>
            <Boton texto={"Ver Detalle"}/>
        </>
    )
}

export default Producto