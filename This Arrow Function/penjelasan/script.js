/**
 * Arrow function tidak memiliki konsep this, sehingga ketika kita menggunakan this pada arrow funtion, arrow function akan mencari keluar scope nya sampai dia menemukan this. namun ketika sudah sampai global scope dan masih belum menemukan this, maka value nya akan menjadi undefined
 */

// Contoh dengan constructor function dan function declaration

const Mahasiswa = function () {
    this.nama = 'antariks'
    this.umur = '18'

    //function expression
    this.sayHello = () => {
        console.log(`halo nama saya ${this.nama} berumur ${this.umur} tahun.`);
    }

    /**
     * contoh diatas adalah salah satunya, ketika kita menggunakan this.nama pada arrow function, maka dia akan mencari keluar scope nya. karena di dalam scope Mahasiswa terdapat this.nama, arrow function akan menggunakan value dari variable tersebut.
     */

    // Function declaration
    setInterval(() => {
        console.log(this.umur++);
    }, 500);

    /**
     * code diatas adalah salah satu contoh penggunaan konsep this pada arrow function secara benar. jika programmer menggunakan anonymus function pada kode diatas maka value dari this.umur akan menjadi undefined. Hal itu dikarenakan javascript secara otomatis meng-hoisting function declaration terlebih dahulu. Karena this.umur tidak ada di dalam global scope, terjadilah undefined
     */
}