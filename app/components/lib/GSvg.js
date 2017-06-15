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

function replaceColors(string, foregroundColor, backgroundColor) {
  return string.replace(/#000000/i, foregroundColor).replace(/#ffffff/i, backgroundColor);
}

export default class extends Component {
  static propTypes = {
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    svgXmlData: PropTypes.string.isRequired,
    size: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
  }
  static defaultProps = {
    style: null,
    backgroundColor: null,
    size: 'medium',
    colors: null,
  }

  render() {
    const {
      size,
      svgXmlData,
      style,
      colors,
    } = this.props;

    const html = `${firstHtml}${svgXmlData}${lastHtml}`;

    const coloredHtml = colors ?
      replaceColors(html, colors[0], colors[1]) :
      html;

    console.log(coloredHtml);

    return (
      <View style={[styles[size], style]}>
        <WebView
          scrollEnabled={false}
          source={{ html: coloredHtml }}
        />
      </View>
    );
  }
}
