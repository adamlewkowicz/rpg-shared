
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