
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';

import i18n from '../i18n';

const styles = StyleSheet.create({
  outter: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default class extends Component {
  static get propTypes() {
    return {};
  }
  static propTypes = {
    onEnd: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    return (
      <GView style={styles.outter}>
        <GView padded>
          <GText txtC type="headline">
            {i18n.t('deckEnd.title')}
          </GText>
        </GView>
        <GView padded>
          <GButton
            type="secondary"
            title={`< ${i18n.t('deckEnd.back')}`}
            onPress={this.props.onBack}
            spaced
          />
          <GButton
            title={i18n.t('deckEnd.finish')}
            onPress={this.props.onEnd}
            spaced
          />
        </GView>
      </GView>
    );
  }
}
