<script>
  import { acak } from "kumpulan-tools";
  import { push } from "svelte-spa-router";

  let textarea;

  if (localStorage.jobsTeks) {
    textarea = localStorage.jobsTeks;
  }

  function olahArray(array) {
    let jadiArray = [...array];
    jadiArray = jadiArray.filter((item) => item !== "");
    jadiArray = acak(jadiArray);
    // jika length array kurang dari 7, maka isi array akan disalin sehingga terisi 7
    if (jadiArray.length < 7) {
      let jadiArray2 = [];
      for (let i = 0; i < 7; i++) {
        jadiArray2.push(jadiArray[i % jadiArray.length]);
      }
      jadiArray = jadiArray2;
    }

    // array dibagi rata ke 7 kelompok
    let jadiArray2 = [];
    for (let i = 0; i < 7; i++) {
      jadiArray2.push([]);
    }
    jadiArray.forEach((item, index) => {
      jadiArray2[index % 7].push(item);
    });
    return jadiArray2;
  }

  function simpan() {
    textarea = textarea
      .split("\n")
      .filter((item) => item !== "")
      .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
      .join("\n");
    localStorage.setItem("jobsTeks", textarea);

    let jadiArray = textarea.split("\n");

    // bagi jadiArray menjadi dua kelompok. Kelompok pertama adalah array yang berakhiran *. Kelompok kedua adalah array yang tidak berakhiran *
    let jadiArray2 = [];
    let jadiArray3 = [];
    jadiArray.forEach((item) => {
      if (item.endsWith("*")) {
        jadiArray2 = [...jadiArray2, item];
      } else {
        jadiArray3 = [...jadiArray3, item];
      }
    });

    jadiArray2 = olahArray(jadiArray2);
    jadiArray3 = olahArray(jadiArray3);

    // gabungkan jadiArray2 dan jadiArray3. Contoh: jadiArray2[0] digabung dengan jadiArray3[0], dst
    let arrayFinal = [];
    for (let i = 0; i < 7; i++) {
      arrayFinal = [...arrayFinal, [...jadiArray2[i], ...jadiArray3[i]]];
    }

    localStorage.setItem("jobs", JSON.stringify(arrayFinal));
    push("/");
  }
</script>

<div class="p-2 latar w-full min-h-screen">
  <div class="rounded mb-2 shadow text-sm p-2 bg-yellow-200 ">
    Add * in the end of job if it's important.<br /> Example: do homework*
  </div>
  <form action="" on:submit|preventDefault={simpan}>
    <textarea
      bind:value={textarea}
      name=""
      id=""
      class="w-full shadow rounded bg-white p-2"
      cols="30"
      rows="10"
      placeholder="first task
second task
third task"
    />
    <input
      type="submit"
      value="Save"
      class="bg-green-500 rounded shadow mt-2 px-4 py-2 text-white cursor-pointer select-none"
    />
  </form>
</div>

<style>
  .latar {
    background-image: url("latar.jpg");
  }
</style>
