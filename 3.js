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

let word = 'h$ll% w%rld @dh!m'
let output =""
// tulis code kalian disini
function changeChar(word){
    let result = "";
    for(char of word){
        switch (char) {
            case "!":
                result = result + "a"
                break;
            case "@":
                result = result + "i"
                break;
            case "#":
                result = result + "u"
                break;
            case "$":
                result = result + "e"
                break;
            case "%":
                result = result + "o"
                break;
        
            default:
                result = result + char
                break;
        }
    }
    return result;
}

console.log(changeChar(word))

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