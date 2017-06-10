
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  paddingM,
} from '../../constants/baseStyles';

const styles = StyleSheet.create({
  view: {
    borderColor: '#eee',
    borderWidth: 1,
    padding: 0,
  },
  pad: {
    padding: paddingM,
  },
  horizontal: {
    flexDirection: 'row',
  },
  centerContents: {
    justifyContent: 'center',
  },
});

export default class extends Component {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    pad: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    centerContents: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    w100: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  }
  static defaultProps = {
    style: null,
    children: [],
    pad: false,
    centerContents: false,
    w100: false,
  }

  render() {
    const style = [styles.view];

    Object.keys(this.props).forEach((prop) => {
      if (this.props[prop]) {
        style.push(styles[prop]);
      }
    });
    if (this.props.style) {
      style.push(this.props.style);
    }

    return (
      <View style={style}>
        {this.props.children}
      </View>
    );
  }
}
