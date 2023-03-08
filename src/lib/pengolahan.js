import {acak} from "kumpulan-tools"

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

export default function (teksnya) {
  let jadiArray = teksnya.split("\n");

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
}
