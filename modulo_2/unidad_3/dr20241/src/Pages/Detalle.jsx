import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    // useParams es un Hook de react-router-dom que nos permite recuperar propiedades de una URL
    const {id}= useParams()

    // producto es un objeto, a diferencia de lo que pasaba en productos que era un array
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // buscamos los datos del producto con getByIdProductos y el id recuperado de la URL
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getByIdProductos(id)
                    setProducto(responseData.data)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result()
        },
        // id esta declarado por fuera del useEffect, entonces lo declaro como parametro
        [id]
    )

    if (isLoading) {
        return(
            <div>
                Cargando...
            </div>
        )
    } else {
        return(
            <div>
                <Link to="/">Inicio</Link>
                <h1>{producto.title}</h1>
                <img src={producto.thumbnail}></img>
                <p>{producto.price}</p>
            </div>
        )
    }

}

export default Detalle