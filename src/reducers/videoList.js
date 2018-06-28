import Redux from 'redux';

//reducer for the videoList field of our state.
var videoListReducer = (state = [], action) => {
  console.log(action.videos);
  switch (action.type) {
  case ('CHANGE_VIDEO_LIST'):
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;
