// interface Person {
//     firstname: string
//     lastname: string
//     sayHi: () => string
// }
//
// let jack:Person
// jack = {
//     firstname: "jack",
//     lastname: "wilson",
//     sayHi(): string {
//         return "我是杰克";
//     }
// }
//
// let michale:Person = {
//     firstname: "michale", lastname: "trump", sayHi(): string {
//         return "我是迈克尔";
//     }
// }
//
// console.log(jack.sayHi())
// console.log(michale.firstname)

//联合类型和接口
interface RunOption {
    program: string
    commandline: string[] | string | (() => string)
}

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

//可索引接口
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

//混合类型接口：一个接口的实例可以同时做为函数和对象使用，并带有额外的属性。
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
