import * as types from '../consts';
import { Action } from '../main';

export interface $SystemError {
  type: typeof types.SYSTEM_ERROR
  error: {
    instance?: Error
    fatal?: boolean
    message?: string
  }
}

export interface SystemError extends Action {
  type: typeof types.SYSTEM_ERROR
}