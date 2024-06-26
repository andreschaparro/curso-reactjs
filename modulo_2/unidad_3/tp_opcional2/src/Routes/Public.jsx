import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"
import Detalle from "../Pages/Detalle"

function Public() {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/producto/:id' element={<Detalle />} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default Public