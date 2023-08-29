import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartItemId, setCartItemId] = useState(0);
    const [qtdProducts, setQtdProducts] = useState(0);
    const [totalValueCart, setTotalValueCart] = useState(0);
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                cartItemId,
                setCartItemId,
                qtdProducts,
                setQtdProducts,
                totalValueCart,
                setTotalValueCart
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
        setCartItemId,
        totalValueCart,
        setTotalValueCart
    } = useContext(CartContext);

    function changeQuantity(id, quantity) {
        return cart.map(cartItem => {
            if (cartItem.cartItemId === id) cartItem.quantity += quantity;
            return cartItem
        })
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

    function deleteProduct(id) {
        const removedItem = cart.find(cartItem => cartItem.cartItemId === id)

        return setCart(newCart => newCart.filter(cartItem => cartItem.cartItemId !== removedItem.cartItemId))
    }


    //converts price string to a number 
    function convertStringToNum(price) {
        const priceArr = price.split(",")
        const numArr = priceArr.map(item => Number(item));

        return (numArr[0] + (numArr[1] / 100)).toFixed(2)

    }

    useEffect(() => {
        const { newTotalValue, newQtdProducts } = cart.reduce((counter, product) =>
        ({
            newQtdProducts: counter.newQtdProducts + product.quantity,
            newTotalValue: counter.newTotalValue + (convertStringToNum(product.pricing) * product.quantity)
        }), {
            newQtdProducts: 0,
            newTotalValue: 0
        });
        setQtdProducts(newQtdProducts)
        setTotalValueCart(newTotalValue)
    }, [cart, setQtdProducts, setTotalValueCart])


    return {
        cart,
        setCart,
        cartItemId,
        setCartItemId,
        addProduct,
        removeProduct,
        qtdProducts,
        deleteProduct,
        totalValueCart,
        convertStringToNum
    }
}