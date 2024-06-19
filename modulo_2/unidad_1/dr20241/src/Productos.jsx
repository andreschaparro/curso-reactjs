// useState es para poder usar estados dentro de componentes definidos como funcion
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";

function Productos(){
    const titulo = "Listado de productos"
    // Uso de un deconstructor para obtener el nombre y la funcion de modificacion de un estado utilizando useState
    // Cuando se leean los estados se llama por el nombre del mismo, no se usa mas this.state
    const [productos,setProductos] = useState([
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
    ])
    // Similar a componentDidUpdateProducto
    useEffect(
        () => {
            console.log("Se modifico producto", productos)
        },
        [productos]
    )
    // Funcion de JS
    const filtrar = () =>{
        setProductos([{
            id: 3,
            tittle: "iPhone",
            price: 2000,
            category: "Celulares"
            }
        ])
    }
    return(
        <div>
            <h1>{titulo}</h1>
            {productos.map(producto => <Producto title={producto.tittle} price={producto.price} category={producto.category}/>)}
            <button onClick={filtrar}>Filtrar</button>
        </div>
    )
}

/*
class Productos extends Component{
    constructor(){
        // Llamo metodo de la clase padre que se llama igual que el metodo de donde fue invocado, osea llama a contructor() de Component
        super()
        // Creo el estado inicial en el constructor que esta compuesto por una o mas propiedades
        this.state = {
            // Simulacion de la base de datos con una propiedad
            
        }
    }
    // Metodos heredados de Component para acceder a estados del ciclo de vida del componente
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(prevProps, prevState){
        // prevProps props previas a la actualizacion
        // prevState estado previo a la actualizacion
        console.log("componentDidUpdateProductos", prevProps, prevState)
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
*/

export default Productos