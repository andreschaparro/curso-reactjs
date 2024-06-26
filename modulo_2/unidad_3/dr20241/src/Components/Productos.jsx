import React,{useState, useEffect}  from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosServices";

function Productos(){
    const titulo = "Listado de productos"
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getAllProductos()
                    //console.log(responseData.results)
                    // Dentro de la propiedad data vienen los datos con axios
                    console.log(responseData)
                    // setProductos(responseData.results)
                    setProductos(responseData.data.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result();
        },
        []
    )
    if(isLoading){
        return(
            <div>
                <h1>{titulo}</h1>
                Cargando...
            </div>
        )
    } else {
        // le pasamos a cada componente producto la propiedad id
        // lo reemplazamos para usar el operador spread
        // {productos.map(producto => <Producto id={producto.id} title={producto.title} price={producto.price} category={producto.category_id}/>)}
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto {...producto}/>)}
            </div>
        )
    }
}

export default Productos