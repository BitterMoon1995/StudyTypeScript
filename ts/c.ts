// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number {
//     return x + y;
// };

//可选参数和默认参数
//可选参数必须跟在必须参数后面。

// function buildName(firstName:string = '黑色尼尼',lastName:string,middleName?:string,age:number=10) {
//     if (middleName){
//         console.log('fuck off')
//     }
//     console.log(age)
//     return firstName + '·' + lastName
// }
// console.log(buildName('black','nigger','gg'))
// console.log(buildName(undefined,'gg'))

//剩余参数
// function buildName2(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join("");
// }
//
// let employeeName = buildName2("Joseph","Samuel","Lucas","MacKinzie");
// console.log(employeeName)

//函数重载
//是为同一个函数提供多个函数类型定义来进行函数重载。
// 编译器会根据这个列表去处理函数的调用。 下面我们来重载 pickCard函数。
function play(gameName: string): any
function play(age: number): any
//注意，function play(x: any)并不是重载列表的一部分，因此这里只有两个重载：
// 一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
function play(x: any) {
    if (typeof x == "string") {
        console.log('玩' + x + '游戏')
    } else if (typeof x == "number") {
        console.log(x + '岁的人了玩勾八游戏')
    }
}

play('原神')
play(26)

// function disp(arg: string, name: string) {
//     console.log(arg)
// }
//
// function disp(arg: number) {
//     console.log(arg)
// }
