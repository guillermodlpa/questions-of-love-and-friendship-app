
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';

const styles = StyleSheet.create({
  outter: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default class extends Component {
  static get propTypes() {
    return {};
  }
  static propTypes = {
    onEnd: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    return (
      <GView style={styles.outter}>
        <GView padded>
          <GText txtC type="headline">
            Done!
          </GText>
        </GView>
        <GView padded>
          <GButton
            type="secondary"
            title="< Go back to last one"
            onPress={this.props.onBack}
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
