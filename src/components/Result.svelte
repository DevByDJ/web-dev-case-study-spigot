<script lang="ts">

  export let webPageUrl: string;
  export let webPageTitle: string;
  export let webPageDescription: string;

</script>

<div class="mt-6">
  <a href={webPageUrl} target="_blank" class="text-blue-500 underline" style="font-size: 18px;">{webPageTitle}</a>
  <span>
  <p style="font-size: 10px;">{webPageDescription}..</p>
  <div>
    <a href={webPageUrl} target="_blank" class="text-green-500" style="font-size: 11px;">{webPageUrl}</a>
  </div>
  </span>
</div>