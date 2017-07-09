
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GText from './lib/GText';
import GView from './lib/GView';
import GSvg from './lib/GSvg';

import icons from '../icons';

import {
  body,
  paddingM,
  cardBackgroundColor,
  cardBorderColor,
  cardDeckShadowBorderColor,
  cardBorderRadius,
  cardBorderWidth,
  cardDeckShadowOpacity,
} from '../constants/baseStyles';

const styles = StyleSheet.create({
  outter: {
    flexGrow: 1,
    position: 'relative',
    marginLeft: 0,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 70,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',

    borderRadius: cardBorderRadius,
    borderWidth: cardBorderWidth,
    borderColor: cardBorderColor,
    padding: 20,
    backgroundColor: cardBackgroundColor,
  },
  shadow: {
    flex: 1,
    position: 'absolute',
    top: 3,
    left: 3,
    bottom: -3,
    right: -3,
    opacity: cardDeckShadowOpacity,
    backgroundColor: cardDeckShadowBorderColor,
    borderRadius: cardBorderRadius,
  },
  copyContainer: {
    flexGrow: 1,
    paddingTop: paddingM,
  },
  footer: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copy: body,
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  pageButtonView: {},
  pageButtonText: {},
});

export default class extends Component {
  static propTypes = {
    copy: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: null,
  }

  render() {
    const {
      copy,
      icon,
    } = this.props;

    return (
      <GView style={styles.outter} >
        <GView style={styles.shadow} />
        <GView style={styles.contentContainer} >
          <GView horizontal centerContents>
            {icon && (
              <GSvg
                svgXmlData={icons[icon]}
                backgroundColor={cardBackgroundColor}
              />
            )}
          </GView>
          <GView style={styles.copyContainer}>
            <GText type="subheadline" txtC>
              {copy}
            </GText>
          </GView>
        </GView>
      </GView>
    );
  }
}
