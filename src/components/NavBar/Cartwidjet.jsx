import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom"

export default function Cartwidjet(){
    const MisEstilo={
        height: '40px',
        color: 'white',
    }
    const [cart] = useContext(CartContext)
    return(
        <>

        
        <Link to={'/Cart'}>
        <li className="d-flex ms-4">
        <img className="mt-4 ms-5" style={MisEstilo} src="./src/assets/img/klipartz.com.png" alt="carrito de compra" />
        <p  style={MisEstilo} className="fs-6 mt-2">{cart.length}</p>
        </li>
        </Link>

        </>
    )
}