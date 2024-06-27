function Imagen({
    direccion,
    texto}) {
    return(
        <div>
            <img src={direccion} alt={texto}></img>
        </div>
    )
}

export default Imagen