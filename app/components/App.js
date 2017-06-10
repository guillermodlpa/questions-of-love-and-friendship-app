
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import GView from './lib/GView';

import WelcomeView from './WelcomeView';
import OnboardingView from './OnboardingView';
import DeckView from './DeckView';

import {
  WELCOME,
  ONBOARDING,
  DECK,
} from '../constants/viewNames';
import questionsData from '../data/questions';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
  mainView: {
    flex: 1,
  },
});

export default class App extends Component {
  static get propTypes() {
    return {
      /* actions */
      setActiveView: PropTypes.func.isRequired,
      setQuestions: PropTypes.func.isRequired,
      setCurrentDeckSlide: PropTypes.func.isRequired,
      /* reducers */
      activeView: PropTypes.string.isRequired,
      questions: PropTypes.array.isRequired,
      currentDeckSlide: PropTypes.number.isRequired,
    };
  }

  componentDidMount() {
    this.props.setQuestions(questionsData);
  }

  goToDeckView = () => {
    this.props.setCurrentDeckSlide(0);
    this.props.setActiveView(DECK);
  }
  goToWelcomeView = () => {
    this.props.setActiveView(WELCOME);
  }

  render() {
    const {
      activeView,
      questions,
    } = this.props;

    let view;

    switch (activeView) {
      case WELCOME:
        view = (
          <WelcomeView
            onStart={this.goToDeckView}
          />
        );
        break;

      case ONBOARDING:
        view = (
          <OnboardingView />
        );
        break;

      case DECK:
        view = (
          <DeckView
            questions={questions}
            onEnd={this.goToWelcomeView}
            setCurrentDeckSlide={this.props.setCurrentDeckSlide}
            currentDeckSlide={this.props.currentDeckSlide}
          />
        );
        break;

      default:
        view = (
          <Text>
            Shitshow
          </Text>
        );
    }

    return (
      <GView
        style={styles.app}
      >
        {view}
      </GView>
    );
  }
}
