function sentencesManipulation(sentence) {
    //write your code here

    let text = sentence
    const myText = sentence.split(" ")

    let vokal = ['a', 'i', 'u', 'e', 'o'];
    let a = [];

    for (let i = 0; i < myText.length; i++) {
        if (vokal.includes(myText[i][0])) {
            a.push(myText[i]);
        } else {
            a.push(myText[i].slice(1) + myText[i].charAt(0) + 'nyo');
        };
    }

    console.log(a.join("  "));
};

sentencesManipulation('ibu pergi ke pasar bersama aku'); // 'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'

