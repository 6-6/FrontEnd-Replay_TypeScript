"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
// 实际上还是会报错：类型“number | undefined”的属性“age”不能赋给“string”索引类型“string | number”。ts(2411)
// 需要将age属性的类型改为string | number | undefined
// 为什么呢？因为age属性是可选的，所以有可能是undefined，而undefined是string和number的子类型，所以age属性的类型可以是string | number | undefined
