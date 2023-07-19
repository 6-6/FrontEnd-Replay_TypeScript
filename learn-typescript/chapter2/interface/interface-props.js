var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//报错：类型“number | undefined”的属性“age”不能赋给“string”索引类型“string”。ts(2411)
// 任意属性的值允许是 string 是不够的，还有可能是 number，所以这里 [propName: string]: string | number。
