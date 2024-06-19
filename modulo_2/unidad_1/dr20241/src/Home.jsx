import React,{Component} from "react";
import Banner from "./Banner";
import Productos from "./Productos";

// Componente utilizando funciones
function Home(){
    // Se retorna directamente lo que se va a mostrar
    return(
        <>
            <div>
                <Banner />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <Productos />
            </div>
        </>
    )
}

/*
class Home extends Component{
    render(){
        const numero = 1
        return(
            <>
                <div>
                    <Banner />
                </div>
                <div>
                    <Banner />
                </div>
                <div>
                    <Productos />
                </div>
            </>
        )
    }
}
*/

export default Home
