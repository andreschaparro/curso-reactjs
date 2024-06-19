import React,{useState} from "react";
import Nombre from "./Nombre";
import Descripcion from "./Descripcion";
import Precio from "./Precio";
import Sku from "./Sku";
import Cantidad from "./Cantidad";
import Boton from "./Boton";
import Mensaje from "./Mensaje";

function Producto () {
    const producto = {
        nombre: "Rollo Sussex",
        descripcion: "Rollo De Cocina Sussex Premium Maxi 3x100 Paños",
        precio: 4500,
        sku: 123456789,
        cantidad: 1000
    }
    const [gracias, setGracias] = useState("")
    // () => setGracias("Gracias por su compra") funcion anonima con return implicito
    return(
        <>
            <Nombre texto={producto.nombre}/>
            <Descripcion texto={producto.descripcion}/>
            <Precio valor={producto.precio}/>
            <Sku valor={producto.sku} />
            <Cantidad valor={producto.cantidad}/>
            <Boton funcion={() => setGracias("Gracias por su compra")} texto={"Comprar"}/>
            <Mensaje texto={gracias}/>
        </>
    )
}

export default Producto