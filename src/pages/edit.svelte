<script>
  import { acak } from "kumpulan-tools";
  import { push } from "svelte-spa-router";
  import gambar from "../gambar/latar.jpg";

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
    let arrayTextarea = textarea.split("\n");
    arrayTextarea = [...new Set(arrayTextarea)];

    arrayTextarea = arrayTextarea
      .filter((item) => item !== "")
      .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

    textarea = arrayTextarea.join("\n");
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

<img
  src={gambar}
  class="position:fixed top:0 left:0 width:100% height:100% z-index:-1 object-fit:cover"
  alt=""
/>
<div
  class="
padding:10px width:100% min-height:100vh"
>
  <div
    class="
  border-radius:5px margin-bottom:10px box-shadow:0_1px_3px_0_$gray500 font-size:13px padding:10px background:$yellow200"
  >
    Add * in the end of job if it's important.<br /> Example: do homework*
  </div>
  <form action="" on:submit|preventDefault={simpan}>
    <textarea
      bind:value={textarea}
      name=""
      id=""
      class="
      width:100% box-shadow:0_1px_3px_0_$gray500 border-radius:5px background:white padding:5px"
      cols="30"
      rows="10"
      placeholder="first task
second task
third task"
    />
    <input
      type="submit"
      value="Save"
      class="
      background:$green500 border-radius:5px box-shadow:0_1px_3px_0_$gray500 margin-top:10px padding:5px_10px color:white cursor:pointer user-select:none"
    />
  </form>
</div>

<!-- <style>
  .latar {
    background-image: url("latar.jpg");
  }
</style> -->
