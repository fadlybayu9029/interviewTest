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

for (let i = 0; i < word.length; i++) {
  switch (word[i]) {
    case "$":
      output += "e";
      break;
    case "!":
      output += "a";
      break;
    case "@":
      output += "i";
      break;
    case "#":
      output += "a";
      break;
    case "%":
      output += "o";
      break;
    default:
      output += word[i];
  }
}

console.log(output);
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
