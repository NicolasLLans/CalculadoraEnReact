import './App.css';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import Boton from './componentes/boton';
import lombarditoLogo from './imagenes/lombardito.png';

function App() {
  return (
    <div className="App">
      <div className='Logo-contenedor'>
        <img
        src={lombarditoLogo}
        className='logo'
        alt='logo lombardito' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
