# @rozsival/mdx

MDX processing utilities for the static blog.

## Features

- Frontmatter parsing with gray-matter
- Reading time calculation
- Locale-aware post filtering
- Draft/published post filtering

## Usage

### Get All Posts

```tsx
import { getAllPosts } from '@rozsival/mdx';

const posts = await getAllPosts('./content/blog', 'en');
```

### Get Single Post

```tsx
import { getPostBySlug } from '@rozsival/mdx';

const post = await getPostBySlug('./content/blog', 'my-first-post');
```

### MDX Components

```tsx
import { mdxComponents } from '@rozsival/mdx/components';

// Use with your MDX renderer
<MDXContent components={mdxComponents} />;
```

## Post Frontmatter

```mdx
---
title: My First Post
description: A brief introduction
date: 2025-01-15
tags: [typescript, react]
published: true
locale: en
---

Content goes here...
```

## Types

```tsx
type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  published?: boolean;
  locale?: string;
};

type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
};
```
