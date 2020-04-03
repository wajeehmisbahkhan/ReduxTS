import { Store } from './interfaces';
export function createStore<State, Action>(
  reducer: (state: State, action: Action) => State
): Store<State, Action> {
  // Variables
  let state: State;
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
  const dispatch = (action: Action) => {
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
