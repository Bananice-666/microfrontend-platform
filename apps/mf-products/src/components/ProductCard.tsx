import type { Product } from '@microfrontend/types'

import { Button } from '@microfrontend/ui'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-lg border border-input bg-background p-5 shadow-sm">
      <p className="text-sm text-gray-500">{product.category}</p>
      <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
      <p className="mt-3 text-2xl font-bold">${product.price.toFixed(2)}</p>
      <Button className="mt-5 w-full">View product</Button>
    </article>
  )
}
