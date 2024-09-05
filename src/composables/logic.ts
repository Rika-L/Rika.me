import type {BlockState} from "@/views/code/4.minesweeper/type.ts";
import {Ref, ref} from "vue";

const directions = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
]

interface GameState {
    block: BlockState[][]
    mineGenerated: boolean
    gameState: 'play' | 'won' | 'lost'
}

export class GamePlay {
    state = ref() as Ref<GameState>

    get block() {
        return this.state.value.block
    }

    get blocks() {
        return this.state.value.block.flat()
    }


    constructor(
        public width: number,
        public height: number,
        public mines: number
    ) {
        this.reset()
    }

    reset(
        width = this.width,
        height = this.height,
        mines = this.mines
    ) {
        this.width = width
        this.height = height
        this.mines = mines
        this.state.value = {
            mineGenerated: false,
            gameState: 'play',
            block: Array.from({length: this.height}, (_, y) =>
                Array.from({length: this.width}, (_, x): BlockState => ({x, y, adjacentMines: 0, revealed: false})))
        }
    }

    random(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

    randomInt(min: number, max: number) {
        return Math.round(this.random(min, max))
    }


    generateMines(state: BlockState[][], initial: BlockState) {
        const placeRandom = () => {
            const x = this.randomInt(0, this.width - 1)
            const y = this.randomInt(0, this.height - 1)
            const block = state[y][x]
            if (Math.abs(initial.x - block.x) <= 1 && Math.abs(initial.y - block.y) <= 1)
                return false
            if (block.mine === true)
                return false
            block.mine = true
            return true
        }
        Array.from({length: this.mines}, () => null)
            .forEach(() => {
                let placed = false
                while (!placed)
                    placed = placeRandom()
            })
        // for (const row of state) {
        //     for (const block of row) {
        //         if (Math.abs(initial.x - block.x) <= 1)
        //             continue
        //         if (Math.abs(initial.y - block.y) <= 1)
        //             continue
        //         block.mine = Math.random() < 0.1
        //     }
        // }
        this.updateNumbers()
    }


    onClick(block: BlockState) {
        if (this.state.value.gameState !== 'play') return
        if (!this.state.value.mineGenerated) {
            this.generateMines(this.block, block)
            this.state.value.mineGenerated = true
        }
        block.revealed = true
        if (block.mine) {
            this.state.value.gameState = 'lost'
            this.showAllMines()
            return
        }
        this.expendZero(block)
    }

    onDblClick(block: BlockState) {
        if (this.state.value.gameState !== 'play') return
        if (!block.revealed) return
        this.getSiblings(block).forEach((b) => {
            if (b.flagged) return
            this.onClick(b)
        })
    }

    onRightClick(block: BlockState) {
        if (block.revealed)
            return
        if (block.flagged) {
            block.flagged = false
        } else {
            block.flagged = true
        }
    }


    showAllMines() {
        this.block.flat().forEach(i => {
            if (i.mine) i.revealed = true
        })
    }


    getSiblings(block: BlockState) {
        return directions.map(([dx, dy]) => {
            const x2 = block.x + dx
            const y2 = block.y + dy
            if (x2 < 0 || x2 >= this.width || y2 < 0 || y2 >= this.height)
                return undefined
            return this.block[y2][x2]
        }).filter(Boolean) as BlockState[]
    }

    updateNumbers() {
        this.block.forEach((row) => {
            row.forEach((block) => {
                if (block.mine)
                    return
                this.getSiblings(block).forEach((b) => {
                    if (b.mine)
                        block.adjacentMines++
                })
            })
        })
    }


    expendZero(block: BlockState) {
        if (block.adjacentMines)
            return
        this.getSiblings(block).forEach((s) => {
            if (!s.revealed) {
                s.revealed = true
                this.expendZero(s)
            }
        })
    }


    checkGameState() {
        if (!this.state.value.mineGenerated)
            return
        const blocks = this.block.flat()

        if (blocks.every(block => block.revealed || block.flagged)) {
            if (blocks.some(block => block.flagged && !block.mine)) {
                this.state.value.gameState = 'lost'
                this.showAllMines()
            } else {
                this.state.value.gameState = 'won'
            }
        }
    }
}
