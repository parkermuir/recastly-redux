import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


//Asynchronous action to handle a video search!
var handleVideoSearch = (q) => {
  return function thunk(dispatch) {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q,
      max: 10
    }, function (data) {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;
