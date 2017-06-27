
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';

import GView from './lib/GView';
import GButton from './lib/GButton';
import GText from './lib/GText';

// import Carousel from './Carousel';
import QuestionCard from './QuestionCard';
import QuestionCardEnd from './QuestionCardEnd';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    flexGrow: 1,
  },
  swiperContainer: {
    flex: 1,
    flexGrow: 1,
  },
});

export default class extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
      copy: PropTypes.string.isRequired,
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
    if (this.props.currentDeckSlide === 0) {
      this.props.onEnd();
    } else if (this.deckSwiperRef) {
      this.deckSwiperRef.swipeBack((previousCardIndex) => {
        this.props.setCurrentDeckSlide(previousCardIndex - 1);
      });
    }
  }

  setDeckSwiperRef = (ref) => {
    this.deckSwiperRef = ref;
  }

  nextSlide = () => {
    const index = this.props.currentDeckSlide + 1;
    this.props.setCurrentDeckSlide(index);
  }
  prevSlide = () => {
    const index = this.props.currentDeckSlide - 1;
    this.props.setCurrentDeckSlide(index);
  }

  renderQuestionCard = question => (
    <QuestionCard
      next={this.nextSlide}
      prev={this.prevSlide}
      isFirst={false}
      isLast={false}
      {...question}
    />
  )

  render() {
    const {
      questions,
      onEnd,
      currentDeckSlide,
    } = this.props;

    const questionViews = questions.map((question, index) => (
      <QuestionCard
        next={this.nextSlide}
        prev={this.prevSlide}
        isFirst={index === 0}
        isLast={false}
        {...question}
      />
    ));
    questionViews.push(
      <QuestionCardEnd
        prev={this.prevSlide}
        onEnd={onEnd}
      />,
    );

    const slideCounter = currentDeckSlide + 1 < questions.length
      ? currentDeckSlide + 1
      : questions.length;

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
            cardIndex={0}
            backgroundColor={'transparent'}
            previousCardInitialPositionX={-500}
            previousCardInitialPositionY={0}
            secondCardZoom={0.97}
          />
        </GView>
      </GView>
    );
    // <Carousel
    //   style={styles.carousel}
    //   slides={questionViews}
    //   currentSlideIndex={currentDeckSlide}
    //   onSlideScroll={this.onSlideScroll}
    // />
  }
}
