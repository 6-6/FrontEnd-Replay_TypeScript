# Chapter 2 - 基础
本部分介绍了 TypeScript 中的常用类型和一些基本概念

## 原始数据类型（基本类型）
JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 中的新类型 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

本节主要介绍前五种原始数据类型在 TypeScript 中的应用。

### 布尔值
使用 `boolean` 定义布尔值类型：[boolean-basic](./boolean-basic.ts)

注意，使用构造函数 Boolean 创造的对象不是布尔值：

```ts
let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

事实上 `new Boolean()` 返回的是一个 Boolean 对象：
```ts
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 Boolean 也可以返回一个 boolean 类型：
```ts
let createdByBoolean: boolean = Boolean(1);
```

### 数值
使用 `number` 定义数值类型：
[number-basic](./number/number-basic.ts)

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

编译结果：

```js
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

其中 `0b1010` 和 `0o744` 是 [ES6 中的二进制和八进制表示法](https://es6.ruanyifeng.com/#docs/number)，它们会被编译为十进制数字。

为什么这里被编译为var，而不是let？因为默认为 es5 ，`tsconfig.json` 可以进行设置 `compilerOptions` 相应转译版本。

## 字符串

使用 `string` 定义字符串类型：[string-basic.ts](./string/string-basic.ts)

```ts
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

编译结果：

```js
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".
I'll be " + (myAge + 1) + " years old next month.";
```

实际上看到模版字符被转译为了 `concat()` 方法，而原文章是 `+` 拼接的。说明不同版本的处理方式有可能不同的。

## 空值
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：
[void-basic.ts](./void/void-basic.ts)

```ts
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`（只在 --strictNullChecks 未指定时）：

```ts
let unusable: void = undefined;
```
[void-test.ts](./void/void-test.ts)

## Null 和 Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```ts
let u: undefined = undefined;
let n: null = null;
```
[null-basic.ts](./null/null-basic.ts)

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```ts
let num: number = undefined;
```
[undefined-to-number.ts](./null/undefined-to-number.ts)

```ts
// 同上
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```
[void-to-number.ts](./null/void-to-number.ts)
