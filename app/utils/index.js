export default {};

export const noop = () => {};

export const log = (category, message, ...args) => {
  // eslint-disable-next-line no-console
  console.log(`[${category}] ${message}`, ...args);
};
