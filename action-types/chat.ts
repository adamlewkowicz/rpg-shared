import * as types from '../consts';
import { Message, BaseMessage } from '../objects';

export interface MessageSend {
  type: typeof types.MESSAGE_SEND
  payload: string
  meta: {
    type: BaseMessage['type']
    to?: number
  }
}

export interface $MessageReceive {
  type: typeof types.$_MESSAGE_RECEIVE
  payload: string
  meta: {
    type: BaseMessage['type']
    to?: number
    authorId: number
  }
}