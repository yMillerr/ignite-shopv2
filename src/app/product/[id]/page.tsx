import { ProductContainer } from '@/styles/pages/products'

import Image from 'next/image'

import { numberFormat } from '../../../utils/numberFormat'

import { ProductButton } from '@/components/Buttons/ProductButton'
import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'
import { Suspense } from 'react'
import { Spinner } from '@/components/Spinner'

interface ProductProps {
  params: {
    id: string
  }
}

export default async function Product({ params: { id } }: ProductProps) {
  const productId = id

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  if (!price.unit_amount) {
    window.location.href = '/'
    return alert('Erro ao carregar o produto')
  }

  const product = {
    id: response.id,
    imageUrl: response.images[0],
    name: response.name,
    price: Number(price.unit_amount / 100),
    description: String(response.description),
    cartVarient: 'out',
    priceId: price.id,
  }

  return (
    <ProductContainer>
      <div>
        <Suspense fallback={<Spinner />}>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </Suspense>
      </div>

      <main>
        <h1>{product.name}</h1>

        <span>{numberFormat(product.price)}</span>

        <div>
          <p>{product.description}</p>

          <ProductButton product={product} />
        </div>
      </main>
    </ProductContainer>
  )
}
