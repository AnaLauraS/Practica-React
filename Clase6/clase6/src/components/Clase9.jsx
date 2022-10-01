import React, { Component } from 'react'
import Button from './Button.jsx'
import "../styles/Clase9.css";

export default class Clase9 extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
 constructor(props){
     super();
     this.state = {
         colores: this.colors,
     }
     this.shuffle = this.shuffle.bind(this)
 }

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
 shuffle () {
    let nuevosColores = [];
    for (let i=0; i<this.colors.length; i++){
        let random = Math.floor((Math.random())*this.colors.length);
        // borrar el color de la lista asi no lo repite
        nuevosColores.push(this.colors[random]);
    }
    this.setState({colores: nuevosColores})
 }
  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
          {this.state.colores.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button onClick={this.shuffle} />
      </div>
    )
  }
}