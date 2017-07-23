import { toCamelCase } from '../utils';

/**
 * http://journals.sagepub.com/doi/pdf/10.1177/0146167297234003
 */
const questions = [
  {
    copy: {
      en: 'Given the choice of anyone in the world, whom would you want as a dinner guest?',
      es: 'Si pudieras elegir a cualquier persona en el mundo, ¿a quién invitarías a cenar?',
    },
    icon: 'dinner',
    iconAttr: 'Dinner Date by Chameleon Design from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'Would you like to be famous? In what way?',
      es: '¿Te gustaría ser famoso? ¿De qué manera?',
    },
    icon: 'elvis',
    iconAttr: 'Elvis Presley by enrico chialastri from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'Before making a telephone call, do you ever rehearse what you are going to say? Why?',
      es: 'Antes de hacer una llamada telefónica, ¿alguna vez preparas lo que vas a decir? ¿Por qué?',
    },
    icon: 'telephone',
    iconAttr: null,
    set: 1,
  },
  {
    copy: {
      en: 'What would constitute a “perfect” day for you?',
      es: '¿Qué sería para ti un día perfecto?',
    },
    icon: 'clipboard',
    iconAttr: 'Perfect Score by Evan Shuster from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'When did you last sing to yourself? To someone else?',
      es: '¿Cuándo cantaste la última vez tú solo/a? ¿Y para alguien?',
    },
    icon: 'microphone',
    iconAttr: 'sing by hans draiman from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
      es: 'Si pudiéras vivir hasta los 90 años y preservar la mente o el cuerpo de una persona de 30 años durante los últimos 60 años de vida, ¿cuál elegirías?',
    },
    icon: 'grandmother',
    iconAttr: 'grandmother by Snehal Patil from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'Do you have a secret hunch about how you will die?',
      es: '¿Tienes alguna intuición sobre cómo morirás?',
    },
    icon: 'dead',
    iconAttr: 'emoticon by Chanut is Industries from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'Name three things you and your partner appear to have in common.',
      es: 'Nombra tres cosas que tenéis en común.',
    },
    icon: 'partner',
    iconAttr: 'partners by IconfactoryTeam from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'For what in your life do you feel most grateful?',
      es: '¿Qué es lo que más agradecido te hace sentir en tu vida?',
    },
    icon: 'happyFace',
    iconAttr: 'grateful by andriwidodo from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'If you could change anything about the way you were raised, what would it be?',
      es: 'Si pudiéras cambiar algo sobre cómo fuiste criado/a, ¿qué cambiarías?',
    },
    icon: 'toyTrain',
    iconAttr: 'toys by Maria Kislitsina from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'Take four minutes and tell your partner your life story in as much detail as possible.',
      es: 'Tómate cuatro minutos y cuenta la historia de tu vida con tanto detalle como te sea posible.',
    },
    icon: 'paper',
    iconAttr: 'script by Arthur Shlain from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
      es: 'Si te pudiéras levantar mañana con una nueva qualidad o habilidad, ¿cuál sería?',
    },
    icon: 'mask',
    iconAttr: 'masked by Catherine Please from the Noun Project',
    set: 1,
  },
  {
    copy: {
      en: 'If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?',
      es: 'Si una bola de cristal pudiéra contarte la verdad de ti, tu vida, el futuro y cualquier cosa, ¿qué te gustaría saber?',
    },
    icon: 'crystalBall',
    iconAttr: 'Crystal Ball by Trace Lexington Byrd from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?',
      es: '¿Hay algo que hayas soñado con hacer durante mucho tiempo? ¿Por qué no lo has hecho?',
    },
    icon: 'dream',
    iconAttr: 'Thought by Adam Zubin from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What is the greatest accomplishment of your life?',
      es: '¿Cuál es el mayor logro de tu vida?',
    },
    icon: 'highFive',
    iconAttr: 'high five by Elizabeth Smith from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What do you value most in a friendship?',
      es: '¿Qué valoras más en una amistad?',
    },
    icon: 'friends',
    iconAttr: 'Happy Friends by Gan Khoon Lay from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What is your most treasured memory?',
      es: '¿Cuál es tu recuerdo más valioso?',
    },
    icon: 'loveFace',
    iconAttr: 'in love by Mahmure Alp from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What is your most terrible memory?',
      es: '¿Cuál es tu recuerdo más terrible?',
    },
    icon: 'scared',
    iconAttr: 'Scared Creature by Tawny Whatmore from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?',
      es: 'Si supiéras que vas a morir en un año de repente, ¿cambiarías algo de tu manera de vivir? ¿Por qué?',
    },
    icon: 'thinking',
    iconAttr: 'think by Llisole from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What does friendship mean to you?',
      es: '¿Qué significa amistad para ti?',
    },
    icon: 'groupSelfie',
    iconAttr: 'group selfie by Eliricon from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'What roles do love and affection play in your life?',
      es: '¿Qué significan el amor y la afección en tu vida?',
    },
    icon: 'flower',
    iconAttr: 'Flower by Setyo Ari Wibowo from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.',
      es: 'Alternaros compartiendo cinco características que consideráis positivas de cada uno/a.',
    },
    icon: 'smirk',
    iconAttr: 'smirk by Chris Markhing from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'How close and warm is your family? Do you feel your childhood was happier than most other people’s?',
      es: '¿Cómo de cercana es tu familia? ¿Sientes que tu infancia fue más feliz que la mayoría de otras personas?',
    },
    icon: 'familyReunion',
    iconAttr: 'family reunion by IconDots from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'How do you feel about your relationship with your mother?',
      es: '¿Cómo te sientes con respecto a la relación con tu madre?',
    },
    icon: 'mother',
    iconAttr: 'mother and child by H Alberto Gongora from the Noun Project',
    set: 2,
  },
  {
    copy: {
      en: 'Make three true “we” statements each. For instance, “We are both in this room feeling ... ”',
      es: 'Decid tres oraciones ciertas cada uno/a sobre vosotros/as. Por ejemplo, “Estamos en esta habitación sintiendo...”',
    },
    icon: 'talkOverTable',
    iconAttr: 'talk by johanna from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Complete this sentence: “I wish I had someone with whom I could share ... ”',
      es: 'Completa esta frase: “Ojalá tuviera alguien con quien pudiéra compartir ... ”',
    },
    icon: 'shootingStar',
    iconAttr: 'Shooting Star by creative outlet from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'If you were going to become a close friend with your partner, please share what would be important for him or her to know.',
      es: 'Si te fueras a convertir en buen amigo/a de la otra persona, por favor comparte lo que sería importante para ti que la otra persona sepa.',
    },
    icon: 'umbrella',
    iconAttr: 'self-sacrifice by Gan Khoon Lay from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.',
      es: 'Dile a la otra persona lo que te gusta de ellos. Se muy honesto/a esta vez, diciendo cosas que no dirías normalmente a alguien que acabaras de conocer.',
    },
    icon: 'smilingSun',
    iconAttr: 'sun by Vectors Market from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Share with your partner an embarrassing moment in your life.',
      es: 'Comparte un momento de vergüenza de tu vida.',
    },
    icon: 'embarrassed',
    iconAttr: 'embarrassed by Alexandre from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'When did you last cry in front of another person? By yourself?',
      es: '¿Cuándo lloraste en frente de otra persona por última vez? ¿Y tú solo/a?',
    },
    icon: 'cry',
    iconAttr: 'cry by Alex Muravev from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Tell your partner something that you like about them already.',
      es: 'Dile a la otra persona algo que te gusta de ellos.',
    },
    icon: 'thumbsUp',
    iconAttr: null,
    set: 3,
  },
  {
    copy: {
      en: 'What, if anything, is too serious to be joked about?',
      es: '¿Qué es demasiado serio para hacer una broma de ello?',
    },
    icon: 'serious',
    iconAttr: 'serious by Tatiana from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?',
      es: 'Si fueras a morir esta noche sin oportunidad de comunicarte con nadie, ¿de qué cosa que no dijiste a alguien te arrepentirías más? ¿Por qué no se lo has dicho aún?',
    },
    icon: 'dead',
    iconAttr: 'emoticon by Chanut is Industries from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?',
      es: 'Tu casa, con todas tus posesiones, se incendia. Después de salvar a tus seres queridos y mascotas, tienes tiempo de rápidamente salvar una última cosa. ¿Qué sería? ¿Por qué?',
    },
    icon: 'burningHome',
    iconAttr: 'Burning home by Peter van Driel from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Of all the people in your family, whose death would you find most disturbing? Why?',
      es: 'De todas las personas en tu familia, ¿cuál sería la de la muerte más perturbadora para ti? ¿Por qué?',
    },
    icon: 'dead',
    iconAttr: 'emoticon by Chanut is Industries from the Noun Project',
    set: 3,
  },
  {
    copy: {
      en: 'Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.',
      es: 'Comparte un problema personal y pide a la otra persona consejo sobre cómo lo gestionaría. También, pregunta a la otra persona que te diga cómo parece que tú te estas sintiendo acerca de este problema.',
    },
    icon: 'thinking',
    iconAttr: 'think by Llisole from the Noun Project',
    set: 3,
  },
  {
    copy: null,
    icon: 'loveQuestion',
    iconAttr: 'Question Mark Heart by Linseed Studio from the Noun Project',
    set: null,
  },
];

function parseKey(string) {
  return toCamelCase(string).replace(/\./g, '');
}

export default questions.map(question => ({
  ...question,
  // Adding 'id' so that each question's copy can be stored in locale strings and obtained by i18n.
  i18nId: question.copy && question.copy.en ? parseKey(question.copy.en) : null,
}));
