<script>
  import "../app.css";
  import { page } from '$app/stores';
  import Header from "../components/Header.svelte";

  let y = 0;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView();
  }

  // Reactive statement to track the current path
  $: isMainPage = $page.url.pathname === '/';

</script>

<div class="relative flex flex-col max-w-[2440px] mx-auto w-full text-sm sm:text-nase min-h-screen">
  {#if !isMainPage}
    <Header y={y}/>
  {/if}

  <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
    y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0'
  )}>
    <button on:click={goTop} class="ml-auto bg-slate-800 rounded-full text-violet-400 px-3 sm:px-4 sm:py-3 hover:bg-slate-800 cursor-pointer">
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"/>
    </button>
  </div>

  <slot />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />