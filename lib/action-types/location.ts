import * as types from '../consts';
import { Character, Item, Location } from '../objects';

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

export interface ItemDrop {
  type: typeof types.ITEM_DROP
  meta: { itemId: Item['id'] }
}

export interface ItemPickup {
  type: typeof types.ITEM_PICKUP
  meta: { itemId: Item['id'] }
}

export interface LocationChangeRequest {
  type: typeof types.LOCATION_CHANGE_REQUEST
  meta: { locationId: Location['id'] }
}

export interface $LocationChangeResponse {
  type: typeof types.$_LOCATION_CHANGE_RESPONSE
  payload: {
    location: Location
    characters: Character[]
  }
}