/**
 * Closure merupakan sebuah metode yang membuat function mengakses variable yang ada di parent context dari function tersebut.
 * Closure biasanya digunakan untuk membuat private method agar value yang kita tentukan di parent context tidak mengganggu value yang ada di inner context. 
 * Selain itu closure juga bisa digunakan untuk membuat function factories
 */

// Contoh closure 1
function beriNama() {
    let nama = 'abdul';
    return function panggilNama() {
        return console.log(`Halo ${nama}`)
    }
}

let halo = beriNama();

halo()

/**
 * dalam contoh diatas terdapat function di dalam function. function panggilNama() akan mencari variable nama di dalam scope nya terlebih dahulu, jika variable nama berada di dalam scope function panggilNama(), maka kondisi closure tidak terjadi. Namun dalam kode diatas variable nama merupakan milik dari function beriNama() yang menjadi parent dari function panggilNama(). karena hal itulah kondisi ini disebut closure.
 */

// Contoh case yang harus menggunakan closure

let button = (function (){
    let buttonCount = 0
    return function () {
        return ++buttonCount
    }
})()

buttonCount = 100;

console.log(button());
console.log(button());
console.log(button());
console.log(button());


/**
 * PENJELASAN LINE 25 - LINE 37
 * di dalam function button ada variable bernama buttonCount, jika tidak menggunakan closure codenya akan menjadi seperti ini :
 * --------------------------------
 *  let buttonCount = 0
 *  let button = (function (){
 *     return ++buttonCount
 *  })()
 *
 *  buttonCount = 100;
 *  console.log(button());
 * --------------------------------
 * ketika dieksekusi maka yang ditampilkan adalah 100, sedangkan yang kita inginkan adalah 1,2,3 dan seterusnya. untuk menghindari hal tersebut digunakanlah closure seperti contoh yang telah dibuat diatas
 * 
 */
