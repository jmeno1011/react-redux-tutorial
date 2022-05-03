import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// 컨테이너 컴포넌트 : 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 한다.
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위한 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
    // console.log('increase');
  },
  decrease: () => {
    dispatch(decrease());
    // console.log('decrease');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
