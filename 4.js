/*
DOORPRIZE LEBARAN
============================
Menjelang Idul Fitri, Mall Ramayani berencana memberikan doorprize kepada para pelanggan setianya. 
Doorprize tersebut diberikan kepada para pelanggan secara acak melalui nomor kupon yang diberikan 
pihak Mall. 

- Jika didalam kupon terdapat angka 0 maka pelanggan mendapatkan voucher belanja 100000 per angka 0
- Jika didalam kupon terdapat angka 9 maka pelanggan mendapatkan voucher belanja 200000 per angka 9
- Jika didalam kupon tidak terdapat angka 0 dan 9 maka pelanggan tidak mendapatkan apa-apa
- Jika didalam kupon terdapat angka 0 dan 9 maka pelanggan akan mendapatkan Kitchen Set

PS: Kupon yang valid jika jumlah angkanya lebih dari 4 digit. Jika tidak valid maka program akan 
mengeluarkan output "Kupon tidak valid!"

=============================================================
Buatlah Algoritma dan Implemetasi Javascriptnya!
=============================================================

** untuk contoh case dapat di lihat di bawah
*/

let nama = "Eric";
let kupon = 686001;
let newkupon = kupon.toString();
// let hadiah = 0;
// let angka0 = false;
// let angka9 = false;
// tulis code kalian disini

const checker = (nama, newkupon) => {
    let hadiah = 0;
    let angka0 = false;
    let angka9 = false;
    for (x of newkupon.toString()) {
        switch (x) {
            case "0":
                hadiah += 100000;
                angka0 = true;
                break;
            case "9":
                hadiah += 200000;
                angka9 = true;
                break;
        }
    }

    if (angka0 && angka9)
        return `${nama}, Selamat kamu mendapatkan Kitchen Set`;
    if (!angka0 && !angka9) return `Maaf, Anda belum beruntung!`;
    return `${nama}, Selamat ya kamu mendapatkan voucher belanja senilai Rp ${hadiah}`;
};
// console.log(checker(nama, newkupon));

let nama1 = "Eric";
let kupon1 = 6860091;

let nama2 = "Eric";
let kupon2 = 4464646443;

let nama3 = "Eric";
let kupon3 = 23314000;

let nama4 = "Eric";
let kupon4 = 999111;

console.log(checker(nama1, kupon1));
console.log(checker(nama2, kupon2));
console.log(checker(nama3, kupon3));
console.log(checker(nama4, kupon4));
/*

Contoh 1:
=========
let nama = "Eric";
let kupon = 6860091;

Output: "Eric, Selamat ya kamu mendapatkan Kitchen Set"

Contoh 2:
=========
let nama = "Eric";
let kupon = 4464646443;

Output: "Maaf, Anda belum beruntung!"

Contoh 3:
=========
let nama = "Eric";
let kupon = 23314000;

Output: "Eric, Selamat ya kamu mendapatkan voucher belanja senilai Rp 300000"

Contoh 4:
=========
let nama = "Eric";
let kupon = 999111;

Output: "Eric, Selamat ya kamu mendapatkan voucher belanja senilai Rp 600000"
*/
