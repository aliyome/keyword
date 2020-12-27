<script lang="ts">
  import { goto } from '@sapper/app';

  let keyword: string = '';

  const onClick = async (event: Event) => {
    event.preventDefault();
    await goto(`./search?q=${keyword}`);
  };
</script>

<style>
</style>

<svelte:head>
  <title>Keyword</title>
</svelte:head>

<h1 class="text-6xl mx-0 mt-0 mb-4 p-0 text-gray-800 break-words">
  Enter keyword
</h1>
<div>
  <form>
    <input
      type="text"
      bind:value="{keyword}"
      class="py-1 px-2 border rounded" />
    <button
      type="submit"
      on:click="{onClick}"
      class="py-1 px-2 border-2 rounded border-red-300 bg-blue-200">検索</button>
  </form>
</div>
