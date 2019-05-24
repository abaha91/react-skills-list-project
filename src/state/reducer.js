import {createStore} from "redux";
import initialState from './initialState';

function appState (state = initialState, action) {
      switch (action.type) {
      case 'CHANGE_VALUE':
            return { ...state, inputValue: action.text };
            break;
      case 'TO_ADD_SKILL':
            return {...state, skills: action.skillsList};
            break;
            case 'TO_REMOVE_SKILL':
            return {...state, readySkills: action.readySkills};
            break;
      }
      return state
}

let store = createStore(appState, initialState);
store.subscribe(() => console.log(store.getState()));
export default store;
