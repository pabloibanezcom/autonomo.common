import DateQuery from './DateQuery';

export default interface BaseQuery {
  date?: DateQuery;
  [key: string]: any;
}
