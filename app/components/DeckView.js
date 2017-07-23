
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';

import GView from './lib/GView';
import GButton from './lib/GButton';
import GText from './lib/GText';

import QuestionCard from './QuestionCard';
import DeckEnd from './DeckEnd';

import i18n from '../i18n';

import { noop, log } from '../utils';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100,
  },
  swiperContainer: {
    flex: 1,
    flexGrow: 1,
    marginTop: -50,
  },
});

export default class extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
      copy: PropTypes.objectOf(
        PropTypes.string,
      ),
    })).isRequired,
    onEnd: PropTypes.func.isRequired,
    setCurrentDeckSlide: PropTypes.func.isRequired,
    currentDeckSlide: PropTypes.number.isRequired,
  }

  onSlideScroll = (slideIndex) => {
    this.props.setCurrentDeckSlide(slideIndex);
  }

  onSwiped = (cardIndex) => {
    this.props.setCurrentDeckSlide(cardIndex + 1);
  }
  onBack = () => {
    log('DeckView', 'onBack', this.props.currentDeckSlide);
    const currentDeckSlide = this.props.currentDeckSlide;

    if (currentDeckSlide === 0) {
      this.props.onEnd();
    } else if (this.deckSwiperRef) {
      this.deckSwiperRef.jumpToCardIndex(currentDeckSlide - 1);
      this.props.setCurrentDeckSlide(currentDeckSlide - 1);
    }
  }

  setDeckSwiperRef = (ref) => {
    this.deckSwiperRef = ref;
  }

  renderQuestionCard = question => (
    <QuestionCard
      icon={question.icon}
      copy={i18n.t(`questions.${question.i18nId}`)}
    />
  )

  render() {
    const {
      questions,
      onEnd,
      currentDeckSlide,
    } = this.props;

    const slideCounter = currentDeckSlide + 1 < questions.length
      ? currentDeckSlide + 1
      : questions.length;

    const afterLast = currentDeckSlide + 1 > questions.length;

    return (
      <GView style={styles.outer}>
        <GView style={styles.header} padded spread>
          <GButton
            type="text"
            title="<"
            onPress={this.onBack}
          />
          <GText>
            {slideCounter}/{questions.length}
          </GText>
        </GView>
        <GView style={styles.swiperContainer}>
          <DeckSwiper
            ref={this.setDeckSwiperRef}
            cards={questions}
            renderCard={this.renderQuestionCard}
            onSwiped={this.onSwiped}
            onSwipedLeft={noop}
            onSwipedRight={noop}
            onSwipedTop={noop}
            onSwipedBottom={noop}
            onSwipedAll={noop}
            cardIndex={0}
            backgroundColor={'transparent'}
            previousCardInitialPositionX={-500}
            previousCardInitialPositionY={0}
            secondCardZoom={0.97}
          />
          {afterLast && (
            <DeckEnd
              onBack={this.onBack}
              onEnd={onEnd}
            />
          )}
        </GView>
      </GView>
    );
  }
}
