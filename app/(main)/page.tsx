import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          欢迎来到我的博客
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          记录技术学习、项目经验和生活感悟的地方
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">
              浏览文章 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">关于我</Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">最新文章</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">查看全部 →</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex gap-2 flex-wrap mb-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1" />
              <CardFooter className="text-sm text-muted-foreground">
                <div className="flex items-center justify-between w-full">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            暂无文章，敬请期待！
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="mt-20 py-12 border-t">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">📝</div>
            <h3 className="text-xl font-semibold mb-2">技术分享</h3>
            <p className="text-muted-foreground">
              分享前端开发、后端技术等学习笔记和经验总结
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">💡</div>
            <h3 className="text-xl font-semibold mb-2">项目实践</h3>
            <p className="text-muted-foreground">
              记录项目开发过程中的问题和解决方案
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">🌈</div>
            <h3 className="text-xl font-semibold mb-2">生活感悟</h3>
            <p className="text-muted-foreground">
              分享生活中的思考和感悟
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
