import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const UserInfo = ({ carrito, createNewOrder }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState(''); // Estado para el mensaje de agradecimiento
  const [, setCart] = useContext(CartContext); // Extraer `setCart` del contexto

  const handleSubmit = () => {
    const order = {
      buyer: {
        nombre,
        apellido,
        email,
        telefono,
      },
      items: carrito,
      creadoEn: new Date(),
    };

    // Crear la nueva orden y vaciar el carrito
    createNewOrder(order);
    setCart([]); // Vaciar el carrito
    setMensaje('Gracias por tu compra'); // Mostrar mensaje de agradecimiento
  };

  return (
    <div>
      {mensaje ? (
        <h4 className='letra'>{mensaje}</h4>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
            <input
              className='letra'
              type='text'
              placeholder='Nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              className='letra'
              type='text'
              placeholder='Apellido'
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <input
              className='letra'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='letra'
              type='text'
              placeholder='Telefono'
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <button className='letra' onClick={handleSubmit}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
