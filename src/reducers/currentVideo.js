import Redux from 'redux';
import changeVideo from '../actions/currentVideo';

//A reducer for the currentVideo field of our state.
var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return Object.assign({}, action.video); //return action.video
  default:
    return state;
  }
};

export default currentVideoReducer;
