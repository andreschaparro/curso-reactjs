import React,{Component} from "react";

class Producto extends Component{
    render(){
        // this hace referencia a la instancia del componente y props viene por herencia
        console.log("props", this.props)
        return(
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.category}</p>
                    <p>{this.props.price}</p>
                    <button>Ver Detalle</button>
                </div>
            </div>
        )
    }
}

export default Producto