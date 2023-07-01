'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { ProductContainer } from '@/styles/pages/products'

import Image from 'next/image'

import { requestToStripe } from './actions'
import { useCartContext } from '@/context/CartContext'
import { numberFormat } from '../../../utils/numberFormat'

import { ProductSkeleton } from '@/components/ProductSkeleton'

import { ProductsType } from '@/components/Carousel'

interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params: { id } }: ProductProps) {
  const productId = id

  const { addProductInCart, cart } = useCartContext()

  const [product, setProduct] = useState({} as ProductsType)
  const [isLoading, setIsLoading] = useState(true)

  async function testRequest() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000))

      const response = await requestToStripe(productId)

      setProduct(response)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSetItemInCart() {
    addProductInCart({ ...product, cartVarient: 'in' })
  }

  useEffect(() => {
    testRequest()
  }, [])

  return (
    <>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <ProductContainer>
          <div>
            <Image src={product.imageUrl} alt="" width={520} height={480} />
          </div>

          <main>
            <h1>{product.name}</h1>

            <span>{numberFormat(product.price)}</span>

            <div>
              <p>{product.description}</p>

              <Button
                varient={
                  cart.find((cartProduct) => cartProduct.id === product.id)
                    ?.cartVarient ?? product.cartVarient
                }
                title="Adicionar no carrinho"
                onClick={handleSetItemInCart}
              />
            </div>
          </main>
        </ProductContainer>
      )}
    </>
  )
}
