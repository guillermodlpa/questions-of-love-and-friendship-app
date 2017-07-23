export default {};

export const noop = () => {};

export const log = (category, message, ...args) => {
  // eslint-disable-next-line no-console
  console.log(`[${category}] ${message}`, ...args);
};

export const toCamelCase = string => (
  string.replace(/\s([A-Z])/g, (_, m) => m).replace(/^[A-Z]/g, m => m.toLowerCase())
);
