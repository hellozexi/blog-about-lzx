# 我的个人博客

使用 Next.js 16 + TypeScript + Tailwind CSS 构建的个人博客系统。

## 技术栈

- **Next.js 16** - React 框架，使用 App Router
- **TypeScript** - 类型安全
- **Tailwind CSS v4** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量的 React 组件库
- **next-themes** - 深色模式支持
- **next-mdx-remote** - MDX 内容渲染

## 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 深色模式支持
- ✅ MDX 文章管理
- ✅ 文章分类和标签系统
- ✅ 阅读时长计算
- ✅ 代码语法高亮

## 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 添加新文章

1. 在 `content/blog/年份/` 目录下创建新的 `.mdx` 文件
2. 文件名使用英文，例如 `my-new-post.mdx`
3. 在文件顶部添加 frontmatter：

```yaml
---
title: "文章标题"
date: "2025-01-08"
summary: "文章摘要"
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
draft: false
---

# 文章内容

这里是文章的正文内容...
```

## 项目结构

```
blog-website/
├── app/                    # Next.js App Router
├── components/             # React 组件
│   ├── layout/            # 布局组件
│   ├── blog/              # 博客相关组件
│   └── ui/                # UI 组件 (shadcn/ui)
├── content/               # MDX 内容
│   └── blog/              # 博客文章
├── lib/                   # 工具函数
├── styles/                # 样式文件
└── types/                 # TypeScript 类型定义
```

## 部署

本项目部署在 [Vercel](https://vercel.com) 上。

### 部署步骤

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. Vercel 会自动检测 Next.js 并完成部署

## 许可证

MIT License
