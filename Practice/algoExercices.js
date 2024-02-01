// Algorithm 1: Skyline Hights
function challenge_1(array) {
    var ref = 0
    var viewed = []
    for (var i=0; i < array.length; i++) {
        if (array[i] > 0) {
            if (array[i] > ref) {
                viewed.push(array[i])
                ref = array[i]
            }
        }
    }

    return viewed;
}

const test1 = [-1, 7, 3]
const test2 = [-1, 1, 1, 7, 3]
const test3 = [0, 4]
// console.log(challenge_1(test3));

// Algorithm 2: Palindrome
function challenge_2(word) {
    var wordArray = word.split('');
    
    for (var left=0; left<wordArray.length/2; left++) {
        var right = wordArray.length-left-1

        if (wordArray[left] != wordArray[right]) {
            return 'is not a palindrome'
        }
    }

    return 'is a plindrome';
}

console.log(challenge_2('Madam'))