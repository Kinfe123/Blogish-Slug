export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
    auhtor:string
    authorImage:string
    image: string
	date: string
	categories: Categories[]
	published: boolean
}