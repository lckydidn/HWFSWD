// Lucky Didan
// FSWD Batch 7

// FUNGSI ARRAY ACAK DENGAN 100 ELEMEN
function randomArray(n, min, max) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
let arr = randomArray(100, 1, 50);

console.log("ArrayAcak", arr);
console.log("PanjangArray", arr.length);
// FUNGSI GANJILGENAP
function ganjilGenap(arr) {
  let genap = [],
    ganjil = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      genap.push(arr[i]);
    } else ganjil.push(arr[i]);
  }
  return { ganjil, genap };
}
// Note to self kenapa make let {genap,ganjil} ini bisa disebut destrukturisasi objek(baca di google aja), in short ini kita manggil objek genap/ganjil dari fungsi ganjilGenap(arr)
let { genap, ganjil } = ganjilGenap(arr);
// let { genap } = ganjilGenap(arr);
// let { ganjil } = ganjilGenap(arr);
console.log("Genap", genap);
console.log("PanjangGenap", genap.length);
console.log("Ganjil", ganjil);
console.log("PanjangGanjil", ganjil.length);

// Fungsi Min Max Avg
function StatsGanGen(arr) {
  let min = arr[0],
    max = arr[0],
    total = 0;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    total += arr[i];
  }
  let avg = total / arr.length;
  return { min, max, total, avg };
}
let genapStats = StatsGanGen(genap);
let ganjilStats = StatsGanGen(ganjil);
console.log("Data Genap", genapStats);
console.log("Data Ganjil", ganjilStats);

// FungsiPerbandingan
function compareStats(genapStats, ganjilStats) {
  let comparison = {};
  comparison.min = genapStats.min > ganjilStats.min ? "genap" : "ganjil";
  comparison.max = genapStats.max > ganjilStats.max ? "genap" : "ganjil";
  comparison.total =
    genapStats.total === ganjilStats.total
      ? "sama"
      : genapStats.total > ganjilStats.total
      ? "genap"
      : "ganjil";
  comparison.avg = genapStats.avg > ganjilStats.avg ? "genap" : "ganjil";
  return comparison;
}
let comparison = compareStats(genapStats, ganjilStats);
console.log("Perbandingan", comparison);
