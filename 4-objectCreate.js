//#4 JS Object dengan Object.create

const methodSiswa = {
 belajar: function(jam){
  let hasil = "";
  if(jam >= 3){
   hasil = `Kamu belajar ${jam} jam, karena itu nilainya bagus.`} else {
   hasil = `Kamu belajar ${jam} jam, karena itu nilainya buruk.`
   }
   return hasil;
 }
}

function siswaBaru(nama, umur){
 let siswa = Object.create(methodSiswa);
 siswa.nama = nama;
 siswa.umur = umur;
 return siswa;
} 

let budi = siswaBaru("Budi",18);
console.log(budi.belajar(2))
console.log(budi.belajar(3))

output:
"Kamu belajar 2 jam, karena itu nilainya buruk."
“Kamu belajar 3 jam, karena itu nilainya bagus."

const methodMobil = {
  jarak: function(jam){
    return `${this.merk} jalan ${jam} jam, sampai ${this.kecepatan * jam} km.`
  }
}

function mobilBaru(merk, kecepatan){
  let mobil = Object.create(methodMobil);
  mobil.merk = merk;
  mobil.kecepatan = kecepatan;
  return mobil;
} 

let honda = mobilBaru("Honda", 120);
console.log(honda.jarak(2))

Output:
"Honda jalan 2 jam, sampai 240 km."