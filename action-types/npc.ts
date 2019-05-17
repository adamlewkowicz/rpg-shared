import * as types from '../consts';
import { Item } from '../objects';

export interface NpcDialogOpen {
  type: typeof types.NPC_DIALOG_REQUEST,
  meta: {
    io: boolean,
    npcId: number
  }
}

export interface NpcDialogClose {
  type: typeof types.NPC_DIALOG_CLOSE
}

export interface NpcDialogResponse {
  type: typeof types.$_NPC_DIALOG_RESPONSE
  payload: object
}

export type NpcDialogActions = NpcDialogOpen | NpcDialogClose | NpcDialogResponse;



/* SHOP */

export interface NpcShopRequest {
  type: typeof types.NPC_SHOP_REQUEST
  meta: { npcId: number }
}

export interface $NpcShopResponse {
  type: typeof types.$_NPC_SHOP_RESPONSE
  payload: {
    items: Item[]
  }
}

export interface NpcShopTrade {
  type: typeof types.NPC_SHOP_TRADE
  payload: {
    selling: number[]
    buying: number[]
  }
}

export interface $NpcShopTrade {
  type: typeof types.$_NPC_SHOP_TRADE
}

export type NpcShopActions = NpcShopTrade | NpcShopRequest | $NpcShopResponse ;