function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, black: false };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 20 });
console.log(mySquare);
var x1 = { x: 1, y: 2 };
console.log(x1);
// x1.x = 5
var numArr = [7, 8, 9];
var readonlyArr = numArr;
console.log(readonlyArr);
// readonlyArr[2] = 8
var castToWritable = readonlyArr;
castToWritable[2] = 898;
console.log(castToWritable);
function createSquare0(config) {
    return 'nigger';
}
var mySquare0 = createSquare0(({ color: "red", nigger: 'jack' }));
var mySearch = function (source, subString) {
    return source.search(subString);
};
console.log(mySearch('black nigger', 'nigger'));
var mySearch2 = function (a, b) {
    return a.search(b);
};
// mySearch2(5,6)
var sima = /** @class */ (function () {
    function sima() {
    }
    return sima;
}());
//# sourceMappingURL=Interface.js.map