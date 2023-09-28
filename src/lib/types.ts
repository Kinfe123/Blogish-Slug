export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
    auhtor:string
    image: string
	date: string
	categories: Categories[]
	published: boolean
}