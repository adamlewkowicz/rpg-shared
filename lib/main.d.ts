import { Action } from 'redux';
import { ActionType } from './action-type';

interface Io {
  withState?: boolean
}

export interface ExtendedAction extends Action {
  type: ActionType
  payload?: any
  meta?: {
    io?: boolean | Io
    [x: string]: any
  }
  error?: {
    instance?: Error
    message?: string
    fatal?: boolean
  }
}

export { ExtendedAction as Action };