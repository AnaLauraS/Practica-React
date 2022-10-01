import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/lista' element={Lista}/>
        <Route path='/' element={/*componente Detalle*/}/>
        <Route path='/' element={/*componente Carrito*/}/>
      </Routes>
      <Header/>
    </div>
  );
}

export default App;
