import './NavBar.css';
import Cartwidjet from './Cartwidjet';
import ButtonComponent from './ButtonComponent';
import { Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <>
        <nav className='d-flex justify-content-around'>
        <img className='imgen' src="./src/assets/img/logo.jpg" alt="logo" />
            <Link to={'/'}>
            <ButtonComponent nombre="INICIO" />
            </Link>
            <Link to={'/products'}>
            <ButtonComponent nombre="PRODUCTOS"/>
            </Link>
            <Link to={'/contact'}>
            <ButtonComponent nombre="CONTACTO"/>
            </Link>
            <Cartwidjet/>
        </nav>
        </>
    );
}