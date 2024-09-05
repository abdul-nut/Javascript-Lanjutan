/**
 * perbedaan var, let dan const
 * sebelum menjelaskan apa itu var, let dan const ada sebuah konteks bahwa secara default javascript menggunakan block scope. pada umumnya suatu bahasa pemrograman menggunakan function scope agar variable dari sebuah function, perulangan dan lain lain tidak dapat diakses diluar dari scope function tersebut.
 * jika kita menggunakan var maka variable yang ada kita buat akan bisa diakses dari luar 
 * CONTOH
 */

for (var i = 0; i < 7; i++) {
    console.log(i); 
}
console.log(i);

/**
 * variable i diluar for akan tetap menampilkan hasil dari perulangan terakhir yaitu 7. sedangkan jika menggunakan let, dia akan menghasilkan eror karena let menggunakan function scope
 * sebelum ada update let, para programmer mengakalinya dengan cara seperti dibawah ini
 */


(function (){
    for (var i = 0; i < 7; i++) {
        console.log(i);
    }
}())

/**
 * konsep diatas dinamai IIFE(Immidiately Invoked Function Expression) atau SIAF(Self Invoking Anonymus Function). namun setelah ada update dari javascript, programmer telah dimudahkan dengan let dan const yang menganut prinsip function scope
 */

for (let i = 0; i < 7; i++) {
    console.log(i);
    
}