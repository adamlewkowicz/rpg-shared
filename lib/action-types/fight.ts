import * as types from '../consts'
import { FightAction } from '../objects';

export interface FightStart {
  type: typeof types.FIGHT_START
  payload: {
    targetType: 'MOB' | 'CHARACTER'
    targetId: number
  }
}

export interface $FightActionResult {
  type: typeof types.$_FIGHT_ACTION_RESULT
  payload: FightAction
}