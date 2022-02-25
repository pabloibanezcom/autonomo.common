import { InvoiceFilter } from '.';
import Invoice from '../Invoice';
import BaseSearchResult from './BaseSearchResult';

export default interface InvoiceSearchResult extends InvoiceFilter, BaseSearchResult {
  items: Invoice[];
}
