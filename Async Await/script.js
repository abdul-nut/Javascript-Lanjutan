/**
 * Async Await
 * ini digunakan ketika kita ingin menjalankan
 * sebuah proses yang asyncronous(membutuhkan waktu sebelum proses selesai).
 * Async digunakan untuk membuat sebuah fungsi yang mengembalikan Promise
 * agar ketika fungsi itu dipanggil dapat menggunakan await.
 * await digunakan untuk menjalankan fungsi yang membutuhkan waktu sebelum
 * proses selesai. cara penulisannya sama seperti syncronous function.
 *
 * tanpa async await, sebetulnya kita masih bisa menggunakan then dan catch
 * namun hasilnya masih berada di dalam object promise.
 * ketika menggunakan async await, hasilnya akan langsung ditampilkan.
 * pemanggilan async await harus berada di dalam sebuah function baru
 * contohnya
 */

const getTime = new Promise((resolve, reject) => {
  const time = 1000;
  if (time < 5000) {
    setTimeout(() => {
      resolve("selesai");
    }, time);
  } else {
    reject("melebihi batas waktu");
  }
});

// Menggunakan async await

async function setTime() {
  try {
    const result = await getTime;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Hasil Ketika berhasil :
 * script.js:31 selesai
 *
 * hasil ketika gagal:
 * script.js:33 melebihi batas waktu
 */