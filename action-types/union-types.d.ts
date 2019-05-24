import { CharacterUpdate, $CharacterUpdate } from './character';
import { $LoadGame } from './global';
import { MessageSend, $MessageReceive, $MessageAcknowledge } from './chat';

export type CharacterActions = CharacterUpdate | $LoadGame;

export type ChatActions = MessageSend | $MessageReceive | $MessageAcknowledge;