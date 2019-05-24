import * as types from '../consts';
import { Message, BaseMessage } from '../objects';

export interface MessageSend {
  type: typeof types.MESSAGE_SEND
  payload: Message
  meta: {
    /** Determines target - group, player or clan id. */
    to?: number
  }
}

export interface $MessageReceive {
  type: typeof types.$_MESSAGE_RECEIVE
  payload: Message
  meta: {
    /** Determines target - group, player or clan id. */
    to?: number | string
  }
}