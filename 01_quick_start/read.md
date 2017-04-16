### 第一个应用程序　
   创建一个greeter.ts ,内容如下：
```
function greeter(person){
    return "Hello, " + person;
}

var user = "zhan san";

document.body.innerHTML = greeter(user);

```

  编译：
```
  tsc greeter.ts
```

  编译后的文件如下,生成greeter.js
```
fan@localhost 01_quick_start]$ ls -l
总用量 8
-rw-rw-r--. 1 yifan yifan 124 4月  16 20:15 greeter.js
-rw-rw-r--. 1 yifan yifan 127 4月  16 18:58 greeter.ts

```

  greeter.js 其内容如下：
```
[yifan@localhost 01_quick_start]$ more greeter.js
function greeter(person) {
    return "Hello, " + person;
}
var user = "zhan san";
document.body.innerHTML = greeter(user);

```

 现在使用TypeScript的高级特性。在 person　参数添加类型注解:string，内容如下：
```
function greeter(person:string){
    return "Hello, " + person;
}

var user = "zhan san";

document.body.innerHTML = greeter(user);

```
### Type annotations 类型注解　
　TypeScript　里的类型注解用于在函数或变量表明其实际数据类型。在上面的代码里，方法 greeter 接受一个参数为字符串的参数。我们可以试着传递一个数组给greeter，如下：

```
function greeter(person:string){
    return "Hello, " + person;
}

var user = [0,1,2];

document.body.innerHTML = greeter(user);

```

  重新编译，报错如下：
```
[yifan@localhost 01_quick_start]$ tsc greeter.ts 
greeter.ts(7,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

[yifan@localhost 01_quick_start]$ ls
greeter.js  greeter.ts  read.md

```

  上面的错误信息是指传递的 number[] 数组参数不能适用于类型为string。
  另外，尽管上面编译报错，但仍生成了greeter.js。你仍然可以使用TypeScript，尽管里面存在错误，不过，TypeScript会提示可能不能得到希望的结果。　　


### interface 接口　
```
interface Person {
   firstName:string;
   lastName:string;
} 

function greeter(person:Person){
   return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {firstName:"zhan",lastName:"san"};

document.body.innerHTML = greeter(user);

```

### Classes 类　　
　　TypeScript 支持 JavaScript 里的新特性，支持面向对象编程。　　
```
[yifan@localhost 01_quick_start]$ more classDemo.ts

class Student{
    fullName:string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
} 


interface Person {
   firstName:string;
   lastName:string;
} 

function greeter(person : Person){
   return "Hello, " + person.firstName + " " + person.lastName;
}  

var user = new Student("Jane","M.","User");

document.body.innerHTML = greeter(user);

```


#### 应用　　
　　创建greeter.html，引入编译后生成的 classDemo.js  ; greeter.html 内容如下：　　
```
[yifan@localhost 01_quick_start]$ more greeter.html 
<!DOCTYPE html>
<html>
    <head>
        <title>TypeScript Greeter</title>
    </head>
    <body>
        <script type="text/javascript" src="classDemo.js"></script>
    </body>
</html>

```


