
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GView from './lib/GView';
import GButton from './lib/GButton';
import GText from './lib/GText';

import Carousel from './Carousel';
import QuestionCard from './QuestionCard';
import QuestionCardEnd from './QuestionCardEnd';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carousel: {
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
  nextSlide = () => {
    const index = this.props.currentDeckSlide + 1;
    this.props.setCurrentDeckSlide(index);
  }
  prevSlide = () => {
    const index = this.props.currentDeckSlide - 1;
    this.props.setCurrentDeckSlide(index);
  }

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
            onPress={onEnd}
          />
          <GText>
            {slideCounter}/{questions.length}
          </GText>
        </GView>
        <Carousel
          style={styles.carousel}
          slides={questionViews}
          currentSlideIndex={currentDeckSlide}
          onSlideScroll={this.onSlideScroll}
        />
      </GView>
    );
  }
}
