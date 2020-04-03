import { EventType } from './types';

export interface Todo {
  type: string;
  title: string;
  complete: boolean;
}
export interface Goal {
  id: number;
  name: string;
}
export interface Action {
  type: EventType;
  id?: number;
  goal?: Goal;
  todo?: Todo;
}
