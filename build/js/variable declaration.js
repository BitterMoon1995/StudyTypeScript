// /* var声明 */
//
// function f0() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }
//
// var g = f0();
// g(); // returns 11;
//
// function f() {
//     var a = 1;
//
//     a = 2;
//     var b = g();
//     a = 3;
//
//     return b;
//
//     function g() {
//         return a;
//     }
// }
//
// console.log(f()) // returns 2
//
// // function f2(){
// //     for (var i = 0; i < 10; i++) {
// //         setTimeout(function() { console.log(i); }, 100 * i);
// //     }
// // }
// // f2()
// //
// // function f3(){
// //     for (let i = 0; i < 10; i++) {
// //         setTimeout(function() { console.log(i); }, 100 * i);
// //     }
// // }
// // f3()
//
// /* let */
// function f4(input: boolean) {
//     let a = 100;
//
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//
//     try {
//         throw "oh no!";
//     }
//     catch (e) {
//         console.log("Oh well.");
//     }
//
//     // Error: 'e' doesn't exist here
//     // console.log(e);
//
//     // Error: 'b' doesn't exist here
//     // return b;
// }
//
// // function f5() {
// //     a++
// //     let a = 1
// // }
//
// function foo() {
//     // okay to capture 'a'
//     return a8;
// }
//
// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// console.log(typeof foo())
//
// let a8 = 1;
//
// function theCityThatAlwaysSleeps() {
//     let getCity;
//
//     if (true) {
//         let city = "八旗老北京儿";
//         getCity = function() {
//             return city;
//         }
//     }
//
//     return getCity();
// }
//
// console.log(theCityThatAlwaysSleeps())
//
// /* const */
//
// // const numLivesForCat = 9;
// // numLivesForCat = 10
//
// const numLivesForCat = 9;
// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }
//
// // Error
// // kitty = {
// //     name: "Danielle",
// //     numLives: numLivesForCat
// // };
//
// // all "okay"
// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;
//
// /* 解构 */
// let input = [1, 2];
// let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second); // outputs 2
// // swap variables
// [first, second] = [second, first];
// console.log(first); // outputs 1
// console.log(second); // outputs 2
//
// function f7([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f7([89,64]);
//
// // '...' operator
// let [first2, ...rest] = [4, 3, 9, 6];
// console.log(first2); // outputs 4
// console.log(rest); // outputs [ 3,9,6 ]
//
// let [first1] = [7,2,1];
// console.log(first1); // outputs 7
//
// let [, second7, , fourth7] = [1, 2, 3, 4];
// console.log(second7)
// console.log(fourth7)
//
// let o = {
//     name: "klee",
//     age: 12,
//     interest: "disco"
// };
// let { interest, age } = o;
// console.log(interest,age)
//
// //在对象里使用...语法创建剩余变量：
// let {...passthrough } = o;
// let total = passthrough.age + passthrough.interest.length;
// console.log(total)
//
// let { name: newName1, interest: newName2 } = o;
//
// //默认值
// function keepWholeObject(wholeObject: { a?: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
// }
//
// type C = { a: string, b?: number }
// function f8({ a, b }: C): void {
//     // ...
// }
//
// //展开 数组
// let first4 = [1, 2];
// let second4 = [3, 4];
// let bothPlus = [0, ...first4, ...second4, 5];
// console.log(bothPlus)
//
// //展开对象
// let defaults = { food: "spicy", price: "88$", ambiance: "noisy" };
// let search = { ...defaults, food: "sweet" };
// console.log(search)
//
// //展开对象的结果依然是对象 意味着出现在展开对象后面的属性会覆盖前面的属性
// let defaults2 = { food: "spicy", price: "$$", ambiance: "noisy" };
// // @ts-ignore
// let search2 = { food: "sweet", ...defaults2 };
// console.log(search2)
//
// //展开对象仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
// class Nigger {
//     p = 12;
//     m() {
//         return 'I`m Nigger'
//     }
// }
// let nigger = new Nigger()
// let clone = { ...nigger };
// console.log(clone.p); // ok
// // console.log(clone.m()) // error!
//# sourceMappingURL=variable%20declaration.js.map