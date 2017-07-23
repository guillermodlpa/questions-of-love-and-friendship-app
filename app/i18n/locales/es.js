import questions from '../../data/questions';

const LOCALE = 'es';

const strings = {
  appTitle: 'Preguntas de amor y amistad',
  start: 'Empezar',
  attributions: {
    buttonLabel: 'Atribuciones',
    title: 'Atribuciones',
  },
  chooseSet: {
    title: 'Elige Grupo',
    set1: 'Grupo I',
    set2: 'Grupo II',
    set3: 'Grupo III',
  },
  deckEnd: {
    back: 'Volver a la anterior',
    finish: 'Salir',
    title: '¡Terminado!',
  },
  studyDetails: {
    buttonLabel: 'Sobre el estudio',
    title: 'Sobre el estudio',
    content: 'Esta app esta inspirada en el estudio de A. Aron y otros, “The Experimental Generation of Interpersonal Closeness: A Procedure and some Preliminary Findings”. Su propósito era investigar si responder una serie de preguntas personales podría incrementar el sentimiento de cercanía de dos personas. La app contiene las 36 preguntas utilizadas en el estudio.',
    originalPaperButtonLabel: 'Abrir en el navegador',
  },
  questions: {},
};

questions.forEach((question) => {
  if (question.copy && question.copy[LOCALE]) {
    strings.questions[question.i18nId] = question.copy[LOCALE];
  }
});

export default strings;
