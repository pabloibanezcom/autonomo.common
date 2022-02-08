import NationalInsurancePayment from '../NationalInsurancePayment';
import BaseSearchResult from './BaseSearchResult';

export default interface NationalInsurancePaymentSearchResult extends BaseSearchResult {
  items: NationalInsurancePayment[];
}
