<script>
	// import Button from "$lib/components/ui/button/button.svelte";
    import { siteConfig } from "$lib/config";
	// import { LogIn } from "lucide-svelte";
  
    import Hero from '../components/hero.svelte'
    import Typewriter from 'svelte-typewriter'
    // import { concurrent } from 'svelte-typewriter'
    import BlogCard from '../lib/components/blog-card.svelte'
    export let data
    

    

</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p >Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->


<svelte:head>
    <title>{siteConfig.title} </title>
    
</svelte:head>
<div>
    <!-- <p>hello world</p>  -->
    <main class='m-10'>
        <!-- <Button class='w-20 h-10'>Hello</Button> -->
        <Hero />
        <Typewriter>
            
         
            <h1 class='mx-auto text-slate-900 text-3xl font-extrabold mb-10'> &lcub;  #each blogs as blog &rcub;</h1>
        </Typewriter>
        <ul class="flex justify-center items-center gap-5">
            {#each data.posts as post}
			<BlogCard {post}/>
            {/each}
        </ul>

      
          
          
    </main>
</div>
