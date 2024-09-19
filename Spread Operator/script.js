/**
 * spread operator adalah salah satu cara dengan menggunakan
 * titik tiga(...) untuk memecah seluruh element dalam iterable
 * menjadi terpisah. contoh sederhananya adalah seperti dibawah
 */

const mhsInstiki = ["gusanta", "radit", "deva"];
console.log(...mhsInstiki);

/**
 * Spread operator ini biasanya digunakan ketika
 * kita akan menggabungkan lebih dari 1 array
 * ke dalam array yang baru. selain spread operator
 * masaih ada method bawaan dari array yaitu concat()
 * namun dalam kasus penggunaannya, concat()
 * tidak sefleksible ketika menggunakan spread operator.
 */

const kampus = ["instiki", "stikom", "primakara"];
const dosen = ["abdul", "tono", "toni"];

const fetchKD = [...kampus, "mahasiswa", ...dosen];
const fetchConcat = kampus.concat(dosen);

/**
 * contoh sederhananya adalah seperti diatas
 * ketika kita ingin menggabungkan dan menambahkan
 * element ke dalam array yang baru, akan lebih mudah
 * menggunakan spread operator.
 */

/**
 * Kita juga bisa meng-copy array menggunakan
 * spread operator, contohnya
 * dibawah ini
 */

const nama = ["satu", "dua", "tiga"];
const newNama = [...nama];

/**
 * jika tanpa spread operator maka
 * ketika kita mengubah isi dari array
 * newNama, array nama akan ikut berubah
 * menyesuaikan dengan array newNama
 */

/**
 * Contoh dalam penggunaan nyata
 * dibawah ini
 */

const listMhs = document.querySelectorAll("li");
let newList = [];

// menggunakan for..of
for (const mhs of listMhs) {
  newList.push(mhs.textContent);
}

// Menggunakan spread operator dan map
let newLi = [...listMhs].map((mhs) => mhs.textContent);

/**
 * Hasilnya sama namun kodenya menjadi lebih ringkat
 * ketika kita menggunakan spread operator
 */

/**
 * Spread operator ini bisa digunakan untuk
 * berbagai macam keperluan. contoh sederhananya
 * adalah ketika kita ingin menganimasikan kata namun dengan
 * animasi huruf per huruf, contohnya adalah seperti dibawah ini.
 */

const names = document.querySelector(".nama");
const huruf = [...names.textContent].map((a) => `<span>${a}</span>`).join('');
names.innerHTML = huruf;