
import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#112299',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    width: 'auto',
  },
});

export default class extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    viewStyle: PropTypes.objectOf(PropTypes.oneOf([
      PropTypes.number,
      PropTypes.string,
    ])),
    textStyle: PropTypes.objectOf(PropTypes.oneOf([
      PropTypes.number,
      PropTypes.string,
    ])),
  }
  static defaultProps = {
    onPress: () => {},
    viewStyle: null,
    textStyle: null,
  }

  render() {
    const {
      viewStyle,
      textStyle,
      onPress,
      title,
    } = this.props;

    return (
      <TouchableHighlight onPress={onPress} style={[styles.wrapper, viewStyle]}>
        <Text style={[styles.text, textStyle]}>
          {title}
        </Text>
      </TouchableHighlight>
    );
  }
}
