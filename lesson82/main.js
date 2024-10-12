function userName(firstName, secondName ) {
    return 'Hello ' + firstName + secondName
}

const result = userName('Alexey ', 'Mamontov')
console.log(result)


// const users = ['John', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.lenght; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(users, 'Alex'))


function calc(num1, num2, operation) {
    if (operation === 'plus') {
        return num1 + num2
    }
    if (operation === 'minus') {
        return num1 - num2
    }
    if (operation === 'division') {
        return num1 / num2
    }
    if (operation === 'multiplication') {
        return num1 * num2
    }
}

console.log(calc(3,3, 'multiplication'))