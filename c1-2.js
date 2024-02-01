function sum(...args) {
    let hasil = 0;
    for(let i = 0; i < args.length; i++){
    hasil += args[i];
    }
    console.log(hasil);
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);