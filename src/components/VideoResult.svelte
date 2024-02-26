<script lang="ts">
  export let thumbnailUrl: string;
  export let webPageUrl: string;
  export let webPageTitle: string;
  export let webPageDescription: string;

</script>

<div class="mt-6">
  <a href={webPageUrl} target="_blank" class="text-blue-500 underline" style="font-size: 18px;">{webPageTitle}</a>
  <div class="mt-2 flex">
    <div class="avatar mr-4">
      <div class="w-32">
        <img src={thumbnailUrl} alt="" />
      </div>
    </div>
    <div>
      <p style="font-size: 10px;">{webPageDescription}..</p>
      <a href={webPageUrl} target="_blank" class="text-green-500" style="font-size: 11px;">{webPageUrl}</a>
    </div>
  </div>
</div>