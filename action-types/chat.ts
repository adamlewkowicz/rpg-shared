import * as types from '../consts';
import { Message, BaseMessage } from '../objects';

export interface MessageSend {
  type: typeof types.MESSAGE_SEND
  payload: Message
  meta: {
    /** Determines group, player or clan id. */
    to?: number
  }
}

export interface $MessageReceive {
  type: typeof types.$_MESSAGE_RECEIVE
  payload: Message
  meta: {
    /** Determines group, player or clan id. */
    to?: number | string
  }
}

export interface $MessageAcknowledge {
  type: typeof types.$_MESSAGE_ACKNOWLEDGE
  meta: {
    target?: 'local' | 'global'
    prevId: string
    nextId: string
  }
}