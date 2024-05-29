function indexPrime(param1) {
    function isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    let primes = [];
    let i = 2;

    while (primes.length < param1) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }

    return primes[primes.length - 1];
}

console.log(indexPrime(4)); // Result => 7
console.log(indexPrime(500)); // Result => 3571
console.log(indexPrime(37786)); // Result => 450881

// Cara lain
function 