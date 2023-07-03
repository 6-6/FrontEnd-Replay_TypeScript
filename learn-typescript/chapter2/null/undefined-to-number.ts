//tsc编译不会报错，但是在vscode当中会报错，因为ts官方建议null和undefined赋值给void类型和它们各自的类型

//在文件-》首选项-》设置中搜 strict Null Checks，找到对应取消勾选即可不会出现标红错误。

let num: number = undefined;