import './NavBar.css';
import Cartwidjet from './Cartwidjet';
import ButtonComponent from './ButtonComponent';
export default function NavBar(){
    return(
        <>
        <nav className='d-flex'>
            <ButtonComponent nombre="INICIO"/>
            <ButtonComponent nombre="ABRIGO"/>
            <ButtonComponent nombre="PANTALONES"/>
            <img className='imgen' src="./src/assets/img/logo.jpg" alt="logo" />
            <ButtonComponent nombre="ACCESORIOS"/>
            <ButtonComponent nombre="REMERAS"/>
            <Cartwidjet/>
        </nav>
        </>
    );
}