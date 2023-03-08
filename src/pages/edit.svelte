<script>
  import { acak } from "kumpulan-tools";
  import { push } from "svelte-spa-router";
  import gambar from "../gambar/latar.jpg";
  import olahKedua from "../lib/pengolahan";

  let textarea;

  if (localStorage.jobsTeks) {
    textarea = localStorage.jobsTeks;
  }

  function simpan() {
    let arrayTextarea = textarea.split("\n");
    arrayTextarea = [...new Set(arrayTextarea)];

    arrayTextarea = arrayTextarea
      .filter((item) => item !== "")
      .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

    textarea = arrayTextarea.join("\n");
    localStorage.setItem("jobsTeks", textarea);

    olahKedua(textarea);

    push("/");
  }
</script>

<img src={gambar} class=" gambarLatar" alt="" />
<div
  class="luar
"
>
  <div
    class="
  
  peringatan"
  >
    Add * in the end of job if it's important.<br /> Example: do homework*
  </div>
  <form action="" on:submit|preventDefault={simpan}>
    <textarea
      bind:value={textarea}
      name=""
      id=""
      class="
      
      textarea"
      cols="30"
      rows="10"
      placeholder="first task
second task
third task"
    />
    <input
      type="submit"
      value="Save"
      class="simpan
      "
    />
  </form>
</div>

<style>
  .peringatan {
    /* border-radius:5px margin-bottom:10px box-shadow:0_1px_3px_0_$gray500 font-size:13px padding:10px background:$yellow200 */
    /* setelah dikasih titik koma: */
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px 0 var(--gray-300);
    font-size: 13px;
    padding: 10px;
    background: var(--yellow-200);
  }
  .textarea {
    /* width:100% box-shadow:0_1px_3px_0_$gray500 border-radius:5px background:white padding:5px */
    /* setelah dikasih titik koma: */
    width: 100%;
    box-shadow: 0 1px 3px 0 var(--gray-300);
    border-radius: 5px;
    background: white;
    padding: 5px;
  }
  .gambarLatar {
    /* position:fixed top:0 left:0 width:100% height:100% z-index:-1 object-fit:cover */
    /* setelah dikasih titik koma: */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .luar {
    /* padding:10px width:100% min-height:100vh */
    /* setelah dikasih titik koma: */
    padding: 10px;
    width: 100%;
    min-height: 100vh;
  }
  .simpan {
    /* background:$green500 border-radius:5px box-shadow:0_1px_3px_0_$gray500 margin-top:10px padding:5px_10px color:white cursor:pointer user-select:none */
    /* setelah dikasih titik koma: */
    background: var(--green-500);
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 var(--gray-500);
    margin-top: 10px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    user-select: none;
  }
</style>
