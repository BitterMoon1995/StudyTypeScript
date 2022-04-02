//盘点十大必须用let的理由：
//1.不解释
//这个输出多少说不对4000+
// function showPartialPerson() {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     }
// }

//2.屏蔽重定义
// var a = 1
// var a = 1
// var a = 1
// let b = 1
// let b = 1

//3.获取并留存变量环境
// function theCityThatAlwaysSleeps() {
//     let getCity;
//
//     if (true) {
//         let city = "Seattle";
//         getCity = function() {
//             return city;
//         }
//     }
//
//     return getCity();
// }
//
// let r = theCityThatAlwaysSleeps()
// console.log(r)

// let a = 1
// console.log(a)

// const numLivesForCat = 9;
// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };
// numLivesForCat = 8

// all "okay"
// kitty.name = "Kitty";
// kitty.numLives--;

/*
let vs. const
现在我们有两种作用域相似的声明方式，我们自然会问到底应该使用哪个。 与大多数泛泛的问题一样，答案是：使用最小特权原则。
所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，
那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。
使用 const也可以让我们更容易的推测数据的流动。
 */

//解构
//1.解构数组
//数组解构赋值
// let input : number[]= [4396, 1103];
// let [a,b] = input
// console.log(a,b)

//作用于函数参数：
// function showPartialPerson([a,b]:[number,string]) {
//     console.log(a,b)
// }
// showPartialPerson([1,'狗狗'])

//你可以在数组里使用...语法创建剩余变量：
// let [first,...rest] = [1,2,3,4,5,6]
// console.log(first)
// console.log(rest)

//当然，由于是JavaScript, 你可以忽略你不关心的尾随元素：或其它元素：
// let [,b,,d] = [8,8,4,8]
// console.log(b,d)

//2.解构对象
// let girl = {
//     me: 'Lolita公主薇儿',
//     age: 18,
//     isPrincess: true
// }
// let {me,age} = girl
// console.log(me,age)

// let {me, ...rest} = girl
// console.log(rest.age,rest.isPrincess)

//对象解构属性重命名
//你也可以给属性以不同的名字：这里的语法开始变得混乱。 你可以将 a: newName1 读做 "a 作为 newName1"。
// 方向是从左到右，好像你写成了以下样子：let newName1 = dress.a; let newName2 = dress.b;
// let {me: newName1, age: newName2} = girl;
// console.log(newName1, newName2)
//令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
//第1 2个冒号约定新属性名，第4 5个约定新属性名的类型
// let {me: newName3, age: newName4}: {me: string, age: number} = girl
// console.log(newName3,newName4)

//默认值
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
// }

// 函数声明
// 解构也能用于函数声明。 看以下简单的情况：GG

//展开
//展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 例如：
let first = [1, 2];
let second = [3, 4];
let plus = [...first,...second]
//这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。

//你还可以展开对象：
// let bigGirl = {...girl, score: 9.8,me: '月儿'}
// 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。
// 这就意味着出现在展开对象后面的属性会覆盖前面的属性。
// console.log(bigGirl)

//对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。
// 大体上是说当你展开一个对象实例时，你会丢失其方法：
// class Person {
//     name:string
//     run() {
//         console.log('America')
//     }
// }
// let p = new Person()
// p.name = '孙笑川'
// let p2 = {...p}
// console.log(p2)





