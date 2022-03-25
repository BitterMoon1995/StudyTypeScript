//  七. 索引类型（Index types） (personKeys 、 key of)

interface Person {
    name: string;
    age: number;
    nickname: string

    playGame(game: string): any
}

let ganyu: Person = {
    name: '甘雨',
    age: 2200,
    nickname: '蓝毛椰羊',

    playGame(game: string): any {
        console.log(`小椰羊玩${game}`)
    }
};

//预习（复习）
// const a = [1,3,5,7,9]
// //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// // map() 方法按照原始数组元素顺序依次处理元素。
// console.log(a.map(e => ++e))
// //有两种方式可以访问对象属性:
// // 你可以使用 .property 或 ["property"]。
// console.log(ganyu['name'],ganyu["nickname"],ganyu["age"])
// function pluck(o, names) {
//     return names.map(n => o[n]);
// }
//
// let r = pluck(ganyu, ['age', 'name', 'nickname'])
// console.log(r)
// //这样写就丧失了 ts 的优势：
// // 无法确定返回值类型
// // 无法对 key 进行约束，可能会犯拼写的错误
// let r2 = pluck(ganyu, ['aga'])
// console.log(r2)

//操作符keyof T， 索引类型查询操作符。 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合。
//提取类或接口的所有成员名，并作为字符串字面量联合类型
// type personKeys = keyof Person
//
// function showPartialPerson(memberName: personKeys, person: Person, gameName: string = '原神') {
//     switch (memberName) {
//         case "name":
//             console.log(`名叫：${person.name}`);
//             break
//         case "age":
//             console.log(`年龄为：${person.age}`);
//             break
//         case "nickname":
//             console.log(`昵称叫：${person.nickname}`)
//             break
//         case "playGame":
//             person.playGame(gameName)
//     }
// }
//
// showPartialPerson('name',ganyu)
// showPartialPerson("playGame", ganyu)

//操作符T[K]， 索引访问操作符。
// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name]
// }
//
// let property1: string = getProperty(ganyu, "nickname")
// let property2: number = getProperty(ganyu, "age")
// let property3: Person[keyof Person] = getProperty(ganyu, "name")
// let property4: Person['name'] = getProperty(ganyu, "age")

// pluck(o, names)的typescript写法：
//1.类型参数：考虑类型参数T、K，且泛型约束K为T的成员名字符串字面量联合
//2.参数为T类型的单例对象与K类型的数组
//3.返回值为T.K或T[K]数组，即T类型的属性名为K的属性值组成的数组
// function tsPluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//     return names.map(e => o[e])
// }
//
// let valueList:Person[keyof Person][] = tsPluck(ganyu,["name","nickname"])
// console.log(valueList)
// let valueList2:any[] = tsPluck(ganyu,["age"])
// let err:Person[keyof Person][] = tsPluck(ganyu,['nig'])

//索引类型和字符串索引签名
// keyof和 T[K]与字符串索引签名进行交互。 如果你有一个带有字符串索引签名的类型，
// 那么 keyof T会是 string。 并且 T[string]为索引签名的类型
// interface StrSigMap<T> {
//     [nigger: string]: T
// }
// let ageMap: StrSigMap<number> = {}
// ageMap["Jack Nigger"] = 18
// ageMap['Mike Nigger'] = 20
//
// type theType =  keyof StrSigMap<number> //string类型
// let s : theType = 'nig'
// let num : StrSigMap<number>['test'] = 10 //number类型

//  八.映射类型（使用in keyof从已有类型中按需生成新的类型）
type Keys = 'height' | 'weight'
type Girl = {
    [Property in Keys]: number
}
//它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：
//
// 类型变量 Property，它会依次绑定到每个属性。
// 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
// 属性的结果类型。

// //等同于：
// type Bitch = {
//     height: number
//     weight: number
// }
// let girl: Girl = {
//     height: 1.68, weight: 98
// }
// console.log(girl)

