<script lang="ts">
  export let thumbnailUrl: string;
  export let webPageUrl: string;
  export let webPageTitle: string;

</script>

<div class="flex flex-col items-center mr-4">
  <a href={webPageUrl} target="_blank" class="block">
    <img class="w-48 h-48 rounded-xl object-cover" src={thumbnailUrl} alt={webPageTitle} />
  </a>
  <p class="w-48 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs mt-2">{webPageTitle}</p>
</div>

