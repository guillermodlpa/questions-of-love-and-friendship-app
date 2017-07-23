
import React, { Component } from 'react';

import questions from '../data/questions';

import GText from './lib/GText';
import GView from './lib/GView';

import i18n from '../i18n';

export default class extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(...args) {
    super(...args);
    this.attributions = questions.map(question => question.iconAttr).filter(i => i);
  }

  render() {
    return (
      <GView>
        <GView padded>
          <GText type="headline">
            {i18n.t('attributions.title')}
          </GText>
        </GView>
        <GView padded>
          {(this.attributions || []).map((attribution, key) => (
            <GText key={key}>
              {attribution}
            </GText>
          ))}
        </GView>
      </GView>
    );
  }
}
