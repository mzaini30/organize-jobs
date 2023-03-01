<script>
  import gambar from "../gambar/latar.jpg";
  let data;

  //   hari ini dalam bentuk angka
  let hariIni = new Date().getDay();

  if (localStorage.jobs) {
    data = JSON.parse(localStorage.jobs)[hariIni];
  }
</script>

<div class="width:100% min-height:100vh padding:10px ">
  <img
    src={gambar}
    class="position:fixed top:0 left:0 width:100% height:100% z-index:-1 object-fit:cover"
    alt=""
  />
  <div
    class="border:1px_solid_gray border-radius:5px background:white padding:10px box-shadow:0_1px_3px_0_gray"
  >
    {#if data && data.length > 0 && data[0] + data[1] != 0}
      <div
        class="padding-bottom:10px display:flex justify-content:space-between"
      >
        <div class="font-weight:bold text-transform:uppercase">
          Must be done TODAY
        </div>
        <a class="text-decoration:underline" href="#/edit">edit</a>
      </div>
      <div>
        <ol class="list-style:decimal margin-left:20px">
          {#each data as item}
            {#if item != null}
              <li>
                {item}
              </li>
            {/if}
          {/each}
        </ol>
      </div>
    {:else}
      <div class="display:flex justify-content:space-between">
        <div class="">Nothing to do</div>
        <a class="color:gray text-decoration:underline" href="#/edit">edit</a>
      </div>
    {/if}
  </div>
  <div class="display:flex justify-content:center margin-top:10px">
    <a
      class="background:$green500 border-radius:5px color:white padding:5px_10px font-size:12px box-shadow:0_1px_3px_0_$gray500"
      href="https://zenzen.web.id/komunitas">Join Community</a
    >
  </div>
</div>

<!-- <style>
  .latar {
    background-image: url("../latar.jpg");
  }
</style> -->
