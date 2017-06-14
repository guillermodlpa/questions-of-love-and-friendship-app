
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
  paddingS,
  subheadlineFontSize,
} from '../../constants/baseStyles';

const baseWrapperStyles = {
  borderRadius: buttonBorderRadius,
  padding: paddingM,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
};

const typedStyles = {
  primary: StyleSheet.create({
    wrapper: Object.assign({}, baseWrapperStyles, {
      backgroundColor: buttonBackgroundColor,
      borderColor: buttonBorderColor,
    }),
    text: {
      color: buttonColor,
      fontSize: subheadlineFontSize,
    },
  }),
  secondary: StyleSheet.create({
    wrapper: Object.assign({}, baseWrapperStyles, {
      backgroundColor: buttonBackgroundColorSecondary,
      borderColor: buttonBorderColorSecondary,
    }),
    text: {
      color: buttonColorSecondary,
      fontSize: subheadlineFontSize,
    },
  }),
  text: StyleSheet.create({
    wrapper: Object.assign({}, baseWrapperStyles, {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      padding: 0,
    }),
    text: {
      color: buttonColorSecondary,
    },
  }),
};

function pickStylesFromType(type) {
  return typedStyles[type] || typedStyles.primary;
}

export default class extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    viewStyle: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    textStyle: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    type: PropTypes.string,
    spaced: PropTypes.bool,
  }
  static defaultProps = {
    onPress: () => {},
    viewStyle: null,
    textStyle: null,
    type: 'primary',
    spaced: false,
  }

  render() {
    const {
      viewStyle,
      textStyle,
      onPress,
      title,
      type,
      spaced,
    } = this.props;

    const thisStyles = pickStylesFromType(type);

    const marginStyles = spaced ? { margin: paddingS } : null;

    return (
      <TouchableHighlight onPress={onPress} style={[thisStyles.wrapper, marginStyles, viewStyle]}>
        <Text style={[thisStyles.text, textStyle]}>
          {title}
        </Text>
      </TouchableHighlight>
    );
  }
}
