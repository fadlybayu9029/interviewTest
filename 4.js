/*
DOORPRIZE LEBARAN
============================
Menjelang Idul Fitri, Mall Ramayani berencana memberikan doorprize kepada para pelanggan setianya. 
Doorprize tersebut diberikan kepada para pelanggan secara acak melalui nomor kupon yang diberikan 
pihak Mall. 

- Jika didalam kupon terdapat angka 0 maka pelanggan mendapatkan voucher belanja 100_000 per angka 0
- Jika didalam kupon terdapat angka 9 maka pelanggan mendapatkan voucher belanja 200_000 per angka 9
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
let kupon = 999111;
let newkupon = kupon.toString();
let hadiah = 0;
let angka0 = false;
let angka9 = false;
// tulis code kalian disini
if (kupon.length < 4) {
  console.log("Kupon tidak valid");
} else if (newkupon.search(0) !== -1 && newkupon.search(9) !== -1) {
  console.log(`${nama}, Selamat ya kamu mendapatkan Kitchen Set`);
} else {
  let voucher = 0;
  for (let i = 0; i < newkupon.length; i++) {
    if (Number(newkupon[i]) === 0) {
      voucher += 100_000;
    } else if (Number(newkupon[i]) === 9) {
      voucher += 200_000;
    }
  }
  if (voucher === 0) {
    console.log("Maaf, Anda belum beruntung!");
  } else {
    console.log(
      `${nama}, Selamat ya kamu mendapatkan voucher belanja senilai Rp ${voucher}`
    );
  }
}

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
