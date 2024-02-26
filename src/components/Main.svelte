<script lang="ts">
  import { goto } from '$app/navigation'

  let searchQuery: string = '';

  function navigateToSearch() {
    let encodedQuery = encodeURIComponent(searchQuery);
    encodedQuery = encodedQuery.replace(/%20/g, '+');
    goto(`/search?q=${encodedQuery}`);
  }

</script>


<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl mb-4">
    <b>
      Froogle
    </b>
  </h1>
  <div class="relative w-full max-w-md text-gray-600 focus-within:text-gray-400">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" on:click={navigateToSearch} class="p-1 focus:outline-none focus:shadow-outline">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </span>
    <input type="search" name="q" class="w-full py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." bind:value={searchQuery} autocomplete="off">
  </div>
</div>