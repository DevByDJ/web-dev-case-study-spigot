<script lang="ts">
  import { onMount } from 'svelte';
  export let thumbnailUrl: string;
  export let webPageUrl: string;
  export let webPageTitle: string;
  export let webPageDescription: string;

  let screenWidth = 0;

  onMount(() => {
    screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;
    });
  });
</script>

<div>
  <!-- Desktop View -->
  <div class="mt-6 video-result-container desktop-view">
    <a href={webPageUrl} target="_blank" class="title text-blue-500 underline">{webPageTitle}</a>
    <div class="mt-2 flex">
      <div class="avatar mr-4">
        <div class="shadow-xl w-auto h-auto">
          <img 
            src={thumbnailUrl} 
            alt=""
            />
        </div>
      </div>
      <div>
        <p class="description">{webPageDescription}..</p>
        <a href={webPageUrl} target="_blank" class="link text-green-500">{webPageUrl}</a>
      </div>
    </div>
  </div>

  <!-- Mobile View (DaisyUI Card Component) -->
  <div class="card bg-base-100 shadow-xl mobile-view color: var(--text-color);">
    <figure>
      <img src="{thumbnailUrl}" alt={webPageTitle} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{webPageTitle}</h2>
      <p>{webPageDescription}</p>
      <div class="card-actions justify-end">
        <a href="{webPageUrl}" target="_blank" class="btn btn-primary">Watch Video</a>
      </div>
    </div>
  </div>
</div>
