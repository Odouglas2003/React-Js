import './App.css'
import TituloComponente from './components/TituloComponente'

function App() {
  const misestilo={
    color: '#FFFFFF',
  }
  return(
   <>
   <h1 style={misestilo}>Hola Reactc</h1>
   <TituloComponente texto='soy un malo programando'/>
    </>
  )
}

export default App
