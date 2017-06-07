
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class extends Component {
  static get propTypes() {
    return {
      copy: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.copy}
        </Text>
      </View>
    );
  }
}
