import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import UserInfo from './UserInfo';

export default function CartView() {
  const [cart, setCart, createNewOrder] = useContext(CartContext);

  // Función para calcular el total de los precios y mostrarlo con dos decimales
  const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2);

  return (
    <>
      {cart.length === 0 ? (
        <p className='letra'>Carrito vacío</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} style={{ width: '5%' }} />
              <h4 className='letra'>{item.title}</h4>
              <p className='letra'>Description: {item.description}</p>
              <p className='letra'>Price: ${item.price * item.cantidad}</p>
              <p className='letra'>Cantidad: {item.cantidad}</p>
            </div>
          ))}
        </ul>
      )}
      <p className='letra'>PAGO TOTAL ES: ${getTotalPrice()}</p>
      <UserInfo carrito={cart} createNewOrder={createNewOrder} />
    </>
  );
}
