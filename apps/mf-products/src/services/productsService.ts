import type { Product } from '@microfrontend/types'

import { productsMock } from '../mocks/products'

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(productsMock)
}
