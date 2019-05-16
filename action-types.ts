// import { Item } from './objects';
import {
  NPC_DIALOG_REQUEST, NPC_DIALOG_CLOSE, $_NPC_DIALOG_RESPONSE,
} from './consts';
import * as types from './consts';


export interface NpcDialogOpen {
  type: typeof NPC_DIALOG_REQUEST,
  meta: {
    io: boolean,
    npcId: number
  }
}

export interface NpcDialogClose {
  type: typeof NPC_DIALOG_CLOSE
}

export interface NpcDialogResponse {
  type: typeof $_NPC_DIALOG_RESPONSE
  payload: object
}

export interface NpcShopTrade {
  type: typeof types.NPC_SHOP_TRADE
  payload: {
    buying: number[]
    selling: number[]
  }
}

export type NpcActionTypes = NpcDialogOpen | NpcDialogClose | NpcShopTrade;