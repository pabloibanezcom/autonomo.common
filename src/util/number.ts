export const roundTwoDigits = (input: number): number => {
  return input ? Math.round(input * 100) / 100 : input;
};
