import { Store } from './interfaces';
export function createStore<StateType, ActionType>(
  reducer: (state: StateType, action: ActionType) => StateType
): Store<StateType, ActionType> {
  // Variables
  let state: StateType;
  let listeners: Array<() => void> = [];
  // Functions
  const getState = () => state;
  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return {
      unsubscribe: () => {
        listeners = listeners.filter(l => l === listener);
      }
    };
  };
  const dispatch = (action: ActionType) => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
  };
  // Return
  return {
    getState,
    subscribe,
    dispatch
  };
}
