import { BoardType } from '../functions/board.js';
import { ActionType } from './ActionType.js';

export interface ActionModel {
  type: ActionType;
  value?: any;
}

export interface StorageModel {
  best?: number;
  score?: number;
  board?: BoardType;
  boardSize?: number;
  defeat?: boolean;
  victoryDismissed?: boolean;
}

export interface Point {
  x: number;
  y: number;
}
