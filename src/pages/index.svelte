<script>
  import gambar from "../gambar/latar.jpg";
  let data;

  //   hari ini dalam bentuk angka
  let hariIni = new Date().getDay();

  if (localStorage.jobs) {
    data = JSON.parse(localStorage.jobs)[hariIni];
  }
</script>

<div class=" luar">
  <img src={gambar} class=" gambarLatar" alt="" />
  <div class=" atasnyaWadah">
    {#if data && data.length > 0 && data[0] + data[1] != 0}
      <div class="wadah">
        <div class="mustBeDone">Must be done TODAY</div>
        <a class="tombolEditJuga" href="#/edit">edit</a>
      </div>
      <div>
        <ol class="listnya">
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
      <div class="atasnyaTombolEdit ">
        <div class="">Nothing to do</div>
        <a class="tombolEdit " href="#/edit">edit</a>
      </div>
    {/if}
  </div>
  <div class="atasnyaJoinCommunity ">
    <a class="joinCommunity " href="https://zenzen.web.id/komunitas"
      >Join Community</a
    >
  </div>
</div>

<style>
  .luar {
    width: 100%;
    min-height: 100vh;
    padding: 10px;
  }
  .gambarLatar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .atasnyaWadah {
    border: 1px solid var(--gray-300);
    border-radius: 5px;
    background: white;
    padding: 10px;
    box-shadow: 0 1px 3px 0 var(--gray-300);
  }
  .wadah {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .mustBeDone {
    font-weight: bold;
    text-transform: uppercase;
  }
  .tombolEditJuga {
    text-decoration: underline;
  }
  .listnya {
    list-style: decimal;
    margin-left: 20px;
  }
  .atasnyaTombolEdit {
    display: flex;
    justify-content: space-between;
  }
  .tombolEdit {
    color: gray;
    text-decoration: underline;
  }
  .atasnyaJoinCommunity {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .joinCommunity {
    background: var(--green-500);
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    box-shadow: 0 1px 3px 0 var(--gray-500);
  }
</style>
