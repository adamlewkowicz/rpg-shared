import * as types from '../consts'
import { Character } from '../objects';
import { Action } from '../main';

export interface CharacterUpdate {
  type: typeof types.CHARACTER_UPDATE
  payload: Character
}

export interface $CharacterUpdate extends Action {
  type: typeof types.$_CHARACTER_UPDATE
  payload: Character
  meta: {
    charId: number
  }
}