import { CharacterUpdate } from './character';
import { $LoadGame, } from './global';
import { $CharacterJoin, $CharacterLeave, $ItemDroppedAdd, $ItemDroppedRemove, $CharacterUpdate } from './location';
import { MessageSend, $MessageReceive, $MessageAcknowledge } from './chat';
import { MousePositionUpdate } from './game';
import { $FightActionResult } from './fight';

export type CharacterActions = CharacterUpdate | $LoadGame;

export type ChatActions = MessageSend | $MessageReceive | $MessageAcknowledge;

export type GameActions = $LoadGame | MousePositionUpdate | any;

export type LocationActions = $LoadGame | $CharacterUpdate | $CharacterJoin | $CharacterLeave | $ItemDroppedAdd | $ItemDroppedRemove | $FightActionResult

export type FightActions = any;