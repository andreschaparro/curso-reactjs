# Ordenamiento del codigo parte 1

Separar los .jsx en dos carpetas: Components y Pages. Se mueve todo salvo App.jsx.

Actualizar los paths de los imports.

# Bases de datos

Cuando usamos React, Angular, Vue, o Mobile no podemos hacer un `SELECT * FROM` a una base de datos. Vamos a acceder a la base de datos a traves de la capa de servicios.

El backend va a tener el contacto con la base de datos y con la capa de servicios. Esto es programacion del lado del servidor y no veremos como hacerlo.

Vamos a consumir datos utilizando el protocolo HTTP. Para lo cual, se hace un request a una URL y se reciben los datos en el response. Los datos vienen en formato jSON.

Cuando estamos en este contexto, decimos que estamos usando una API REST.

Los verbos del protocolo HTTP tienen que ver con que vamos a hacer sobre la base de datos:

- GET: leer.
- POST: crear.
- PUT: actualizar.
- DELETE: borrar.

En el curso vamos a usar la siguiente URL:

[API mercadolibre](https://api.mercadolibre.com/sites/MLA/search?q=ipod)

# Fetch

Es un metodo de JS para obtener una promesa y luego los datos.

En `Productos.jsx`, podemos ver su uso con .then y .catch:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";

function Productos(){
    const titulo = "Listado de productos"
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
    // Para buscar datos de la API Rest de ML tal cual se haria con componentDidMount
    useEffect(
        () => {
            // fetch nos devuelve una promesa
            // const prom = fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)")
            // console.log(prom)
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)")
            // el res tiene no solo los datos, sino cosas de HTML, entonces debo aplicar el metodo json()
            .then((res) => res.json())
            // json() devuelve otra promesa... De esta forma se concatenan promesas que se resuelven con .then
            .then((responseData) => {console.log(responseData)})
            // solo uno por si explota...
            .catch((e) => {
                console.log(e)
            })
        },
        []
    )
    useEffect(
        () => {
            console.log("Se modifico producto", productos)
        },
        [productos]
    )
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

export default Productos
```

En `Productos.jsx`, podemos ver su uso con async y await:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";

function Productos(){
    const titulo = "Listado de productos"
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
    // Para buscar datos de la API Rest de ML tal cual se haria con componentDidMount
    useEffect(
        () => {
            // Lo mismo de antes pero definiendo una funcion con async await
            const result = async () => {
                // Da la respuesta HTML
                // const res1 = fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)")
                // console.log(res1)
                // Da los datos
                try {
                    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)")
                    console.log(res)
                } catch(e) {
                    console.log(e)
                }
            }
            // Debo llamar a la funcion
            result();
        },
        []
    )
    useEffect(
        () => {
            console.log("Se modifico producto", productos)
        },
        [productos]
    )
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

export default Productos
```

En `Productos.jsx`, podemos ver una combinacion:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";

function Productos(){
    const titulo = "Listado de productos"
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
    // Para buscar datos de la API Rest de ML tal cual se haria con componentDidMount
    useEffect(
        () => {
            const result = async () => {
                try {
                    // forma mixta en una sola linea
                    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)").then((res)=>res.json())
                    console.log(res)
                } catch(e) {
                    console.log(e)
                }
            }
            // Debo llamar a la funcion
            result();
        },
        []
    )
    useEffect(
        () => {
            console.log("Se modifico producto", productos)
        },
        [productos]
    )
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

export default Productos
```

La mas usada es la ultima opcion.

En `Productos.jsx`, podemos ver como usar los datos obtenidos con fetch para generar los componentes:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";

function Productos(){
    const titulo = "Listado de productos"
    // Estado para mostrar un cargando... y luego los productos
    const [isLoading, setIsLoading] = useState(true)
    // Estado para guardar los productos recuperados en useEffect
    const [productos, setProductos] = useState([])
    // Hook similar a componentDidMount para buscar productos con la API Rest de ML
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)").then((res)=>res.json())
                    // dentro de responseData en results tengo los productos
                    console.log(responseData.results)
                    setProductos(responseData.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result();
        },
        []
    )
    if(isLoading){
        return(
            <div>
                <h1>{titulo}</h1>
                Cargando...
            </div>
        )
    } else {
        // Ojo con los nombres que devuelve la API, categoty la devuelve como category_id
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category_id}/>)}
            </div>
        )
    }
}

export default Productos
```

# Ordenamiento del codigo parte 2

Crear una carpeta llamada Services.

Dentro crear un archivo por entidad de datos, no por componente. En este caso, `productosServices.js`. Su contenido sera:

```
export function getAllProductos() {
  return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)").then(
    (res) => res.json()
  );
}
```

Por lo que el contenido de `Productos.jsx` quedara:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosServices";

function Productos(){
    const titulo = "Listado de productos"
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getAllProductos()
                    console.log(responseData.results)
                    setProductos(responseData.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result();
        },
        []
    )
    if(isLoading){
        return(
            <div>
                <h1>{titulo}</h1>
                Cargando...
            </div>
        )
    } else {
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category_id}/>)}
            </div>
        )
    }
}

export default Productos
```

La ventaja de separar los archivos de esta forma, es que la logica de obtencion y manipulacion de los datos queda separada de los componentes.

# Axios

Hay que instalarlo.

Ejecutar `npm install axios` en el mismo lugar donde ejecutamos `npm start`. Si ya esta incluido en `package.json`, basta con hacer `npm install`.

Es una alternativa a fetch que tiene mas robustez, escalabilidad, y funcionalidades.

1. Crear una carpeta llamado `Config` dentro de `src`.
2. Crear un archivo llamado `axios.js` dentro de `Config`.
3. Modificar su contenido:

```
import axios from "axios";

// Crea una conexion a la base de datos (instancia)
export default axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

```

3. Modificar el contenido de `productosServices.js`:

```
import instance from "../Config/axios";

export function getAllProductos() {
  //return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)").then(
  //  (res) => res.json()
  //);
  return instance.get("sites/MLA/search?q=ipod");
}

```

4. Modificar el contenido de `Productos.jsx`:

```
import React,{useState, useEffect}  from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosServices";

function Productos(){
    const titulo = "Listado de productos"
    const [isLoading, setIsLoading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getAllProductos()
                    //console.log(responseData.results)
                    // Dentro de la propiedad data vienen los datos con axios
                    console.log(responseData)
                    // setProductos(responseData.results)
                    setProductos(responseData.data.results)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result();
        },
        []
    )
    if(isLoading){
        return(
            <div>
                <h1>{titulo}</h1>
                Cargando...
            </div>
        )
    } else {
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category_id}/>)}
            </div>
        )
    }
}

export default Productos
```

Como vemos, no hace falta el res.json.
