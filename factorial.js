function fact(n) {
    var fact = n;
    for (var i = 1; i <= 10; i++) {
        fact = i * fact;


    }
    return fact;
}
var result = fact(10);
console.log(result);