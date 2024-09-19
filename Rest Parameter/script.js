/**
 * Rest Parameter merupakan salah satu
 * parameter dengan fungsi untuk
 * menampung parameter tak terbatas dengan
 * titik tiga(...). namun rest parameter ini harus berada
 * pada akhir dari parameter karena sesuai namanya
 * yaitu parameter yang belum terpakai, misalkan
 */

function myFunc(a, b, ...args) {
  return `a = ${a}, ${b}, args = ${args}`;
}

console.log(myFunc(1, 2, 3, 4, 5, 5, 6));

/** contoh dalam kasus
 * membuat function penjumlahan
 */

function penjumlahan(...args) {
  let jumlah = args.reduce((previous, current) => previous + current);
  return jumlah;
}

console.log(penjumlahan(11, 6, 1, 8, 4, 5));

/**Selain itu, bisa juga digunakan dalam
 * array destructuring
 */

const kelompok = ["abdul", "fikri", "lao fu", "kirara", "kairi"];
const [ketua, wakil, ...anggota] = kelompok;

// object destructuring
const team = {
  pm: "pagi",
  frontEnd: "siang",
  backEnd: "malam",
};

const { pm, ...other } = team;

/**
 * Filtering value
 */

function filterBy(type, ...values) {
  return values.filter((a) => typeof a === type);
}

console.log(filterBy("string", 1, 2, 3, 4, "a", "b", true, false));
