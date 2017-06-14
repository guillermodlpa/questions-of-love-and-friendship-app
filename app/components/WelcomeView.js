
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';
import GSvg from './lib/GSvg';

import icons from '../icons';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default class App extends Component {
  static propTypes = {
    openSetPickerModal: PropTypes.func.isRequired,
    openAttributionsModal: PropTypes.func.isRequired,
    openStudyDetailModal: PropTypes.func.isRequired,
  }

  onStartButtonPress = () => {
    this.props.openSetPickerModal();
  }

  onAttributionsButtonPress = () => {
    this.props.openAttributionsModal();
  }

  onStudyDetailButtonPress = () => {
    this.props.openStudyDetailModal();
  }

  render() {
    return (
      <GView style={styles.main} centerContents>
        <GView padded centerContents>
          <GView padded alignItemsCenter>
            <GText txtC type="headline">
              Questions of Love and Friendship
            </GText>
            <GView padded>
              <GSvg svgXmlData={icons.loveQuestion} />
            </GView>
          </GView>
        </GView>
        <GView padded>
          <GButton
            onPress={this.onStartButtonPress}
            title="Start"
            spaced
          />
          <GButton
            type="secondary"
            onPress={this.onStudyDetailButtonPress}
            title="About Source"
            spaced
          />
          <GButton
            type="secondary"
            onPress={this.onAttributionsButtonPress}
            title="Attributions"
            spaced
          />
        </GView>
      </GView>
    );
  }
}
