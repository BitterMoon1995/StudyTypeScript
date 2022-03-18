//  一. 交叉类型（Intersection Types）
//TypeScript之杂交（Intersection）类型是一种混合类型（mixin）；
//要声明一个Intersection类型的变量，可以使用操作符&来定义，
//&将两个类型混合为一个新的类型，这个新的类型拥有&左右类型的所有成员
// interface I1 {
//     member1: string
// }
//
// interface I2 {
//     member2: () => any
// }
//
// let GG: I1 & I2 = {
//     member1: '司马了',
//     member2: function () {
//         return 4398
//     }
// }
//  二. 联合类型（Union Types）
//这个函数的参数类型其实可以是any，但是就没法在编译期检测
// function padLeft(padding: number | string) {
//     let str: string = '习主席万岁！'
//     if (typeof padding === "number") {
//         return Array(padding).join(' ') + str
//     }
//     if (typeof padding === "string") {
//         return padding + str
//     }
//     throw new Error('参数错误，只能字符串或数字')
// }

// let arr:Array<string>=['a','b','c']
// let joinedStr:string = arr.join('>')
// console.log(joinedStr)
//
// console.log(padLeft('【有一说一确实】'))
// console.log(padLeft(77))

// console.log(padLeft(false))
// console.log(padLeft(Symbol(8)))

//  三. 类型保护
/*
联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，
所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
 */
// class Bird {
//     fly() {
//         console.log('鸟飞')
//     }
//
//     layEggs() {
//         console.log('鸟下蛋')
//     }
// }
//
// class Fish {
//     swim() {
//         console.log('鱼游泳')
//     }
//
//     layEggs() {
//         console.log('鱼产卵')
//     }
// }
//
// function getPet(flag: number): Bird | Fish | undefined {
//     switch (flag) {
//         case 1: {
//             return new Bird()
//         }
//         case 2: {
//             return new Fish()
//         }
//         default: {
//             return undefined
//         }
//     }
// }

// let r = getPet(2)
//要考虑返回值以及该返回值的layEggs属性都有可能为null或undefined，所以ts中在这里不能直接调，要做双重判断
//传统写法之高雅：
// if (r && r.layEggs){
//     r.layEggs()
// }

// let v: string | undefined
// // v = 'nig'
// console.log(v?.charAt(0))

//新写法之问号点
// r?.layEggs()
//。 如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员。
// 这个例子里， Bird具有一个 fly成员。 我们不能确定一个 Bird | Fish类型的变量是否有 fly方法。
// 如果变量在运行时是 Fish类型，那么调用 pet.fly()就出错了。
// r.swim()

//带类型谓词的自定义类型保护函数。类型谓词animal is Fish将animal的类型缩减为fish
//【总结：type of只能判断基础类型，instance of不能判断对象字面量！所以只有类型谓词函数，
// 可以满足判断任何变量与对象的类型的需求！】
// function isFish(animal: Fish | Bird | undefined): animal is Fish {
//     return animal !== undefined && (animal as Fish).swim !== undefined
// }
//
// let fish = getPet(2)
// if (isFish(fish)) {
//     fish.swim()
// }else {
//     fish?.fly()
// }

//用带类型谓词的函数重写padLeft例子
//但是其实没必要，基础类型（"number"， "string"， "boolean"或 "symbol"）可以直接用typeof
// function isNumber(x: any): x is number {
//     return typeof x === "number"
// }
//
// function isString(x: any): x is string {
//     return typeof x === "string"
// }
//
// function padLeft(padding: number | string) {
//     let str: string = '习主席万岁！'
//     if (isNumber(padding)) {
//         return Array(padding).join(' ') + str
//     }
//     if (isString(padding)) {
//         return padding + str
//     }
//     throw new Error('参数错误，只能字符串或数字')
// }

//instanceof类型保护
// interface Vehicle {
//     move(distance: number): void
// }
//
// class Car implements Vehicle {
//     move(distance: number): void {
//         console.log(`汽车跑${distance}公里`)
//     }
//
//     turnSteeringWheel(direct: string) {
//         console.log(`汽车方向盘转到${direct}`)
//     }
// }
//
// class VehicleContainer {
//     constructor(public vehicle: Vehicle) {
//     }
// }
//
// const car = new Car()
// const vc: VehicleContainer = new VehicleContainer(car)
// const {vehicle} = vc
// // vehicle.move()
// //instanceof类型保护是通过构造函数来细化类型的一种方式
// if (car instanceof Car) {
//     car.move(800)
// }

//如果是个对象字面量，instanceof就拉了，因为这种字面量的构造函数根本不是Car
// const anotherCar = {
//     move(distance: number): void {
//         console.log(`汽车跑${distance}公里`)
//     },
//
//     turnSteeringWheel(direct: string) {
//         console.log(`汽车方向盘转到${direct}`)
//     }
// }
// if (anotherCar instanceof Car) {
//     anotherCar.move(4396)//无输出
// }

// 四. null 与 undefined类型及其去除
// let v : string
// //开启--strictNullChecks后
// // v = null
// // v = undefined
// let v2 : string | null | undefined
// v2 = null
// v2 = undefined
//可选参数和可选属性
//使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:
// function daixiu(x: number, y?: number) {
//     return x + (y || 4396)
// }
// console.log(daixiu(1,2))
// console.log(daixiu(1))
// console.log(daixiu(1,undefined))
// console.log(daixiu(1,null))

// class JuJu {
//
//     constructor(public a:number,public b?:number) {
//     }
// }
// let juju = new JuJu(1)
// juju.a = 8
// juju.b = 9
// juju.b = undefined
// // juju.b = null
// console.log(juju)

//类型保护:在函数实现中去null，防联合类型实现的可为null变量
// function fuckNull(str:string|null) :string {
//     if (str === null){
//         return 'default'
//     }else {
//         return str + ' nig'
//     }
// }
//短路运算符高雅去空
// function daixiu(str: string | null): string {
//     str = str || 'default'
//     return str + 'nig'
// }
// console.log(daixiu(null))
// // console.log(fuckNull(undefined))
// console.log(daixiu('black'))








