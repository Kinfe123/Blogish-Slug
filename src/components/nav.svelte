<script>
	// import Menubar from "$lib/components/ui/menubar/menubar.svelte";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	import * as Menubar from '$lib/components/ui/menubar';
	
    let bookmarks = false;
  let fullUrls = true;
  const profileRadioValue = "benoit";

</script>

<div class=''>
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <!-- <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      /> -->
      <span class="self-center   whitespace-nowrap text-xl font-semibold bg-gradient-to-r from-blue-500 via-orange-700 to-orange-500 bg-clip-text text-transparent  dark:text-white">
        [Slug].mdx
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle}  class="dark:bg-transparent"/>
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
  
      <!-- <ThemeSwitch /> -->
    </NavUl>
  </Navbar>
	
      
</div>
