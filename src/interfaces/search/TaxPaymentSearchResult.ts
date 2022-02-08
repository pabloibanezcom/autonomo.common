import TaxPayment from '../TaxPayment';
import BaseSearchResult from './BaseSearchResult';

export default interface TaxPaymentSearchResult extends BaseSearchResult {
  items: TaxPayment[];
}
