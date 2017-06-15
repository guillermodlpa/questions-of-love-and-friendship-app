import React, { Component, PropTypes } from 'react';
import {
  Animated,
} from 'react-native';

export default class extends Component {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    styleAnimations: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    duration: PropTypes.number,
  }
  static defaultProps = {
    style: null,
    children: [],
    styleAnimations: [],
    duration: 1000,
  }

  constructor(...args) {
    super(...args);

    this.state = {};

    Object.keys(this.props.styleAnimations).forEach((prop) => {
      this.state[prop] = new Animated.Value(this.props.styleAnimations[prop].initial);
    });
  }

  componentDidMount() {
    const {
      duration,
      styleAnimations,
    } = this.props;

    const animations = Object.keys(styleAnimations).map(prop => (
      Animated.timing(this.state[prop], {
        toValue: styleAnimations[prop].final,
        duration,
      })
    ));

    Animated.parallel(animations).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          this.props.style,
          this.state,
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
