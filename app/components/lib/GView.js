
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  paddingM,
} from '../../constants/baseStyles';

const styles = StyleSheet.create({
  defaults: {
    borderColor: '#eee',
    // borderWidth: 1,
    padding: 0,
  },
  padded: {
    padding: paddingM,
  },
  horizontal: {
    flexDirection: 'row',
  },
  centerContents: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  w100: {
    width: '100%',
  },
  spread: {
    justifyContent: 'space-between',
  },
});

export default class extends Component {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    padded: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    centerContents: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    alignItemsCenter: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    w100: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    grow: PropTypes.number,
  }
  static defaultProps = {
    style: null,
    children: [],
    padded: false,
    centerContents: false,
    alignItemsCenter: false,
    w100: false,
    grow: null,
  }

  render() {
    const style = [styles.defaults];

    Object.keys(this.props).forEach((prop) => {
      if (this.props[prop]) {
        style.push(styles[prop]);
      }
    });
    if (this.props.style) {
      style.push(this.props.style);
    }

    if (this.props.grow) {
      style.push({ flex: this.props.grow });
    }

    return (
      <View style={style}>
        {this.props.children}
      </View>
    );
  }
}
