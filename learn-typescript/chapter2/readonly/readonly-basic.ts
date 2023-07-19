interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 9527;

// 报错：无法为“id”赋值，因为它是只读属性。ts(2540)

// readonly 只能够初始化时赋值，其他时候赋值都会报错