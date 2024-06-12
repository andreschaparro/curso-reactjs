import React,{Component} from "react";
import Banner from "./Banner";

// Nombre del archivo debe ser igual a la clase y debe comenzar con mayuscula
// Aplicamos herencia de Component
class Home extends Component{
    //Metodo render
    render(){
        // con {} se pueden mostrar valores
        const numero = 1
        // return debe devolver un solo div o un fragment como en este caso
        // dentro del div o fragment puede haber mas divs
        // un fragment no se renderiza en ningun contenedor html
        return(
            <>
                <div>
                    Home React 2024
                    {numero}
                    <Banner />
                </div>
                <div>
                    Home React 2024
                    <Banner />
                </div>
            </>
        )
    }
}

// Exporto la clase para poder usar este componente
export default Home