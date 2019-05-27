import { CharacterUpdate, $CharacterUpdate } from './character';
import { $LoadGame } from './global';
import { MessageSend, $MessageReceive, $MessageAcknowledge } from './chat';
import { MousePositionUpdate } from './game';

export type CharacterActions = CharacterUpdate | $LoadGame;

export type ChatActions = MessageSend | $MessageReceive | $MessageAcknowledge;

export type GameActions = $LoadGame | MousePositionUpdate | any;