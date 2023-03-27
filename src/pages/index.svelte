<script>
  import gambar from "../gambar/latar.jpg";
  import pengolahan from "../lib/pengolahan";
  import iklan from "../gambar/your_ad_here_banner.jpg";
  import confetti from "canvas-confetti";

  let data;

  //   hari ini dalam bentuk angka
  let hariIni = new Date().getDay();

  function cekData() {
    if (localStorage.jobs) {
      data = JSON.parse(localStorage.jobs)
        [hariIni].filter((x) => x)
        .sort();
    }
  }
  cekData();

  function hapus(teks) {
    // confetti();
    let jobsTeks = localStorage.jobsTeks
      .split("\n")
      // .filter((item) => item !== teks)
      .filter((item) => {
        if (!teks.endsWith("!")) {
          return item !== teks;
        } else {
          return item;
        }
      })
      .join("\n");
    localStorage.jobsTeks = jobsTeks;
    // Kalau pakai function pengolahan, nanti dia akan teracak semuanya. Kan pengennya itu, jumlahnya adalah jumlah sebelumnya pada hari ini, dikurangi dengan 1
    // pengolahan(jobsTeks);
    // cekData();
    data = data.filter((item) => item !== teks);

    let semua_json = JSON.parse(localStorage.jobs);
    semua_json[hariIni] = data;
    localStorage.jobs = JSON.stringify(semua_json);
  }
</script>

<div class=" luar">
  <img src={gambar} class=" gambarLatar" alt="" />
  <div class="w-full bg-yellow-100 rounded p-2 mb-2 text-sm text-yellow-700">
    Click an item to remove it
  </div>
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
              <li
                class="hover:underline cursor-pointer select-none"
                on:click={() => hapus(item)}
              >
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
  <a class="mt-3 block" href="https://wa.me/6281545143654"
    ><img src={iklan} alt="" /></a
  >
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
  /* .atasnyaJoinCommunity {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  } */
  /* .joinCommunity {
    background: var(--green-500);
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    box-shadow: 0 1px 3px 0 var(--gray-500);
  } */
</style>
