
import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import {
  headline,
  subheadline,
} from '../../constants/baseStyles';

const styles = StyleSheet.create({
  text: {},
  txtC: {
    textAlign: 'center',
  },
  headline,
  subheadline,
});

export default class extends Component {
  static propTypes = {
    txtC: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    headline: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    subheadline: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    txtC: false,
    headline: false,
    subheadline: false,
    children: [],
    style: null,
  }

  render() {
    const style = [styles.view, this.props.style];

    Object.keys(this.props).forEach((prop) => {
      if (styles[prop]) {
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
