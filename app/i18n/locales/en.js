import questions from '../../data/questions';

const LOCALE = 'en';

const strings = {
  appTitle: 'Questions of Love and Friendship',
  start: 'Start',
  attributions: {
    buttonLabel: 'Attributions',
    title: 'Icon Attributions',
  },
  chooseSet: {
    title: 'Choose Set',
    set1: 'Set I',
    set2: 'Set II',
    set3: 'Set III',
  },
  deckEnd: {
    back: 'Go back to last one',
    finish: 'Finish',
    title: 'Done!',
  },
  studyDetails: {
    buttonLabel: 'About the study',
    title: 'About the study',
    content: "This app is inspired in the study by A. Aron and others, “The Experimental Generation of Interpersonal Closeness: A Procedure and some Preliminary Findings”. It's purpose was to investigate if a answering a set of personal questions could increase the feeling of closeness between two people. The app contains the 36 questions used in the study.",
    originalPaperButtonLabel: 'Open in browser',
  },
  questions: {},
};

questions.forEach((question) => {
  if (question.copy && question.copy[LOCALE]) {
    strings.questions[question.i18nId] = question.copy[LOCALE];
  }
});

export default strings;
