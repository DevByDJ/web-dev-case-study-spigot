<script lang="ts">

  import Result from "../components/Result.svelte";
  import VideoResult from "../components/VideoResult.svelte";
  import ImageResult from "../components/ImageResult.svelte";
  import NewsResult from "./NewsResult.svelte";

  export let data:any;

  console.log('Received Data: ', data)

  let results: any = [];
  let videoResults: any = [];
  let imageResults: any = [];
  let newsResults: any = [];

  $: if (data?.props?.data) {
    results = data.props.data.webPages?.value?.slice(0, 10) ?? [];
    videoResults = data.props.data.videos?.value?.slice(0, 10) ?? [];
    imageResults = data.props.data.images?.value?.slice(0, 24) ?? [];
    newsResults = data.props.data.news?.value?.slice(0, 10) ?? [];
  }
</script>

<style>
  .image-gallery {
    display: flex; /* Use flexbox to layout image results */
    flex-wrap: wrap; /* Allow items to wrap to next line if necessary */
    gap: 10px; /* Adjust based on desired spacing between images */
    align-items: flex-start; /* Align items to the start of the flex container */
  }
  .image-container {
    flex: 1; /* Allows each image container to grow */
    min-width: calc(33.333% - 10px); /* Adjust based on desired width, accounting for gap */
    max-width: calc(33.333% - 10px); /* Ensures images do not grow beyond a third of the container width */
  }
</style>

<div role="tablist" class="ml-10 tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="All" checked />
  <div role="tabpanel" class="tab-content">
    {#if data.props.data.webPages.totalEstimatedMatches === 0}
      <p>No Results Found</p>
    {:else}
      <div class="mt-4" style="font-size: 12px;">
        About {data.props.data.webPages.totalEstimatedMatches} results
      </div>
    {/if}

    <div class="mt-4">
      <b style="font-size: 32px;">{data.props.data.queryContext.originalQuery}</b>
    </div>

    <div class="mt-8">
      {#if results.length === 0}
        <p>No Results Found</p>
      {:else}
        {#each results.slice(0, 3) as result, index (result.id || index)}
          <Result 
            webPageUrl={result?.url} 
            webPageTitle={result?.name} 
            webPageDescription={result?.snippet}
          />
        {/each}
        {#if imageResults.length}
          <div class="mt-8">
            <h2 class="text-2xl">Images</h2>
            <div class="image-gallery mt-4 mb-4">
              {#each imageResults.slice(0, 3) as imageResult, index (imageResult.id || index)}
                <ImageResult 
                  thumbnailUrl={imageResult?.thumbnailUrl}
                  webPageUrl={imageResult?.contentUrl} 
                  webPageTitle={imageResult?.name} 
                />
              {/each}
            </div>
          </div>
        {/if}
        {#each results.slice(3) as result, index (result.id || index)}
          <Result 
            webPageUrl={result?.url} 
            webPageTitle={result?.name} 
            webPageDescription={result?.snippet}
          />
        {/each}
      {/if}
    </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Images" />
  <div role="tabpanel" class="tab-content">

    <div class="mt-8 image-gallery">
      {#if imageResults.length === 0}
        <p>No Results Found</p>
      {:else}
        {#each imageResults as imageResult, index (imageResult.id || index)}
          <div class="col-span-1 mb-4 mr-2">
            <ImageResult 
              thumbnailUrl={imageResult?.thumbnailUrl}
              webPageUrl={imageResult?.contentUrl} 
              webPageTitle={imageResult?.name} 
            />
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="News" />
  <div role="tabpanel" class="tab-content">

  <div class="mt-8">
      {#if newsResults.length === 0}
        <p>No Results Found</p>
      {:else}
        {#each newsResults as newsResult, index (newsResult.id || index)}
          <NewsResult
            datePublished={newsResult?.datePublished}
            providerName={newsResult?.provider[0]?.name}
            providerImage={newsResult?.provider[0]?.image?.thumbnail?.contentUrl}
            thumbnailUrl={newsResult?.image.contentUrl}
            webPageUrl={newsResult?.url} 
            webPageTitle={newsResult?.name} 
            webPageDescription={newsResult?.description}
          />
        {/each}
      {/if}
    </div>
  </div>


  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Videos" />
  <div role="tabpanel" class="tab-content">

    <div class="mt-8">
      {#if videoResults.length === 0}
        <p>No Results Found</p>
      {:else}
        {#each videoResults as videoResult, index (videoResult.id || index)}
          <VideoResult 
            thumbnailUrl={videoResult?.thumbnailUrl}
            webPageUrl={videoResult?.contentUrl} 
            webPageTitle={videoResult?.name} 
            webPageDescription={videoResult?.description}
          />
        {/each}
      {/if}
    </div>
  </div>
</div>
