
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class extends Component {
  static get propTypes() {
    return {};
  }
  static propTypes = {
    onEnd: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
        <Text>
          Done!
        </Text>
        <Button
          title="Finish"
          onPress={this.props.onEnd}
        />
      </View>
    );
  }
}
