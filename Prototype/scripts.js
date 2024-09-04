// Function declaration

function Mahasiswa(nama, energi) {
    let mahasiswa = {}
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (jumlahMakan) {
        mahasiswa.energi += jumlahMakan;
        console.log(`jumlah makananmu ${jumlahMakan}`);
        console.log(`total energimu ${energi}`);

        console.log(`halo ${mahasiswa.nama}, selamat makan!!`);
    }
    return mahasiswa;
}

// Constructor function

function MahasiswaConst(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`jumlah makananmu ${jumlahMakan}`);
        console.log(`total energimu ${energi}`);

        console.log(`halo ${mahasiswa.nama}, selamat makan!!`);
    }

    this.bermain = function (aktifitas) {
        this.energi -= aktifitas;

        console.log(`jumlah aktifitasmu ${aktifitas}`);
        console.log(`halo ${this.nama}, selamat beraktifitas!!`);
    }
}

let rama = new MahasiswaConst('rama', 10)

let abdul = Mahasiswa('abdul', 10)