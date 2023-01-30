import {createContext, useEffect, useState} from "react";

const addItemToCart = (cartItems, product) => {
  const existingCartItem = cartItems.find(item => item.id === product.id)
  if (existingCartItem) {
    return cartItems.map(
        item => item.id === product.id
        ? {...item, quantity: item.quantity + 1}
        : {...item}
    )
  }
  return [...cartItems, {...product, quantity: 1}]
}

const removeItemFromCart = (cartItems, product, removeLineItem = false ) => {
  const existingCartItem = cartItems.find(item => item.id === product.id)

  if (existingCartItem === 1 || removeLineItem) {
    return cartItems.filter(item => item.id !== product.id)
  }

  if (existingCartItem) {
    return cartItems.map(
        item => item.id === product.id
            ? {...item, quantity: item.quantity - 1}
            : {...item}
    )
  }
}

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartTotalQuantity: 0,
  cartTotalPrice: 0
})

export const CartContextProvider = ({children}) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const addToCart = (product) =>
      setCartItems(addItemToCart(cartItems, product))
  const removeFromCart = (product, removeLineItem = false) =>
      setCartItems(removeItemFromCart(cartItems, product, removeLineItem))

  useEffect(() => {
    const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const totalItemsPrice = cartItems.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)
    setCartTotalQuantity(totalItemsCount)
    setCartTotalPrice(totalItemsPrice)
  }, [cartItems])

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addToCart,
    removeFromCart,
    cartTotalQuantity,
    cartTotalPrice
  }

  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContextProvider