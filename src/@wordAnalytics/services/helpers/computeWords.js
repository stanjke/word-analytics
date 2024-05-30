export const computeWords = (characters) =>
  characters.split(/\s/).filter((word) => word !== '').length;
