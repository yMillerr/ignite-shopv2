'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import {
  Button,
  CarouselContainer,
  Product,
} from '../styles/components/carousel'

import Link from 'next/link'
import Image from 'next/image'

import handBagIcon from '../assets/handBag-icon.svg'

import { useCartContext } from '@/context/CartContext'
import { numberFormat } from '@/utils/numberFormat'

export interface ProductsType {
  id: string
  name: string
  price: number
  description?: string
  imageUrl: string
  priceId: string
  cartVarient: 'in' | 'out'
}

interface CarouselProps {
  products: ProductsType[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 48,
      perView: 2,
    },
  })

  const { addProductInCart, cart } = useCartContext()

  function handleAddProductInCart(product: ProductsType) {
    addProductInCart({ ...product, cartVarient: 'in' })
  }

  return (
    <CarouselContainer className="keen-slider" ref={sliderRef}>
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Link href={`/product/${product.id}`}>
              <Image src={product.imageUrl} alt="" width={520} height={480} />
            </Link>

            <footer>
              <div>
                <h3>{product.name}</h3>
                <strong>{numberFormat(product.price)}</strong>
              </div>
              <Button
                varient={
                  cart.find((cartProduct) => cartProduct.id === product.id)
                    ?.cartVarient ?? product.cartVarient
                }
                onClick={() => handleAddProductInCart(product)}
              >
                <Image src={handBagIcon} alt="" />
              </Button>
            </footer>
          </Product>
        )
      })}
    </CarouselContainer>
  )
}
