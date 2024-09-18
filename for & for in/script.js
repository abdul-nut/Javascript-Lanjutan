/**
 * for..of
 * For of merupakan sebuah perulangan pada javascript terbaru
 * yang difokuskan pada object yang bertipe itterable
 */

/**
 * Contoh for..of dalam array
 */

const mhs = ["abdul", "abdi", "adit"];

// Jika menggunakan for
for (let index = 0; index < mhs.length; index++) {
  console.log(mhs[index]);
}

// Jika menggunakan for.Each()
mhs.forEach((m) => console.log(m));

// Jika menggunakan for..of
for (const m of mhs) {
  console.log(m);
}

/**
 * Mengambil value bersama dengan indexnya
 * Menggunakan forEach()
 */

mhs.forEach((m, i) =>
  console.log(`mahasiswa dengan nama ${m} berada pada urutan ${i + 1}`)
);

/**
 * Mengambil value bersama dengan indexnya tidak bisa dilakukan pada
 * for..of seperti diatas namun bisa diakali dengan contoh
 * seperti dibawah. penjelasan kodenya, ketika menggunakan mhs.entries()
 * maka yang diberikan adalah array dengan urutan [index, value]. kemudian kita bisa
 * menggunakan destructuring argument untuk mendapatkan index beserta valuenya
 */

for (const [i, m] of mhs.entries()) {
  console.log(`mahasiswa dengan nama ${m} berada pada urutan ${i + 1}`);
}

/**
 * Selanjutnya adalah NodeList
 * NodeList yang dimaksud adalah array ketika kita mencoba untuk mengambil
 * value dalam node li yang kita buat
 * contohnya seperti dibawah ini.
 * sebenarnya kita juga bisa menggunakan forEach() untuk NodeList
 * namun hanya akan berjalan ketika kita menggunakan browser versi
 * terbaru
 */

let liElement = document.querySelectorAll(".nama");

liElement.forEach((li) => console.log(li.textContent));

for (const li of liElement) {
  console.log(li.innerHTML);
}

/**
 * kemudian kita juga bisa mengambil semua
 * huruf yang ada di dalam string mengggunakan for..of
 * contohnya seperti dibawah
 */

const paragraft = "kemudian kita juga bisa";

for (const par of paragraft) {
  console.log(par);
}

/**
 * Yang terakhir dalam contoh kali ini adalah kita menggunakan
 * argument. argument yang dimaksud adalah ketika kita membuat
 * function tanpa parameter namun saat memanggil function
 * tersebut kita menggunakan parameter
 * contohnya seperti dibawah ini.
 */

function jumlahkan() {
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }

  return jumlah;
}

console.log(jumlahkan(1, 2, 3, 4, 5));

/**
 * Kemudian ada juga metode baru namanya for..in
 * ini merupakan sebuah perulangan yang ditargetkan
 * khusus untuk enumerable (property dalam sebuah object)
 * misalkan
 */

const dosen = {
  nama: "bapak dosen",
  umur: "17 tahun",
  email: "dosen@gmail.com",
};

/**
 * jika ada object seperti diatas
 * kita hanya bisa melakukan perulangan dengan for in
 */

for (const dsn in dosen) {
  return dsn;
}
