<script lang="ts">
  export let webPageUrl: string;
  export let webPageTitle: string;
  export let webPageDescription: string;
</script>

<div class="mt-6 result-container">
  <a href="{webPageUrl}" target="_blank" class="text-blue-500 underline" style="font-size: var(--font-size-lg);">{webPageTitle}</a>
  <span>
    <p style="font-size: var(--font-size-xs);">{webPageDescription}..</p>
    <div>
      <a href="{webPageUrl}" target="_blank" class="text-green-500" style="font-size: var(--font-size-sm);">{webPageUrl}</a>
    </div>
  </span>
</div>
