import type { CollectionEntry } from "astro:content";

type DateFormat = 'short' | 'long';

interface DateFormatOptions {
  weekday?: 'long';
  year: 'numeric';
  month: 'long';
  day: 'numeric';
}

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

/**
 * Formats a given date according to the specified format.
 * @param date - The date to format.
 * @param format - The format to use for formatting the date.
 * @returns The formatted date as a string.
 */
export function formatDate(date: Date, format: DateFormat): string {
  const options: Record<DateFormat, DateFormatOptions> = {
    short: { year: 'numeric', month: 'long', day: 'numeric' },
    long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  };

  const formatter = new Intl.DateTimeFormat('en-US', options[format]);
  const parts = formatter.formatToParts(date);

  const formattedParts = parts.map(part => {
    if (part.type === 'day') {
      return part.value + getDaySuffix(Number.parseInt(part.value, 10));
    }

    return part.value;
  });

  return formattedParts.join('').replace(/,\s*$/, '');
}

/**
 * Returns the suffix for a given day.
 * @param day - The day for which to get the suffix.
 * @returns The suffix for the given day.
 */
export function getDaySuffix(day: number): string {
  const suffixes: string[] = ['th', 'st', 'nd', 'rd'];
  const v: number = day % 100;

  return (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
