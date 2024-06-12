import React,{Component} from "react";

class Precio extends Component{
    render(){
        const valorPrecio = 4500
        return(
            <div>
                <h2>Precio: ${valorPrecio}</h2>
            </div>
        )
    }
}

export default Precio