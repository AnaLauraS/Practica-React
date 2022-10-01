import ListadoPerros from './componentes/clase5';
import './App.css';

const listadoPerros = [
  {
      nombre: 'perro1',
      sexo: 'macho',
      raza: 'raza1',
      tamaño: 'chico'
  },
  {
      nombre: 'perro2',
      sexo: 'macho',
      raza: 'raza2',
      tamaño: 'mediano'
  },
  {
      nombre: 'perro3',
      sexo: 'hembra',
      raza: 'raza3',
      tamaño: 'grande'
  },
  {
      nombre: 'perro4',
      sexo: 'macho',
      raza: 'raza4',
      tamaño: 'chico'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clientes caninos de Veterinaria</h1>
        <ListadoPerros lista={listadoPerros} />
      </header>
    </div>
  );
}

export default App;