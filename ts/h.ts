namespace spaceX {
    //不暴露外面就访问不到
    let me: string = '骚美薇儿'
    export let salary: number = 2500

    export let dress: string = '梦幻Lolita纱裙'

    export class Me {
        name: string
        dress: string
    }
}

let salary: number = 7000

console.log(spaceX.dress)
console.log(salary,spaceX.salary)

//命名空间可以嵌套
namespace Cloakroom {
    export namespace Closet {
        export let lolitaDress:string = '纯白骚花嫁'
    }
}

console.log(Cloakroom.Closet.lolitaDress)

//单文件命名空间、多文件命名空间死妈了，不弄