interface Game {
    gameScreen: string
    gameplay: string
    plot: string
}

let bladeSoul: Game = {
    gameScreen: "8分", gameplay: "9.5分", plot: "前期9分"
}

//需求：创建三个新类型，属性与Game相同，但分别全部变为可选属性/只读属性/可空属性
//先演示只读属性
// type roGame = {
//     readonly [P in keyof Game]: Game[P]
// }
// let chuanqi: roGame = {
//     gameScreen: "电影画质", gameplay: "神作", plot: "史诗剧情"
// }
// chuanqi["gameplay"] = '雀食牛逼'

// //带泛型的通用写法
// type ReadonlyType<T> = {
//     readonly [P in keyof T]: T[P]
// }
// let FarCry5: ReadonlyType<Game> = {
//     gameScreen: "约瑟夫死妈", gameplay: "约瑟夫死妈", plot: "约瑟夫死妈"
// }
//
type Optional<T> = {
    [P in keyof T]?: T[P]
}
//
// type NullAble<T> = {
//     [P in keyof T]: T[P] | null
// }
//
let genshin: Optional<Game> = {
    gameScreen: '感觉画质不如冥日花粥'
}
// console.log(genshin)
//
// let ark: NullAble<Game> = {
//     gameScreen: null,
//     gameplay: '毕竟年一游',
//     plot: '这片大地'
// }
// console.log(ark)

// type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
// }
// type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>;
// }
// function proxify<T>(o: T): Proxify<T> {
//     // ... wrap proxies ...
//     ???
// }
// let proxyProps = proxify(bladeSoul);

//已包含在标准库中的映射类型：Readonly<T> Partial<T> Pick Record
type azhe = 'gameplay' | 'gameScreen'
//Pick:从指定的类型中选取指定的属性，作为新的类型
// let zhanshuang: Pick<Game, azhe> = {
//     gameplay: "7分",
//     gameScreen: '5分'
// }
// console.log(zhanshuang)

//Record:构造新的类型，属性名自定义，属性值全部为指定的类型
type properties = 'bestACT' | 'bestFPS'
type tgaRewards =  Record<properties, Game>

let farcryNewDown: Game = {
    gameScreen: "极大提升", gameplay: "较大提升", plot: "白皮刻画不来人物"
}

let tga: tgaRewards = {
    bestACT: bladeSoul, bestFPS: farcryNewDown
}

console.log(tga)

type ssMapper = Record<string, string>

// let o: ssMapper = {
//     'name': 'Jack',
//     'race': 'nig',
// }

//预定义的有条件类型
// type setA = string | number
// type setB = string | boolean
// type setC = number[] | null | undefined
//
// type excludeT = Exclude<setA, setB>
// let a: excludeT = 4396
// type extractT = Extract<setA, setB>
// let b: extractT = '寄寄'
// type nonnullable = NonNullable<setC>
// let c: nonnullable = [8, 8, 4, 8]
//
// interface killNig {
//     (): string
// }
//
// let killNigFunc: killNig = function () {
//     return 'i kill 9 nigroes'
// }
//
// type returnT = ReturnType<killNig>
// let d: returnT = '屠尼狂魔'
//
// class Skirt {
//     shape: string
//     len: number
//     color: string
//
//     constructor(shape: string, len: number, color: string) {
//         this.shape = shape;
//         this.len = len;
//         this.color = color;
//     }
// }
//
// type instanceT = InstanceType<typeof Skirt>
// let saoqun01: instanceT = {
//     color: "灰色", len: 35, shape: "百褶骚逼逼"
// }
//
// type instanceT2 = InstanceType<any>
// type instanceT3 = InstanceType<never>
// type instanceT4 = InstanceType<null>
// type instanceT2 = InstanceType<string>

//死爹妈
interface Mapper<R> {
    <Key extends string>(map: Key[]): { [K in Key]: R };
    <Map extends Record<string, string>>(map: Map): { [K in keyof Map]: R };
}



