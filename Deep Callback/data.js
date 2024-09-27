/**
 * Asyncronous Callback Function
 * saya akan menggunakan contoh dengan 3
 * parameter, satu untuk url nya, yang kedua
 * untuk callback function ketika berhasil
 * yang ketika untuk callback function ketika
 * error
 */

function getMahasiswa(url, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

getMahasiswa(
  `data/mahasiswa.json`,
  (result) => {
    let mhsResult = JSON.parse(result);
    mhsResult.forEach(m => {
        console.log(m.nama);
        
    });
  },
  () => {}
);

/**
 * Konsep yang dibuat diatas sudah menerapkan
 * asynchronous 
 */