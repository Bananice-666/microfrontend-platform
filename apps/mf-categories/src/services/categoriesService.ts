import type { Category } from '@microfrontend/types'

import { categoriesMock } from '../mocks/categories'

export function getCategories(): Promise<Category[]> {
  return Promise.resolve(categoriesMock)
}
