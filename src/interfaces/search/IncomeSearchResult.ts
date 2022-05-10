import Income from '../Income';
import InvoiceSearchResult from './InvoiceSearchResult';

export default interface IncomeSearchResult extends InvoiceSearchResult {
  items: Income[];
}
