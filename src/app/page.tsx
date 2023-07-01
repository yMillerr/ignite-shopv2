import { HomeContainer } from '@/styles/pages/home'
import { Carousel } from '@/components/Carousel'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
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
