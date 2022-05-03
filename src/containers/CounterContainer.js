import { bindActionCreators } from 'redux';
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

// 정석적인 방법인 느낌
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect 내부에 익명 함수 형태로 선언하는 방식
// version 1.0
// export default connect(
//   // mapStateToProps부분
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // mapDispatchToProps부분
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   }),
// )(CounterContainer);

// version 1.0의 코드를 bindActionCreators를 이용해 좀더 간단히 선언할 수 있음
// version 2.0
// export default connect(
//   // mapStateToProps부분
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // mapDispatchToProps부분
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// version 3.0
// 제일 간단해보임
export default connect(
  // mapStateToProps부분
  (state) => ({
    number: state.counter.number,
  }),
  // mapDispatchToProps부분
  {
    increase,
    decrease,
  },
)(CounterContainer);
