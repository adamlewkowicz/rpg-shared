import * as types from './consts';

const typesArray = Object.values(types);

export type ActionType = typeof typesArray[number];