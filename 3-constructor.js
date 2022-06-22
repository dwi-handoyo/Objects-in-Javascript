//#JS Object by Constructor

function siswaBaru(nama,umur){
this.nama = nama;
this.umur = umur;
this.belajar = function(jam){
 let hasil = "";
 if(jam >= 3){hasil = `Kamu belajar ${jam} jam, lebih dari 3 jam minimal. Karena itu nilainya bagus.`} else {
 hasil = `Kamu belajar ${jam} jam, kurang dari 3 jam minimal. Karena itu nilainya buruk.`}
 return hasil;
 } 
}
let budi = new siswaBaru("Budi", 19);
console.log(budi.belajar(2));
console.log(budi.belajar(3));

Output:
"Kamu belajar 2 jam, kurang dari 3 jam minimal. Karena itu nilainya buruk."
"Kamu belajar 3 jam, lebih dari 3 jam minimal. Karena itu nilainya bagus."

function siswaBaru(nama, iq){
this.nama = nama;
this.iq = iq;
this.nilai = function(jam){
 let hasil = "";
 if(iq > 110){
   if(jam >= 3){
     hasil = `${this.nama} adalah siswa pintar dan rajin karena sudah belajar selama ${jam} jam karena itu nilainya sangat baik.`
   } else {
    hasil = `${this.nama} adalah siswa pintar tapi kurang rajin karena belajar hanya selama ${jam} jam karena itu nilainya sedang saja.`
   }
 } else {
    if(jam >= 3){
    hasil = `${this.nama} adalah siswa biasa tapi sangat rajin karena belajar selama ${jam} jam, karena itu nilainya sedang.`
    } else {
    hasil = `${this.nama} adalah anak biasa saja dan kurang rajin karena belajar selama ${jam} jam, karena itu nilainya kurang baik.`
    }
 }
 return hasil; 
}}
let godam = new siswaBaru("Godam", 105);
console.log(godam.nilai(4));
output: Godam adalah siswa biasa tapi sangat rajin karena belajar selama 4 jam, karena itu nilainya sedang.