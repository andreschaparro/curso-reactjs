# React router

Hay que instalarlo. Para ello, ejectuar `npm install react-router-dom` en la misma ruta donde hacemos `npm start`.

Nos permitira que para una URL muestre algo y para otra un contenido diferente.

En `App.jsx`, podemos ver su uso:

```
import './App.css';
import Home from './Components/Home';
import Contador from './Components/Contador';
import Registro from './Components/Registro';
import Login from './Components/Login';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // uso de react router para mostrar
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

Se crearon los componentes funcionales `Login.jsx` y `Registro.jsx` pero se usaran mas adelante.

# Componente NotFound.jsx

En `App.jsx`, podemos ver su uso:

```
import './App.css';
import Home from './Components/Home';
import Contador from './Components/Contador';
import Registro from './Components/Registro';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // uso de react router
  // el match de rutas se ejecutan siguiendo el orden en que aparecen
  // path='*' hace match con todo por lo que debe estar al final
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

# Componente Link

Dentro de la misma aplicacion esta prohibido usar href, debido a que produce que se recargue toda la pagina, dejando de ser una SPA. Solo se puede usar para acceder a una pagina externa.

Para navegar dentro de la aplicacion se puede utilizar el componente Link de React router.

En `App.jsx`, podemos ver su uso:

```
import './App.css';
import Home from './Components/Home';
import Contador from './Components/Contador';
import Registro from './Components/Registro';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  // uso de react router
  // el match de rutas se ejecutan siguiendo el orden en que aparecen
  // path='*' hace match con todo por lo que debe estar al final
  // uso del componente Link para evitar recargar la pagina
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alta">Registro</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
          <li><Link to="/contador">Contador</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

```

# Ordenamiento del codigo parte 3

1. Mover los componentes que renderizan paginas a la carpeta `Pages`. Incluido `NotFound.jsx`.
2. Actualizar los imports.
3. Crear un componente llamado `NavBar.jsx` dentro de `Components`.
4. Modificar el contenido de `NavBar.jsx`:

```
import { Link } from "react-router-dom"

function NavBar(){
    // uso del componente Link para evitar recargar la pagina
    return(
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alta">Registro</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
          <li><Link to="/contador">Contador</Link></li>
        </ul>
    )
}

export default NavBar
```

5. Modificar el contenido de `App.jsx`:

```
import './App.css';
import Home from './Pages/Home';
import Contador from './Pages/Contador';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // uso de react router
  // el match de rutas se ejecutan siguiendo el orden en que aparecen
  // path='*' hace match con todo por lo que debe estar al final
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

```

6. Crear una carpeta llamada `Routes` dentro de `src`.
7. Dentro crear un componente llamado `Public.jsx`.
8. Modificar el contenido de `Public.jsx`:

```
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Contador from "../Pages/Contador"
import Registro from "../Pages/Registro"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"


function Public(){
    // el match de rutas se ejecutan siguiendo el orden en que aparecen
    // path='*' hace match con todo por lo que debe estar al final
    return(
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default Public
```

9. Modificar el contenido de `App.jsx`:

```
import './App.css';
import NavBar from './Components/NavBar';
import Public from './Routes/Public';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  // uso de react router
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Public />
      </Router>
    </div>
  );
}

export default App;

```

# Hook useParams de React router

1. Crear un nuevo componente llamado `Detalle` dentro de la carpeta `Pages`.
2. Modificar el contenido de `Detalle.jsx`:

```
import { useParams } from "react-router-dom"

function Detalle(){
    // useParams es un Hook de react-router-dom que nos permite recuperar propiedades de una URL
    const params = useParams()
    console.log(params)
    return(
        <div>Detalle</div>
    )
}

export default Detalle
```

3. Modificar el contenido de `Public.jsx`:

```
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Contador from "../Pages/Contador"
import Registro from "../Pages/Registro"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"
import Detalle from "../Pages/Detalle"


function Public(){
    // el match de rutas se ejecutan siguiendo el orden en que aparecen
    // path='*' hace match con todo por lo que debe estar al final
    // path='/producto/:id' permite que id sea una propiedad
    // el valor de id se recupera con el Hook useParams en el componente Detalle
    return(
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contador' element={<Contador />}/>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
          <Route path='/producto/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default Public
```

4. Modificar el contenido de `Producto.jsx`:

