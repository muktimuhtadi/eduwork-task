// function deklarasi() {
//     console.log("declaration");
// }

// const ekspresi = function() {
//     console.log("expression");
// }

// const panah = () => {
//     console.log("arrow");
// }

// const konstruktor = new Function('console.log("Function")');

// const btn = document.getElementById(".btn");
// btn.addEventListener("click", () {
//     console.log(this);
// });

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });

// function tambah(_a, _b) {
//     alert("${_a} + ${_b} = ${_a + _b}");
// }

// const kali = function (_a, _b) {
//     alert('${a} * ${b} = ${a * b}');
// }

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick() {
//     tambah(1, 2);
// });

// const arrow = () => 'hello';

// let tes = arrow;

// alert('selamat datang di game tebak angka! kamu diminta untuk menebak angka 1-3, dan kamu akan bermain dalam 5 ronde. Player yang berhasil mengumpulkan tebakan terbanyak akan menang. Selamat bermain!');

// let player1 = prompt ('Player1: masukkan angka:');
//     player1 = [1,2,3];
// let player2 = prompt ('Player2: masukkan angka:');
//     player2 = [1,2,3];

// if (player1 = 1 && player2 = 1) {
//     alert('tebakan tidak boleh sama');
// }
// else if (player1 = 2 && player2 = 2) {
//     alert('tebakan tidak boleh sama');
// }
// else if (player1 = 3 && player3 = 3) {
//     alert('tebakan tidak boleh sama');
// }
// else if (player1 = [1,2,3] && palyer2 = [1,2,3]) {
//     alert('')
// }

let game = true;

while(game <=5) {
    let angka = Math.floor(Math.random() *3) +1;
    console.log(angka);

    let player1 = prompt('player 1 masukkan angka:');
    let player2 = prompt('player 2 masukkan angka:');

    if (player1 == player2) {
        alert('tebakan tidak boleh sama');
    }
    else if (player1 = angka) {
        alert('player1 win');
    }
    else if (player2 = angka) {
        alert('player2 win');
    }

game++;
}

