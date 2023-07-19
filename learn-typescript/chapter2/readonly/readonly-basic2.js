var tom = {
    name: 'Tom',
    gender: 'male'
};
// 报错：类型 "{ name: string; gender: string; }" 中缺少属性 "id"，但类型 "Person" 中需要该属性。ts(2741)
tom.id = 89757;
// 报错：无法为“id”赋值，因为它是只读属性。ts(2540)
// 总结：readonly 只在第一次给对象赋值的时候生效，而不是第一次给只读属性赋值的时候生效：
