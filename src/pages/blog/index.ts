/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */

export interface blogType {
    title: string
    summary: string
    time: string
    id: number
}

const blog: blogType = [
    {
        title: '好想睡觉啊',
        summary: '这是好想睡睡觉的摘要',
        time: '2024/8/7',
        id: 1,
    }
]

export default blog
