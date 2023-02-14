<script>
  let data;

  //   hari ini dalam bentuk angka
  let hariIni = new Date().getDay();

  if (localStorage.jobs) {
    data = JSON.parse(localStorage.jobs)[hariIni];
  }
</script>

<div class="w-full min-h-screen p-2 latar">
  <div class="border rounded bg-white p-2 shadow">
    {#if data && data.length > 0}
      <div class="pb-2 flex justify-between">
        <div class="font-bold uppercase ">Must be done TODAY</div>
        <a class="text-gray-500 underline" href="#/edit">edit</a>
      </div>
      <div>
        <ol class="list-decimal ml-5">
          {#each data as item}
            <li>
              {item}
            </li>
          {/each}
        </ol>
      </div>
    {:else}
      <div class="flex justify-between">
        <div class="">Nothing to do</div>
        <a class="text-gray-500 underline" href="#/edit">edit</a>
      </div>
    {/if}
  </div>
  <div class="flex justify-center">
    <a
      class="bg-green-500 rounded shadow px-4 py-2 mt-2 text-white text-sm"
      href="https://chat.whatsapp.com/HFVW22P2dpeKOMBJFpSqUd">Join Community</a
    >
  </div>
</div>

<style>
  .latar {
    background-image: url("../latar.jpg");
  }
</style>
