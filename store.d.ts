import { Item, Character, Collisions, Message, MessagePrivate, MessageGroup, MessageLocal, MessageGlobal } from "./objects";

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

export interface CharacterState {
  data: Character | null,
	inventory: { [id: string]: Item },
	inventorySize: number
}

export interface ChatState {
  private: { [charId: string]: MessagePrivate[] }
  group: { [groupId: string]: MessageGroup[] }
  local: MessageLocal[]
  global: MessageGlobal[]
}

export interface GameState {
  status: 'IDLE' | 'LOADING' | 'CHANGING_LOCATION',
  width: number,
  height: number,
  charWidth: number,
  charHeight: number,
  mouseX: number,
  mouseY: number
}