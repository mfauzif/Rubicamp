function deretKaskus(n) {
    let array = []
    for (let i = 3; i <= 30; i += 3) {
        if (i % 5 === 0) {
            array.push("KAS")
        } else if (i % 6 === 0) {
            array.push("KUS")
        } else if (i % 5 && i % 6 === 0) {
            array.push("KASKUS")
        } else {
            array.push(i);
        }
    }
    return array
}

console.log(deretKaskus(10));

// if (15 % 5 === 0) {
//     console.log("KAS")
// }
// if (6 % 6 === 0) {
//     console.log("KUS")
// }
// if (12 % 6 === 0) {
//     console.log("KUS")
// }
// if (18 % 6 === 0) {
//     console.log("KUS")
// }
// if (24 % 6 === 0) {
//     console.log("KUS")
// }
// if (30 % 5 && 30 % 6 === 0) {
//     console.log("KASKUS")
// }