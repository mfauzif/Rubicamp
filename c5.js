function stringManipulation(word) {
    const vokal = ['a', 'i', 'u', 'e', 'o'];
    const firstChar = word.charAt(0).toLowerCase();

    if (vokal.includes(firstChar)) {
        console.log(word);
    } else {
        console.log(word.slice(1) + word.charAt(0) + 'nyo');
    }
}

stringManipulation('ayam'); // "ayam"
stringManipulation('bebek'); // "ebekbnyo"

// Cara lain
// function stringManipulation(word) {
//     const vokal = ['a', 'i', 'u', 'e', 'o'];
//     const firstChar = word.charAt(0).toLowerCase();

// if (vokal.includes(firstChar)) {
//     console.log(word);
// } else {
//     const secondChar = word.charAt(1).toLowerCase();
//     const thirdChar = word.charAt(2).toLowerCase();

//     if (!vokal.includes(secondChar) && !vokal.includes(thirdChar)) {
//         console.log(word.slice(3) + word.slice(0, 3) + 'nyo');
//     } else {
//         console.log(word.slice(1) + word.charAt(0) + 'nyo');
//     }
// }

//     stringManipulation('ayam'); // "ayam"
//     stringManipulation('bebek'); // "ebekbnyo"