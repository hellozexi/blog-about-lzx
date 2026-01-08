import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js 16
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/hellozexi"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/hellozexi"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:mikeliu2511@gmail.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 border-t py-4 text-center text-sm text-muted-foreground">
        © {currentYear} 我的博客. All rights reserved.
      </div>
    </footer>
  )
}
