interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Author', // Site author
	title: 'Astro Kubrick Blog', // Site title.
	description: 'The default Astro theme based on the famous Kubrick from WordPress.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}

// List of categories for blog posts
export const CATEGORIES = [
	'Category 1',
	'Category 2',
	'Category 3',
	'Category 4',
	'Category 5'
] as const
