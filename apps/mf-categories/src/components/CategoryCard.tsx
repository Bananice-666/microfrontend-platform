import type { Category } from '@microfrontend/types'

import { Button } from '@microfrontend/ui'

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="rounded-lg border border-input bg-background p-5 shadow-sm">
      <h2 className="text-xl font-semibold">{category.name}</h2>
      <p className="mt-2 text-gray-600">{category.description}</p>
      <Button variant="outline" className="mt-5">
        View category
      </Button>
    </article>
  )
}
