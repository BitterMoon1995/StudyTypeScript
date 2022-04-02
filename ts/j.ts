// 《基本概念》
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

// 《一 类装饰器》

// 类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

// function sealed(constructor: Function) {
//     // console.log('哈哈')
//     Object.seal(constructor)
//     Object.seal(constructor.prototype)
// }

// 经验证只能封Greeter（这个构造函数）不能封greeter（Greeter的new调用实例）。
// 也就是只能封印对Greeter类的静态成员的变更
// @sealed
@reloadConstructor
class Greeter {
    greeting: string
    salary: number

    constructor(greeting: string, salary: number) {
        this.greeting = greeting;
        this.salary = salary;
    }

    greet() {
        return '问候语：' + this.greeting
    }
}

//Cannot define property name, object is not extensible
// Object.defineProperties(Greeter, {
//     'name': {
//         value: '黑尼哥门童',
//         writable: true
//     }
// })
// console.log(Object.isSealed(Greeter))

// console.log(Greeter.name)

// 也可以直接重载一个类的构造函数，

// 泛用构造函数类类型
interface GenericCst {
    new(...args: any[]): any
}

// 语法点1：泛型约束：只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。

// 语法点2：在泛型里使用类类型：使用泛型创建工厂函数，并引用构造函数的类类型作为参数类型

// TS1238: Unable to resolve signature of class decorator when called as an expression.
// Types of construct signatures are incompatible. Type 'new (...args: any[]) => (Anonymous class)'
// is not assignable to type 'new (sentence: string) => Greeter'. Property 'greet' is missing
// in type '(Anonymous class)' but required in type 'Greeter'.

// function reloadConstructor(cst: GenericCst) //不行，因为实参是Greeter，与CstFunc不兼容
// 暴论：只有重载构造方法的类装饰器有存在的意义。除非遇到要动类静态成员的情景
// ★★★
function reloadConstructor<T extends GenericCst>(cst: T) {
    return class extends cst {
        newProperty1 = '黑尼'
        newProperty2 = '玩网畜'
        // greeting = '嘻嘻'
    }
}

let greeter = new Greeter('欢迎来到王子大酒店', 2500)
// console.log(greeter)
// console.log(Object.keys(greeter))

// 《二. 方法装饰器》
// 周神释经：这个及以后的装饰器，都只对类静态成员生效了。静态属性还不准动。淋意义。
class Dress {
    static dressType: string = '公主裙'

    // 得是静态方法，不然这个注解不会生效
    @isEnumerable(true)
    static wear() {
        console.log('哟，还没穿呢')
    }
}

function isEnumerable(enumerable: boolean) {
    return function (target: any, funcName: string, desc: PropertyDescriptor) {
        desc.enumerable = enumerable
    }
}

console.log(Object.keys(Dress))
console.log(Dress.dressType)



// 《三. 算了不弄了，屁用没得。类装饰器有点用》
// 大概是js基于原型的特殊性，不动构造函数就等于不动实例，类装饰器能拦截甚至重载构造函数，
// 进而影响new出来的实例，其他的有球用啊，只能动动静态成员了。
