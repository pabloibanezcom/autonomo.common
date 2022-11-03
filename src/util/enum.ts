export const getEnumArray = (enumeration: { [s: number]: string }): string[] => {
  return Object.values(enumeration);
};
