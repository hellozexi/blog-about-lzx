'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import Fuse from 'fuse.js'

interface Post {
  slug: string
  title: string
  date: string
  summary: string
  categories: string[]
  tags: string[]
  readingTime?: string
}

interface BlogSearchProps {
  posts: Post[]
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  // Initialize Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'summary', 'categories', 'tags'],
      threshold: 0.3, // Lower = more strict, 0.0 = perfect match, 1.0 = match anything
      includeScore: true,
    })
  }, [posts])

  // Perform search
  const results = useMemo(() => {
    if (!query.trim()) {
      return []
    }
    return fuse.search(query).slice(0, 8) // Limit to 8 results
  }, [query, fuse])

  const handleInputFocus = () => {
    setShowResults(true)
  }

  const handleInputBlur = () => {
    // Delay hiding results to allow clicking on links
    setTimeout(() => setShowResults(false), 200)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="搜索文章标题、分类或标签..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="pl-10 pr-4 h-12 text-base"
        />
      </div>

      {/* Search Results Dropdown */}
      {showResults && query.trim() && (
        <div className="absolute z-50 w-full mt-2 bg-background border rounded-lg shadow-lg max-h-[600px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <p className="text-lg mb-2">未找到相关文章</p>
              <p className="text-sm">试试其他关键词</p>
            </div>
          ) : (
            <div className="p-2">
              <div className="px-3 py-2 text-sm text-muted-foreground border-b mb-2">
                找到 {results.length} 篇文章
              </div>
              {results.map((result) => {
                const post = result.item
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    onClick={() => {
                      setQuery('')
                      setShowResults(false)
                    }}
                  >
                    <Card className="p-4 hover:bg-accent transition-colors border-0 shadow-none">
                      <div className="flex gap-2 flex-wrap mb-2">
                        {post.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold text-base mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {post.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
