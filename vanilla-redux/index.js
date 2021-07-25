import { createStore } from "redux";
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션이름을 추가
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션을 만듦
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기상태
const initialState = {
    toggle: false,
    counter: 0,
};

// state가 undefined 일 때는 initialState를 기본값을 사용
function reducer(state = initialState, action) {
    console.log(action);
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 융지
                toggle: !state.toggle,
            };
        case INCREASE:
            console.log("일로 안들어오나?");
            return {
                ...state, // 불변성 융지
                counter: state.counter + action.difference, // 이건 뭐지?
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add("active");
    } else {
        divToggle.classList.remove("active");
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};