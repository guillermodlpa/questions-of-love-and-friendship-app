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
  big: {
    width: 150,
    height: 150,
  },
});

const firstHtml = `
  <html>
    <head>
      <style>
        html, body { margin:0; padding:0; overflow:hidden; background-color: #ffffff; }
        svg { position:fixed; top:0; left:0; height:100%; width:100%; }
      </style>
    </head>
    <body>
`;
const lastHtml = `
    </body>
  </html>
`;

function replaceForegroundColor(string, color) {
  return string.replace(/#000000/i, color);
}

function replaceBackgroundColor(string, color) {
  return string.replace(/#ffffff/i, color);
}

export default class extends Component {
  static propTypes = {
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    svgXmlData: PropTypes.string.isRequired,
    size: PropTypes.string,
    foregroundColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }
  static defaultProps = {
    style: null,
    foregroundColor: null,
    backgroundColor: null,
    size: 'medium',
  }

  render() {
    const {
      size,
      svgXmlData,
      style,
      foregroundColor,
      backgroundColor,
    } = this.props;

    let html = `${firstHtml}${svgXmlData}${lastHtml}`;

    if (foregroundColor) {
      html = replaceForegroundColor(html, foregroundColor);
    }
    if (backgroundColor) {
      html = replaceBackgroundColor(html, backgroundColor);
    }

    return (
      <View style={[styles[size], style]}>
        <WebView
          scrollEnabled={false}
          source={{ html }}
        />
      </View>
    );
  }
}
