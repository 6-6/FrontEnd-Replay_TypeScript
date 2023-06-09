class Student {
  fullName: string;
  //public声明等同于创建了同名的成员变量，编译就看到了
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.fullName//这里的fullName是在Student类中定义的，但是在Person接口中也定义了，所以不会报错
}

let user = new Student('James', 'M.', 'Li');
document.body.innerHTML = greeter(user);