// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。
// 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，
// 因为函数直接赋值给了 SearchFunc类型变量。
var searchFunc;
searchFunc = function (s1, s2) {
    return s1.search(s2);
};
var AddClass = /** @class */ (function () {
    function AddClass() {
    }
    AddClass.prototype.minus = function (a, b) {
        return a - b;
    };
    AddClass.prototype.add = function (a, b) {
        return a + b;
    };
    return AddClass;
}());
var instAddClass = new AddClass();
console.log(instAddClass.add(1, 3), instAddClass.minus(2, 6));
// 变态点2：在检查类对接口的实现时，又不检查类的静态成员
// 导致结果1：类无法实现定义构造函数签名的接口
var Gamer = /** @class */ (function () {
    function Gamer(age, favGame) {
        this.age = age;
        this.favGame = favGame;
    }
    return Gamer;
}());
// 导致结果2：但是可以作为函数参数进行检查，这个参数可以是普通参数也可以是类型参数。
// 写法1：作类型参数对其进行泛型约束
function createGamer(gamerCst, age, favGame) {
    return new gamerCst(age, favGame);
}
function playGame(gamer) {
    console.log('游玩' + gamer.favGame);
}
playGame(createGamer(Gamer, 1, 'DNF'));
//# sourceMappingURL=e.js.map