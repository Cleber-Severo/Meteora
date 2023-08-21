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

    function addProduct(newPoduct) {
        const alreadyAdded = cart.some(cartItem => cartItem.title === newPoduct.title);

        if (!alreadyAdded) {
            newPoduct.quantity = 1;
            return setCart(previousCart =>
                [...previousCart, newPoduct])
        }
        setCart(previousCart => previousCart.map(cartItem => {
            if (cartItem.title === newPoduct.title) cartItem.quantity += 1;
            return cartItem
        }))
    }

    return {
        cart,
        setCart,
        addProduct
    }
}