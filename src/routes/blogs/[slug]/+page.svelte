<script>
// @ts-nocheck


   
  
 
    // import { formatDate } from '$lib/dateutils.js';
    export let data;
    console.log(data.meta)
    

</script>





<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
    <meta property="og:image" content={data.meta.image} />
    
</svelte:head>