// Function declaration

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`jumlah makananmu ${porsi}`);
        console.log(`total energimu ${this.energi}`);
    }

    , bermain: function (aktifitas) {
        this.energi -= aktifitas;
        console.log(`energimu berkurang sebanyak ${aktifitas}`);
        console.log(`halo ${this.nama} selamat bermain!!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`energimu bertambah sebanyak ${jam * 2}`);
        console.log(`halo ${this.nama} selamat tidur!!`);

    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methosMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

// Constructor function

function MahasiswaConst(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

MahasiswaConst.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama} selamat makan!!`);
}

MahasiswaConst.prototype.bermain = function (main) {
    this.energi -= main;
    console.log(`halo ${this.nama} selamat bermain!!`);
}

MahasiswaConst.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama} selamat tidur!!`);
}

let rama = new MahasiswaConst('rama', 10)

let abdul = Mahasiswa('abdul', 10)