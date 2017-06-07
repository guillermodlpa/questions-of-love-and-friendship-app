
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

import * as actions from '../actions';

const mapStateToProps = state => Object.assign({}, state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
