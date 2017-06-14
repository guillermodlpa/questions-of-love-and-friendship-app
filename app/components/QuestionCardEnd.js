
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';
import {
  headline,
  body,
} from '../constants/baseStyles';

const styles = StyleSheet.create({
  outter: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  headline,
  body,
});

export default class extends Component {
  static get propTypes() {
    return {};
  }
  static propTypes = {
    onEnd: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
  }

  render() {
    return (
      <GView style={styles.outter}>
        <GView padded>
          <GText style={styles.headline} txtC>
            Done!
          </GText>
        </GView>
        <GView padded>
          <GButton
            type="secondary"
            title="< Go Back"
            onPress={this.props.prev}
            spaced
          />
          <GButton
            title="Finish"
            onPress={this.props.onEnd}
            spaced
          />
        </GView>
      </GView>
    );
  }
}
