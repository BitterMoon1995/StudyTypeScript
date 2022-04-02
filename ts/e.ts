// 《一. 函数类型接口》
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
// interface SearchFunc {
//     (source: string, sub: string): number
// }

// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。
// 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，
// 因为函数直接赋值给了 SearchFunc类型变量。
// let searchFunc: SearchFunc
// searchFunc = function (s1, s2) {
//     return s1.search(s2)
// }

// 《二. 接口中定义函数声明》
// 注意与调用签名、接口中定义的方法区分。
// 类中也可以定义函数声明

// interface AddIntf {
//     minus(a: number, b: number)//方法
//     add: (a: number, b: number) => number//函数声明
// }
//
// class AddClass implements AddIntf {
//     minus(a: number, b: number) {
//         return a - b
//     }
//
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
//
// let instAddClass: AddIntf = new AddClass()
// console.log(instAddClass.add(1, 3), instAddClass.minus(2, 6))

//《三. 联合类型和接口》
// interface RunOption {
//     program: string
//     commandline: string[] | string | (() => string)
// }

// let option1: RunOption = {
//     program: '测试程序',
//     commandline: '-joinedStr'
// }
// console.log(option1.commandline)
//
// let option2: RunOption = {
//     program: "运维程序",
//     commandline: function () {
//         return '运行情况良好！'
//     }
// }
// console.log(typeof option2.commandline)
//
// let option3: RunOption = {
//     program: "关闭程序",
//     commandline: ['shutdown', '-joinedStr']
// }
// console.log(option3.commandline.length)

//《四. 可索引接口》
// interface nameList {
//     [i: number]: string
// }
//
// let list1: nameList = ['joinedStr', 'b']
// console.log(list1[0])
//
// let list11: nameList = {
//     3: '尼哥',
//     9: '黑狗'
// }
// console.log(list11[9])
// console.log(list11[8])
//
// interface ages {
//     [index: string]: number
// }
//
// let list2: ages = {
//     'john': 28,
//     'nancy': 16
// }
// console.log(list2['nancy'])

// interface Person {
//     name: string
// }
//
// interface Musician extends Person {
//     instrument: string
// }
//
// let drummer = <Musician>{}
// drummer.instrument = '鼓'
// drummer.name = '一斗牛牛'
// console.log(drummer)
//
// interface Me extends Person, Musician {
//     dress: string
// }
//
// let me: Me = {} as Me
// // let me: Me = <Me>new Object()
// // let me: Me = <Me>{}
// me.dress = '碎花洋裙'
// console.log(me.dress)

//《五. 混合类型接口》
// 一个接口的实例可以同时做为函数和对象使用，并带有额外的属性。
//就是说它既是一个函数，又是一个带有成员变量的类，这些成员变量还可以是函数
//这种玩法一定得配一个工厂函数来玩
// interface Counter {
//     (start: number): string;
//
//     interval: number;
//
//     reset(): void;
//
//     add(num: number): void
//
//     getResult(): number
// }

// function getCounter(): Counter {
//     //类型断言
//     let counter = <Counter>function (start: number) {
//     };
//     counter.interval = 123;
//     counter.reset = function () {
//         counter.interval = 0
//     };
//     counter.add = function (n) {
//         counter.interval += n
//     }
//     counter.getResult = function () {
//         return counter.interval
//     }
//     return counter;
// }

// let c = getCounter();
// c.add(1)
// console.log(c.getResult())
// c.add(6324)
// console.log(c.getResult())
// c.reset()
// c.add(-123)
// console.log(c.getResult())

// 《六.多调用签名函数类型接口》
// 表示函数类型的接口，可以声明多个调用签名，类型为该接口的函数，
// 其参数列表与返回值列表为所有调用签名的 联合
// export interface MultiCallSign {
//     (num: number): number
//
//     (str: string): string
//
//     (flag: boolean): boolean
// }
//
// let func: MultiCallSign = function (x) {
//     return x + 1
// }
//
// console.log(func(998), func(false), func('司马老贼'))

//《七.构造器签名接口》
// 涉及到typescript设计痛点，规则前后互相矛盾：接口不可以定义静态成员，但又可以定义构造函数签名
// interface IsGamer {
//     age: number;
//     favGame: string
//     // 变态点1：接口中不可以定义静态成员，但是却可以定义构造函数签名，然而类的构造函数又属于其静态成员
//     // static country : string // 'static' modifier cannot appear on a type member.
// }
//
// interface GamerConstructor {
//     new(age: number, favGame: string): Gamer
// }
//
// // 变态点2：在检查类对接口的实现时，又不检查类的静态成员
// // 导致结果1：类无法实现定义构造函数签名的接口
// class Gamer implements IsGamer {
//     age: number;
//     favGame: string
//     static country: string
//
//     constructor(age: number, favGame: string) {
//         this.age = age
//         this.favGame = favGame
//     }
// }
//
// // 导致结果2：但是可以作为函数参数进行检查，这个参数可以是普通参数也可以是类型参数。
//
// // 写法1：作类型参数对其进行泛型约束
// function createGamer<T extends GamerConstructor>(gamerCst: T, age: number, favGame: string)
// // 写法2：直接作为参数进行类型约束
// // function createGamer(gamerCst: GamerConstructor, age: number, favGame: string)
// {
//     return new gamerCst(age, favGame)
// }
//
// function playGame<T extends Gamer>(gamer: T) {
//     console.log('游玩' + gamer.favGame)
// }
//
// playGame(createGamer(Gamer, 1, 'DNF'))

//《八. 接口里面声明常量》
const sb: unique symbol = Symbol('sb')

interface GG {
    // 死妈之：接口里面声明属性名为unique symbol的常量
    [sb]: 2
    a: 1
}

let dress: GG = {
    [sb]: 2,
    a: 1
}

console.log(dress)
console.log(dress[sb],dress.a)
