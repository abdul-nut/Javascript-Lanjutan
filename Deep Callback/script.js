/**
 * Contoh Syncronus Callback
 */

function tampilkanNama(callback) {
  const inputName = prompt("masukkan nama :");
  callback(inputName);
}

tampilkanNama((nama) => alert(`halo ${nama}`));

/**
 * Contoh Syncronus Callback
 * yang akan berpotensi
 * membuat web terlihat ngestuck(diem aja)
 */

const mahasiswa = [
  {
    nama: "abdul",
    nim: "2401010001",
    kelas: "a",
    prodi: "Teknologi Informatika",
    juruan: "IF-MTI",
  },
  {
    nama: "indra",
    nim: "2401010002",
    kelas: "a",
    prodi: "Bisnis dan Desain Kreatif",
    juruan: "DKV",
  },
  {
    nama: "indri",
    nim: "2401010003",
    kelas: "b",
    prodi: "Teknologi Informatika",
    juruan: "IF-MTI",
  },
  {
    nama: "ari",
    nim: "2401010004",
    kelas: "a",
    prodi: "Teknologi Informatika",
    juruan: "IF-MTI",
  },
];

console.log("mulai");
mahasiswa.forEach((m) => {
  for (i = 0; i <= 10000000; i++) {
    const date = new Date();
  }
  console.log(m.nama);
});
console.log("selesai");

/**
 * PENJELASAN SYNCRONUS FUNCTION DIATAS
 * ketika kita menggunakan syncronus function
 * dan terjadi situasi yang agak kompleks(seperti
 * mengambil data dari API). maka itu akan membuat
 * aplikasi atau web kita terlihat lemod karena harus
 * nunggu lama. disini saya menggunakan contoh sederhana
 * seperti diatas. javascript akan mengeksekusi
 * console log mulai terlebih dahulu, kemudian akan
 * mengeksekusi perulangan yang cukup lama sampai
 * akhirnya bisa mengeksekusi console log selesai
 */
