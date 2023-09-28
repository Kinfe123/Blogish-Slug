<script>
// @ts-nocheck

	import { formatDate } from '$lib/dateutils';

      // @ts-ignore
      import { Card, Button, Toggle } from 'flowbite-svelte';
      import { ArrowRightOutline } from 'flowbite-svelte-icons';
      // import type {Post} from '../../lib/'
      let vCard = false;
    // @ts-ignore
    /**
	 * @type {{ title: any; categories: string | any[]; description: any; date: any; }}
	 */
     export let post;
    console.log("Data from blog: " , post)
</script>
<div>
    <Card img={post.image} reverse={vCard} class="mb-4 text-left">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
      <div class="flex flex-row gap-2">
        [
        {#each post.categories as cat, indx}
          <p> {#if indx !== post.categories.length-1 }
            {cat},  
            {:else} 
              {cat}  

            {/if}
          
          
          </p>
        
        {/each}
        ]
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{post.description}</p>

      <p class="date">{formatDate(post.date)}</p>
      <p class="date">{(post.author)}</p>

      <Button class="flex justify-center items-center">
        <span class='text-slate-500 '>

          Read more 
        </span>
        <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-slate-500" />
      </Button>
    </Card>
    <!-- <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle> -->
  </div>