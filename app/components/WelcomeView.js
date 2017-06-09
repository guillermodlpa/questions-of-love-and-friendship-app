
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GButton from './GButton';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends Component {
  static get propTypes() {
    return {
      onStart: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.onStartButtonTrigger = this.onStartButtonTrigger.bind(this);
  }

  onStartButtonTrigger = () => {
    this.props.onStart();
  }

  render() {
    return (
      <View
        style={styles.main}
      >
        <Text>
          Questions of Love and Friendship
        </Text>
        <GButton
          onPress={this.onStartButtonTrigger}
          title="Start"
        />
      </View>
    );
  }
}
