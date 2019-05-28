import { Item, Mob, Npc, Location, Character, Collisions, Message, MessagePrivate, MessageGroup, MessageLocal, MessageGlobal } from "./objects";

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
  data: Location | null
  width: number
  height: number
  xRange: number
  yRange: number
  xSize?: number
  ySize?: number

  mobs: { [id: string]: Mob }
  npcs: { [id: string]: Npc }
  characters: { [id: string]: Character }
  droppedItems: { [id: string]: Item }

  collisions: Collisions
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