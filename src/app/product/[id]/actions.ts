'use server'

import { stripe } from '../../../libs/stripe'
import Stripe from 'stripe'

interface RequestToStripeProps {
  product: {
    id: string
    name: string
    image: string
    description: string
    price: number
    priceId: string
  }
}

export async function requestToStripe(
  productId: string,
): Promise<RequestToStripeProps | any> {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    name: product.name,
    imageUrl: product.images[0],
    description: product.description,
    id: product.id,
    price: Number(price.unit_amount) / 100,
    priceId: price.id,
    cartVarient: 'out',
  }
}
