import { EventType } from './types';

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}
export interface Goal {
  id: number;
  title: string;
  complete: boolean;
}
export interface Action {
  type: EventType;
  id?: number;
  goal?: Goal;
  todo?: Todo;
}
