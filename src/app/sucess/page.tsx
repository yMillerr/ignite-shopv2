import Image from 'next/image'
import Link from 'next/link'

import { ImageContainer, SucessContainer } from '@/styles/pages/sucess'

import logoImg from '../../assets/logo.png'

import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'

export default async function Sucess({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const { session_id } = searchParams

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const productsImages = session.line_items?.data.map((product) => {
    const products = product.price?.product as Stripe.Product

    return products.images[0]
  })

  return (
    <SucessContainer>
      <Image src={logoImg} alt="" width={120} height={52} />

      <ImageContainer>
        {productsImages?.map((img) => {
          return (
            <div key={img}>
              <Image src={img} width={130} height={130} alt="" />
            </div>
          )
        })}
      </ImageContainer>

      <h2>Compra efetuada!</h2>

      <p>
        Uhuul <strong>{session.customer_details?.name}</strong>, sua compra de{' '}
        <span>{productsImages?.length}</span> camisetas já está a caminho da sua
        casa.{' '}
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SucessContainer>
  )
}
