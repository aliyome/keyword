<script context="module" lang="ts">
  // `preload` is evaluated only on the server side.
  export async function preload(page: any) {
    const keyword = page.query.q;
    return { keyword };
  }
</script>

<script lang="ts">
  export let keyword: string;
</script>

<style>
</style>

<svelte:head>
  <title>{keyword}の検索結果 | Keyword</title>
</svelte:head>

<h1 class="text-6xl mx-0 mt-0 mb-4 p-0 text-gray-800 break-words">
  {keyword}の検索結果
</h1>
<div></div>
