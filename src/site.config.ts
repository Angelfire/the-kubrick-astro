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
	author: 'Andrés Bedoya', // Site author
	title: 'Astro Kubrick Blog', // Site title.
	description: 'The default Astro theme based on the famous Kubrick from WordPress.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 4 // Number of posts per page
}

// List of categories for blog posts
export const CATEGORIES = [
	'Category 1',
	'Category 2',
	'Category 3',
	'Category 4',
	'Category 5'
] as const

export const BLOGROLL = [
	{
		title: 'Sr.Hart',
		url: 'https://srhart.co'
	},
	{
		title: 'Velocidad de Escape',
		url: 'https://velocidadescape.com/'
	},
	{
		title: 'Astro',
		url: 'https://astro.build'
	}
] as const
