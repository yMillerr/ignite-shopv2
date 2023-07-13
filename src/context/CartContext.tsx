'use client'

import { ProductsType } from '@/components/Carousel'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface CartProps {
  id: string
  description?: string
  name: string
  price: number
  imageUrl: string
  priceId?: string
  cartVarient: 'in' | 'out'
}

interface CartContextProps {
  cart: CartProps[]
  addProductInCart: (product: ProductsType) => void
  removeProductFromTheCart: (product: ProductsType) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps[]>(() => {
    const cartInStorage = window.localStorage.getItem('cart-@ignite-shopv2')

    if (cartInStorage) {
      return JSON.parse(cartInStorage)
    }

    return []
  })

  function addProductInCart(product: ProductsType) {
    const haveThisProductOnTheCart = cart.find(
      (producOnTheCart) => producOnTheCart.id === product.id,
    )

    if (haveThisProductOnTheCart) {
      return alert('Esse produto já foi adicionado no carrinho')
    }

    setCart((state) => [...state, product])
  }

  function removeProductFromTheCart(product: ProductsType) {
    setCart((state) =>
      state.filter((deletProduct) => product.id !== deletProduct.id),
    )
  }

  useEffect(() => {}, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        removeProductFromTheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext(): CartContextProps {
  const context = useContext(CartContext)

  return context
}
