// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih video yang berada pada playlist 'JAVASCRIPT LANJUTAN'
let videoMap =
    videos.filter(v => v.textContent
        .includes("JAVASCRIPT LANJUTAN"))

        // ambil durasi masing - masing video
        .map(item => item.dataset.duration)

        // ubah durasi menjadi float lalu ubah menit menjadi detik
        .map(time => {
            const parts = time.split(':').map(part => parseFloat(part));
            return parts[0] * 60 + parts[1]
        })

        // jumlahkan keseluruhan detiknya
        .reduce((previousTime, currentTime) => previousTime + currentTime)

// kemudian ubah formatnya menjadi jam, menit, detik
const jam = Math.floor(videoMap / 3600)
videoMap = videoMap - jam * 3600
const menit = Math.floor(videoMap / 60)
const detik = videoMap - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = ` ${jam} jam, ${menit} menit, ${detik} detik`

const pVideo = document.querySelector('.jumlah-video')
const jumlahVideo = videos.filter(v => v.textContent
    .includes("JAVASCRIPT LANJUTAN")).length;

pVideo.textContent = `  ${jumlahVideo} video`
