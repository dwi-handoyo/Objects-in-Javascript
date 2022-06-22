#6 Prototype Class

class Mobil{
  constructor(merk, kecepatan){
    this.merk = merk;
    this.kecepatan = kecepatan;
  }
  
  jarak(jam){
    return `Mobil ${this.merk} jalan selama ${jam} sejauh ${this.kecepatan * jam} km.`
  }
}

let honda = new Mobil("Honda", 120);
console.log(honda.jarak(2));

Output:
"Mobil Honda jalan selama 2 sejauh 240 km."

class Mobil{
  constructor(merk, kecepatan){
    this.merk = merk;
    this.kecepatan = kecepatan;
  }
  jarak(jam){
    return document.getElementById("jarak").innerHTML = `Mobil ${this.merk} berjalan selama ${jam} jam sejauh ${this.kecepatan * jam} km.`;
  }
}
let honda = new Mobil("Honda", 120);
console.log(honda.jarak(2))