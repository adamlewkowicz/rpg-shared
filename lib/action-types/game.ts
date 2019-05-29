import * as types from '../consts';

export interface MousePositionUpdate {
  type: typeof types.MOUSE_POSITION_UPDATE
  payload: {
    mouseX: number
    mouseY: number
    mouseGameX: number
    mouseGameY: number
  }
}