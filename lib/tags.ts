import { getTagCount, getPostsByTag } from './posts'

export interface TagWithCount {
  name: string
  count: number
}

export async function getAllTags(): Promise<TagWithCount[]> {
  const count = await getTagCount()

  return Object.entries(count)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export { getPostsByTag }
