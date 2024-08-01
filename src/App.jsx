import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
function App() {
  const misestilo={
    color: 'black',
  }
  return(
   <>
   <header className='header'>
   <NavBar/>
   </header>

   <main className='text-center'>
     <ItemListContainer />
   </main>
   
   
    </>
  )
}

export default App
