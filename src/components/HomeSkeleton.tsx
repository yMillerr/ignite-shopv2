import { Box, HomeSkeletonContainer } from '@/styles/components/HomeSkeleton'

export function HomeSkeleton() {
  return (
    <HomeSkeletonContainer>
      <Box>
        <main></main>
        <footer>
          <div></div>
          <div></div>
        </footer>
      </Box>

      <Box>
        <main></main>
        <footer>
          <div></div>
          <div></div>
        </footer>
      </Box>
    </HomeSkeletonContainer>
  )
}
