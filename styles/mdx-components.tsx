import Image from 'next/image'

export const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-4">
      {children}
    </h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-6 ml-6 list-disc">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-6 ml-6 list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mt-2">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-4 pl-6 italic">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ${className || ''}`}>
        {children}
      </code>
    )
  },
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
      {children}
    </pre>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={800}
      height={400}
      className="rounded-lg my-6"
    />
  ),
  hr: () => (
    <hr className="my-8 border-border" />
  ),
}
