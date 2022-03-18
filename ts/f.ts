//  泛型函数
function echo<T>(arg: T): T {
    return arg
}

let myIdentity: <T>(arg: T) => T = echo
let sima: <U>(arg: U) => U = echo
//使用带有【调用签名】的【对象字面量】来定义泛型函数
let nima: {
    (s: string): number
} = function (s) {
    return s.length
}
console.log(nima('哈哈死妈'))

let sidiema: {
    <T>(arg: T): T
} = echo
console.log(sidiema(4398))

//  泛型接口
//把{<T>(arg: T): T}这个对象字面量抽成接口，本质上是一个方法签名
interface GenericFuncSignature {
    <T>(arg: T): T
}

let sidiema2: GenericFuncSignature = echo

interface GenericFuncSignature2<T> {
    (arg:T):T
}

let sidiema3:GenericFuncSignature2<boolean> = echo
sidiema3(false)
