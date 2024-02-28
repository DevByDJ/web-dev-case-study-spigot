<script lang="ts">
  export let y: number;

  import { goto } from '$app/navigation'
  import ThemeController from './ThemeController.svelte';

  let searchQuery: string = '';

  function navigateToSearch() {
    let encodedQuery = encodeURIComponent(searchQuery);
    encodedQuery = encodedQuery.replace(/%20/g, '+');
    goto(`/search?q=${encodedQuery}`);
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      navigateToSearch();
    }
  }

</script>

<header class={'header mt-6 sticky z-[100] top-0 duration-200 border border-solid ' + (y > 0 ? ' py-4 border-violet-950' : ' py-6 bg-transparent border-transparent')}>
  <a href="/">
    <h1 class="text-4xl mb-4 ml-4">Froogle</h1>
  </a>
  <ThemeController />
  <div class="search-container">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" formaction="?/search" on:click={navigateToSearch} class="p-1 focus:outline-none focus:shadow-outline">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </span>
    <input type="search" name="q" class="search-input py-2 text-sm rounded-md focus:outline-none" placeholder="Search..." on:keydown={handleKeyPress} bind:value={searchQuery} autocomplete="off">
  </div>
  <a href="/" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
    <h4 class="relative z-9">Sign In</h4>
  </a>
</header>