function Boton ({funcion, texto}) {
    return(
        <button type="button" onClick={funcion}>{texto}</button>
    )
}

export default Boton