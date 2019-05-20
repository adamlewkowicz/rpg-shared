import { Item } from "./objects";

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