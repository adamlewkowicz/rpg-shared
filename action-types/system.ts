import * as types from '../consts';

export interface $SystemError {
  type: typeof types.SYSTEM_ERROR
  error: {
    instance?: Error
    fatal?: boolean
    message?: string
  }
}