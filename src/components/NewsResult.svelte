<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let datePublished: Date;
    export let providerName: string;
    export let providerImage: string;
    export let thumbnailUrl: string;
    export let webPageUrl: string;
    export let webPageTitle: string;
    export let webPageDescription: string;

    let windowWidth: number;

    function updateWidth() {
        windowWidth = window.innerWidth;
    }

    onMount(() => {
        window.addEventListener('resize', updateWidth);
        updateWidth(); // Initialize width on mount
    });

    onDestroy(() => {
        window.removeEventListener('resize', updateWidth);
    });

    function formatDate(date: Date) {
        if (!date) {
        return 'Unknown date';
        } else {
        
            const now = new Date();
            const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            const diffInHours = Math.floor(diffInMinutes / 60);
            const diffInDays = Math.floor(diffInHours / 24);
            const diffInMonths = Math.floor(diffInDays / 30);

            if (diffInSeconds < 60) {
                return `${diffInSeconds} seconds ago`;
            } else if (diffInMinutes < 60) {
                return `${diffInMinutes} minutes ago`;
            } else if (diffInHours < 24) {
                return `${diffInHours} hours ago`;
            } else if (diffInDays < 30) {
                return `${diffInDays} days ago`;
            } else if (diffInMonths < 3) {
                return `${diffInMonths} months ago`;
            } else {
                return new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(date);
            }
        }
    }

</script>

{#if windowWidth < 575}
  <div class="card w-auto mr-6 mb-10 bg-base-100 shadow-xl">
    <figure>
        <img src={thumbnailUrl} alt={webPageTitle}  />
    </figure>
    <div class="card-body">
     <div class="flex items-center mb-2">
        <div class="avatar">
        <div class="w-6 mr-2 rounded-full">
            <img src={providerImage} alt="" />
        </div>
        </div>
        <p class="text-1xl">{providerName}</p>
       </div>
      <h2 class="card-title">{webPageTitle}</h2>
      <p>{webPageDescription}</p>
      <div class="mt-2">
        <p>{formatDate(new Date(datePublished))}</p>
      </div>
      <div class="card-actions justify-end">
        <a href="{webPageUrl}" target="_blank" class="btn btn-primary">
            Read More
        </a>
      </div>
    </div>
  </div>
{:else}
  <div class="mt-6 result-container flex justify-between">
    <div>
        <div class="flex items-center mb-2">
            <div class="avatar">
                <div class="w-6 mr-2 rounded-full">
                  <img src={providerImage} alt="" />
                </div>
              </div>
            <p class="text-1xl">{providerName}</p>
        </div>
        <a href="{webPageUrl}" target="_blank" class="text-blue-500 underline" style="font-size: var(--font-size-lg);">{webPageTitle}</a>
        <span>
            <p style="font-size: var(--font-size-xs);">{webPageDescription}..</p>
            <div>
                <a href="{webPageUrl}" target="_blank" class="text-green-500" style="font-size: var(--font-size-sm);">{webPageUrl}</a>
            </div>
        </span>
    </div>
    <div>
        <img src="{thumbnailUrl}" alt="Thumbnail" style="max-width: 200px; max-height: 200px;"/>
    </div>
  </div>
  <div class="mt-2">
      <p>{formatDate(new Date(datePublished))}</p>
  </div>
{/if}
