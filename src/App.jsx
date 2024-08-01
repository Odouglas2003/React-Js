import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
function App() {
  return(
   <>
   <header className='header'>
   <NavBar/>
   </header>

   <main className='main text-center'>
     <ItemListContainer />
   </main>
    </>
  )
}

export default App
