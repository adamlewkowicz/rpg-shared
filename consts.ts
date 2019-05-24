
/* SYSTEM */
export const SYSTEM_ERROR = '@@_SYSTEM_ERROR';

/* GAME */
export const $_LOAD_GAME = '$_LOAD_GAME';
export const LOAD_LOCATION = 'LOAD_LOCATION';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const CHARACTER_UPDATE = 'CHARACTER_UPDATE';
export const CHARACTER_LEAVE = 'CHARACTER_LEAVE';
export const CHARACTER_JOIN = 'CHARACTER_JOIN';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const REQUEST_LOCATION_CHANGE = 'REQUEST_LOCATION_CHANGE';
export const MOUSE_POSITION_UPDATE = 'MOUSE_POSITION_UPDATE';


/* LOCATION */
export const $_CHARACTER_UPDATE = '$_CHARACTER_UPDATE';
export const $_CHARACTER_JOIN = '$_CHARACTER_JOIN';
export const $_CHARACTER_LEAVE = '$_CHARACTER_LEAVE';


/* NPC */
export const NPC_DIALOG_REQUEST = 'NPC_DIALOG_REQUEST';
export const NPC_DIALOG_CLOSE = 'NPC_DIALOG_CLOSE';
export const $_NPC_DIALOG_RESPONSE = '$_NPC_DIALOG_RESPONSE';

export const NPC_SHOP_REQUEST = 'NPC_SHOP_REQUEST';
export const $_NPC_SHOP_RESPONSE = '$_NPC_SHOP_RESPONSE';

export const NPC_SHOP_TRADE = 'NPC_SHOP_TRADE';
export const $_NPC_SHOP_TRADE = '$_NPC_SHOP_TRADE';


/* CHAT */
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const $_MESSAGE_RECEIVE = '$_MESSAGE_RECEIVE';
/** Updates temporary message id to created on server. */
export const $_MESSAGE_ACKNOWLEDGE = '$_MESSAGE_ACKNOWLEDGE';


/* INVENTORY */
export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_REMOVE = 'ITEM_REMOVE';

export const ITEM_PICKUP = 'ITEM_PICKUP';
export const ITEM_DROP = 'ITEM_DROP';

export const $_ITEM_DROPPED_ADD = '$_ITEM_DROPPED_ADD';
export const $_ITEM_DROPPED_REMOVE = '$_ITEM_DROPPED_REMOVE';


/* BATTLE */
export const FIGHT_START = 'FIGHT_START';
export const FIGHT_ACTION = 'FIGHT_ACTION';

export const $_FIGHT_ACTION_RESULT = '$_FIGHT_ACTION_RESULT';
export const $_FIGHT_FINISH = '$_FIGHT_FINISH';