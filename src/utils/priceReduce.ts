import { CartProps } from '@/context/CartContext'
import { numberFormat } from './numberFormat'

export function priceReduce(cart: CartProps[]): string {
  const price = cart.reduce((acc, product) => {
    acc += product.price

    return acc
  }, 0)

  return numberFormat(price)
}
