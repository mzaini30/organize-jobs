<script lang="ts">
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "warna-tailwind/warna.css";
  import "./App.css";
  import Wa from "./komponen/wa.svelte";
</script>

<div class="mb-14">
  <Router {routes} />
  <Wa />
</div>
