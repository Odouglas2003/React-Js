import { useState } from "react"
import './SingleProd.css'

export default function ItemCount( {price,agregarAlCarrito} ) {
  const [count, setCount] = useState(1)

  const handleClickInc = () => {

      setCount(count + 1)
  }
  const handleClickDec = () => {

      setCount(count - 1)
  }

  return (
    <>
      <div>
        <button onClick={handleClickDec}>-</button>
        <span className="letra"> {count} </span>
        <button onClick={handleClickInc}>+</button>
      </div>
      {count !== 0 && <p  className="letra">Total: ${price * count}</p>}
      <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </>
  )
}