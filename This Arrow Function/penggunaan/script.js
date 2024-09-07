const box = document.querySelector('.box')

box.addEventListener('click', function () {
    let size = 'size';
    let caption = 'caption';
    if (this.classList.contains(size)) {
        [size, caption] = [caption, size]
    }
    this.classList.toggle(size);
    /**
     * dibawah ini adalah contoh kasus yang memerlukan arrow function.
     * karena setTimeout() adalah function declaration, setTimeout() akan di hoisting terlebih dahulu sehingga berada pada global scope. Karena setTimeout() tidak memiliki konteks this, setTimeout() akan mencarinya keluar scope nya yaitu global scope. untuk mengatasi hal tersebut digunakanlah arrow function agar scope nya tidak berubah menjadi global scope dan programmer tetap bisa menggunakan this.
     * 
     * Contoh function declaration yang scope nya akan menjadi global scope
     * ==============================================================
     * setTimeout( Sfunction () {
     *     this.classList.toggle('caption')
     * }, 600);
     * ==============================================================
     */
    setTimeout(() => {
        this.classList.toggle(caption)
    }, 600);
});