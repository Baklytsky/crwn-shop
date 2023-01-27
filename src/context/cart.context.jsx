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

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  cartTotal: 0
})

export const CartContextProvider = ({children}) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const addToCart = (productToAdd) => setCartItems(addItemToCart(cartItems, productToAdd))

  useEffect(() => {
    const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartTotal(totalItemsCount)
  }, [cartItems])

  const value = {cartOpen, setCartOpen, cartItems, addToCart, cartTotal}

  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContextProvider