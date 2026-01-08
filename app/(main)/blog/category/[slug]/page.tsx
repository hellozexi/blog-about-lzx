import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getCategories, getPostsByCategory } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = await getCategories()

  return categories.map((category) => ({
    slug: category,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = decodeURIComponent(slug)
  return {
    title: `${category} - 分类`,
    description: `浏览 ${category} 分类下的所有文章`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = decodeURIComponent(slug)
  const posts = await getPostsByCategory(category)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回博客列表
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{category}</h1>
          <p className="text-lg text-muted-foreground">
            共 {posts.length} 篇文章
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 flex-wrap mb-3">
                  {post.categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant={cat === category ? 'default' : 'secondary'}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {post.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <div className="flex items-center justify-between w-full">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
