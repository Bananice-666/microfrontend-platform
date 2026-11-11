import { useEffect, useState } from 'react'
import type { Category } from '@microfrontend/types'

import { CategoryCard } from '../components/CategoryCard'
import { getCategories } from '../services/categoriesService'

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    void getCategories().then(setCategories)
  }, [])

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">Categories</h1>
      <p className="mt-2 text-gray-600">Categories loaded from a local mock.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>
    </main>
  )
}
