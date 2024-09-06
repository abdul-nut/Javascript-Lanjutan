/**
 * Arrow function merupakan fungsi lebih ringkas dari function expresion
 * contoh perbedaannya seperti berikut :
 */

// Function Expression

let sayHello = function (nama) {
    return `halo dunia, halo ${nama}`
}

console.log(sayHello('abdul'));

// Arrow Function

let sayHelloArrow = (nama) => {
    return `arrow function, halo ${nama}`
}

console.log(sayHelloArrow('sentot'));

/**
 * ada banyak sekali cara untuk membuat arrow function menjadi lebih ringkas, seperti konsep emplisit return. dalam konsep ini tidak perlu menulis return karena arrow function akan langsung mendefinisikannya sebagai return atau pengembalian nilai.
 * ada beberapa aturan dalam arrow function ini, diantarnya : 
 * 
 * jika kita memiliki 1 parameter, arrow function tidak perlu menggunakan kurung contoh :
 * (nama) => {} menjadi : nama => {}
 * 
 * jika arrow function tidak memiliki parameter atau memiliki lebih dari 1 parameter maka harus menggunakan tanda kurung contoh :
 * () => {} dan (nama, umur) => {} 
 * 
 * konsep emplisit return :
 * () => {return 'hello world' }
 * menjadi :
 * () => `hello world`
 * contoh penggunaan arrow function dengan lebih ringkas dan langsung menggunakan emplisit return :
 */

// Arrow function 1 parameter

let oneParam = nama => `1 parameter, halo ${nama}`
console.log(oneParam('abdul'));

// Arrow function lebih dari 1 parameter

let muchParam = (nama, umur) => `banyak parameter, halo namaku ${nama} berumur ${umur}`
console.log(muchParam('sentot', '21'));

/** cara menggunakan arrow function pada mapping array 
 * dan cara mapping object dengan arrow function 
 * sebagai berikut : */

let namaMahasiswa = ['abdul', 'rama', 'sentot', 'maheswara']

let namaLength = namaMahasiswa.map(nama => nama.length)
let namaObject = namaMahasiswa.map(nama => ({ nama, panjang: nama.length }))

console.log(namaLength);
console.table(namaObject);

