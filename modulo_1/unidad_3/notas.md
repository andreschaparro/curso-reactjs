# Introduccion

React se usa para crear una SPA.

# Creacion de una SPA con React

1. Instalar una version LTS de NodeJS.
2. Abrir una terminal del tipo `Command Prompt`.
3. Ejecutar `npx create-react-app dr20241`. Donde dr20241 es el nombre del proyecto.

**NOTA: React es una biblioteca, no un framework como Angular. Un framework es mas robusto que una biblioteca.**

# Webserver para desarrollo con React

1. Ir al directorio del proyecto.
2. Ejecutar `npm start`.
3. Acceder al sitio a traves la URL que aparece de la consola.

**NOTA: Este comando tambien incluye un proceso de transpilacion para convertir el codigo de React a JS puro.**

# Componentes en React

Una SPA React se divide en componentes. Un componente es `HTML+CSS+JS`. Tienen un objetivo concreto con pocas lineas. Habra componentes que llamen a otros.

**NOTA: Angular sigue el mismo concepto.**

En el directorio `public` hay un `index.html` que tiene la siguiente linea:

```
<div id="root"></div>
```

En el directorio `src` hay un `index.js` con el siguiente codigo:

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Lo que se hace, es obtener el div del `index.html` y mostrar dentro del mismo lo que esta programado en `App.js`.

Por lo que, puedo cambiar el contenido de la SPA modificando `App.js`:

```
function App() {
  return <div className="App">Hola Mundo</div>;
}
```

App es el componente raiz en React.

# Importar y Exportar componentes en React

La forma de importar el componente App de `App.js` en `index.js` es:

```
import App from './App';
```

Pero como condicion necesaria, el componente App debe estar exportado en `App.js`:

```
export default App;
```

**NOTA: Solo puede haber un export default, pero puede haber mas exports. Si importo algo que no es default, debo usar {}.**

# Crear un componente en React como una clase

1. Crear un archivo llamado `Home.jsx` en `src`.
2. Modificar su contenido:

```
import React,{Component} from "react";

// Nombre del archivo debe ser igual a la clase y debe comenzar con mayuscula
// Aplicamos herencia de Component
class Home extends Component{
    //Metodo render
    render(){
        return(<div>Home React 2024</div>)
    }
}

// Exporto la clase para poder usar este componente
export default Home
```

# Inyectar un componente en React

1. Renombrar `App.js` a `App.jsx`.
2. Modificar su contenido:

```
import logo from "./logo.svg";
import "./App.css";
// Importo mi componente
import Home from './Home'

function App() {
  //Inyectar Home debajo de Hola Mundo con < />
  return <div className="App">
    Hola Mundo
    <Home />
  </div>;
}

export default App;
```

# Inyeccion encadenada de componentes en React

1. Crear un archivo llamado `Banner.jsx` en `src`.
2. Modificar su contenido:

```
import React,{Component} from "react";

class Banner extends Component{
    render(){
        return(<div>Banner</div>)
    }
}

export default Banner
```

3. Modificar el contenido de `Home.jsx`:

```
import React,{Component} from "react";
import Banner from "./Banner";

// Nombre del archivo debe ser igual a la clase y debe comenzar con mayuscula
// Aplicamos herencia de Component
class Home extends Component{
    //Metodo render
    render(){
        // con {} se pueden mostrar valores
        const numero = 1
        // return debe devolver un solo div o fragment
        // dentro del div o fragment puede haber mas divs
        // un fragment no se renderiza en ningun contenedor html
        return(
            <>
                <div>
                    Home React 2024
                    {numero}
                    <Banner />
                </div>
                <div>
                    Home React 2024
                    <Banner />
                </div>
            </>
        )
    }
}

// Exporto la clase para poder usar este componente
export default Home
```

# Formato JSX

Parece que es html pero no lo es. Por ejemplo, el atributo class de HTML se llama className porque class es una palabra reservada.

Lo ideal es que dentro de cada archivo JSX haya un solo componente.

Extension de VCS recomendada: JS JSX Snippets.

# Git

Cuando utilicemos un repositorio, no subiremos el contenido de node_modules.

Si luego, lo clonamos y queremos probar la SPA:

1. Ir al directorio del proyecto.
2. Ejecutar `npm install`.
