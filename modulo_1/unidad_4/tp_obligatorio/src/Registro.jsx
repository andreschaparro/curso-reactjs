import React, {Component} from "react";
import Campo from "./Campo";
import Titulo from "./Titulo";
import Mensaje from "./Mensaje";

class Registro extends Component{
    constructor(){
        super()
        this.state = {
            mensaje : ""
        }
    }
    registrarse = () => {
        this.setState(
            {
                mensaje : "Registrado con Exito!"
            }
        )
    }
    render(){
        const campos= [
                {
                    etiqueta: "Nombre",
                    tipo: "text"
                },
                {
                    etiqueta: "Apellido",
                    tipo: "text"
                },                {
                    etiqueta: "Email",
                    tipo: "email"
                },
                {
                    etiqueta: "Telefono",
                    tipo: "text"
                },
                {
                    etiqueta: "Contraseña",
                    tipo: "password"
                },
                {
                    etiqueta: "Confirmar Contraseña",
                    tipo: "password"
                }
            ]
        return(
            <div>
                <Titulo titulo={"Formulario de Registro"}/>
                <form>
                    {campos.map(campo => <Campo etiqueta={campo.etiqueta} tipo={campo.tipo} />)}
                    <button type="button" onClick={this.registrarse}>Registrarse</button>
                    <Mensaje mensaje={this.state.mensaje}/>
                </form>
            </div>
        )
    }
}

export default Registro