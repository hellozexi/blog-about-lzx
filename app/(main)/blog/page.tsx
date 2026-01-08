import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BlogSearch } from '@/components/blog/search'

export const metadata = {
  title: '博客 - 我的博客',
  description: '浏览所有文章',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">博客文章</h1>
          <p className="text-lg text-muted-foreground mb-8">
            分享技术学习笔记、项目经验和生活感悟
          </p>
          <BlogSearch posts={posts} />
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            暂无文章，敬请期待！
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {post.categories.map((category) => (
                      <Link key={category} href={`/blog/category/${encodeURIComponent(category)}`}>
                        <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-pointer">
                          {category}
                        </Badge>
                      </Link>
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
        )}
      </div>
    </div>
  )
}
