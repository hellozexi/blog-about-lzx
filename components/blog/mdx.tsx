import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { components } from '@/styles/mdx-components'

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeHighlight],
          remarkPlugins: [remarkGfm],
        },
      }}
      components={components}
    />
  )
}
