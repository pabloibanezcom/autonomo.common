import Expense from '../Expense';
import InvoiceSearchResult from './InvoiceSearchResult';

export default interface ExpenseSearchResult extends InvoiceSearchResult {
  items: Expense[];
}
