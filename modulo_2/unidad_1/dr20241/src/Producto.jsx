import React, {useEffect} from "react";

function Producto({tittle,category,price}) {
    // useEffect similar para hacer algo similar a componentDidUpdate
    useEffect(
        () => {
            console.log("Se modifico tittle", tittle)
        },
        [tittle]
    )
    return(
        <div>
            <h2>{tittle}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <button>Ver Detalle</button>
        </div>
    )
}

/*
class Producto extends Component{
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdateProducto", prevProps, prevState)
    }
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
*/

export default Producto