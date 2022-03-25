// 《基本概念》
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var Greeter = /** @class */ (function () {
    function Greeter(sentence) {
        this.greeting = sentence;
    }
    Greeter.prototype.greet = function () {
        return '问候语：' + this.greeting;
    };
    Greeter = __decorate([
        reloadConstructor
    ], Greeter);
    return Greeter;
}());
// 语法点1：这里的T是接口，T extends CstFunc是接口继承接口
// 语法点2：泛型约束：只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
// 语法点3：在泛型里使用类类型：使用泛型创建工厂函数，并引用构造函数的类类型作为参数类型
// TS1238: Unable to resolve signature of class decorator when called as an expression.
// Types of construct signatures are incompatible. Type 'new (...args: any[]) => (Anonymous class)'
// is not assignable to type 'new (sentence: string) => Greeter'. Property 'greet' is missing
// in type '(Anonymous class)' but required in type 'Greeter'.
// function reloadConstructor(cst: GenericCst) //不行，因为实参是Greeter，与CstFunc不兼容
function reloadConstructor(cst) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty1 = '黑尼';
            _this.newProperty2 = '玩网畜';
            _this.greeting = '嘻嘻';
            return _this;
        }
        return class_1;
    }(cst));
}
var greeter = new Greeter('欢迎来到王子大酒店');
console.log(greeter);
//# sourceMappingURL=j.js.map