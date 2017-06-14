
import React, { Component } from 'react';
import { Linking } from 'react-native';

import GText from './lib/GText';
import GView from './lib/GView';
import GButton from './lib/GButton';

export default class extends Component {
  static propTypes = {}
  static defaultProps = {}

  openStudyLink = () => {
    Linking.openURL('http://journals.sagepub.com/doi/pdf/10.1177/0146167297234003');
  }

  render() {
    return (
      <GView>
        <GView padded>
          <GText type="headline">
            Study Details
          </GText>
        </GView>
        <GView padded>
          <GText>
            TODO
          </GText>
          <GButton
            type="secondary"
            title="Go to Original Paper"
            onPress={this.openStudyLink}
          />
        </GView>
      </GView>
    );
  }
}
