#5 Protoype

function Mobil(merk, kecepatan){
  this.merk = merk;
  this.kecepatan = kecepatan;
}

Mobil.prototype.jarak = function(jam){
  return `Mobil ${this.merk} berjalan ${jam} jam menempuh jarak ${this.kecepatan * jam} km.`;
}  
  
let honda = new Mobil("Honda", 120);
console.log(honda.jarak(2));

Output:
"Mobil Honda berjalan 2 jam menempuh jarak 240 km."

<html>
<button onclick="count()">Count</button>
<input type="number" id="time">
<p id="output">0</p>
</html>

<script>
function Mobil(type, kecepatan){
 this.type = type;
 this.kecepatan = kecepatan;
}

Mobil.prototype.jarak = function(jam){
 return `Setelah bergerak selama ${jam} jam, mobil ${this.type} berada pada jarak sejauh ${jam * this.kecepatan} km.`
}

let honda = new Mobil("Honda", 120);

function count(){
 var jam = document.getElementById("time").value;
 console.log(jam);
 document.getElementById("output").textContent = honda.jarak(jam); 
}
</script>