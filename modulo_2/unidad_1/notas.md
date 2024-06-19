# Ciclo de vida de un componente

Son metodos que nos permiten acceder al componente cuando esta en un determinado instante.

El primer instante importante del ciclo de vida es componentDidMount. Se llama despues de que el componente se inyecto en la pantalla. Se lo suele utilizar para inyectar un contenido inicial y luego refrescarlo tras leer la base de datos.

El segundo instante importante del ciclo de vida es componentDidUpdate. Se llama despues de que el componente sufre una actualizacion ya sea porque recibe props o porque cambia su estado.

En `Productos.jsx`, podemos ver su uso:

```
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

export default Productos
```

## Componentes utilizando funciones

La tendencia actual es usar funciones y no clases para definir componentes.

En `Home.jsx`, podemos ver como se hace:

```
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

```

## Props con funciones

En `Producto.jsx`, podemos ver su uso:

```
// Se puede obiar si solo importo React
//import React from "react";

// Forma de recibir props ya deconstruyendo el objeto al recibirlo como parametros
function Producto({tittle,category,price}) {
    // props es un objeto
    // console.log("props", props)
    // const {tittle,category,price} = props
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
*/

export default Producto
```

## Hooks

Los hooks nos permiten manejar estados, y otras cosas, cuando tenemos componentes creados utilizando funciones.

Para estados, se utiliza el hook llamado useState. El mismo, se invoca una vez por cada estado que deba tener el componente. Y, devuelve un array de dos posiciones con el estado y la funcion que permite modificarlo.

En `Productos.jsx`, podemos ver su uso:

```
// useState es para poder usar estados dentro de componentes definidos como funcion
import React,{useState} from "react";
import Producto from "./Producto";

function Productos(){
    // Uso de un deconstructor para obtener el nombre y la funcion de modificacion de un estado utilizando useState
    // Cuando se leean los estados se llama por el nombre del mismo, no se usa mas this.state
    const [titulo,setTitulo] = useState("Listado de productos")
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
```

El hook llamado useEffect, se utiliza para hacer algo similar a lo hecho en ciclo de vida. Al mismo, se le pasa una arrow function a ejecutar y un array de dependencias.

Si el array esta vacio, tiene una comportamiento similar a componentDidMount. En cambio, con una o mas dependencia se comporta de manera similar al componentDidUpdate.

En `Producto.jsx`, podemos ver su uso:

```
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
```
