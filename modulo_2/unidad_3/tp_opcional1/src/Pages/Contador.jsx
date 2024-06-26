import React,{useState} from "react"
import Mensaje from "../Components/Mensaje"
import Boton from "../Components/Boton"

function Contador(){
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        setContador(contador - 1)
    }
    return(
        <>
            <Mensaje texto={contador} />
            <Boton funcion={incrementar} texto={"Incrementar"} />
            <Boton funcion={decrementar} texto={"Decrementar"} />
        </>
    )
}

export default Contador