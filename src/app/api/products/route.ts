import { stripe } from '@/libs/stripe'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    if (!price.unit_amount) {
      return NextResponse.json({
        status: 'Internal Server Error',
        code: 500,
      })
    }

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Number(price.unit_amount / 100),
      priceId: price.id,
      cartVarient: 'out',
    }
  })

  return NextResponse.json({
    products,
  })
}
