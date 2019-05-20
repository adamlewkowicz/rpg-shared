import { Item, Character, Collisions } from "./objects";

export interface NpcShopState {
  isLoading: boolean
  opened: boolean
  items: Item[]
  buying: number[]
  selling: number[]
}

export interface NpcDialogState {
  data: any
  opened: boolean
  isLoading: boolean
  step: number
}

export interface LocationState {
  data: any
  width: number
  height: number
  xRange: number
  yRange: number
  xSize?: number
  ySize?: number

  mobs: any
  npcs: any
  characters: { [s: string]: Character }

  droppedItems: { [s: string]: Item }

  collisions: Collisions | null
  staticCollisions: [],
  terrainCollisions: []
}