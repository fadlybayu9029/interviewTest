/*
Censor Word Revealer
kalian diminta untuk mengganti character !,@,#,$,% menjadi huruf vokal
dengan syarat :
- ! = a
- @ = i
- # = u
- $ = e
- % = o

=============================================================
Buatlah Algoritma dan Implemetasi Javascriptnya!
=============================================================

** untuk contoh case dapat di lihat di bawah

*/

let word = "h$ll% w%rld @dh!m";
let output = "";
// tulis code kalian disini

const transfromString = (data) => {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "!") {
      str += "a";
    } else if (data[i] === "@") {
      str += "i";
    } else if (data[i] === "#") {
      str += "u";
    } else if (data[i] === "$") {
      str += "e";
    } else if (data[i] === "%") {
      str += "o";
    } else {
      str += data[i];
    }
  }
  return str;
};

console.log(transfromString(word));

/*
contoh 1,
input :
let word = 'h$ll% w%rld @dh!m'
output :
"hello world idham"


contoh 2,
input :
let word = 'w$lc%m$ t% h!ckt@v8 c%sm@c-f%x'
output :
"welcome to hacktiv8 cosmic-fox"

contoh 3,
input :
let word = 's$l!m!t l$b!r!n b!g@ y!ng m$r!y!k!n d!n j!ng!n lup! m$ng$rj!k!n tug!s s$m%g! l!nc!r :)'
output :
"selamat lebaran bagi yang merayakan dan jangan lupa mengerjakan tugas semoga lancar :)"
*/
