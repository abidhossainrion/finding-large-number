function largeNumber(numbers) {
    var large = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > large) {
            large = element;

        }
    }

    return large;

}

var values = [1, 2, 3];
values.push(4);
var result = largeNumber(values);
console.log(result);

