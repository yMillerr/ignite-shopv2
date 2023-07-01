import { Box, HomeSkeletonContainer } from '@/styles/components/Homeskeleton'

export function Skeleton() {
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
