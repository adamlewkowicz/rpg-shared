import * as types from './consts';

export const serverTypes = Object
  .values(types)
  .filter(type => type.startsWith('$') || type.startsWith('@@'));

export type actionTypeServer = typeof serverTypes[number];