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

let pinSuami = '34&%67@13';
// let pinSuami = '87&%67@3';
// let pinSuami = 122333;

// tulis code kalian disini
let pin = '';

for (let i = 0; i < pinSuami.length; i++) {
  if (!isNaN(Number(pinSuami[i]))) {
    pin += pinSuami[i];
  }
}

if (Number(pinSuami)) {
  console.log('Bukan pin suami ah!');
} else if (pin.length < 6) {
  console.log(`Nomor PIN ${pin} tidak valid!`);
} else {
  console.log(`Good, Nomor PIN ${pin} valid!`);
}

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
