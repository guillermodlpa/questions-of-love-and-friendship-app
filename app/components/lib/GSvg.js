import React, { Component, PropTypes } from 'react';
import {
  WebView,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 100,
    height: 100,
  },
});

const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>';
const lastHtml = '</body></html>';

export default class extends Component {
  static propTypes = {
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    svgXmlData: PropTypes.string.isRequired,
    size: PropTypes.string,
  }
  static defaultProps = {
    style: null,
    backgroundColor: null,
    size: 'medium',
  }

  render() {
    const {
      size,
      svgXmlData,
      style,
    } = this.props;

    return (
      <View style={[styles[size], style]}>
        <WebView
          scrollEnabled={false}
          source={{ html: `${firstHtml}${svgXmlData}${lastHtml}` }}
        />
      </View>
    );
  }
}
