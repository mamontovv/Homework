let notAdmins = 0

const student = {
    nickname: 'Kertiex',
    age: 17,
    isStudent: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(student)
student.sayHello('Alexey')


const users = [
    {
        name: 'alex',
        isAdmin: true
    },
    {
        name: 'john',
        isAdmin: false
    },
    {
        name: 'tom',
        isAdmin: false
    },
    {
        name: 'ann',
        isAdmin: false
    }
]



for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        notAdmins++
    }
}

console.log(notAdmins)






