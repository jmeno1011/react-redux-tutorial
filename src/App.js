import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div style={{padding:'32px'}}>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      {/* <Todos /> */}
      <TodosContainer />
    </div>
  );
}

export default App;
