import * as types from './consts';
import * as actionTypes from './action-types/index';

const typesArray = Object.values(types);

export type ActionType = typeof typesArray[number];