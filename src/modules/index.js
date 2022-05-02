import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// createStore 함수를 store 만들때 리듀서는 하나만 사용해야 함으로
// combineReducers를 통해 하나로 합쳐서 사용한다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
