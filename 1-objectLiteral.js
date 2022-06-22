//#1 Object Literal

let honda = {
  merk: "Honda",
  kecepatan: 140,
  jarak: function(jam){
    return `Setelah berjalan selama ${jam} jam, mobil ${this.merk} menempuh jarak sejauh ${this.kecepatan * jam} kilometer.`
  }
}

console.log(honda);
console.log(honda.jarak(2));

let tesla = {
  jarak: function(jam){
    return `Setelah berjalan selama ${jam} jam, mobil ${this.merk} menempuh jarak sejauh ${this.kecepatan * jam} kilometer.`
  },
  kecepatan: 200,
  merk: "Tesla"
}

console.log(tesla.jarak(2));

//"Setelah berjalan selama 2 jam, mobil Tesla menempuh jarak sejauh 400 kilometer."
