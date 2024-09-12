// Contoh penggunaan string literal dengan HTML Fragment

const mhs = {
  nama: "abdul",
  nim: "2401010018",
  kelas: "a",
  jurusan: "Manajemen data dan informatika",
};

const element = `<div>
<h2>DATA MAHASISWA</h2>
<p>nama : ${mhs.nama}</p>
<p>nim : ${mhs.nim}</p></div>`;

document.body.innerHTML = element;

// Looping menggunakan string literal

const mhsList = [
  {
    nama: "abdul",
    email: "abdul@gmail.com",
  },
  {
    nama: "somat",
    email: "somat@gmail.com",
  },
  {
    nama: "sentot",
    email: "sentot@gmail.com",
  },
  {
    nama: "sandika",
    email: "sandika@gmail.com",
  },
];

const elementList = `<div class="mhs">
${mhsList
  .map(
    (mhs) => `<ul>
    <li>  Nama : ${mhs.nama}</li>
    <li>  Email : ${mhs.email}</li></ul>`
  )
  .join("")}</div>`;

document.body.innerHTML = elementList;

// Pengkondisian dengan menggunakan string literal

const mhsCondition = [
  {
    nama: "abdul",
    umur: "12",
  },
  {
    nama: "sutamosa",
    umur: "20",
  },
  {
    nama: "yusdis",
    umur: "15",
  },
  {
    nama: "malang",
    umur: "21",
  },
];

const elCondition = `<div class="mhs">
${mhsCondition
  .map(
    (mhs) =>
      `<p>${
        mhs.umur >= "18"
          ? `${mhs.nama} berumur ${mhs.umur} tahun dan sudah legal`
          : `${mhs.nama} berumur ${mhs.umur} tahun dan belum legal`
      }</p>`
  )
  .join("")}</div>`;

document.body.innerHTML = elCondition;

// Nested HTML Fragment

const mhsFragment = {
  nama: "Antariksa",
  nim: "2401010018",
  semester: "semester 5",
  matkul: [
    "Pemrograman web",
    "Manajemen Data",
    "Perancangan UI/UX",
    "Socket System",
    "Backend Logic",
  ],
};

function daftarMataKuliah(matkul) {
  return `<ol>
    ${matkul.map(
      (a) => `<li>
        ${a}
        </li>`
    ).join('')}
    </ol>`;
}

const elementFragment = `<div class="mhs">
<h1>DATA DIRI MAHASISWA</h1>
<h2>nama    : ${mhsFragment.nama}</h2>
<h2>nim     : ${mhsFragment.nim}</h2>
<h2>semester    : ${mhsFragment.semester}</h2>
<h1>DAFTAR MATA KULIAH</h1>
${daftarMataKuliah(mhsFragment.matkul)}</div>`;

document.body.innerHTML = elementFragment;
