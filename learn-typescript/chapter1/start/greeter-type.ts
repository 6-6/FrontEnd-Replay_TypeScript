// 预先定义类型注解为string类型
function greeter(person: string){
  return 'Hello, ' + person;
}

let user = [1, 2, 3]; // 改为数组类型，编译报错

document.body.innerHTML = greeter(user);