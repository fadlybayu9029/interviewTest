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

let pinSuami = "34&%67@13";

// tulis code kalian disini
const pinValidation = (pin) => {
    let number = "";
    isAllNumber = true;

    // check if all is number
    for (x of pin.toString()) if (!Number(x)) isAllNumber = false;
    if (isAllNumber) return "Bukan pin suami ah!";

    // only get the number value
    for (x of pin.toString()) {
        if (Number(x)) number += x;
    }

    // check if the pin is match for the digit rules
    if (number.length < 6 || number.length > 6)
        return `Nomor PIN ${pin} tidak valid!`;

    if (number.length === 6) return `Good, Nomor PIN ${pin} valid!`;
};

let pinSuami1 = "87&%67@3";
let pinSuami2 = 122333;
let pinSuami3 = "suami1";

console.log(pinValidation(pinSuami)); //Good, Nomor PIN 346713 valid!
console.log(pinValidation(pinSuami1)); //Nomor PIN 87&%67@3 tidak valid!
console.log(pinValidation(pinSuami2)); //Bukan pin suami ah!
/*

output: "Good, Nomor PIN 346713 valid!"

contoh2:
===========
let pinSuami = "87&%67@3";

output: "Nomor PIN 87673 tidak valid!"

contoh3:
===========
let pinSuami = 122333;

output: "Bukan pin suami ah!"

*/
