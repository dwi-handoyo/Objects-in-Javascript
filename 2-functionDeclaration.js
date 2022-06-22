#2 JS Object by Function Declaration

function siswaBaru(nama, umur) {
 let siswa = {};
 siswa.nama = nama;
 siswa.umur = umur;
 siswa.belajar = function (jam){
  let hasil = "";
  if(jam >= 3){
   hasil = `Kamu belajar ${jam} lebih dari minimal 3 jam. Karena itu mendapat nilai baik.`} else {
   hasil = `Kamu belajar $(jam) kurang dari minimal 3 jam. Karena itu mendapat nilai tidak baik.`}
   return hasil;
   }
   return siswa;
  }
  
let budi = siswaBaru("Budi", 14);
console.log(budi.belajar(5)) 

Output:

"Kamu belajar 5 lebih dari minimal 3 jam. Karena itu mendapat nilai baik."

Another sample.
Contoh lain.

function mobilBaru(merk,kecepatan){
  let mobil = {};
  mobil.merk = merk;
  mobil.kecepatan = kecepatan;
  mobil.jarak = function(jam){
    return `Setelah ${jam} jam, mobil ${mobil.merk} menempuh jarak ${mobil.kecepatan * jam} kilometer.`
  }
  return mobil;
}

let honda = mobilBaru("Honda",120);
console.log(honda.jarak(3));
console.log(honda.jarak(2));

Output:
"Setelah 3 jam, mobil Honda menempuh jarak 360 kilometer."
"Setelah 2 jam, mobil Honda menempuh jarak 240 kilometer.”