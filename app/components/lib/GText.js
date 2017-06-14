
import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import {
  headline,
  subheadline,
  body,
} from '../../constants/baseStyles';

const styles = StyleSheet.create({
  defaults: {},
  txtC: {
    textAlign: 'center',
  },
  headline,
  subheadline,
  body,
});

export default class extends Component {
  static propTypes = {
    txtC: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    type: PropTypes.string,
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    txtC: false,
    type: 'body',
    children: [],
    style: null,
  }

  render() {
    const style = [styles.defaults, this.props.style];

    if (this.props.type) {
      style.push(styles[this.props.type]);
    }

    Object.keys(this.props).forEach((prop) => {
      if (this.props[prop]) {
        style.push(styles[prop]);
      }
    });

    return (
      <Text style={style}>
        {this.props.children}
      </Text>
    );
  }
}
