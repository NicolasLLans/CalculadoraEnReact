import './App.css';
import Boton from './componentes/boton';
import lombarditoLogo from './imagenes/lombardito.png'

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
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'>

        </div>
        <div className='fila'>

        </div>
        <div className='fila'>

        </div>
      </div>
    </div>
  );
}

export default App;
