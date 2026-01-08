import { getCategoryCount, getPostsByCategory } from './posts'

export interface CategoryWithCount {
  name: string
  count: number
}

export async function getAllCategories(): Promise<CategoryWithCount[]> {
  const count = await getCategoryCount()

  return Object.entries(count)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export { getPostsByCategory }
