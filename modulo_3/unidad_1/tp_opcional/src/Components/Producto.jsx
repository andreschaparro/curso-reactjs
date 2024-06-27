import React from "react";
import Nombre from "./Nombre";
import Precio from "./Precio";
import Boton from "./Boton";
import Imagen from "./Imagen";

function Producto({
    id,
    title, 
    price,
    thumbnail}) {
    return(
        <>
            <Nombre texto={title}/>
            <Precio valor={price}/>
            <Imagen direccion={thumbnail} texto={title}/>
            <Boton ruta={`/producto/${id}`} texto={"Ver Detalle"}/>
        </>
    )
}

export default Producto