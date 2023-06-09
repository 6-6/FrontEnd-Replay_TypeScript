# Chapter 1 - TypeScript 简介
快速了解 TypeScript 能够做什么，以及它的优势在哪里。

## 什么是 TypeScript
TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层： TypeScript 的类型系统。

简单来说就是 JavaScript 的超集，它可以编译成纯 JavaScript ，编译出来的js可以运行在任何浏览器上。

## 上手 TypeScript

### 安装 TypeScript
```bash
npm install -g typescript
```

### 构建 TypeScript 文件
创建第一个ts文件代码 [greeter.ts](./start/greeter.ts)

> vscode 可能会有一些明明没错的ts的报错，关闭文件重新打开又好了。设置搜索`validate`，把 typescript 的校验关掉就好了，但这样错误不会提示了，所以还是建议不要关掉。

### 编译 TypeScript 文件
greeter.ts 里的代码是 javascript 代码，说明ts是兼容js的，当然还是需要编译一下：

```bash
tsc greeter.ts
```
编译后会生成一个同名的js文件

### 类型注解
ts最核心武器当然就是类型系统，加上去试试。
[greeter-type.ts](./start/greeter-type.ts)

编译结果：
```bash
greeter-type.ts:8:35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

8 document.body.innerHTML = greeter(user);
                                    ~~~~


Found 1 error in greeter-type.ts:8
```

很清楚告诉你问题出现在哪里了，这就是类型系统的好处。防止一些很傻的错误，比如这里把一个数组赋值给一个字符串变量。

然而相应js文件还是生成了，ts只会告诉你错误，但是不会阻止你编译。

### 接口
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

[greeter-interface.ts](./start/greeter-interface.ts)

### 类
ts当然也是支持js的类（class）的特性，可以将interface和class结合起来使用。

[greeter-class.ts](./start/greeter-class.ts)

