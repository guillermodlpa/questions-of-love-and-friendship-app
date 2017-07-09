/* eslint-disable no-unused-vars */
import {
  black,
  white,
  lightGrey,
  darkGrey,
  mainPalette,
} from './colors';
/* eslint-enable no-unused-vars */

export const paddingS = 10;
export const paddingM = 20;
export const copyColor = black;

export const appBackgroundColor = mainPalette[3];
export const modalBackgroundColor = mainPalette[4];
export const modalShadowColor = black;

export const bodyColor = black;

export const buttonColor = white;
export const buttonBackgroundColor = mainPalette[1];
export const buttonBorderColor = black;
export const buttonColorSecondary = white;
export const buttonBackgroundColorSecondary = mainPalette[2];
export const buttonBorderColorSecondary = black;
export const buttonBorderWidth = 0;
export const buttonBorderRadius = 0;

export const copyFontSize = 16;
export const subheadlineFontSize = 19;
export const headlineFontSize = 25;

export const deckBackgroundColor = appBackgroundColor;

export const cardBackgroundColor = mainPalette[4];
export const cardBorderColor = mainPalette[2];
export const cardDeckShadowBorderColor = mainPalette[0];
export const cardDeckShadowOpacity = 0.5;
export const cardBorderRadius = 0;
export const cardBorderWidth = 5;

export const modalShadow = {};
export const modalOvelay = {
  backgroundColor: appBackgroundColor,
};
export const modalBorderRadius = 0;


export const headline = {
  fontSize: headlineFontSize,
  color: bodyColor,
  fontWeight: 'bold',
};

export const body = {
  fontSize: copyFontSize,
  paddingBottom: paddingM,
  color: bodyColor,
};

export const subheadline = {
  fontSize: subheadlineFontSize,
  paddingBottom: paddingM,
  color: bodyColor,
};
