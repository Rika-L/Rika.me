// 随机数生成函数
function random(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min) + min)
    if (num === 0)
        num = 1
    return num
}

export default random
