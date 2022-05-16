import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

// input 값 변경
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
// todo 추가
const INSERT = 'todos/INSERT';
// todo를 체크/체크 해제
const TOGGLE = 'todos/TOGGLE';
// todo 제거
const REMOVE = 'todos/REMOVE';

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;

// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

export const remove = createAction(REMOVE, (id) => id);

const initailState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

// function todos(state = initailState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//     [INSERT]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
//       ),
//     }),
//     [REMOVE]: (state, action) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== action.payload),
//     }),
//   },
//   initailState,
// );

// action.payload => 모두 같은 이름이여서 헷갈릴 수가 있어서 비구조할당으로 각 명칭 정해주기로해서 위 코드를 아래와 같이 변경
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, {payload : input}) => ({ ...state, input }),
//     [INSERT]: (state, {payload : todo}) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, {payload : id}) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo,
//       ),
//     }),
//     [REMOVE]: (state, {payload : id}) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initailState,
// );

// immer 적용해보기
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, {payload : input}) => 
    produce(state, draft=>{
      draft.input = input;
    }),
    [INSERT]: (state,{payload: todo})=>
    produce(state, draft=>{
      draft.todos.push(todo)
    }),
    [TOGGLE]: (state, {payload : id}) =>
    produce(state, draft=>{
      const todo = draft.todos.find(todo=>todo.id === id);
      todo.done = !todo.done;
    }),
    [REMOVE]: (state, {payload : id}) => 
    produce(state, draft=>{
      const index = draft.todos.findIndex(todo=>todo.id===id);
      draft.todos.splice(index, 1);
    })
    ,
  },
  initailState,
);

export default todos;
