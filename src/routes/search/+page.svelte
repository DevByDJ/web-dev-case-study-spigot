<script lang="ts">
  import SearchResults from '../../components/SearchResults.svelte';

  export let data: any;

</script>

<div>
  {#if data}
    <SearchResults {data} />
  {:else}
    <p>No results found.</p>
  {/if}
</div>