// DESTRUCTURING FUNCTION MIRIP MIRIP DENGAN DESTRUCTURING ASSIGMENT
// CONTOH DESTRUCTURING FUNCTION

function sayHello(nama, teks) {
  return [nama, teks];
}

const [nama, text] = sayHello("abdul", "mirip");

const mhs = {
  nama: "abdul",
  kelas: "A",
  nim: "2401010018",
};

function panggilAbdul({ nama, kelas, nim }) {
  console.log(`nama aku ${nama}, kelas ${kelas}, nim ${nim}`);
}

panggilAbdul(mhs);
