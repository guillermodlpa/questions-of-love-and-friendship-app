
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
    padding: 30,
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
      /* reducers */
      activeView: PropTypes.string.isRequired,
      questions: PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
  }

  componentDidMount() {
    this.props.setQuestions(questionsData);
  }

  onStart = () => {
    this.props.setActiveView(DECK);
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
            onStart={this.onStart}
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
