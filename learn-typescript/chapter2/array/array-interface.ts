interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

fibonacci.push('8');
// 报错：类型“NumberArray”上不存在属性“push”。ts(2339)
