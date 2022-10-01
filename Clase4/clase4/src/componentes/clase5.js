const ListadoPerros = (props) => {
 props.lista.map(i => {
    return <div>
        <h3>Nombre: {i.nombre}</h3>
        <li>Sexo: {i.sexo}</li>
        <li>Raza: {i.raza}</li>
        <li>Tamaño: {i.tamaño}</li>
    </div>
});}

export default ListadoPerros;


