import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ScheduleView from './ScheduleView';

const mapStateToProps = (state) => {
  return {
    nextEpisodes: state.data.favoriteEpisodesNext,
    pastEpisodes: state.data.favoriteEpisodesPast,
    inProgress: state.data.requestInProgressInitialData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ScheduleContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleView));

export default ScheduleContainer;
