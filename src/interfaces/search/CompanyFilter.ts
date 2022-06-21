import BaseFilter from './BaseFilter';

export default interface CompanyFilter extends BaseFilter {
  country?: string;
}
