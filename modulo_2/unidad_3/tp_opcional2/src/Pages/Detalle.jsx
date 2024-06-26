import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"
import Nombre from "../Components/Nombre"
import Precio from "../Components/Precio"

import Imagen from "../Components/Imagen"

function Detalle() {
    const {id}= useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [producto, setProducto] = useState({})
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
                <Nombre texto={producto.title}/>
                <Precio valor={producto.price}/>
                {producto.pictures.map(pircture => <Imagen direccion={pircture.url} texto={producto.title} />)}
            </div>
        )
    }
}

export default Detalle