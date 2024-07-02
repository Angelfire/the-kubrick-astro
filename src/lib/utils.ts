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

export function getUniqueCategories(posts: CollectionEntry<"blog">[] = []): string[] {
  const categories = new Set(posts.map((post) => post.data.category))

  return Array.from(categories)
}

export function sluglify(text: string) {
	return text.replace(/\s+/g, '-')
}

export function unsluglify(text: string) {
	return text.replace(/-/g, ' ')
}
