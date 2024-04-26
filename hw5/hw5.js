// class dan constructor yang akan digunakan
class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}

let daftarPendaftar = [];
// Fungsi event preventDefault agar form ketika disubmit tidak merefresh halaman
document
  .getElementById("form-registrasi")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const uang = document.getElementById("uang").value;

    let pendaftar = new Pendaftar(nama, umur, uang);
    daftarPendaftar.push(pendaftar);

    // Agar form tetap kosong setelah dilakukan submit
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uang").value = "";
  });

document
  .getElementById("pills-pendaftar-tab")
  .addEventListener("click", function () {
    const tbody = document
      .getElementById("tabel-pendaftar")
      .getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    let total_umur = 0;
    let total_uang = 0;

    for (let i = 0; i < daftarPendaftar.length; i++) {
      let tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" +
        daftarPendaftar[i].nama +
        "</td>" +
        "<td>" +
        daftarPendaftar[i].umur +
        "</td>" +
        "<td>" +
        daftarPendaftar[i].uang +
        "</td>";
      tbody.appendChild(tr);

      total_umur += parseInt(daftarPendaftar[i].umur);
      total_uang += parseInt(daftarPendaftar[i].uang);
    }

    const rata_umur = total_umur / daftarPendaftar.length;
    const rata_uang = total_uang / daftarPendaftar.length;

    // Menampilkan hasil perhitungan rata rata umur dan uang ke #hasil
    document.getElementById("hasil").textContent =
      "Rata-rata pendaftar memiliki uang sangu sebesar " +
      rata_uang +
      " dengan rata-rata umur " +
      rata_umur;
  });
