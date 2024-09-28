/**
 * ketika kita ingin mengambil data dari API, di dalam javascript
 * kita bisa menggunakan berbagai cara dengan ajax, misalnya
 * menggunakan ajax yang ada dalam jQuery, menggunakan ajax dari
 * vanilla javascript(javascript biasa) dan dalam versi terbaru
 * dari javascript kita bisa menggunakan fitur yang namanya fetch
 * perbedaannya bisa dilihat dibawah ini
 */

// Menggunakan ajax dari jQuery
$.ajax({
  url: "http://www.omdbapi.com/?apikey=f3d3e8c9&s=harry",
  success: (movies) => console.log(movies),
});

// Menggunakan ajax dari vanilla javascript
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(this.responseText));
  }
};
xhr.open("GET", "http://www.omdbapi.com/?apikey=f3d3e8c9&s=harry");
xhr.send();

// Menggunakan ajax dari fetch
fetch("http://www.omdbapi.com/?apikey=f3d3e8c9&s=harry")
  .then((response) => response.json())
  .then((data) => console.log(data));

/**
 * Berikut adalah perbedaan utama dari ketiganya
 * 1. jQuery :
 *      - loading data lama karena selain harus mengambil data, javascript juga harus
 *        menyelesaikan loading pada jQuery nya karena jQuery merupakan pihak ketiga
 *      - Kode lebih singkat
 *
 * 2. vanilla javascript :
 *      - loading data lebih cepat karena tidak menggunakan pihak ketiga
 *      - kode sangat jauh lebih panjang dibandingkan dengan jQuery
 *
 * 3. fetch :
 *      - loading data lebih cepat karena tidak menggunakan pihak ketiga
 *      - kode singkat sama seperti ketika kita menggunakan jQuery
 *
 * perbedaan yang sangat jelas adalah panjang kode dan loading datanya,
 * menggunakan method fetch menjadi pilihan terbaik jika ingin membuat
 * kode singkat dengan loading data yang lebih cepat
 */

/** P R O M I S E
 * project ini sebetulnya difokuskan untuk promise, yang mana
 * promise merupakan object yang menentukan status dari sebuah event
 * asyncronous kedepannya apakah gagal atau berhasil.
 * dalam promise ini memiliki 3 kondisi yaitu fulfilled(berhasil) dan rejected(gagal)
 * dan pending(menunggu).
 * callback setiap kondisi
 * fullfilled : resolve
 * rejected : reject
 * pending :  finally
 * kemudian jika fullfilled maka kita bisa menggunakan object then, dan jika rejected
 * maka kita bisa menggunakan object catch.
 * dibawah ini adalah contoh promise sederhana.
 */

// Contoh 1

const ditepati = true;

const promise1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("ditepati");
  } else {
    reject("tidak ditepati");
  }
});

promise1
  .then((response) => console.log(`OK! : ${response}`))
  .catch((response) => console.log(`SOMETHING WEENT WRONG : ${response}`));

/**
 * Ketika kita menggunakan promise untuk mengambil data dari API,
 * data yang diambil tidak akan langsung didapatkan(karena ada proses
 * pengambilan data yang memerlukan waktu). jadi dapat dipastikan kita
 * harus menunggu beberapa detik, dibawah ini adalah contoh sederhana
 * asyncronous promise yang mengharuskan kita menunggu beberapa detik.
 */

const promise2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("ditepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});

/**Dengan contoh diatas kita bisa melihat jeda
 * pending dari proses sederhana menggunakan
 * setTimeout, caranya adalah dengan
 */

console.log("mulai");
console.log(promise2.then((response) => console.log(response)));
console.log("selesai");

/**Logging Menggunakan Finally
 * ketika selesai pending dalam promise, jika ada
 * method finnaly maka method ini yang akan dijalankan
 * terlebih dahulu untuk memberitahu bahwa loading sudah selesai.
 * setelah itu barulah nilainya dikembalikan.
 * finally ini biasanya digunakan ketika ingin menambahkan animasi loading.
 * ketika selesai, jalankan method finally untuk menghentikan animasi loading
 */

promise2
  .finally(() => console.log("loading selesai"))
  .then((response) => console.log(`OK! : ${response}`))
  .catch((response) => console.log(`SOMETHING WEENT WRONG : ${response}`));

/**P R O M I S E . A L L
 * biasanya digunakan ketika programmer memiliki lebih dari 1 promise.
 * codenya akan menjadi sangat panjang jika tidak menggunakan promise.all
 * dengan promise.all, programmer memungkinkan untuk memanggil lebih dari
 * 1 promise dalam 1 waktu.
 * misalkan kita punya 2 promise yang mengembalikan array of object
 */

const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Harry Potter",
        sutradara: "J.K Rowling",
        pemeran: "Daniel Radcliffe, Emma Watson, Rupert Grint",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        cuaca: "Hujan",
        kota: "Jakarta",
        suhu: "30°C",
      },
    ]);
  }, 1000);
});

Promise.all([film, cuaca])
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })
  .catch((response) => console.log(response));
