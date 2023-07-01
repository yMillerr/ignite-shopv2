import {
  ProductSkeletonContainer,
  SkeletonBox,
} from '@/styles/components/ProductSkeleton'

export function ProductSkeleton() {
  return (
    <ProductSkeletonContainer>
      <SkeletonBox>
        <div></div>
        <footer>
          <div></div>
          <div></div>
          <section>
            <div></div>
            <div></div>
          </section>
        </footer>
      </SkeletonBox>
    </ProductSkeletonContainer>
  )
}
