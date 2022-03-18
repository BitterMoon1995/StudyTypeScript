//先npm install强行狂草一个node环境
//然后运行命令：node js/a.js即可
// const msg : string = "hello wrold"
// console.log(msg);
// let isDone : boolean = false
// let num1 : number = 4396
// let num2 : number = 0xff
// let me : string = '周雨薇儿'
// console.log(me.substr(3))
// console.log(num2.substr(1))
// let tempStr : string = `${me}穿超短骚JK`
// console.log(tempStr)
// let arr : number[] = [1,2,7]
// let arr2 : Array<number> = [4,3,9]
// console.log(arr,arr2)
//tuple
// let tup : [string,number,boolean]
// tup = ['骚薇儿',18,true]
// // tup2 = [22,'骚雨薇',true]
// console.log(tup[0].length)
// // console.log(tup[1].length)
// tup[0] = '骚JK'
// // tup[1] = '变装女王'
//enum
// enum SaoSao {JK,Lolita,OL}//TS2452: An enum member cannot have a numeric name.
// let me : SaoSao = SaoSao.JK
// // let sister : string = SaoSao[2]
// enum Framework {Spring = 9,Vue = 8}
// let frw : Framework = Framework.Spring
// console.log(SaoSao,me,Framework,frw)
// //any
// let i : any = 77
// // console.log(i.substr(1))
// i = 'gg'
// console.log(i.substr(1))
// // i.nigger()
// //但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
// let o :object = {}
// // o.nig()
// //void undefined null
// function a() : void {
//     console.log('gg')
// }
// let void0 : void
// void0 = undefined
// // void0 = null
// // void0 = 1
//
// let udf : undefined
// let nul : null
// udf = undefined
// nul = null
//never
// function error(message: string): never {
//     throw new Error(message)
// }
//
// function gg() {
//     return error("猴畜死妈了")
// }
//
// gg()
// function infiniteLoop(): never {
//     while (true) {
//         console.log('猴畜崩妈')
//     }
// }
//
// infiniteLoop()
// declare function create(o:object | 4396): '死妈明凯';
// create({name:'薇儿'})
// create(4396)
//类型断言
// let myNigger:any = '我是黑鬼'
// let len:number = (<string>myNigger).length
// let len2:number = (myNigger as string).length
// console.log(len,len2)
//symbol
/*
特性
    (1)不能和其他值计算,如加键、字符串拼接等
    (2)可以调用.toString()返回字符串
    (3)本身作为true类型存在
    (4)类似for in遍历时,不会遍历symbol属性
    可通过Object.getOwnPropertySymbols(对象)/Reflect.ownKeys(obj)获取symbol属性
 */
var sb1 = Symbol(4396);
// let sb2 = Symbol('骚逼')
// // sb2 = 22
// sb2 = Symbol('糯米佳佳骚嗨')
// console.log(sb1, sb2)
//symbol具有唯一性，description仅仅方便阅读
var sb3 = Symbol(4396);
// console.log(sb3 + 1)
// console.log([sb3])
console.log(sb1 === sb3);
// let obj = {
//     [sb3]: '明凯'
// }
// console.log(obj[sb3])
// const getClassName = Symbol()
//
// class Nig {
//     // [computedPropertyName] = 88; 无效！这是计算属性得是个回调函数！
//     [getClassName]() {
//         return 'Nig'
//     }
// }
//
// let nig = new Nig()
// console.log(nig[getClassName]())
//# sourceMappingURL=a.js.map