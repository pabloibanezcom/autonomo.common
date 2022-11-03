import { concatRoutePaths, insertParamsInRoute } from './routes';

describe('concatRoutePaths', () => {
  test('returns a string containing the routes from array', () => {
    const routes = ['patha', 'pathb', 'pathc'];
    const routeStr = concatRoutePaths(routes);
    expect(routeStr).toBe('/patha/pathb/pathc');
  });
});

describe('insertParamsInRoute', () => {
  test('returns a string containing the params in object', () => {
    const route = 'https://mysite.com/category/:paramA/:paramB/:paramC';
    const params = {
      paramA: 'parama',
      paramB: 'paramb',
      paramC: 'paramc'
    };

    const routeStr = insertParamsInRoute(route, params);
    expect(routeStr).toBe('https://mysite.com/category/parama/paramb/paramc');
  });
});
