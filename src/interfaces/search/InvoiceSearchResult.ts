import Invoice from '../Invoice';
import BaseSearchResult from './BaseSearchResult';

export default interface InvoiceSearchResult extends BaseSearchResult {
  items: Invoice[];
}
