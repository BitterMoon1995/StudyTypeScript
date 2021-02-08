// //1.布尔值
// let isDone:boolean = false
//
// //2.数字
// let myNum:number = 1989
// let hexLiteral: number = 0xf00d;//十六进制
// let binaryLiteral: number = 0b1010;//二进制
// let octalLiteral: number = 0o744;//八进制
// /*
// 正确的进制前缀是：
// 0x 十六进制
// 0D(Decimal) 十进制
// 0B（Binary） 二进制
//  */
// console.log(hexLiteral + binaryLiteral + octalLiteral)
//
// //3.字符串
// let myName:string = 'nigger'
// //模板字符串 有反引号和刀乐儿大括号即可
// const templateStr = `my name is ${myName}`
// console.log(templateStr)
//
// //4.数组 list
// let myList: number[] = [1,2,3]//在元素类型后面接上 []，表示由此类型元素组成的一个数组
// let myList2: Array<number> = [1,2,3]//使用数组泛型，Array<元素类型>
//
// //5.元组 tuple
// let x: [string,number]
// x = ['hello sb',10]
// // x = [10,10]
// console.log(x[0].substr(5))
// x[1] = Number('male')
//
// //6.枚举 enum
// enum Color{red,green,blue}
// let c:Color = Color.green
// console.log(c)
//
// enum Girl{keqing = 10,ningguang,ganyu}
// let g0:Girl = Girl.ganyu
// console.log(g)
//
// enum Nigger{Jordon = 21,Kobe = 12,James = 30}
// let n:Nigger = Nigger.James
// console.log(n)
//
// let niggerName:string = Nigger[12]
// console.log(niggerName)
//
// //7.Any
// let notSure:any
// notSure = 1
// console.log(notSure)
// notSure = 'xixi'
// console.log(notSure)
//
// let notSure2:any = 2.1593
// console.log(notSure2.toFixed(1))
// // console.log(notSure2.ifItExists())
// // console.log(notSure2.substr(2))
//
// let prettySure:Object = 2.59465
// // console.log(prettySure.toFixed(2))
//
// let notSureList:any[] = [8848,'孙笑川',false]
// console.log(notSureList[1])
//
// //8.Void
// let useless:void = undefined
// let useless2:null = null
// // let useless3:void = 1
// console.log(useless)
// console.log(useless2)
//
// //9.Null $ Undefined
// let theNull:null = null
// let theUndefined:undefined = undefined
//
// //10.Never
// function error(message:string):never{
//     throw new Error(message)
// }
// function infiniteLoop():never{
//     while (true){
//
//     }
// }
//
// //11.Object
// declare function create(o: object | null): void;
//
// create({ prop: 0 }); // OK
// create(null); // OK
//
// //类型断言
// let someValue: any = "black nigger slave";
//
// let strLength:number = someValue.length
// console.log(strLength)
// let assertStrLength: number = (<string>someValue).length;
// console.log(assertStrLength)
/* 类型断言 */
// let someValue: any = 'kkjj';
//
// let strLength: number = (<string>someValue).length;
// console.log(strLength)
//
// let strLength2: number = (someValue as string).length
// console.log(strLength2)
//
// /* 有亿点像强制转换
// *  类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// * 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。*/
// let nigger = someValue as string
// console.log(typeof nigger)
//# sourceMappingURL=nigger.js.map