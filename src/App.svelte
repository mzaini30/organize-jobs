<script lang="ts">
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "warna-tailwind/warna.css";
</script>

<Router {routes} />

<style>
  :global(*) {
    word-wrap: break-word;
    box-sizing: border-box;
  }
  /* chrome extension */
  /* :global(body) {
    width: 350px;
  } */
</style>
