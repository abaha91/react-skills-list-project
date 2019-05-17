import {createStore} from "redux";
import initialState from './initialState';
import ReactDOM from "react-dom";


function appState (state = initialState, action) {
      switch (action.type) {
      case 'CHANGE_VALUE':
            console.log(action.text);
            return { ...state, inputValue: action.text };
            break;
      // case 'TO_ADD_SKILL':
      //       console.log(state.tasks);
      //
      //       setTimeout(() => {
      //             console.log(state.tasks);
      //       }, 2000);
      //
      //       state.tasks.push(action.text)
      //       return Object.assign(state, {tasks: state.tasks});
      //       break;
      }
      return state
}

let store = createStore(appState, initialState);
store.subscribe(() => {
      console.log(store.getState())
})
export default store;
