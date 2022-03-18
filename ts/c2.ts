//1.数组
//声明与初始化
// let sites: string[]
// sites = ["Google", "Runoob", "Taobao"]
// console.log(sites.every((v, i, arr) => {
//     return v.length
// }))
// let nigs: string[] = ['Jack','Mike']
//
// let nums : number[] = new Array(4)
//
// let saobs : string[] = new Array('青鸢','阿呆','糯米佳佳')

//解构
// let nums : number[] = [1,3,9]
// let [x, y] = nums
// console.log(x, y)

//常用函数
let nums: number[] = [4, 3, 9, 6, 2000, 8]
// const v = nums.shift();
// console.log("Shifted value is : " + v);  // 4

let saobs: string[] = ['青鸢', '阿呆', '糯米佳佳', '小野w', '凛子同学', '凉子同学']
// console.log(saobs.slice(2,4))

// let res = saobs.some((v, i, a) => {
//     return v.length > 5
// })
// console.log(res)

// console.log(saobs.unshift('肖珍珠'))
// console.log(saobs)

// let res: any[] = nums.map((v, i, a) => {
//     return ++v
// })
// let res: any[] = nums.map(Math.sqrt)
// console.log(res)

// console.log(nums.concat(443))

// console.log(nums.lastIndexOf(4))

//2.set

// let set : Set<any> = new Set();
// set.add(4396)
// set.add(2800)
// set.add('糯米佳佳')
// set.add('糯米佳佳')
// set.add('杨荔茗')
// set.add(undefined)
// set.add(undefined)
// set.add(NaN)
// set.add(NaN)
// console.log(set)

//与array的转换
// let arr : any[] = [...set]
// let set2 = new Set(['糯米佳佳','糯米佳佳','糯米佳佳',])
// console.log(set2)
// // @ts-ignore
// let arr : any[] = [...set2]
// // @ts-ignore
// let set3 =new Set('糯米佳佳骚逼')
// console.log(arr)
// console.log(set3)
//
// //3.tuple
// let tup = ['nigger',10]