```
import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Producto({id,title,category,price}) {
    // uso de template string para armar una url con parte fija y una parte variable que sera una propiedad
    return(
        <div>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
        </div>
    )
}

export default Producto
```

5. Modificar el contenido de `Productos.jsx`:

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
        // le pasamos a cada componente producto la propiedad id
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto id={producto.id} title={producto.title} price={producto.price} category={producto.category_id}/>)}
            </div>
        )
    }
}

export default Productos
```

# API de detalle

Nos da informacion detallada de un producto en particular, por lo que devuelve un solo objeto. A diferencia de la API de busqueda que usamos antes, que suele devolver un array de objetos.

1. Modificar el contenido de `productosServices.js`:

```
import instance from "../Config/axios";

export function getAllProductos() {
  //return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod)").then(
  //  (res) => res.json()
  //);
  return instance.get("sites/MLA/search?q=ipod");
}

// seguimos usando axios
// recibimos el id como parametro
export function getByIdProductos(id) {
  return instance.get(`items/${id}`);
}

```

2. Modificar el contenido de `Detalle.jsx`:

```
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    // useParams es un Hook de react-router-dom que nos permite recuperar propiedades de una URL
    const {id}= useParams()

    // producto es un objeto, a diferencia de lo que pasaba en productos que era un array
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // buscamos los datos del producto con getByIdProductos y el id recuperado de la URL
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getByIdProductos(id)
                    setProducto(responseData.data)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result()
        },
        // id esta declarado por fuera del useEffect, entonces lo declaro como parametro
        [id]
    )

    if (isLoading) {
        return(
            <div>
                Cargando...
            </div>
        )
    } else {
        return(
            <div>
                <Link to="/">Inicio</Link>
                <h1>{producto.title}</h1>
                <p>{producto.price}</p>
            </div>
        )
    }

}

export default Detalle
```

# Spread de JS

1. Modificar el contenido de `Productos.jsx`:

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
        // le pasamos a cada componente producto la propiedad id
        // lo reemplazamos para usar el operador spread
        // {productos.map(producto => <Producto id={producto.id} title={producto.title} price={producto.price} category={producto.category_id}/>)}
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto {...producto}/>)}
            </div>
        )
    }
}

export default Productos
```

2. Modificar el contenido de `Producto.jsx`:

```
import React from "react";
import { Link } from "react-router-dom";

function Producto({id,title,category_id,price}) {
    // uso de template string para armar una url con parte fija y una parte variable que sera una propiedad
    return(
        <div>
            <h2>{title}</h2>
            <p>{category_id}</p>
            <p>{price}</p>
            <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
        </div>
    )
}

export default Producto
```

# Imagenes

El backend nos entrega la URL de la imagen a traves de la API de detalle. Generalmente como la propiedad thumbnail.

1. Modificar el contenido de `Producto.jsx`:

```
import React from "react";
import { Link } from "react-router-dom";

function Producto({
    id,
    title,
    category_id,
    price,
    thumbnail}) {
    // uso de template string para armar una url con parte fija y una parte variable que sera una propiedad
    // uso del atributo thumbnail para obtener imagenes
    return(
        <div>
            <h2>{title}</h2>
            <p>{category_id}</p>
            <p>{price}</p>
            <img src={thumbnail}></img>
            <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
        </div>
    )
}

export default Producto
```

2. Modificar el contenido de `Detalle.jsx`:

```
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    // useParams es un Hook de react-router-dom que nos permite recuperar propiedades de una URL
    const {id}= useParams()

    // producto es un objeto, a diferencia de lo que pasaba en productos que era un array
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // buscamos los datos del producto con getByIdProductos y el id recuperado de la URL
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getByIdProductos(id)
                    setProducto(responseData.data)
                    setIsLoading(false)
                } catch(e) {
                    console.log(e)
                }
            }
            result()
        },
        // id esta declarado por fuera del useEffect, entonces lo declaro como parametro
        [id]
    )

    if (isLoading) {
        return(
            <div>
                Cargando...
            </div>
        )
    } else {
        return(
            <div>
                <Link to="/">Inicio</Link>
                <h1>{producto.title}</h1>
                <img src={producto.thumbnail}></img>
                <p>{producto.price}</p>
            </div>
        )
    }

}

export default Detalle
```
