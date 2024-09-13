/**
 * Destructuring Assigntment adalah membongkar value dari suatu variabel
 * yang bertipe object ataupun array agar bisa diakses dengan lebih gampang.
 * sederhananya adalah membalikkan sebuah variable
 * jika array gunakan : [index] = namaVariable
 * jika object gunakan : {penamaanValue} = penamaanObject
 */

const siswas = [a, b, c, d];

// Cara sebelum Destructuring Array
const siswa1 = siswas[0];

// Cara dengan Destructuring Array
const [a, b, c, d] = siswas;

// Skipping Item
const mhsArray = [a, b, c, d, e];
const [aa, , , dd] = mhsArray;

// Swap Item
let x = 1;
let y = 2;

[x, y] = [y, x];

// return value pada function

function abc() {
  return [1, 2];
}

const [aabc, , abbc] = abc();

// Rest Parameter
const [ar, ...values] = siswas;

// DESTRUCTURING OBJECT

const mhs = {
  nama: "b",
  umur: `c`,
  kelas: `d`,
};

// Cara sebelum destructuring object
const namaMhs = mhs.nama;

// Cara dengan destructuring object
const { nama, umur, kelas } = mhs;

// Tanpa Deklarasi Object
({ nama, umur, kelas } = {
  nama: "b",
  umur: `c`,
  kelas: `d`,
});

// Mengganti Nama Variable dan Cara Pemanggilan
const { nama: n, umur: u, kelas: k } = mhs;
console.log(n);

// Memberikan default value ketika variable nya tidak ada di dalam object, sekaligus bisa memberi
// Nama baru pada variable
const { email: e = "anjay" } = mhs;

// Rest Parameter
const { nama: na, ...restParam } = mhs;

//  Menjadikan parameter lalu di return

function getName({ nama }) {
  return nama;
}

console.log(mhs);
