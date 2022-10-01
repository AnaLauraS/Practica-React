// importo react
import React from 'react'

// creo la funcion donde el 'props' es la variable que va a pasar el padre
const FunctionComponent = (props) => {
    return (
        // ambas variables las da el padre, con la palabra nombre y tarea
        <li>{props.nombre} traerá {props.tarea}</li>
    )
}

export default FunctionComponent