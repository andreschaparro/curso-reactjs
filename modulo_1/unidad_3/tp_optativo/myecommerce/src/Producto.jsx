import React,{Component} from "react";
import Nombre from "./Nombre";
import Descripcion from "./Descripcion";
import Sku from "./Sku";
import Cantidad from "./Cantidad";
import Precio from "./Precio";

class Producto extends Component{
    render(){
        return(
            <>
                <Nombre />
                <Descripcion />
                <Precio />
                <Sku />
                <Cantidad />
            </>
        )
    }
}

export default Producto