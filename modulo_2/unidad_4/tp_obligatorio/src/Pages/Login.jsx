// un nuevo Hook para forms
import { useForm } from "react-hook-form"

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => console.log(data)
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Usuario</label>
                    <input type="text" {...register("username", {required: true})}></input>
                    {errors.username && <span>This field is required</span>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" {...register("password")}></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login