import rss from "@astrojs/rss"
import type { APIContext, APIRoute } from 'astro'
import { getCollection } from "astro:content"

import MarkdownIt from "markdown-it"
import sanitizeHtml from 'sanitize-html'

import { sortPostsDate } from "@/lib/utils"
import { siteConfig } from "@/site.config"

const parser = new MarkdownIt()

export const GET: APIRoute = async (context: APIContext) => {
  const posts = await getCollection("blog")
  const sortedPosts = sortPostsDate(posts)

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context?.site!,
    items: sortedPosts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      content: sanitizeHtml(parser.render(post.body)),
      link: `/${post.slug}`,
    })),
  })
}
