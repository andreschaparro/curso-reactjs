# Firebase

Es un backend as a service (BaaS). Nos permitira programar el frontend y solo configurar el backend.

## Crear un proyecto

1. Ir a `https://console.firebase.google.com/?hl=es-419`.
2. Clic en `Agregar proyecto`.
3. Ingresar `dr20241` como nombre del proyecto.
4. Clic en `Continuar`.
5. Desmarcar el checkbox `Habilitar Google Analytics para este proyecto`.
6. Clic en `Crear proyecto`.
7. Clic en `Continuar`.

## Configurar el modulo de autenticacion

1. Abrir el menu `Compilacion`.
2. Clic en `Authentication`.
3. Clic en `Comenzar`.
4. Clic en `Correo electronico/contraseña`.
5. Marcar el checkbox `Correo electronico/contraseña`.
6. Clic en `Guardar`.

## Configurar el modulo de base de datos

Realtime Database es la version anterior. Por lo que, vamos a usar la Firestore Database.

1. Abrir el menu `Compilacion`.
2. Clic en `Firestore Database`.
3. Clic en `Crear base de datos`.
4. Clic en `Siguiente`.
5. Marcar la opcion `Comenzar en modo de prueba`.
6. Clic en `Crear`.

## Agregar la aplicacion Web

1. Clic en el icono con forma de ruedita que esta a la derecha de `Descripcion General`.
2. Clic en `Configuracion del proyecto`.
3. Clic en el icono con forma de `</>`.
4. Ingresar `dr20241` como nombre de la aplicacion.
5. Clic en `Registrar App`.

## Agregar el SDK de firebase a nuestra app de react

1. Abrir una terminal del tipo `Command Prompt` en la carpeta donde ejecutamos ``npm start`.
2. Ejecutar `npm install firebase`.
3. Crear un archivo llamado `firebase.js` dentro de la carpeta `Config`.
4. Modificar el contenido de `firebase.js`:

```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhxI-PIPtfrdFM0adywrpYGlfQWJmhSjY",
  authDomain: "dr20241-55d3d.firebaseapp.com",
  projectId: "dr20241-55d3d",
  storageBucket: "dr20241-55d3d.appspot.com",
  messagingSenderId: "1076180096247",
  appId: "1:1076180096247:web:0b3b20b2a75843780daff2",
};

const app = initializeApp(firebaseConfig);

export default app;

```

**NOTA: firebaseConfig se debe copiar de la configuracion del proyecto.**

# React Bootstrap

[React Bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)

Una alternativa es material ui.

## Agregarlo a nuestra app de react

1. Abrir una terminal del tipo `Command Prompt` en la carpeta donde ejecutamos ``npm start`.
2. Ejecutar `npm install react-bootstrap bootstrap`.
3. En el archivo `index.js` agregar `import 'bootstrap/dist/css/bootstrap.min.css'`.

## Button

1. Modificar el archivo `Registro.jsx`:

```
// un nuevo Hook para forms
import { useForm } from "react-hook-form"
// de la pagina de react bootstrap sale como hacer esto
import Button from 'react-bootstrap/Button';

function Registro() {
    const {register, // se usa para registrar los elementos del form y para cargar opciones de validacion
        handleSubmit, // se debe ejecutar cuando se produce el evento onSubmit en el formulario, y donde debe recibir otra funcion como parametro, que en este caso es onSubmit
        formState: {errors}, // sirve para mostrar los errores de un elemento
    } = useForm()
    const onSubmit = (data) => console.log(data) // data es un objeto con todos los campos del form y sus valores
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register("name", {required: true})}></input>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" {...register("lastname")}></input>
                    {errors.lastname && <span>This field is required</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email", {required: true})}></input>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" {...register("password", {required: true, minLength: 6, maxLength: 12})}></input>
                    {errors.password?.type === "required" && <span>This field is required</span>}
                    {errors.password?.type === "minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                    {errors.password?.type === "maxLength" && <span>No puuede superar 12 caracteres</span>}
                </div>
                <Button type="submit" variant="primary">Registrarse</Button>
            </form>
        </div>
    )
}

export default Registro
```

## Forms

1. Modificar el archivo `Registro.jsx`:

```
// un nuevo Hook para forms
import { useForm } from "react-hook-form"
// Forma mas limpia de importar mas de un componente de react bootstrap
import { Button, Form} from 'react-bootstrap';

function Registro() {
    const {register, // se usa para registrar los elementos del form y para cargar opciones de validacion
        handleSubmit, // se debe ejecutar cuando se produce el evento onSubmit en el formulario, y donde debe recibir otra funcion como parametro, que en este caso es onSubmit
        formState: {errors}, // sirve para mostrar los errores de un elemento
    } = useForm()
    const onSubmit = (data) => console.log(data) // data es un objeto con todos los campos del form y sus valores
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("name", {required: true})}/>
                    <Form.Text className="text-muted">
                    {errors.name && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("lastname", {required: true})}/>
                    <Form.Text className="text-muted">
                    {errors.lastname && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" {...register("email", {required: true})}/>
                    <Form.Text className="text-muted">
                    {errors.email && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar constraseña" {...register("password", {required: true, minLength: 6, maxLength: 12})}/>
                    <Form.Text className="text-muted">
                    {errors.password?.type === "required" && <span>This field is required</span>}
                    {errors.password?.type === "minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                    {errors.password?.type === "maxLength" && <span>No puuede superar 12 caracteres</span>}
                    </Form.Text>
                </Form.Group>

                <Button type="submit" variant="primary">Registrarse</Button>
            </Form>
        </div>
    )
}

export default Registro
```

## Navbars

1. Modificar el archivo `NavBar.jsx`:

2. Modificar el archivo `App.jsx`:
