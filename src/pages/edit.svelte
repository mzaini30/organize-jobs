<script>
  import { acak } from "kumpulan-tools";
  import { push } from "svelte-spa-router";

  let textarea;

  if (localStorage.jobsTeks) {
    textarea = localStorage.jobsTeks;
  }

  function simpan() {
    textarea = textarea
      .split("\n")
      .filter((item) => item !== "")
      .sort()
      .join("\n");
    localStorage.setItem("jobsTeks", textarea);

    let jadiArray = textarea.split("\n").filter((item) => item !== "");
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
    localStorage.setItem("jobs", JSON.stringify(jadiArray2));
    push("/");
  }
</script>

<div class="p-2 latar w-full min-h-screen">
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
    background-image: url("../latar.jpg");
  }
</style>
