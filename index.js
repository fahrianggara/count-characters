function countCharacters(string) 
{
  // biar H dan h dianggap sama
  let teks = string.toLowerCase();
  let hasil = {};

  // iterasi setiap karakter
  for (let i = 0; i < teks.length; i++) { 
    let huruf = teks[i];

    // kalau ada whitespace, abaikan
    if (/\s/.test(huruf)) {
      continue;
    }

    // jika huruf belum ada di hasil, buat properti baru dengan nilai 1
    if (hasil[huruf] === undefined) {
      hasil[huruf] = 1;
    } else { // jika huruf sudah ada, tambahkan nilainya
      hasil[huruf] = hasil[huruf] + 1;
    }
  }

  return hasil;
}

console.log(countCharacters("Ini Testing"));
