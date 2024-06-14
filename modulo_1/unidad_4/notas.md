## Props

Nos permite reutilizar un componente.

En `Productos.jsx` podemos ver como se inyecta el componente Producto varias veces y se le pasan propiedades de JS mediante props:

```
import React,{Component} from "react";
import Producto from "./Producto";

class Productos extends Component{
    render(){
        // Forma de pasar valores a traves de props al componente Producto
        return(
            <div>
                <Producto title="Moto G" price="$1000" category="celular"/>
                <Producto title="Moto X" price="$1500"/>
                <Producto title="iPhone" price="$2000" category="celular"/>
            </div>
        )
    }
}

export default Productos
```

En `Producto.jsx` podemos ver como se reciben las propiedades de JS mediante props:

```
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
```

Si le agregamos propiedades a Producto, debemos tener la precaucion de pasarlas en Productos. Como las propiedades son opcionales, no informaria error si la necesitaramos.

## Metodo map de un Array

Permite recorrer una array, tal cual lo hariamos con un for, y hacer algo con cada elemento del mismo.

En JSX debemos usar map.

En `Productos.jsx`, podemos ver su uso:

```
import React,{Component} from "react";
import Producto from "./Producto";

class Productos extends Component{
    render(){
        // Simulacion de la base de datos con un array de objetos de JS
        const productos = [
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
        // Uso del metodo map para barrer el Array que hace de base de datos
        // Como parametro, recibe un arrow function cuyo parametro representa una entrada del Array para cada iteracion
        // Como solo tendra una sentencia la arrow function, tiene un return implicito
        // Y el array de objetos producira un array de componentes Producto
        return(
            <div>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} cWategory={producto.category}/>)}
            </div>
        )
    }
}

export default Productos
```

Ahora, podemos separar el maquetado de los datos. Esto es muy importante, para cuando utilizemos una base de datos.

## Estado

Se utiliza cuando necesitamos modificar algo que esta en la pantalla en tiempo de ejecucion. Para inyectar algo nuevo no hace falta usar estados, lo hago como hasta ahora.

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
