<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import Result from "../components/Result.svelte";
  import VideoResult from "../components/VideoResult.svelte";

  export let data:any;

  let results: any;
  let videoResults: any;

  $: if (data && data.props && data.props.data) {
    results = data.props.data.webPages.value.slice(0, 10);
    videoResults = data.props.data.videos.value.slice(0, 10);
  }

</script>

<div role="tablist" class="ml-10 tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="All" checked />
  <div role="tabpanel" class="tab-content">
    <div class="mt-4" style="font-size: 12px;">
      About {data.props.data.webPages.totalEstimatedMatches} results
    </div>

    <div class="mt-4">
      <b style="font-size: 32px;">{data.props.data.queryContext.originalQuery}</b>
    </div>

    <div class="mt-8">
      {#each results as result, index (result.id || index)}
        <Result 
          webPageUrl={result?.url} 
          webPageTitle={result?.name} 
          webPageDescription={result?.snippet}
        />
      {/each}
    </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Images" />
  <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="News" />
  <div role="tabpanel" class="tab-content p-10">Tab content 3</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Videos" />
  <div role="tabpanel" class="tab-content">
    <div class="mt-4" style="font-size: 12px;">
      About {data.props.data.webPages.totalEstimatedMatches} results
    </div>

    <div class="mt-4">
      <b style="font-size: 32px;">{data.props.data.queryContext.originalQuery}</b>
    </div>

    <div class="mt-8">
      {#each videoResults as videoResult, index (videoResult.id || index)}
        <VideoResult 
          thumbnailUrl={videoResult?.thumbnailUrl}
          webPageUrl={videoResult?.contentUrl} 
          webPageTitle={videoResult?.name} 
          webPageDescription={videoResult?.description}
        />
      {/each}
    </div>
  </div>
</div>