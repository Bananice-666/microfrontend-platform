import { useEffect, useState } from 'react'
import type { Product } from '@microfrontend/types'

import { getProducts } from '../services/productsService'
import { ProductCard } from '../components/ProductCard'

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    void getProducts().then(setProducts)
  }, [])

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold">Products</h1>
      <p className="mt-2 text-gray-600">Products loaded from a local mock.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
