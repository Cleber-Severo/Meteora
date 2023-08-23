import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [qtdProducts, setQtdProducts] = useState(0)
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                qtdProducts,
                setQtdProducts
            }} >
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const {
        cart,
        setCart,
        qtdProducts,
        setQtdProducts
    } = useContext(CartContext);

    function changeQuantity(id, quantity) {
        return cart.map(cartItem => {
            if (cartItem.cartItemId === id) cartItem.quantity += quantity;
            return cartItem
        })
    }

    function addProduct(newPoduct) {
        const alreadyAdded = cart.some(cartItem => cartItem.cartItemId === newPoduct.cartItemId )

        if (!alreadyAdded) {
            newPoduct.quantity = 1;
            return setCart(previousCart =>
                [...previousCart, newPoduct])
        }
        setCart(changeQuantity(newPoduct.cartItemId, 1))
    }

    function removeProduct(id) {
        const product = cart.find(cartItem => cartItem.cartItemId === id);
        const isLast = product.quantity === 1;

        if (isLast) {
            return setCart(previousCart => previousCart.filter(cartItem => cartItem.cartItemId !== id))
        }
        setCart(changeQuantity(id, -1))
    }

    function deleteProduct(id, size) {
        const removedItem = cart.find(cartItem => cartItem.cartItemId === id )

        return setCart(newCart => newCart.filter(cartItem => cartItem.cartItemId !== removedItem.cartItemId ))
    }

    useEffect(() => {
        const newQtdProducts = cart.reduce((counter, product) => counter + product.quantity, 0);
        setQtdProducts(newQtdProducts)
    }, [cart, setQtdProducts])

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        qtdProducts,
        deleteProduct
    }
}