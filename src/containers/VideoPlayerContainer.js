import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props

const mapStateToProps = (store) => ({
  video: store.currentVideo
});

//connects redux actions to react props
// const mapDispatchToProps = (dispatch) => ({
// });

var VideoPlayerContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(VideoPlayer);

export default VideoPlayerContainer;
