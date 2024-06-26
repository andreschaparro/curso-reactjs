import React from "react";
import { Link } from "react-router-dom";

function Producto({
    id,
    title,
    category_id,
    price,
    thumbnail}) {
    // uso de template string para armar una url con parte fija y una parte variable que sera una propiedad
    // uso del atributo thumbnail para obtener imagenes
    return(
        <div>
            <h2>{title}</h2>
            <p>{category_id}</p>
            <p>{price}</p>
            <img src={thumbnail}></img>
            <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
        </div>
    )
}

export default Producto