import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartItemId, setCartItemId] = useState(0);
    const [qtdProducts, setQtdProducts] = useState(0);
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                cartItemId,
                setCartItemId,
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
        setQtdProducts,
        cartItemId,
        setCartItemId
    } = useContext(CartContext);

    function changeQuantity(id, quantity) {
        return cart.map(cartItem => {
            if (cartItem.cartItemId === id) cartItem.quantity += quantity;
            return cartItem
        })
    }

    function doesProductExist(product) {

        const alreadyExist = cart.some(cartItem => {
            //console.log(cartItem.title);
            console.log(product.title);
            if (cartItem.title == product.title && cartItem.size == product.size && cartItem.color == product.color) {
                return cartItem;
            }
        })
        console.log(alreadyExist);

        return alreadyExist;

        // console.log(alreadyExist);
        // if (!alreadyExist) {
        //     console.log(product);
        //     //addProduct(product);
        //     product.quantity = 1;
        //     return setCart(previousCart =>
        //         [...previousCart, product])
        // }

        // setCart(changeQuantity(product.cartItemId, 1))
    }

    function addProduct(newPoduct) {
        const alreadyAdded = cart.some(cartItem => (cartItem.title == newPoduct.title && cartItem.size == newPoduct.size && cartItem.color == newPoduct.color))
        const productAlreadyAdded = cart.filter(cartItem => (cartItem.title == newPoduct.title && cartItem.size == newPoduct.size && cartItem.color == newPoduct.color))

        if (!alreadyAdded) {
            newPoduct.quantity = 1;
            return (
                setCart(previousCart =>
                    [...previousCart, newPoduct]),
                setCartItemId(cartItemId + 1)
            )
        }

        newPoduct.cartItemId = productAlreadyAdded[0].cartItemId;
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
        const removedItem = cart.find(cartItem => cartItem.cartItemId === id)

        return setCart(newCart => newCart.filter(cartItem => cartItem.cartItemId !== removedItem.cartItemId))
    }

    useEffect(() => {
        const newQtdProducts = cart.reduce((counter, product) => counter + product.quantity, 0);
        setQtdProducts(newQtdProducts)
    }, [cart, setQtdProducts])

    return {
        cart,
        setCart,
        cartItemId,
        setCartItemId,
        addProduct,
        removeProduct,
        qtdProducts,
        deleteProduct,
        doesProductExist
    }
}