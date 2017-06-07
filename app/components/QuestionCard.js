
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  copy: {
    fontSize: 20,
  },
});

export default class extends Component {
  static propTypes = {
    copy: PropTypes.string.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
  }

  render() {
    const {
      next,
      prev,
      copy,
    } = this.props;

    return (
      <View style={styles.outer} >
        <View style={styles.shadow} />
        <View style={styles.contentContainer} >
          <Text style={styles.copy}>
            {copy}
          </Text>
          <Button
            title="<"
            onPress={prev}
          />
          <Button
            title=">"
            onPress={next}
          />
        </View>
      </View>
    );
  }
}
