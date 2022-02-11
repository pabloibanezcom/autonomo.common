export const concatRoutePaths = (paths: string[]): string => {
  return `/${paths.join('/')}`;
};

export const insertParamsInRoute = (route: string, params: object): string => {
  let result = route;
  Object.entries(params).forEach(param => {
    result = result.replace(`:${param[0]}`, param[1]);
  });
  return result;
};
