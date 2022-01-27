import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId
  return <h1>Product details for product {productId} go here!</h1>
}

export default ProductDetail