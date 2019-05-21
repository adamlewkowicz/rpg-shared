import { CharacterUpdate, $CharacterUpdate } from './character';
import { $LoadGame } from './global';
import { MessageSend, $MessageReceive } from './chat';

export type CharacterActions = CharacterUpdate | $LoadGame;

export type ChatActions = MessageSend | $MessageReceive;