import React, {useEffect} from "react";

function Producto({title,category,price}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Producto