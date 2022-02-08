import Business from '../Business';
import BaseSearchResult from './BaseSearchResult';

export default interface BusinessSearchResult extends BaseSearchResult {
  items: Business[];
}
