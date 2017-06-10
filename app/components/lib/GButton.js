
import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

import {
  buttonColor,
  buttonColorSecondary,
  buttonBackgroundColor,
  buttonBackgroundColorSecondary,
  buttonBorderColor,
  buttonBorderColorSecondary,
  buttonBorderRadius,
  paddingM,
} from '../../constants/baseStyles';

const baseWrapperStyles = {
  borderRadius: buttonBorderRadius,
  padding: paddingM,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
};

const primaryStyles = StyleSheet.create({
  wrapper: Object.assign({}, baseWrapperStyles, {
    backgroundColor: buttonBackgroundColor,
    borderColor: buttonBorderColor,
  }),
  text: {
    color: buttonColor,
  },
});

const secondaryStyles = StyleSheet.create({
  wrapper: Object.assign({}, baseWrapperStyles, {
    backgroundColor: buttonBackgroundColorSecondary,
    borderColor: buttonBorderColorSecondary,
  }),
  text: {
    color: buttonColorSecondary,
  },
});

export default class extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    viewStyle: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    textStyle: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    type: PropTypes.string,
  }
  static defaultProps = {
    onPress: () => {},
    viewStyle: null,
    textStyle: null,
    type: 'primary',
  }

  render() {
    const {
      viewStyle,
      textStyle,
      onPress,
      title,
      type,
    } = this.props;

    const thisStyles = type === 'secondary' ? secondaryStyles : primaryStyles;

    return (
      <TouchableHighlight onPress={onPress} style={[thisStyles.wrapper, viewStyle]}>
        <Text style={[thisStyles.text, textStyle]}>
          {title}
        </Text>
      </TouchableHighlight>
    );
  }
}
