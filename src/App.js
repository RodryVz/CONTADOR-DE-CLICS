
import './App.css';
import Boton from './componentes/boton';
import { useState } from "react"
import Contador from './componentes/Contador';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = ()=> {
    setNumClics(0);
  }



  return (
    <div className="App">
      <div className='contenedor-contador'>
      <Contador numClics={numClics}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}


export default App;
