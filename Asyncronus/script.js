/**
 * Asyncronus merupakan sebuah metode dimana
 * ketika ada logika yang rumit, maka programmer
 * akan menjalankan logika "a" dengan logika lain
 * sampai proses dalam logika "a" selesai.
 * ada beberapa proses yang rumit didalamnya namun disini
 * saya akan menjelaskan 3 saja diantaranya :
 *
 * =======================================================
 * stack(tempat dieksekusinya
 * argument, function dan lain lain),
 * =======================================================
 *
 * =======================================================
 * yang kedua adalah web api(tempat untuk function callback
 * atau asyncronus function mengunggu hingga functionnya
 * selesai dieksekusi)
 * =======================================================
 *
 * =======================================================
 * yang ketika adalah event loop. ketika sebuah asyncronus
 * function selesai dieksekusi,keseluruhan function itu
 * akan dimaksukkan ke dalam event loop. dan functionnya akan
 * ditampilkan tepat setelah stack kosong.
 * =======================================================
 */

// Contoh sederhananya
console.log("satu");
setTimeout(() => {
  console.log("dua");
}, 5000);
console.log("tiga");


// latentflip.com adalah tempat untuk melihat bagaimana
// teori diatas dieksekusi

