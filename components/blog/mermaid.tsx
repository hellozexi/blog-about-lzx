'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

let mermaidInitialized = false

export function MermaidChart({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const renderMermaid = async () => {
      try {
        // 生成唯一ID
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // 初始化 Mermaid（只初始化一次）
        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          })
          mermaidInitialized = true
        }

        // 渲染图表
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
      } catch (error) {
        console.error('Mermaid render error:', error)
      }
    }

    renderMermaid()
  }, [chart])

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center items-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
