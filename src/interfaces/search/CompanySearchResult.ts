import Company from '../Company';
import BaseSearchResult from './BaseSearchResult';

export default interface CompanySearchResult extends BaseSearchResult {
  items: Company[];
}
