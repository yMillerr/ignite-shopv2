import { stripe } from '@/libs/stripe'
import { NextRequest, NextResponse } from 'next/server'

interface PriceIdsProps {
  priceIds: string[]
}

export async function POST(request: NextRequest) {
  const { priceIds }: PriceIdsProps = await request.json()

  if (!priceIds) {
    return NextResponse.json({
      code: 500,
      error: 'Internal Server Error!',
    })
  }

  if (request.method !== 'POST') {
    return NextResponse.json({
      code: 405,
      error: 'Method Not Allowed',
    })
  }

  const priceIdToItem = priceIds.map((price) => {
    return {
      price,
      quantity: 1,
    }
  })

  const success_url = `${process.env.LOCAL_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.LOCAL_URL}`

  const checkout = await stripe.checkout.sessions.create({
    cancel_url,
    success_url,
    mode: 'payment',
    line_items: priceIdToItem,
  })

  return NextResponse.json({
    checkoutUrl: checkout.url,
  })
}
