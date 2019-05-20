
export interface Item {
  id: number
  type: {
    id: number
    name: string
    img: string
  }
  lvl?: number
  price?: number
  damage?: number
  heal?: number
}

export interface Character {
  id: number
  name: string
  x: number
  y: number
  lvl?: number
}

export type Collisions = [Array<number>]