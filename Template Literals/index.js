// Contoh Penggunaan Template Literal

// CONTOH 1
const nama = "abdul";
const umur = "22";
const sayHello = `Halo nama saya ${nama}, saya berumus ${umur} tahun`;

// CONTOH 2

const angka = 10;
const cek = `${angka % 2 == 0 ? "angka genap" : "angka ganjil"}`;

// CONTOH 3
const penjumlahan = `${1 + 1} adalah genap`;

// CONTOH 4

const mhs = {
  nama: `abdul`,
  jurusan: "mti",
  kelas: "a",
  ukm: "banyak",
  nim: "1232324422",
};

const div1 = `<div class="mhs">
    <h2>${nama}</h2>
    <span>${nim}</span>
</div>`;
