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

const blog: blogType[] = [
  {
    title: 'VueCustomDirectives',
    summary: 'Vue的自定义指令相关笔记',
    time: '2024/6/8',
    id: 1,
  },
]

export default blog
