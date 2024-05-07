function stringManipulation(word) {
    const vokal = ['a', 'e', 'i', 'o', 'u'];
    const firstChar = word.charAt(0).toLowerCase();

    if (vokal.includes(firstChar)) {
        return word;
    } else {
        const secondChar = word.charAt(1).toLowerCase();
        const thirdChar = word.charAt(2).toLowerCase();

        if (!vokal.includes(secondChar) && !vokal.includes(thirdChar)) {
            return word.slice(3) + word.slice(0, 3) + 'nyo';
        } else {
            return word.slice(1) + word.charAt(0) + 'nyo';
        }
    }
}

console.log(stringManipulation('ayam')); // "ayam"
console.log(stringManipulation('bebek')); // "ebekbnyo"