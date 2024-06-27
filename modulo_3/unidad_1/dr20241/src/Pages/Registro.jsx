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