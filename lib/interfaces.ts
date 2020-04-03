export interface Store<StateType, ActionType> {
  getState: () => StateType;
  subscribe: (listener: () => void) => { unsubscribe: () => void };
  dispatch: (action: ActionType) => void;
}
