
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import pick from 'lodash/pick';

import GView from './lib/GView';
import GButton from './lib/GButton';
import GModal from './lib/GModal';
import GText from './lib/GText';

import WelcomeView from './WelcomeView';
import DeckView from './DeckView';

import Attributions from './Attributions';
import StudyDetails from './StudyDetails';

import {
  WELCOME,
  DECK,
} from '../constants/viewNames';
import questionsData from '../data/questions';

import {
  appBackgroundColor,
} from '../constants/baseStyles';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    backgroundColor: appBackgroundColor,
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
      /* eslint-disable react/no-unused-prop-types */
      openSetPickerModal: PropTypes.func.isRequired,
      closeSetPickerModal: PropTypes.func.isRequired,
      openAttributionsModal: PropTypes.func.isRequired,
      closeAttributionsModal: PropTypes.func.isRequired,
      openStudyDetailModal: PropTypes.func.isRequired,
      closeStudyDetailModal: PropTypes.func.isRequired,
      /* eslint-enable react/no-unused-prop-types */
      /* reducers */
      activeView: PropTypes.string.isRequired,
      questions: PropTypes.array.isRequired,
      /* eslint-disable react/no-unused-prop-types */
      currentDeckSlide: PropTypes.number.isRequired,
      setPickerModalOpen: PropTypes.bool.isRequired,
      attributionsModalOpen: PropTypes.bool.isRequired,
      studyDetailsModalOpen: PropTypes.bool.isRequired,
      /* eslint-enable react/no-unused-prop-types */
    };
  }

  onSetPicked = (setNumber) => {
    this.props.closeSetPickerModal();
    this.goToDeckView(setNumber);
  }

  goToDeckView = (setNumber) => {
    const questions = questionsData.filter(question => (
      question.set === setNumber
    ));
    this.props.setQuestions(questions);

    this.props.setCurrentDeckSlide(0);
    this.props.setActiveView(DECK);
  }

  goToWelcomeView = () => {
    this.props.setActiveView(WELCOME);
  }

  renderPickSetModal() {
    const {
      setPickerModalOpen,
      closeSetPickerModal,
    } = this.props;

    return (
      <GModal
        open={setPickerModalOpen}
        onRequestClose={closeSetPickerModal}
        scrollEnabled={false}
      >
        <GView padded grow={1}>
          <GView padded>
            <GText type="headline">
              Choose set
            </GText>
          </GView>
          <GView centerContents grow={1}>
            <GButton
              onPress={() => this.onSetPicked(1)}
              title="Set I"
              spaced
            />
            <GButton
              onPress={() => this.onSetPicked(2)}
              title="Set II"
              spaced
            />
            <GButton
              onPress={() => this.onSetPicked(3)}
              title="Set III"
              spaced
            />
          </GView>
        </GView>
      </GModal>
    );
  }

  renderStudyDetailsModal() {
    const {
      studyDetailsModalOpen,
      closeStudyDetailModal,
    } = this.props;

    return (
      <GModal
        open={studyDetailsModalOpen}
        onRequestClose={closeStudyDetailModal}
      >
        <GView padded>
          <StudyDetails />
        </GView>
      </GModal>
    );
  }

  renderAttributionsModal() {
    const {
      attributionsModalOpen,
      closeAttributionsModal,
    } = this.props;

    return (
      <GModal
        open={attributionsModalOpen}
        onRequestClose={closeAttributionsModal}
      >
        <GView padded>
          <Attributions />
        </GView>
      </GModal>
    );
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
            {...pick(this.props, [
              'openSetPickerModal',
              'closeSetPickerModal',
              'setPickerModalOpen',
              'openAttributionsModal',
              'closeAttributionsModal',
              'attributionsModalOpen',
              'openStudyDetailModal',
              'closeStudyDetailModal',
              'studyDetailsModalOpen',
            ])}
          />
        );
        break;

      case DECK:
        view = (
          <DeckView
            questions={questions}
            onEnd={this.goToWelcomeView}
            {...pick(this.props, [
              'setCurrentDeckSlide',
              'currentDeckSlide',
            ])}
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
        {this.renderPickSetModal()}
        {this.renderStudyDetailsModal()}
        {this.renderAttributionsModal()}
      </GView>
    );
  }
}
