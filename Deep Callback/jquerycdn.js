/**
 * Ini adalah contoh asyncronous function menggunakan
 * jquery dengan logika yang sama namun dengan code
 * yang lebih singkat
 */

$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
    console.log(mhs);
  },
  error: () => {},
});
