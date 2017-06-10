
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default class App extends Component {
  static get propTypes() {
    return {
      onStart: PropTypes.func.isRequired,
    };
  }

  onStartButtonTrigger = () => {
    this.props.onStart();
  }

  render() {
    return (
      <GView style={styles.main} centerContents>
        <GView pad>
          <GText txtC headline>
            Questions of Love and Friendship
          </GText>
        </GView>
        <GView pad>
          <GButton
            onPress={this.onStartButtonTrigger}
            title="Start"
          />
        </GView>
      </GView>
    );
  }
}
