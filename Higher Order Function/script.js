/**
 * HIGHER ORDER FUNCTION
 * ketika kita menggunakan function sebagai pengembalian nilai dari sebuah function, maka ini disebut higher order function dan function yang bertugas mengembalikan value dari sebuah function dinamakan callback. contohnya adalah
 */

function repeatUntil(n, action){
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

repeatUntil(i, alert)

/**
 * PENJELASAN
 * parameter action diatas merupakan callback dan repeatUntil() adalah higher order funtion.
 * javascript sendiri sudah memiliki higher order funtion secara default antara lain :
 * Array.prototype.map()
 * Array.prototype.reduce()
 * Array.prototype.filter()
 */