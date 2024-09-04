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
    let mahasiswa = Object.create(methodMahasiswa);
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

// versi clasnya

class MahasiswaClass {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} selamat makan!!`);
    }

    main(main) {
        this.energi -= main;
        console.log(`halo ${this.nama} selamat bermain!!`);
    }

    tidur(jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama} selamat tidur!!`);
    }
}

let radit = new MahasiswaClass('radit', 10);

let rama = new MahasiswaConst('rama', 10)

let abdul = Mahasiswa('abdul', 10)