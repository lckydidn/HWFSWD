// Lucky Didan Ramadhan FSWD B 7
import { persegi, persegiPanjang } from "./hitung.js";
import { readWritefile } from "./RWfile.js";

await readWritefile("homework.log", "hw7.txt");
let sisi = 6;

console.log("Luas dari persegi adalah " + persegi.luas(sisi));
console.log("Keliling dari persegi adalah " + persegi.keliling(sisi));

let panjang = 8;
let lebar = 4;

console.log(
  "Luas dari Persegi Panjang adalah " + persegiPanjang.luas(panjang, lebar)
);
console.log(
  "Keliling dari Persegi Panjang adalah " +
    persegiPanjang.keliling(panjang, lebar)
);
