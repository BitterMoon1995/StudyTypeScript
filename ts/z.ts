//《一. unique symbol》

/*
unique symbols是 symbols的子类型，仅可通过调用 Symbol()或 Symbol.for()或由明确的类型注释生成。
它们仅出现在常量声明和只读的静态属性上，并且为了引用一个存在的 unique symbols类型，你必须使用 typeof操作符。
每个对 unique symbols的引用都意味着一个完全唯一的声明身份。
因为每个 unique symbols都有个完全独立的身份，因此两个 unique symbols类型之前不能赋值和比较。

周神释经：疑似为了实现某种“全局的、唯一的属性键名字面量”的功能，方便写键名的时候少写个双引号，也方便代码提示
 */

// const SB : unique symbol = Symbol()
//
// let price: typeof SB
// let color: typeof SB
// let dressName: typeof SB
//
// let dress = {
//     price: 298,
//     color: '浅绿',
//     dressName: '',
//     [SB]: 1
// }
//
// console.log(dress)
// console.log(typeof dress.price,typeof dress.dressName)
// console.log(Object.getOwnPropertySymbols(dress))
// console.log(Object.getOwnPropertyNames(dress))
