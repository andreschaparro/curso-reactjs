import React, {useState, useEffect} from "react";
import Producto from "../Components/Producto"
import { getAllProductos } from "../Services/productosServices";

function Home() {
    const titulo = "Listado de productos"
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getAllProductos()
                    setProductos(responseData.data.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result()
        },
        []
    )
    if (isLoading) {
        return(
            <div>
                <h1>{titulo}</h1>
                Cargando...
            </div>
        )
    } else {
         return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto {...producto}/>)}
            </div>
        )
    }
}

export default Home