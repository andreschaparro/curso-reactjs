import React, {useState, useEffect} from "react";
import Producto from "../Components/Producto"
import { getAllProductos } from "../Services/productosServices";
import app from "../Config/firebase"

function Home() {
    console.log(app)
    const titulo = "Listado de productos"
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [buscar, setBuscar] = useState("ipod")
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getAllProductos(buscar)
                    setProductos(responseData.data.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result()
        },
        [buscar]
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
                <input type="text" value={buscar} onChange={(event) => setBuscar(event.target.value)}></input>
                {productos.map(producto => <Producto {...producto}/>)}
            </div>
        )
    }
}

export default Home