// un nuevo Hook para forms
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';

function Registro() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => console.log(data)
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register("firstname", {required: true})}></input>
                    {errors.firstname && <span>This field is required</span>}
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
                    <label>Usuario</label>
                    <input type="text" {...register("username", {required: true})}></input>
                    {errors.username && <span>This field is required</span>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" {...register("password", {required: true, minLength: 6, maxLength: 12})}></input>
                    {errors.password?.type === "required" && <span>This field is required</span>}
                    {errors.password?.type === "minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                    {errors.password?.type === "maxLength" && <span>No puede superar los 12 caracteres</span>}
                </div>
                <Button type="submit" variant="primary">Registrarse</Button>
            </form>
        </div>
    )
}

export default Registro