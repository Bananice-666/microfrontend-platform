import { lazy, Suspense, useState } from 'react'

const ProductsPage = lazy(() => import('mf_products/ProductsPage'))
const CategoriesPage = lazy(() => import('mf_categories/CategoriesPage'))

export const App = () => {
  const [activeRemote, setActiveRemote] = useState<'products' | 'categories'>(
    'products',
  )

  return (
    <main className="min-h-screen bg-background p-8">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold">Catalog Shell</h1>
        <nav className="flex gap-3">
          <button
            className="rounded-md border border-input px-4 py-2"
            onClick={() => setActiveRemote('products')}
            type="button"
          >
            Products
          </button>
          <button
            className="rounded-md border border-input px-4 py-2"
            onClick={() => setActiveRemote('categories')}
            type="button"
          >
            Categories
          </button>
        </nav>
      </header>

      <Suspense fallback={<p className="mx-auto mt-8 max-w-5xl">Loading remote...</p>}>
        {activeRemote === 'products' ? <ProductsPage /> : <CategoriesPage />}
      </Suspense>
    </main>
  )
}