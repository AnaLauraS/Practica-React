// importo react y componentes
import React, { Component } from 'react'

// creo la clase que extiende de componente y la exporta
export default class ClassComponent extends Component {
    // siempre la misma estructura: render(){return ...}
    render() {
        return (
            // le paso variable nombre + (condicional de true o false) + resto de texto fijo
            // uso props para informar que el dato va a venir desde el padre
            <li>{this.props.nombre} {this.props.estaEnLista ? "esta" : "no está"} invitado a la fiesta</li>
        )
    }
}