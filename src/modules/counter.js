// Ducks 패턴으로 만든 모듈
// 액션 타입, 액션 생성 함수, 리듀서 함수 를 한 파일에 다 넣는 방식

import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의 => 즉 , 이 INCREASE는 counter.js의 INCREASE를 사용하는데 INCREASE를 사용하게 될경우 변수의 값은 'counter/INCREASE'가 나오게된다라는 뜻
// 액션 타입은 대문자 = '모듈이름/액션이름' (모듈이름 + 액션이름 인 이유 : 액션의 이름이 같은 경우가 있기때문에 각 모듈별로 구분을 하기 위해서 모듈이름/액션이름 구조를 만듦)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });

// createAction으로 액션 생성 함수 간소화
export const increase = createAction(INCREASE);

// export const decrease = () => ({ type: DECREASE });
export const decrease = createAction(DECREASE);

// 초기 상태 선언
const initailState = {
  number: 0,
};

// 리듀서 함수 생성
// function counter(state = initailState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// 리듀서 함수 생성 간소화
// handleActions 의 첫번째 파라미터: 각 액션에 대한 업데이트 함수 ,
// handleActions 의 두번째 파라미터: 초기 상태

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initailState,
);

export default counter;
