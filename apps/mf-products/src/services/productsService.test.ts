import { describe, expect, it } from 'vitest'

import { getProducts } from './productsService'

describe('productsService', () => {
  it('returns the products from the data source', async () => {
    const products = await getProducts()

    expect(products).toHaveLength(3)
    expect(products[0]).toMatchObject({
      id: 'p-1',
      name: 'Mechanical Keyboard',
      category: 'Accessories',
    })
  })
})
