interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'James', lastName: 'Li' };// 将其中lastName删掉，或者对象改为数组也会报错，说明也检测了对象的形状（shape）

document.body.innerHTML = greeter(user);