function weirdMultiply(sentence) {
    //wirte your code here
    if (sentence === 0) {
        return 0;
    };

    let numberString = sentence.toString();

    if (numberString.length === 1) {
        return parseInt(numberString);
    };

    let multiplication = 1;
    for (let number of numberString) {
        multiplication *= parseInt(number);
    };

    return weirdMultiply(multiplication)

}

console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digits

// cara lain :
// function weirdMultiply(sentence) {
//     if (sentence === 0) {
//         return 0;
//     }

//     let numStr = sentence.toString();

//     if (numStr.length === 1) {
//         return parseInt(numStr);
//     }

//     let product = numStr.split('').reduce((acc, digit) => acc * parseInt(digit), 1);

//     return weirdMultiply(product);
// }

// console.log(weirdMultiply(39));  
// console.log(weirdMultiply(999));
// console.log(weirdMultiply(3));   
