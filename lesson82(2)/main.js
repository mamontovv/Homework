let numbers = [13,4,12,11,10]

function checkNumbers(item) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > item) {
            console.log(numbers[i])
        }
    }
}

console.log(checkNumbers(10))