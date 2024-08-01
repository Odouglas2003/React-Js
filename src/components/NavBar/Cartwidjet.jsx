export default function Cartwidjet(){
    const MisEstilo={
        width: '40px',
        height: '40px',
        color: 'white',
    }
    return(
        <>
        <li className="d-flex ms-4">
        <img className="mt-4 ms-5" style={MisEstilo} src="./src/assets/img/klipartz.com.png" alt="carrito de compra" />
        <p  style={MisEstilo} className="fs-6 mt-2">2</p>
        </li>
        </>
    )
}