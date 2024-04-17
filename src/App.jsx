import './App.css'
import Sidebar from './components/sidebar.jsx'
import { useState } from 'react'
import SobreMi from './components/sobremi.jsx'
import Proyectos from './components/proyectos.jsx'
import Contacto from './components/contacto.jsx'


function App() {
const [actual, setActual] = useState(0);

const changeActual = (actual) =>{
  setActual(actual);
  console.log(actual)
}

  return (
    <>
    <div className="continer-main">
      <Sidebar changeActual={changeActual} />
      
        <main>
           { actual == 0 && <SobreMi/>}
          { actual == 1 && <Proyectos/>}
          { actual == 2 && <Contacto/> }
        </main>
      </div>
      
    </>
  )
}

export default App
