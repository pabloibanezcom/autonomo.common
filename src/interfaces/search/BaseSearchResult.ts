import Pagination from './Pagination';
import Sorting from './Sorting';

export default interface BaseSearchResult {
  pagination?: Pagination;
  sorting?: Sorting;
}
