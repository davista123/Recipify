import {SAY_NAME} from './actions';



export default function whatIsMyName(state = {}, action){
  switch (action.type) {
    case SAY_NAME:
      return{
        ...state,
        name: action.name
      }
      break;

    default:
      return state;
  }

}
