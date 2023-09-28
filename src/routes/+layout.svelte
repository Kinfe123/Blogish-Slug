<script lang="ts">
    import "open-props/style"
    import 'open-props/normalize'
    import 'open-props/buttons'
    import "../app.css";
    import '../fonts.css'
    import ThemeSwitch from '$lib/components/theme-switch.svelte';
    import Nav from "../components/nav.svelte";

   
</script>


<div> 
    
    <Nav />
    <div class=" bottom-4 right-4 fixed">

        <ThemeSwitch />
    </div>
    
    <slot />

</div>