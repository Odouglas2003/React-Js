import '../ItemListContainer.css';
import { Link } from 'react-router-dom';
export default function ProductCard({title, price, image, idProd}) 
{ 

    return ( 
    <>
    <article className='articulopro d-flex justify-content-center'>
        <img className='imagepro'
          src={image}
          alt={title}
        />
        <h3 className='titulopro'>{title}</h3>
        <p className='titulopro'>Precio $ {price}</p>
        <button><Link to={`/products/${idProd}`}> Ver detalle </Link></button>
      </article>
    </>) 
}