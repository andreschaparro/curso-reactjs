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