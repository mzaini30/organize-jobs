<script lang="ts">
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "warna-tailwind/warna.css";
  import "./App.css";
  import Wa from "./komponen/wa.svelte";

  let html_iklan = "";

  if (localStorage.html_iklan) {
    html_iklan = localStorage.html_iklan;
  }

  async function muat_iklan() {
    let data = await fetch(
      "https://raw.githubusercontent.com/mzaini30/iklan/master/organize-jobs.html"
    );
    data = await data.text();
    html_iklan = data;
    localStorage.html_iklan = data;
  }
  muat_iklan();
</script>

<div class="">
  <Router {routes} />
  {@html html_iklan}
</div>
