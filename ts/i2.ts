//  五. type 类型别名
// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver
//
// function getName(arg: NameOrResolver): Name {
//     if (typeof arg === "string") {
//         return arg
//     } else {
//         return arg()
//     }
// }
//
// console.log(getName('nig'))
// console.log(getName(function () {
//     return '司马了'
// }))

//与泛型一起使用
// type GT<T> = T
// let v:GT<string> = 'i'
// console.log(v)

//
// type Container<T> = {
//     value: T
// }
//
// function getValue<T>(ct: Container<T>) {
//     return ct.value
// }
//
// let c: Container<number> = {
//     value: 2
// }
// console.log(getValue<number>(c))
// console.log(getValue(c))

//引用自己
// type Tree<T> = {
//     value: T
//     left: Tree<T>
//     right: Tree<T>
// }


//与泛型和交叉类型一起使用
// type LinkedList<T> = T & {
//     next: LinkedList<T>
// }
//
// interface Person {
//     name: string
// }
//
// let people:LinkedList<Person>
// let v1 = people.name
// people.next
// people.next.next.next.next.next.next.name

//与interface区别：类型别名并不创建新类型；类型别名不能继承或实现
// type Alias = {
//     num: number
// }
//
// interface Alias2 {
//     num: number
// }
//
// function showPartialPerson(): Alias {
//     return {
//         num: 8
//     }
// }
//
// function f2(): Alias2 {
//     return {
//         num: 8
//     }
// }
//
// console.log(typeof showPartialPerson())
// console.log(typeof f2())

//  六. 字符串字面量类型、可辨识联合类型（Discriminated Unions）

// type Nig = 'nig'
// let v: Nig = 'sima'
// type Str = 'string'
// let v2: Str = '母畜'

//字符串字面量类型允许你指定字符串必须的固定值。
// type Direction = 'left' | 'right' | 'up' | 'down'
//
// function uiAnimate(direction: Direction) {
//     switch (direction) {
//         case "up": {
//             console.log('向上移动杀母犬')
//             break
//         }
//         case "left": {
//             console.log('向左移动杀母畜')
//         }
//     }
// }
//
// uiAnimate("up")
// uiAnimate("left")
//你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误。
// uiAnimate('死妈母狗畜')

// 通过类型字面量来确定联合类型的类型
// 具有普通的单例类型属性— 可辨识的特征。一个类型别名包含了那些类型的联合— 联合。此属性上的类型保护。
// interface Square {
//     kind: "square";
//     size: number;
// }
//
// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }
//
// interface Circle {
//     kind: "circle";
//     radius: number;
// }
//
// interface RightTriangle  {
//     kind: '直角三角形'
//     base: number
//     height: number
// }
//
// //首先我们声明了将要联合的接口。每个接口都有 kind属性但有不同的字符串字面量类型。
// // kind属性称做 可辨识的特征或 标签。其它的属性则特定于各个接口。
// // 注意，目前各个接口间是没有联系的。下面我们把它们联合到一起：
// type Shape = Square | Rectangle | Circle | RightTriangle
//
// //最好指定一个返回类型，可以为never，以便于做完整性检查（有没有漏掉的case）
// function calArea(shape: Shape): number {
//     switch (shape.kind) {
//         case "square":
//             return shape.size ** 2;
//         case "rectangle":
//             return shape.width * shape.height;
//         case "circle":
//             return Math.PI * shape.radius ** 2
//         case "直角三角形":
//             return shape.base * shape.height / 2
//     }
// }
//
// let circle: Circle = {
//     kind: "circle", radius: 2
// }
// console.log(calArea(circle))
// let square: Square = {
//     kind: "square", size: 3
// }
// console.log(calArea(square))
// let rt: RightTriangle = {
//     base: 3, height: 2, kind: "直角三角形"
// }
// console.log(calArea(rt))
