<script lang="ts">
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "./stylify.css";
</script>

<Router {routes} />

<style>
  :global(*) {
    word-wrap: break-word;
    box-sizing: border-box;
  }
  /* chrome extension */
  :global(body) {
    width: 350px;
    font-size: 16px;
  }
</style>
