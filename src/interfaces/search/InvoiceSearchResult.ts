import Invoice from '../Invoice';
import BaseSearchResult from './BaseSearchResult';
import InvoiceFilter from './InvoiceFilter';

export default interface InvoiceSearchResult extends InvoiceFilter, BaseSearchResult {
  items: Invoice[];
}
