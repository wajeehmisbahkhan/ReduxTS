import { createStore } from './library/store';
import { todos } from './client/reducers';

const store = createStore(todos);
