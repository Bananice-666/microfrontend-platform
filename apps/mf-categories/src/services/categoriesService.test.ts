import { describe, expect, it } from 'vitest'

import { getCategories } from './categoriesService'

describe('categoriesService', () => {
  it('returns the categories from the data source', async () => {
    const categories = await getCategories()

    expect(categories).toHaveLength(2)
    expect(categories[0]).toMatchObject({
      id: 'c-1',
      name: 'Accessories',
    })
  })
})