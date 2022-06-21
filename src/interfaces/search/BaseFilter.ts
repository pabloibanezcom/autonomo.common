import Match from './Match';
import Pagination from './Pagination';
import Sorting from './Sorting';

export default interface BaseFilter {
  startDate?: Date;
  endDate?: Date;
  pagination?: Pagination;
  sorting?: Sorting;
  match?: Match;
}
