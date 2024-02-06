function sum() { 
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    };
    console.log(hasil);
};

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);

// Manual
// function sum(a=0, b=0, c=0, d=0, e=0) {
//     a+b+c+d+e
//     console.log(a+b+c+d+e);
// }

// sum(1,2,7)
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

// ALternatif 1 Rest Parameter 1
// function sum(...args) {
//     let hasil = 0;
//     for(let i = 0; i < args.length; i++){
//     hasil += args[i];
//     }
//     console.log(hasil);
// }

// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

// Alternatif 2 Rest Parameter 2
// function sum(...args) {
//     console.log(args.reduce((acc, cur) => acc + cur))
// }

// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

// Alternatif 3 dengan menggunakan Array.from() yang merubah arguments menjadi array
// function sum() {
//     //write code here
//     console.log(Array.from(arguments).reduce((accumulator, currentValue) => accumulator + currentValue));
// }

// sum(1, 2, 7);
// sum(1, 4);
// sum(11);
// sum(10, 3, 6, 7, 9);


// Alternatif 4 dengan menggunakan Object.values() yang mengambil valuesnya
// function sum() {
//     //write code here
//     console.log(Object.values(arguments).reduce((accumulator, currentValue) => accumulator + currentValue));
// }

// sum(1, 2, 7);
// sum(1, 4);
// sum(11);
// sum(10, 3, 6, 7, 9);

// Alternatif 5 cara pemula dengan menggunakan for loop
// function sum() {
//     // your code below
//     let hasil = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     console.log(hasil);
// }

// sum(1, 2, 7);
// sum(1, 4);
// sum(11);
// sum(10, 3, 6, 7, 9);