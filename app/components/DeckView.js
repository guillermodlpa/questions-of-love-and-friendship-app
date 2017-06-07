
import React, { Component, PropTypes } from 'react';

import Carousel from './Carousel';
import QuestionCard from './QuestionCard';

export default class extends Component {
  static get propTypes() {
    return {
      questions: PropTypes.array.isRequired,
    };
  }

  render() {
    const {
      questions,
    } = this.props;

    const questionViews = questions.map(question => (
      <QuestionCard {...question} />
    ));

    return (
      <Carousel
        slides={questionViews}
      />
    );
  }
}
