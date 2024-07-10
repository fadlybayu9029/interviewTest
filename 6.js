/*
MENYAMARKAN PIN
===============
Ada pasangan suami istri yang sudah lama menikah tapi istrinya belum pernah tahu nomor PIN ATM suaminya.
Hal tersebut terjadi karena PIN ATM suaminya yang seharusnya 6 digit angka sudah ditambah dengan berbagai
macam karakter huruf. Coba buatkan program yang bisa menyortir karakter-karakter agar nomor PIN yang dimaksud bisa didapatkan.

Jika nomor PIN, digitnya kurang dari 6 angka maka program akan mengeluarkan output "Nomor PIN [nomorPIN] tidak valid!"
Jika nomor PIN, digitnya 6 angka maka program akan mengeluarkan output "Good, Nomor PIN [nomorPIN] valid!"
Jika nomor PIN sudah dalam bentuk angka semua maka program akan mengeluarkan output "Bukan pin suami ah!"


=============================================================
Buatlah Algoritma dan Implemetasi Javascriptnya!
=============================================================

** untuk contoh case dapat di lihat di bawah
*/

const possOut = {
    "Good, Nomor PIN ": " valid!",
    "Nomor PIN ": " tidak valid!"
}


const validPin = (input) => {
    if (!isNaN(+input)) return "Bukan pin suami ah!";
    const validPinLength = 6;
    let nanCount = 0; 
    let pin = "";

    for (let char of input) {
        let num = +char;
        isNaN(num) ? nanCount++ : pin += char;
    }

    let ans = pin.length === validPinLength ? "Good, Nomor PIN " : "Nomor PIN ";
    return ans + pin + possOut[ans];
}



let pinSuami = "34&%67@13";
console.log(validPin(pinSuami));
// tulis code kalian disini

/*

output: "Good, Nomor PIN 346713 valid!"

contoh2:
===========
*/
pinSuami = "87&%67@3";
console.log(validPin(pinSuami));
/*
output: "Nomor PIN 87673 tidak valid!"

contoh3:
===========
*/
pinSuami = 122333;
console.log(validPin(pinSuami));
/*
output: "Bukan pin suami ah!"

*/
