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