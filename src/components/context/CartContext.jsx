import { createContext,useState} from 'react';
import { getProds } from '../../asyncMock';
//creamo el context
export const CartContext = createContext(false);

//creo el proveedor de dará acceso al contexto desde un componente
export function CartProvider({children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item)=> {
        setCart([...cart, item]);
    }

    return (
        // Proporcionamos los productos al componente hijo
        <CartContext.Provider value={[cart, setCart, addItem ]}>
            {children}
        </CartContext.Provider>
    );
}