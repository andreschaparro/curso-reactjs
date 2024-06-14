import React,{Component} from "react";

class Boton extends Component{
    render(){
        return(
            <button type={this.props.tipo} onClick={this.props.funcion}>{this.props.texto}</button>
        )
    }
}

export default Boton