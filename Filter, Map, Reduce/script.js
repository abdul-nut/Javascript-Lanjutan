/**
 * Filter merupakan Higher Order Function bawaan javascript untuk memisahkan value dari array sesuai dengan yang diinginkan programmer. contoh sederhananya sebagai berikut
 */
const angka = [2, 5, 7, 8, -1, -5, -9, 7, 1, 3,]
const filterAngka = angka.filter(a => a >= 3)
console.log(filterAngka);

/**
 * Map merupakan Higher Order Function bawaan javascript untuk mengulang pembetukan array dengan tambahan operasi atau value sesuai dengan yang diinginkan programmer. contoh sederhananya sebagai berikut
 */
const multipleAngkaMap = angka.map(a => a * 2)
console.log(multipleAngkaMap);

/**
 * Reduce merupakan Higher Order Function bawaan javascript untuk memisahkan value sebelumnya dengan value saat ini, kemudian mengoperasikan kedua value sesuai dengan keinginan atau tujuan dari programmer
 * contoh :
 * const angka = [2, 5, 7, 8, -1, -5, -9, 7, 1, 3,]
 * value sebelumnya = 2
 * value saat ini = 5
 * begitu seterusnya sampai index dalam array nya habis dioperasikan
 */
const angkaReduce = angka.reduce((previousValue, currentValue) => previousValue + currentValue, 5)
console.log(angkaReduce);

/**
 * Kode dibawah adalah Method Chaining yang menggabungkan beberapa Higher Order Function dari sebuah array. adanya Method Chaining membuat code menjadi lebih singkat karena menyatukan beberapa proses agar hasilnya sesuai dengan keinginan tanpa proses yang lebih panjang.
 */
const chainingExample =
    angka.filter(a => a > 1)
        .map(a => a * 3)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 10)

