
import React, { Component } from 'react';
import { Linking } from 'react-native';

import GText from './lib/GText';
import GView from './lib/GView';
import GButton from './lib/GButton';

import i18n from '../i18n';

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
            {i18n.t('studyDetails.title')}
          </GText>
        </GView>
        <GView padded>
          <GText>
            {i18n.t('studyDetails.content')}
          </GText>
          <GButton
            title={i18n.t('studyDetails.originalPaperButtonLabel')}
            onPress={this.openStudyLink}
          />
        </GView>
      </GView>
    );
  }
}
