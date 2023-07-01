'use server'

import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'

export interface SessionInfosProps {
  id: string
  productsImages: string[]
  customerName: string
}

export async function sucessActions(
  sessionId: string,
): Promise<SessionInfosProps | any> {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const productsImages = session.line_items?.data.map((product) => {
    const products = product.price?.product as Stripe.Product

    return products.images[0]
  })

  if (!session.customer_details?.name) {
    return new Error('Error')
  }

  if (!productsImages) {
    return new Error('Error')
  }

  return {
    id: session.id,
    productsImages,
    customerName: session.customer_details.name,
  }
}
