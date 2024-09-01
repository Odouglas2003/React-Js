import { getProducts } from '../../../asyncMock';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductsList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulando una llamada a la API
        getProducts.then((data) => setProducts(data));
    }, []);
    return(
        <>
                <h1 className='h1 text-center'>Productos</h1>
        <section className=' carta d-flex align-content-around flex-wrap justify-content-center'>

            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard 
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    idProd={product.id} />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </section>


        </>
    )
}