import { Store } from '../library/interfaces';
import { State } from './types';
import { Action } from './interfaces';

export function checkAndDispatch(store: Store<State, Action>, action: Action) {
  console.log(action.todo?.type, action);
  if (
    action.type === 'ADD_TODO' &&
    action.todo?.title.toLowerCase().includes('dog')
  ) {
    return alert('Nope, we are having no dogs');
  }
  return store.dispatch(action);
}
