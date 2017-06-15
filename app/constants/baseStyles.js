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

export const appBackgroundColor = mainPalette[4];
export const modalBackgroundColor = mainPalette[3];
export const modalShadowColor = black;

export const bodyColor = black;

export const buttonColor = white;
export const buttonBackgroundColor = mainPalette[0];
export const buttonBorderColor = black;
export const buttonColorSecondary = white;
export const buttonBackgroundColorSecondary = mainPalette[1];
export const buttonBorderColorSecondary = black;
export const buttonBorderWidth = 0;
export const buttonBorderRadius = 0;

export const copyFontSize = 16;
export const subheadlineFontSize = 19;
export const headlineFontSize = 25;

export const deckBackgroundColor = mainPalette[4];
export const cardBackgroundColor = mainPalette[1];
export const cardBorderColor = mainPalette[0];

export const modalShadow = {};
export const modalOvelay = {
  backgroundColor: mainPalette[4],
};

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
