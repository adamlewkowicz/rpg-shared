
export const NPC_DIALOG_REQUEST = 'NPC_DIALOG_REQUEST';
export const NPC_DIALOG_CLOSE = 'NPC_DIALOG_CLOSE';
export const $_NPC_DIALOG_RESPONSE = '$_NPC_DIALOG_RESPONSE';

export const types = {
  NPC_DIALOG_REQUEST,
  $_NPC_DIALOG_RESPONSE
}

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


export type NpcActionTypes = NpcDialogOpen | NpcDialogClose ;