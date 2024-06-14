import React,{Component} from "react";
import Producto from "./Producto";

class Productos extends Component{
    constructor(){
        // Llamo metodo de la clase padre que se llama igual que el metodo de donde fue invocado, osea llama a contructor() de Component
        super()
        // Creo el estado inicial en el constructor que esta compuesto por una o mas propiedades
        this.state = {
            // Simulacion de la base de datos con una propiedad
            productos: [
            {
                id: 1,
                tittle: "Moto G",
                price: 1000,
                category: "Celulares"
            },
            {
                id: 2,
                tittle: "Moto X",
                price: 1500,
                category: "Celulares"
            },
            {
                id: 3,
                tittle: "iPhone",
                price: 2000,
                category: "Celulares"
            }
        ]
        }
    }
    // Metodo definido por nosotros para modificar el contenido de la pagina, debe hacerse con arrow method
    filtrar = () => {
        // Metodo de Component para cambiar alguna propiedad del estado inicial y hacer que React vuelva a reinyectar la pantalla
        this.setState({
             productos: [{
                id: 3,
                tittle: "iPhone",
                price: 2000,
                category: "Celulares"
            }]
        })
    }
    render(){
        // Uso del metodo map para barrer la propiedad producto tal cual esta definida en el estado inicial
        // Como dentro tiene un Array con Objetos de JS seguimos usando el metodo map
        return(
            <div>
                {this.state.productos.map(producto => <Producto title={producto.tittle} price={producto.price} category={producto.category}/>)}
                <button onClick={this.filtrar}>Filtrar</button>
            </div>
        )
    }
}

export default Productos