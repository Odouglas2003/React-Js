import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProds } from '../../asyncMock.js'; // Asegúrate de que la ruta sea correcta
import './SingleProd.css'
import { CartContext } from '../context/CartContext.jsx';
import ItemCount from './ItemCount.jsx'

export default function SingleProd() {
  const [product, setProduct] = useState(null); // Cambiado a null inicialmente
  const { prodId } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProds(); // Obtiene todos los productos
      console.log(products); // Log para verificar los productos
      const selectedProduct = products.find(p => p.id === Number(prodId)); // Asegúrate de comparar correctamente
      console.log(selectedProduct); // Log para verificar el producto seleccionado
      setProduct(selectedProduct); // Establece el producto seleccionado
    };
    fetchProducts();
  }, [prodId]);


  // const [cont, setCont] = useState(0);
  // const clicksRef = useRef(0);
  // const handleInc = () => {
  //   setCont(cont + 1);
  //   clicksRef.current++;
  //   console.log('Estadistica: el usuario interactuó ' + clicksRef.current + ' veces');
  // };

  // const handleDec = () => {
  //   setCont(cont - 1);
  //   clicksRef.current++;
  //   console.log('Estadistica: el usuario interactuó ' + clicksRef.current + ' veces');
  // };
  const onAdd = (cantidad) => {
    const productoConCantidad = { ...product, cantidad };
    console.log(productoConCantidad)
    addItem(productoConCantidad); 
  }
  // Manejo de carga de producto
  if (!product) {
    return <p>Cargando producto...</p>; // Mensaje mientras se carga el producto
  }
  //cuadno toque comprar se guarde en carrito
  const [,,addItem]= useContext(CartContext);

  if (!product) {
    return <p>Cargando producto...</p>;
  }
  // const handleClick = () => {
  //   addItem(product);
  //   console.log('Producto añadido al carrito');
  //   alert('Producto añadido al carrito');
  // }

  return (
    <>
      <section className='d-flex justify-content-center'>
        <article className='articulo' style={{ border: '1px solid green', padding: 10 }}>
          <h4 className='letra'>
            {product.id} - {product.title}
          </h4>
          <img className='imagepro' src={product.image} alt={product.title} />
          <p className='letra '>Precio: ${product.price}</p>
          <p className='letra '>Descripción: {product.description}</p>
          <p className='letra '>Categoría: {product.category}</p>
          <ItemCount price={product.price} stock={product.stock} agregarAlCarrito={onAdd} />
        </article>
      </section>
    </>
  );
}
