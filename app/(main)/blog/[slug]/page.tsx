import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { MDXContent } from '@/components/blog/mdx'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: '文章不存在',
    }
  }

  return {
    title: `${post.title} - 我的博客`,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-6 py-12 md:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回博客列表
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex gap-2 flex-wrap justify-center mb-6">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-sm px-3 py-1">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground text-sm justify-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-center
                        prose-headings:font-bold prose-headings:tracking-tight
                        prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
                        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
                        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                        prose-p:leading-relaxed prose-p:text-base
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:font-semibold prose-strong:text-foreground
                        prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                        prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg
                        prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic
                        prose-ul:my-4 prose-list-item:my-2
                        prose-ol:my-4
                        prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto
                        prose-hr:my-8">
          <MDXContent source={post.content || ''} />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回博客列表
            </Link>
          </Button>
        </footer>
      </article>
    </div>
  )
}
