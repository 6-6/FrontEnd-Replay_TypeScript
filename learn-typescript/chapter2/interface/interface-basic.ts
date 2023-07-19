interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  // vscode 中的标红提示：
  // 不能将类型“{ name: string; age: number; gender: string; }”分配给类型“Person”。
  // 对象字面量只能指定已知属性，并且“gender”不在类型“Person”中。ts(2322)
  gender: 'male'
};

// 说明了interface的作用： 对象的形状（shape）和变量是一致的，不然会报错

// tsc编译后的报错信息：
// 可以看到ts2322的错误信息，就是上面的vscode中的标红提示
/**
error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.

Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
**/

