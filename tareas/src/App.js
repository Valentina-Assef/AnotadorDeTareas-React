import './App.css';
import logoA from './img/logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='logo-contenedor'>
        <img src={logoA} className='logo' alt=''/>
      </div>
      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
