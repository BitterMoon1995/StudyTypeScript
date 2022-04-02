//《构造函数》
// class Greeter {
//     greeting: string
//     static standardGreeting = 'Yes,sir.Right away,sir'
//
//     greet() {
//         if (this.greeting) {
//             return '问候语：' + this.greeting
//         }else {
//             return Greeter.standardGreeting
//         }
//     }
// }

// let greeter: Greeter
// greeter = new Greeter()
// console.log(greeter.greet())

// 我们直接使用类。 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。
// 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，
// 也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker上使用 new，
// 创建 Greeter的实例。
// let greeterMaker: typeof Greeter = Greeter
// console.log(greeterMaker.standardGreeting)
// let greeter2: Greeter = new greeterMaker()
// greeter2.greeting = '欢迎来到三台宝格丽！'
// console.log(greeter2.greet())

//方法重写
// class PrinterClass {
//     doPrint():void {
//         console.log("父类的 doPrint() 方法。")
//     }
// }
//
// class StringPrinter extends PrinterClass {
//     doPrint():void {
//         console.log("子类的 doPrint()方法。")
//     }
// }
//
// let dress:StringPrinter = new StringPrinter()
// dress.doPrint()

//类与接口
// interface Loan {
//     interest: number
// }
//
// class HouseLoan implements Loan{
//     interest: number;
//     rebate: number;
//
//
//     constructor(interest: number, rebate: number) {
//         this.interest = interest;
//         this.rebate = rebate;
//     }
// }
//
// let loan = new HouseLoan(5000000,1)
// console.log(`小支承担房贷利息：${loan.interest}元，折扣：${loan.rebate}元`)
