<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

<Nav />

<main class="grid mx-auto max-w-screen-xl p-6 text-gray-800">
  <slot />
</main>

<Footer />