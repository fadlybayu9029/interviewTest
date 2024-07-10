/*
Kalian diminta untuk membuat implementasi Javascript untuk menghitung tingkat kekuatan sebuah string.
dengan syarat
- kalian diminta untuk menjumlahkan semua angka yang ada di dalam string
- apabila value dari index yang sedang di looping bukan angka maka tidak akan di hitung kecuali masuk ke bonus
- variable bonus diperuntukkan number/alphabet/character yang akan mendapatkan poin bonus
- poin bonus bernilai 10
- jika sudah di hitung sebagai bonus tidak boleh ditambah kembali
    ex : 
    let word  = '1234'
    let bonus = '1'
    maka perhitungan yang akan di hasilkan adalah 19 bukan 20 dengan perhitungan 1 adalah bonus = 10 dan 2,3, dan 4 sebagai angka biasa
    dimana hasil akhir adalah 10+2+3+4 yaitu 19



jika sudah melakukan perhitungan jumlah string tersebut maka kalian di minta untuk menentukan apakah string tersebut recommended atau tidak dengan syarat,
jika jumlah perhitungan,
- lebih dari 50 maka akan menampilkan "`wow u got total <jumlah hitung> mean that string is highly recommended for security`"
- lebih dari 25 maka akan menampilkan "`wow u got total <jumlah hitung> mean that string is recommended for security but need more number/word for perfect security`"
- kurang dari 25 maka akan menampilkan "`you got <jumlah hitung> this mean string is not recommended please add more number/word`"





** HINT : kalian bisa gunakan nested loop untuk membandingkan masing2 index word dengan bonus untuk melakukan pengecekan apakah number/alphabet/character tersebut adalah bonus


=============================================================
Buatlah Algoritma dan Implemetasi Javascriptnya!
=============================================================

** untuk contoh case dapat di lihat di bawah
*/

let word = '13px@!'
let bonus = '1'
let jumlah = 0
let jumlah1 = 0

let possResults = {
    "`wow u got total ": {
        50: " mean that string is highly recommended for security`",
        25: " mean that string is recommended for security but need more number/word for perfect security`"
    },
    "`you got ": " this mean string is not recommended please add more number/word`"
}

const constructAnsString = (score) => {
    let key, pos;

    if (score > 50) {
        key = "`wow u got total ";
        pos  = 50;
    } else  if (score > 25) {
        key = "`wow u got total ";
        pos = 25;
    } else {
        key = "`you got ";
        return key + score + possResults[key];
    }
    
    return key + score + possResults[key][pos]; 
}

const stringPower = (word, bonus) => {
    const bonusPoint  = 10;
    let ans = 0;
    let bonusChars = new Set();
    for (let char of bonus) bonusChars.add(char);
    for (let char of word) {
        if (bonusChars.has(char)) {
            ans += bonusPoint;
            continue;
        }
        let num = +char;
        if (!isNaN(num)) ans += num;
    }

    return constructAnsString(ans);
}


jumlah = stringPower(word, bonus);
console.log(jumlah);



// contoh 1,
word = '1234129as@123p'
bonus = 'asp'
// output :
// "wow u got total 58 mean that string is highly recommended for security"
jumlah = stringPower(word, bonus);
console.log(jumlah);

// contoh 3,
word = '13px@!'
bonus = '1px'
// output :
// "wow u got total 33 mean that string is recommended for security but need more number/word for perfect security"
jumlah = stringPower(word, bonus);
console.log(jumlah);