import React,{Component} from "react";
import Titulo from "./Titulo";
import Mensaje from "./Mensaje";
import Boton from "./Boton";

class Home extends Component{
    constructor(){
        super()
        this.state = {
            contador : 0
        }
    }
    incrementar = () => {
        this.setState(
            {
                contador : this.state.contador + 1 
            }
        )
    }
    decrementar = () => {
        this.setState(
            {
                contador : this.state.contador - 1
            }
        )
    }
    render(){
        return(
            <>
                <Titulo titulo={"Contador"}/>
                <Mensaje mensaje={this.state.contador} />
                <Boton tipo={"button"} funcion={this.incrementar} texto={"Incrementar"} />
                <Boton tipo={"button"} funcion={this.decrementar} texto={"Decrementar"} />
            </>
        )
    }
}

export default Home