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