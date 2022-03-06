// let nilai = 71;
// let gender = ""
// if (nilai > 70) {
//     if (gender == "pria"){
//     console.log("selamat Anda lulus dan anda pria");
//     }
//     else {
//     console.log("selamat Anda lulus dan anda wanita");
//     }
// }
// else if (nilai > 60 && nilai < 80) {
//     console.log("Silakan remidi");
// }
// else {
//     console.log("Anda belum berhasil, coba lagi");
// }

// let tugas = prompt ('masukkan nilai Anda');
// let nilai = 0-100

// switch (nilai) {
//     case"1":
//     if (nilai >= 80 && nilai <= 100) {
//         alert("A");
//     }
//     break;
//     case"2":
//     if (nilai >= 60 && nilai < 80) {
//         console.log("B");
//     }
//     break;
//     case"3":
//     if (nilai >= 20 && nilai < 40) {
//         console.log("C");
//     }
//     break;
//     case"4":
//     if (nilai >= 0 && nilai < 20) {
//         console.log("D");
//     }
// }

let nilai = prompt ('masukkan nilai Anda:');

if (nilai >= 80 && nilai <= 100) {
    alert("A");
}
else if (nilai >= 60 && nilai < 80) {
    alert("B");
}
else if (nilai >= 40 && nilai < 60) {
    alert("C");
}
else if (nilai >= 20 && nilai < 40) {
    alert("D");
}
else if (nilai >= 0 && nilai < 20) {
    alert("E");
}

// let menu = prompt (`silakan pilih menu:
//     1. ayam bakar
//     2. bebek bakar
//     3. kakap bakar`);

//     switch (menu) {
//         case "1":
//         alert("ayam bakar dipilih");
//         break;
//         case "2":
//         alert("bebek bakar dipilih");
//         break;
//         case "3":
//         alert("kakap bakar dipilih");
//         break;
//         default:
//         alert("Maaf, menu yang Anda pilih tidak tersedia");
//         break;

//     }

// let angka = 10;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let cetak = true
    
// while (cetak) {
//     alert("laptop anda terkena malware, silakan install ulang!");
//     cetak = confirm("apakah Anda ingin memunculkan alert?");
// }

// let fruits = ['semangka', 'alpukat', 'durian', 'ace'];

// for (let f in fruits) {
//     console.log(f);
// }

// let orang = {
//     nama : 'mukti',
//     umur : 21,
// }

// for (let o in orang) {
// console.log(orang[o]); 
// }

let buah = document.querySelectorAll('.buah');
    for(let e of buah) {
        e.addEventListener('click', function() {
            this.style.color = 'red';
        })
    }

// let keluarga = [
//     {
//         nama: 'tono',
//         status: 'bekerja',
//         penghasilan: 5000000
//     },
//     {
//         nama: 'tini',
//         status: 'bekerja',
//         penghasilan: 4000000
//     },
//     {
//         nama: 'tejo',
//         status: 'mahasiswa',
//         penghasilan: 500000
//     }
// ];

// keluarga.forEach(function(kk) {
//     console.log(kk.penghasilan);
// })

// let kk = keluarga.map(function(kk) {
//     return {
//         nama: kk.nama.toUpperCase(),
//         status: kk.status,
//         penghasilan: kk.penghasilan
//     }
// })

// let kk2 = keluarga.filter(function(kk) {
//     if (kk.status == 'bekerja') {
//         return kk
//     }
// })

// let kk3 = kk2.reduce(function(prev, curr) {
//     return prev + curr.penghasilan
// }, 0)

// let kk4 = keluarga.map(kk => {
//     return {
//         nama: kk.nama.toUpperCase(),
//         status: kk.status,
//         penghasilan: kk.penghasilan
//     }
// })
// .filter(kk => kk.status == 'bekerja')
// .reduce((prev, curr) => prev + curr.penghasilan, 0)

// console.log(kk4);
// console.log(kk);

