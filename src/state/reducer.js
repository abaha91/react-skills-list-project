import {createStore} from "redux";
import initialState from './initialState';

function appState (state = initialState, action) {
      switch (action.type) {
      case 'CHANGE_VALUE':
            return { ...state, inputValue: action.text };
            break;
      case 'TO_ADD_SKILL':
            state.skills.push(action.text);
            return Object.assign(state, {skills: state.skills});
            break;
      }
      return state
}

let store = createStore(appState, initialState);
// store.subscribe(() => console.log(store.getState()));
export default store;
