'use client'

import { useCartContext } from '@/context/CartContext'

import { Button } from './Button'

interface ProductButtonProps {
  product: {
    id: string
    description: string
    imageUrl: string
    cartVarient: 'in' | 'out'
    name: string
    price: number
    priceId: string
  }
}

export function ProductButton({ product }: ProductButtonProps) {
  const { cart, addProductInCart } = useCartContext()

  function handleSetItemInCart() {
    addProductInCart({ ...product, cartVarient: 'in' })
  }

  return (
    <Button
      varient={
        cart.find((cartProduct) => cartProduct.id === product.id)
          ?.cartVarient ?? product.cartVarient
      }
      title="Adicionar no carrinho"
      onClick={handleSetItemInCart}
    />
  )
}
