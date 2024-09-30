import { createContext, useEffect, useState} from 'react';
import { getProds } from '../../asyncMock';
//creamo el context
export const ProductContext = createContext(false);

//creo el proveedor de dará acceso al contexto desde un componente
export function ProductProvider({children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulando una llamada a la API para obtener los productos
        getProds().then((data) => setProducts(data));
    }, []);
    return (
        // Proporcionamos los productos al componente hijo
        <ProductContext.Provider value={{products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );

}