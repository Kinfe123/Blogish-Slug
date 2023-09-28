<script>
    import {MoonIcon , SunIcon} from 'lucide-svelte'
	import Button from './ui/button/button.svelte';
    // import { Alert } from 'flowbite-svelte';
    import { AlertCircle } from "lucide-svelte";
  import * as Alert from "$lib/components/ui/alert";
    let alert = false;
   
    let darkMode = false;

//   function toggle() {
// 	window.document.body.classList.toggle('dark-mode')
//    darkMode = !darkMode
//     // console.log(window.document.body.classList.toggle)
// }
function handleSwitchDarkMode() {
        darkMode = !darkMode;
        
        if(!darkMode){

            darkMode
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark');
        }
    }

$:{if(darkMode) {
    // alert('THe darkmode is underconstruction')
    alert = true;
    setTimeout(()=> {
        alert = false;

    } , 2000)
    darkMode = false;

}}
</script>
{#if alert}

<div class=''>
    <Alert.Root variant="destructive">
        <AlertCircle class="h-4 w-4 " />
        <Alert.Title class='text-left text-stone-900'>DarkMode Change</Alert.Title>
        <Alert.Description>
          Dark Mode is under construction chill then :) 🤟
        </Alert.Description>
      </Alert.Root>
</div>

{/if}
<Button on:click={handleSwitchDarkMode} class="outline-none bg-none w-10 h-10 p-0 m-0 absolute bottom-20 right-20 rounded-full">
    {#if darkMode}
      <SunIcon />
     {:else} 
       
     <MoonIcon />
    {/if}
    

</Button>