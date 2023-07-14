var anyThing = 'Tom';
// 可以悬浮鼠标在setName上看到，setName是一个 any 类型的函数
// 这是因为 anyThing 可以是 any 类型，所以编译器不知道它是否有这个属性，所以不报错
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
