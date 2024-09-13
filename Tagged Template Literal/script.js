/**
 * Tagged Template Literal biasanya digunakan untuk meng--highlight hasil dari
 * pencarian selain itu dalam suatu library, terdapat penggunaan tagged template literal
 * untuk menghapus script di dalam custom string sebelum menjalankannya.
 */

// Contoh sederhana
const nama = `abdul`;
const umur = 18;

function code(strings, ...args) {
  let result = "";
  strings.forEach((str, i) => {
    result += `<p>${str}${args[i] || ""}</p>`;
  });
  return result;
}

let sayHello = code`hai nama saya ${nama} dan saya berumur ${umur} tahun`;

document.body.innerHTML += sayHello;

// Contoh dengan menggunakan higher order function dan dengan highlight

function codeReduce(strings, ...args) {
  return strings.reduce(
    (previusValue, currentValue, i) =>
      `${previusValue}${currentValue} <span class="hl">${args[i] || ``}</span>`,
    ""
  );
}

let sayHelloReduce = codeReduce`hai nama saya ${nama} dan saya berumur ${umur} tahun`;

document.body.innerHTML += sayHelloReduce;

/**
 * ini akan mempermudah kita ketika ingin menambahkan parameter atau value baru ke dalam string
 * secara otomatis akan mengikuti perubahan yang diberikan seperti string sebelumnya.
 */
