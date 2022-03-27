// // class Orang {
// //     constructor(name) {
// //         this.name = name;
// //         console.log('object has been created');
// //     }

// //     makan() {
// //         console.log('sedang makan');
// //     }

// //     static jalan() {
// //         console.log('sedang jalan');
// //     }

// // }

// // const mukti = new Orang('Mukti Muhtadi');

// // mukti.umur = 21;

// //  console.log(mukti.makan());

// // console.log(mukti.umur);

// // mukti.tidur = function() {
// //     console.log('sedang tidur');
// // }

// // console.log(mukti.tidur());

// // Orang.jalan();

// // console.log(mukti);

// // class Pekerjaan extends Orang {
// //     constructor(name) {
// //         super(name);
// //     }
// // }

// // const SOC = new Pekerjaan('Mukti');
// // console.log(SOC);

// class table {
//     constructor(init) {
//         this.init = init;
//     }

//     createHeader(data) {
//         let open = "<thead><tr>";
//         let close = "</tr></thead>";

//         data.forEach((d) => {
//             // open += <th>${d}</th>;
//         });

//         return open + close;
//     }

//     createBody(data) {
//         let open = "<tbody>";
//         let close = "</tbody>";

//         data.forEach((d) => {
//             open +=
//             <tr>
//                 <td>${d[0]}</td>
//                 <td>${d[1]}</td>
//             </tr>;
//         });

//         return open + close;
//     }

//     render(Element) {
//         let table = 
//         "<table class='table table-hover'>" +
//         this.createHeader(this.init.columns) +
//         this.createBody(this.init.data) +
//         "</table>";
//         Element.innerHTML = table;
//     }
// }

// const table = new table({
//     columns: ['Name', 'Email'],
//     data: [
//       ['Mukti Muhtadi', 'muktimuhtadi8@gmail.com'],
//       ['Risma Ariyanti', 'rismanicoel15@gmail.com']
//     ]
//   });

// const app = document.getElementById('app');
// table.render(app);