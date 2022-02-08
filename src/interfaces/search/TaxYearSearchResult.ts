import TaxYear from '../TaxYear';
import BaseSearchResult from './BaseSearchResult';

export default interface TaxYearSearchResult extends BaseSearchResult {
  items: TaxYear[];
}
