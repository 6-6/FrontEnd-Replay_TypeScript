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

## 任意值
任意值（Any）用来表示允许赋值为任意类型。

### 什么是任意值类型？
如果是一个普通类型，在赋值过程中改变类型是不被允许的：


```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```


但如果是 `any` 类型，则允许被赋值为任意类型。

```ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```
[any-basic.ts](./any/any-basic.ts)

### 任意值的属性和方法

在任意值上访问任何属性都是允许的：

```ts
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```
[not-defined-1.ts](./any/not-defined-1.ts)

也允许调用任何方法：

```ts
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```
[any-declare.ts](./any/any-declare.ts)

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

### 未声明类型的变量

**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：

```ts
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```
[not-declare.ts](./any/not-declare.ts)

等价于

```ts
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```

### 参考

-   [Basic Types # Any](http://www.typescriptlang.org/docs/handbook/basic-types.html#any)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC)）

## 类型推论
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

### 什么是类型推论
以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

见上小节的示例：[not-declare.ts](./any/not-declare.ts)

## 联合类型
联合类型（Union Types）表示取值可以为多种类型中的一种。

### 简单的例子
```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 | 分隔每个类型。

这里的 `let myFavoriteNumber: string | number` 的含义是，允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其他类型。

## 访问联合类型的属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

```ts
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```ts
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

[inference-basic.ts](./type-inference/inference-basic.ts)

上例中，第二行的 `myFavoriteNumber` 被推断成了 `string`，访问它的 `length` 属性不会报错。

而第四行的 `myFavoriteNumber` 被推断成了 `number`，访问它的 `length` 属性时就报错了。



有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

```
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

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

上例中，使用 `readonly` 定义的属性 `id` 初始化后，又被赋值了，所以报错了。

**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：

```
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};

tom.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

上例中，报错信息有两处，第一处是在对 `tom` 进行赋值的时候，没有给 `id` 赋值。

第二处是在给 `tom.id` 赋值的时候，由于它是只读属性，所以报错了。