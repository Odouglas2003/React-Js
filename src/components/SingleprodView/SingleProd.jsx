import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock.js';
import "./SingleProd.css"

export default function SingleProd() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
    <section className='d-flex justify-content-center'>
      <article className='articulo ' style={{ border: '1px solid green', padding: 10 }}>
        <h4>
          {product.id} - {product.title}
        </h4>
        <img className='imagepro' src={product.image} alt={product.title} />
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </article>
      </section>
    </>
  );
}
