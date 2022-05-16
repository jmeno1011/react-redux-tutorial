import { connect, useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useCallback } from 'react';
import { useActions } from '../lib/useActions';

const TodosContainer = () => {
  const {input, todos} = useSelector(({todos})=>({
    input: todos.input,
    todos: todos.todos
  }))
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback((input)=>dispatch(changeInput(input)),[dispatch]);
  // const onInsert = useCallback((text)=>dispatch(insert(text)),[dispatch]);
  // const onToggle = useCallback((id)=>dispatch(toggle(id)),[dispatch]);
  // const onRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);

  // useActions함수를 이용해 위의 과정을 아래 코드로 간소화 시킨다.
  // useActions의 첫번째 파라메터 [changeInput, insert, toggle, remove]는 액션 생성 함수들 이며
  // useActions의 두번째 파라메터 []는 디펜던시로써 이 안의 값이 변경되면 액션을 디스패치하는 함수를 새로 생성한다.
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove],[])
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);

export default TodosContainer;