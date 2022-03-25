// 《一 泛型之Hello World》
// function echo(arg: any): any {
//     return arg
// }

//这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
// function echo2<T>(arg: T): T {
//     return arg
// }

// function echo3<T>(arg: T): T {
//     console.log(arg.length)
//     return arg
// }

// 《二 使用泛型变量》

// 理解：泛型函数接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。
// 如果我们传入数字数组，将返回一个数字数组，因为此时 T的的类型为number。
// 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。
// function echo4<T>(arg: T[]): T[] {
//     console.log(arg.length)
//     return arg.slice(0, 2)
// }
//
// function echo5<T>(arg: Array<T>): Array<T> {
//     return arg.slice(0, 2)
// }

// 《三 泛型类型》
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样。
// let myIdentity: <T>(arg: T) => T
//
// function identity<T>(arg: T): T {
//     return arg;
// }

// myIdentity = identity

// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// let myIdentity2: <X>(arg: X) => X
// myIdentity2 = identity

// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
// （对象字面量接口作类型变量）
// let myIdentity3: {
//     <Y>(arg: Y): Y,
//     (arg2: number): string
// }
// myIdentity3 = identity

// 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口
// interface GenericIdentity {
//     <Y>(arg: Y): Y
// }
//
// let myIdentity4: GenericIdentity = identity

//一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型，
// （比如： Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。
// interface GenericIdentity2<T> {
//     (arg: T): T
// }

//注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。
// 当我们使用 GenericIdentityFn2的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。
// 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。
// let myIdentity5: GenericIdentity2<number> = identity

// 《四 泛型类》
// class GenericAdder<T> {
//     // 函数声明作类实例成员
//     add: (v1: T, v2: T) => T
// }
//
// let adder1 = new GenericAdder<number>()
// adder1.add = function (a, b) {
//     return a + b + 426
// }
// GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。
// 也可以使用字符串或其它更复杂的类型。
// let adder2 = new GenericAdder<string>()
// adder2.add = function (a, b) {
//     return a + b + 426
// }

// 我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
// class Class1<T> {
//     property1: T
//     // static property2: T //静态成员不能引用类的类型参数。
// }

// 《泛型约束》
// 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。
// 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
// 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。
// 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
// 为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束

// interface LengthWise {
//     length: number
// }
//
// function calLength<T extends LengthWise>(arg: T) {
//     console.log(arg.length)
// }
//
// calLength('尼哥丝马')
// calLength(2) //类型“number”的参数不能赋值给类型“LengthWise”的参数。

// 在泛型约束中使用类型参数：你可以声明一个类型参数，且它被另一个类型参数所约束。
// 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，
// 因此我们需要在这两个类型之间使用约束。

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }
//
// let person = {
//     name: 'Jarid',
//     age: 35
// };
// key 作为字符串字面量类型调用。
// console.log(getProperty({
//     name: 'Jarid',
//     age: 35
// }, "name"))

//在泛型里使用类类型：在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。
class Nigger {
    name: string
    static race: string = '黑鬼'

    constructor(name: string) {
        this.name = name;
    }
}

function niggerFactory<T extends {
    new(name: any): Nigger
}>(constructor: T, name: any) {
    return new constructor(name)
}

console.log(niggerFactory(Nigger, '美国杰克'))


// let arr: any[] = [1, 'b', true]
//
// function f(arg: any) {
//     console.log(arg)
// }
// f(arr)
