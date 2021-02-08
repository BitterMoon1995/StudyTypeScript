/* 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。*/
interface LabelledValue {
    label?: string;
    black?: boolean
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10,black: false};
printLabel(myObj);

/* 可选属性：给函数传入的参数对象中只有部分属性赋值 */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { area: number; color: string }{
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black",width: 20});
console.log(mySquare)

/* 只读属性 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let x1:Point = {x:1,y:2}
console.log(x1)
// x1.x = 5

let numArr: number[] = [7,8,9]
let readonlyArr: ReadonlyArray<number> = numArr
console.log(readonlyArr)
// readonlyArr[2] = 8

let castToWritable = readonlyArr as Array<number>
castToWritable[2] = 898
console.log(castToWritable)

/*
对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
但是变量不会
 */
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare0(config: SquareConfig): string {
    return 'nigger'
}

let mySquare0 = createSquare0(({ color: "red",nigger: 'jack'}) as SquareConfig) ;

/*函数类型接口*/
interface Search{
    (source:string,subString:string):number
}
let mySearch:Search = function (source, subString) {
    return source.search(subString)
}
console.log(mySearch('black nigger','nigger'))
let mySearch2:Search = function (a,b) {
    return a.search(b)
}
// mySearch2(5,6)

class sima implements Search{

}
