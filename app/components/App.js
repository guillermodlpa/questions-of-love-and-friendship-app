
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

  constructor(props) {
    super(props);
    this.goDeckView = this.goDeckView.bind(this);
    this.goWelcomeView = this.goWelcomeView.bind(this);
  }

  componentDidMount() {
    this.props.setQuestions(questionsData);
  }

  goDeckView = () => {
    this.props.setActiveView(DECK);
  }
  goWelcomeView = () => {
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
            onStart={this.goDeckView}
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
            onEnd={this.goWelcomeView}
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
      <View
        style={styles.app}
      >
        {view}
      </View>
    );
  }
}
