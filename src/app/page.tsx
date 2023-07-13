import { HomeContainer } from '@/styles/pages/home'
import { Carousel } from '@/components/Carousel'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Ignite-Shop',
}

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/products', {
    cache: 'force-cache',
    next: {
      revalidate: 7200,
    },
  })

  const { products } = await response.json()

  return (
    <HomeContainer>
      <Carousel products={products} />
    </HomeContainer>
  )
}
