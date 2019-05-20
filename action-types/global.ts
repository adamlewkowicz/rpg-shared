import * as types from '../consts';
import { Item, Collisions, Character } from '../objects';

export interface $LoadGame {
  type: typeof types.$_LOAD_GAME
  payload: {
    collisions: [number[]]
    inventory: Item[]
    characters: Character[]
  }
}