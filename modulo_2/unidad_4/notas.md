# Forms y eventos con el Hook useState

En `Registro.jsx`, podemos ver su uso:

```
import { useState } from "react"

function Registro(){
    // se crea un Hook useState por cada elemento del form
    const [name, setName] = useState('Pepe')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        // esto evita que se recargue la pagina
        event.preventDefault()
        console.log(name, lastname, email, password)

    }
    // el .target hace referencia al objeto de donde vino el evento onChange
    // como el valor del input esta atado al useState, sino no llamo a la funcion de set y le paso el nuevo valor, el mismo no se actualizara
    // el evento onSubmit se ejecuta cuando se presiona el boton del tipo submit dentro del formulario
    // el problema es que generarse el onSubmit se recarga la pagina y utiliza un verbo GET o POST
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro
```

A continuacion, podemos ver un uso no recomendado:

```
import { useState } from "react"

function Registro(){
    // el uso de setForm({...form, name:event.target.value}) usando spread podria que se pierdan los valores
    const [form, setForm] = useState({
        name: 'Pepe',
        lastname: 'Mortero',
        email: '',
        password: '',
    })
    const handleChange = (event) => {
        // funcion que nos serviria para todos los campos
        const target = event.target
        const name = target.name
        const value = target.value
        // hace referencia al valor de la propiedad name del html
        console.log(name)
        // hace referencia al valor que tiene el objeto usando la propiedad name del html como referencia
        console.log([name])
        setForm({...form, [name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" value={form.name} onChange={(event) => setForm({...form, name:event.target.value})}></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="lastname" value={form.lastname} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro
```

La solucion para el problema anterior seria:

```
import { useState } from "react"

function Registro(){
    // el uso de setForm({...form, name:event.target.value}) usando spread podria que se pierdan los valores
    const [form, setForm] = useState({
        name: 'Pepe',
        lastname: 'Mortero',
        email: '',
        password: '',
    })
    const handleChange = (event) => {
        // funcion que nos serviria para todos los campos
        const target = event.target
        const name = target.name
        const value = target.value
        // hace referencia al como se llama el key del objeto
        console.log(name)
        // hace referencia al valor que tiene el key del objeto
        console.log([name])
        setForm({...form, [name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" value={form.name} onChange={(event) => setForm({...form, name:event.target.value})}></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="lastname" value={form.lastname} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro
```

Y todavia falta validar los campos que deben validarse tanto del frontend como del backend.

# Forms con el Hook useForm de React Form

Hay que instalarlo. Para ello, ejectuar `npm install react-hook-form` en la misma ruta donde hacemos `npm start`.

En `Registro.jsx`, podemos ver su uso:

```
// un nuevo Hook para forms
import { useForm } from "react-hook-form"

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
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro
```
