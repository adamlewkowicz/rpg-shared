
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
  img?: string
  lvl?: number
  status: 'IDLE' | 'FIGHTING' | 'TRADING' | 'ASLEEP'
}

export interface BaseMessage {
  id: number
  type: 'PRIVATE' | 'GROUP' | 'CLAN' | 'LOCAL' | 'GLOBAL'
  author: Character
}

export interface MessagePrivate extends BaseMessage {
  type: 'PRIVATE'
}
export interface MessageGroup extends BaseMessage {
  type: 'GROUP'
}
export interface MessageClan extends BaseMessage {
  type: 'CLAN'
}
export interface MessageLocal extends BaseMessage {
  type: 'LOCAL'
}
export interface MessageGlobal extends BaseMessage {
  type: 'GLOBAL'
}

export type Message = MessagePrivate | MessageGroup | MessageClan | MessageLocal | MessageGlobal;


export type FightAction = 'STEP_AHEAD' | 'BASIC_ATTACK' | 'USE_ABILITY';

export type Collisions = [Array<number>]