// Fungsi Persegi dan Persegi Panjang

export const persegi = {
  luas: function (sisi) {
    return sisi * sisi;
  },
  keliling: function (sisi) {
    return 4 * sisi;
  },
};

export const persegiPanjang = {
  luas: function (panjang, lebar) {
    return panjang * lebar;
  },
  keliling: function (panjang, lebar) {
    return 2 * (panjang + lebar);
  },
};
