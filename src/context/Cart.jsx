import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }} >
            { children }
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const { cart, setCart } = useContext(CartContext);

    function changeQuantity(id, quantity) {
        return cart.map(cartItem => {
            if (cartItem.id === id) cartItem.quantity += quantity;
            return cartItem })
    }
   
    function addProduct(newPoduct) {
        const alreadyAdded = cart.some(cartItem => cartItem.title === newPoduct.title);

        if (!alreadyAdded) {
            newPoduct.quantity = 1;
            return setCart(previousCart =>
                [...previousCart, newPoduct])
        }
        setCart(changeQuantity(newPoduct.id, 1))
    }

    function removeProduct(id) {
        const product = cart.find(cartItem => cartItem.id === id );
        const isLast = product.quantity === 1;

        if (isLast) {
            return setCart(previousCart => previousCart.filter(cartItem => cartItem.id !== id) )
        }
        setCart( changeQuantity(id, -1) )
    }

    return {
        cart,
        setCart,
        addProduct,
        removeProduct
    }
}