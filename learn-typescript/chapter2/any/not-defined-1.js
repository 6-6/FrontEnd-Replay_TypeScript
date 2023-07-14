var anyThing = 'hello';
// 明显的错误，但tsc还是会正常编译
// 如果换成 let anyThing: string = 'hello'; 则会报错
// 说明 any 类型可以赋值给任意类型
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
