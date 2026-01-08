import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { type Post } from '@/types'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getAllPosts(): Promise<Post[]> {
  // Read all directories in content/blog
  const blogDir = path.join(contentDirectory, 'blog')

  // Check if blog directory exists
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const years = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const posts: Post[] = []

  for (const year of years) {
    const yearDir = path.join(blogDir, year)
    const files = fs.readdirSync(yearDir)

    for (const file of files) {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const filePath = path.join(yearDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        // Skip draft posts in production
        if (data.draft && process.env.NODE_ENV === 'production') {
          continue
        }

        const slug = file.replace(/\.mdx?$/, '')
        const readingTimeText = readingTime(content).text

        posts.push({
          slug,
          title: data.title || '',
          date: data.date || '',
          summary: data.summary || '',
          categories: data.categories || [],
          tags: data.tags || [],
          draft: data.draft || false,
          readingTime: readingTimeText,
          content,
        })
      }
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = new Set<string>()

  for (const post of posts) {
    for (const category of post.categories) {
      categories.add(category)
    }
  }

  return Array.from(categories).sort()
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.categories.includes(category))
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()

  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag)
    }
  }

  return Array.from(tags).sort()
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.tags.includes(tag))
}

export async function getCategoryCount(): Promise<Record<string, number>> {
  const posts = await getAllPosts()
  const count: Record<string, number> = {}

  for (const post of posts) {
    for (const category of post.categories) {
      count[category] = (count[category] || 0) + 1
    }
  }

  return count
}

export async function getTagCount(): Promise<Record<string, number>> {
  const posts = await getAllPosts()
  const count: Record<string, number> = {}

  for (const post of posts) {
    for (const tag of post.tags) {
      count[tag] = (count[tag] || 0) + 1
    }
  }

  return count
}
