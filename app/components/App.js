
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

import i18n from '../i18n';

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

  listenAndroindBackButton() {
    if (React.BackAndroid) {
      const {
        setPickerModalOpen,
        closeSetPickerModal,
        attributionsModalOpen,
        closeAttributionsModal,
        studyDetailsModalOpen,
        closeStudyDetailModal,
        activeView,
      } = this.props;

      if (setPickerModalOpen) {
        closeSetPickerModal();
      } else if (attributionsModalOpen) {
        closeAttributionsModal();
      } else if (studyDetailsModalOpen) {
        closeStudyDetailModal();
      } else if (activeView === WELCOME) {
        // close app?
      } else if (activeView === DECK) {
        if (this.deckView) {
          this.deckView.onBack();
        }
      }
    }
  }

  setDeckViewRef = (ref) => {
    this.deckView = ref;
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
              {i18n.t('chooseSet.title')}
            </GText>
          </GView>
          <GView>
            <GButton
              onPress={() => this.onSetPicked(1)}
              title={i18n.t('chooseSet.set1')}
              spaced
            />
            <GButton
              onPress={() => this.onSetPicked(2)}
              title={i18n.t('chooseSet.set2')}
              spaced
            />
            <GButton
              onPress={() => this.onSetPicked(3)}
              title={i18n.t('chooseSet.set3')}
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
            ref={this.setDeckViewRef}
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
            Error
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
