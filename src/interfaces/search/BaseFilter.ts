import Pagination from './Pagination';

export default interface BaseFilter {
  startDate?: Date;
  endDate?: Date;
  pagination?: Pagination;
}
