var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
var positiveNumArray = [];
for (var i=0; i<numbers.length; i++) {
    if(numbers[i] > 0 ) {
        positiveNumArray.push(numbers[i])
    }
}
countPositives = positiveNumArray.length;
console.log("there are " + countPositives + " positive(s) values");
