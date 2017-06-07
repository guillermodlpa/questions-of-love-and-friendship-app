
import React, { Component, PropTypes } from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Carousel from './Carousel';
import QuestionCard from './QuestionCard';
import QuestionCardEnd from './QuestionCardEnd';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leaveButton: {
  },
  carousel: {
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

  constructor(...args) {
    super(...args);

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
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

    const questionViews = questions.map(question => (
      <QuestionCard
        next={this.nextSlide}
        prev={this.prevSlide}
        {...question}
      />
    ));
    questionViews.push(
      <QuestionCardEnd
        onEnd={onEnd}
      />,
    );

    return (
      <View style={styles.outer}>
        <View style={styles.header}>
          <Text>{currentDeckSlide}/{questions.length}</Text>
          <Button
            style={styles.leaveButton}
            title="X"
            onPress={onEnd}
          />
        </View>
        <Carousel
          style={styles.carousel}
          slides={questionViews}
          currentSlideIndex={currentDeckSlide}
        />
      </View>
    );
  }
}
