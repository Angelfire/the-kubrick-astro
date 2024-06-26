import type { CollectionEntry } from "astro:content"

export function sortPostsDate(posts: CollectionEntry<"blog">[] = []) {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

export function getUniqueTags(posts: CollectionEntry<"blog">[] = []) {
  const uniqueTags = new Set<string>()

  for (const post of posts) {
    post.data?.tags?.map((tag: string) => uniqueTags.add(tag))
  }

  return Array.from(uniqueTags)
}
