
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import GButton from './GButton';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#adadad',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  shadow: {
    flex: 1,
    position: 'absolute',
    top: 2,
    left: 2,
    bottom: -2,
    right: -2,
    backgroundColor: '#555555',
    borderRadius: 30,
  },
  copyContainer: {
    flexGrow: 1,
  },
  footer: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copy: {
    fontSize: 20,
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  pageButtonView: {},
  pageButtonText: {
    fontSize: 60,
  },
});

export default class extends Component {
  static propTypes = {
    copy: PropTypes.string.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
  }

  render() {
    const {
      next,
      prev,
      isFirst,
      isLast,
      copy,
    } = this.props;

    const prevButton = !isFirst && (
      <GButton
        title="<"
        onPress={prev}
        textStyle={styles.pageButtonText}
        viewStyle={styles.pageButtonView}
      />
    );
    const nextButton = !isLast && (
      <GButton
        title=">"
        onPress={next}
        textStyle={styles.pageButtonText}
        viewStyle={styles.pageButtonView}
      />
    );

    return (
      <View style={styles.outer} >
        <View style={styles.shadow} />
        <View style={styles.contentContainer} >
          <View style={styles.copyContainer}>
            <Text style={styles.copy}>
              {copy}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.left}>
              {prevButton}
            </View>
            <View style={styles.right}>
              {nextButton}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
