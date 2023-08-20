// 鼠标放在范型上，可以看到 interface Array<T> 的定义，它是一个范型接口，
// 接口和范型的区别是：范型是定义时确定类型，接口是使用时确定类型。
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
fibonacci.push(8);

export { fibonacci }