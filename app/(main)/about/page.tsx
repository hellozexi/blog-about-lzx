import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Github } from 'lucide-react'

export const metadata = {
  title: '关于 - 我的博客',
  description: '了解更多关于我的信息',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">关于我</h1>
          <p className="text-lg text-muted-foreground">
            热爱技术的开发者，喜欢学习新技术并分享经验
          </p>
        </div>

        {/* Bio Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>你好！</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              欢迎来到我的个人博客！我是一名热衷于技术创新的开发者，
              专注于前端和后端开发，喜欢探索最新的技术趋势。
            </p>
            <p>
              在这个博客里，我会分享我的学习笔记、项目经验、技术思考以及一些生活感悟。
              希望我的内容能够对你有所帮助。
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>技术栈</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">前端开发</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">后端开发</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle>联系方式</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <a
                href="https://github.com/hellozexi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub - hellozexi</span>
              </a>

              <a
                href="mailto:mikeliu2511@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email - mikeliu2511@gmail.com</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
