export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  categories: string[]
  tags: string[]
  draft?: boolean
  readingTime?: string
  content?: string
}

export interface PostMeta {
  title: string
  date: string
  summary: string
  categories: string[]
  tags: string[]
  draft?: boolean
}
