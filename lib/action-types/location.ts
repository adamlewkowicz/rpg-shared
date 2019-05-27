import * as types from '../consts';
import { Character, Item } from '../objects';

export interface $CharacterUpdate {
  type: typeof types.$_CHARACTER_UPDATE
  payload: Character
  meta: { charId: Character['id'] }
}

export interface $CharacterJoin {
  type: typeof types.$_CHARACTER_JOIN
  payload: Character
}

export interface $CharacterLeave {
  type: typeof types.$_CHARACTER_LEAVE
  meta: { charId: Character['id'] }
}

export interface $ItemDroppedAdd {
  type: typeof types.$_ITEM_DROPPED_ADD
  payload: Item
}

export interface $ItemDroppedRemove {
  type: typeof types.$_ITEM_DROPPED_REMOVE
  meta: { itemId: Item['id'] }
}