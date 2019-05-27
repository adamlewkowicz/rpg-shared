import * as types from '../consts';
import { Item, Location, Collisions, Character, Mob, Npc } from '../objects';

export interface $LoadGame {
  type: typeof types.$_LOAD_GAME
  payload: {
    collisions: [number[]]
    inventory: Item[]
    characters: Character[]
    character: Character
    mobs: Mob[]
    npcs: Npc[]
    location: Location
    inventorySize: number
  }
}